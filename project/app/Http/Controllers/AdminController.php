<?php

namespace App\Http\Controllers;

use App\Models\Mentor;
use App\Models\MentorRequest;
use App\Models\TestMentorRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminController extends Controller
{
    // Ensure this method is defined
    public function getUsers()
    {
        // Fetch all users (or use any specific query you need)
        $users = User::all();

        // Return a view with the users
        // return view('users', compact('users'));
        return Inertia::render('AdminUsers', []);
    }
    // Ensure this method is defined
    public function getMenu()
    {

        return Inertia::render('AdminManagement', []);
    }

    public function getApplications()
    {
        $applications = MentorRequest::all(); // Fetch mentor applications


        return Inertia::render('AdminMentorApplications', [
            'applications' => $applications, // Pass applications data to the React component
        ]);
    }

    public function getApplicationsAPI()
    {
        // try {
        //     $applications = TestMentorRequest::all();
        //     return response()->json($applications, 200);
        // } catch (\Exception $e) {
        //     return response()->json(['message' => 'Failed to fetch applications.', 'error' => $e->getMessage()], 500);
        // }
        $applications = MentorRequest::with('user')->get()->map(function ($application) {
            $application->name = $application->user ? $application->user->name : 'Unknown User';
            return $application;
        });

        return response()->json($applications);
    }

    /**
     * Show a specific mentor application by ID.
     */
    public function showApplications($id)
    {
        try {
            $application = MentorRequest::findOrFail($id);
            return response()->json($application, 200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Application not found.', 'error' => $e->getMessage()], 404);
        }
    }

    /**
     * Delete a specific mentor application by ID.
     */
    public function deleteApplications($id)
    {
        $application = MentorRequest::findOrFail($id);
        $application->delete();
        return response()->json(['message' => 'Application deleted successfully']);
    }

    public function acceptApplication(Request $request)
    {
        try {
            $mentorRequest = MentorRequest::with('user')->findOrFail($request->id);
            $userName = $mentorRequest->user ? $mentorRequest->user->name : 'Unknown User';

            $validated = $request->validate([
                'id' => 'required|exists:mentor_requests,id',
                'points' => 'required|integer',
                'role' => 'required|string',
                'tags' => 'required|array',
                'languages' => 'required|array',
                'location' => 'required|string',
                'bio' => 'required|string',
                'motivation_letter' => 'required|string',
                'rate' => 'nullable|string',
            ]);

            // Create new mentor with user's name
            $mentor = Mentor::create([
                'name' => $userName,
                'points' => $validated['points'],
                'role' => $validated['role'],
                'tags' => json_encode($validated['tags']),
                'languages' => json_encode($validated['languages']),
                'location' => $validated['location'],
                'bio' => $validated['bio'],
                'motivation_letter' => $validated['motivation_letter'],
                'rate' => $validated['rate'] ?? null,
                'user_id' => $mentorRequest->user_id, // Add this line to store user_id
            ]);

            // Delete the original request
            $mentorRequest->delete();

            return response()->json([
                'success' => true,
                'message' => 'Application accepted successfully',
                'mentor' => $mentor
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error accepting application',
                'error' => $e->getMessage()
            ], 500);
        }
    }
}

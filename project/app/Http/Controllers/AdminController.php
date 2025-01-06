<?php

namespace App\Http\Controllers;

use App\Models\TestMentorRequest;
use App\Models\User;
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

    public function getApplications()
    {
        $applications = TestMentorRequest::all(); // Fetch mentor applications

        // return Inertia::render('AdminMentorApplications', [
        //     'applications' => $applications, // Pass applications data to the React component
        // ]);
        return Inertia::render('AdminMentorApplications', [
            'applications' => $applications, // Pass applications data to the React component
        ]);
    }

    public function getApplicationsAPI()
    {
        try {
            $applications = TestMentorRequest::all();
            return response()->json($applications, 200);
        } catch (\Exception $e) {
            return response()->json(['message' => 'Failed to fetch applications.', 'error' => $e->getMessage()], 500);
        }
    }

    /**
     * Show a specific mentor application by ID.
     */
    public function showApplications($id)
    {
        try {
            $application = TestMentorRequest::findOrFail($id);
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
        $application = TestMentorRequest::find($id);

        if (!$application) {
            return response()->json(['message' => 'Application not found'], 404);
        }

        $application->delete();

        return response()->json(['message' => 'Application deleted successfully']);
    }

    public function acceptApplication(TestMentorRequest $request)
    {
        $data = $request->validated(); // Use validated data from the form request class

        // Use Mentor model to create a new record
        $mentor = Mentor::create([
            'application_id' => $data['id'], // assuming you store the application ID
            'name' => $data['name'],
            'points' => $data['points'],
            'role' => $data['role'],
            'rate' => $data['rate'],
            'tags' => json_encode($data['tags']),
            'languages' => $data['languages'] ? json_encode($data['languages']) : null, // Encode languages array to JSON if provided
            'location' => $data['location'],
            'bio' => $data['bio'],
            'motivation_letter' => $data['motivation_letter'],
            'link_resume' => $data['link_resume'],
        ]);
        return response()->json($mentor, 201);
    }
}

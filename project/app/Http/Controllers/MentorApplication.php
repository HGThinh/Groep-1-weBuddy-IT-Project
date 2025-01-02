<?php

namespace App\Http\Controllers;

use App\Models\MentorApplication;
use App\Models\Mentor;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class MentorApplicationController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'roles' => 'required|json',
            'courses' => 'required|json',
            'otherCourse' => 'nullable|string',
            'mode' => 'required|string',
            'languages' => 'required|string',
            'motivation' => 'required|string',
            'resume' => 'required|file|mimes:pdf|max:10240',
        ]);

        $resumePath = $request->file('resume')->store('resumes', 'public');

        $application = MentorApplication::create([
            'roles' => $validated['roles'],
            'courses' => $validated['courses'],
            'other_course' => $validated['otherCourse'],
            'mode' => $validated['mode'],
            'languages' => $validated['languages'],
            'motivation' => $validated['motivation'],
            'resume_path' => $resumePath,
            'status' => 'pending',
            'user_id' => auth()->id(),
        ]);

        return response()->json($application, 201);
    }

    public function index()
    {
        $applications = MentorApplication::with('user')
            ->where('status', 'pending')
            ->get();

        return response()->json($applications);
    }

    public function update(Request $request, MentorApplication $application)
    {
        $validated = $request->validate([
            'status' => 'required|in:approved,rejected'
        ]);

        $application->status = $validated['status'];
        $application->save();

        if ($validated['status'] === 'approved') {
            // Create new mentor record
            Mentor::create([
                'name' => $application->user->name,
                'role' => json_decode($application->roles)[0], // Taking first role
                'points' => 0, // Starting points
                'tags' => $application->courses,
                'description' => $application->motivation,
                'user_id' => $application->user_id,
            ]);
        }

        return response()->json($application);
    }
}

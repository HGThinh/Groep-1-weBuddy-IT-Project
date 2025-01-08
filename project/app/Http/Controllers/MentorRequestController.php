<?php

namespace App\Http\Controllers;

use App\Models\MentorRequest;
use Illuminate\Http\Request;

class MentorRequestController extends Controller
{
    public function store(Request $request)
    {
        try {
            $validated = $request->validate([
                'role' => 'required|string',
                'courses' => 'required|array',
                'courses.*' => 'string',
                'rate' => 'nullable|string',
                'languages' => 'required|array',
                'languages.*' => 'string',
                'location' => 'required|string',
                'motivation_letter' => 'required|string',
                'grades_or_resume' => 'required|string',
                'bio' => 'required|string',
                'keyword1' => 'required|string',
                'keyword2' => 'required|string',
                'keyword3' => 'required|string',
            ]);

            $mentorRequest = MentorRequest::create([
                'role' => $validated['role'],
                'courses' => json_encode($validated['courses']),
                'rate' => $validated['rate'],
                'languages' => json_encode($validated['languages']),
                'location' => $validated['location'],
                'motivation_letter' => $validated['motivation_letter'],
                'grades_or_resume' => $validated['grades_or_resume'],
                'bio' => $validated['bio'],
                'keyword1' => $validated['keyword1'],
                'keyword2' => $validated['keyword2'],
                'keyword3' => $validated['keyword3'],
            ]);

            return response()->json([
                'success' => true,
                'message' => 'Request submitted successfully'
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Error submitting request',
                'errors' => $e->getMessage()
            ], 422);
        }
    }
}

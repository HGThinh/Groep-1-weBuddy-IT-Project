<?php

namespace App\Http\Controllers;

use App\Models\MentorRequest;
use Illuminate\Http\Request;

class MentorRequestController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'role' => 'required|string',
            'courses' => 'required|array',
            'rate' => 'nullable|string',
            'languages' => 'required|array',
            'location' => 'required|string',
            'motivation_letter' => 'required|string',
            'grades_or_resume' => 'nullable|string',
            'bio' => 'required|string',
            'keyword1' => 'required|string',
            'keyword2' => 'required|string',
            'keyword3' => 'required|string',
        ]);

        try {
            $mentorRequest = MentorRequest::create($validated);

            return response()->json([
                'status' => 'success',
                'message' => 'Mentor request submitted successfully',
                'data' => $mentorRequest
            ], 201);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Failed to submit mentor request',
                'errors' => [$e->getMessage()]
            ], 422);
        }
    }
}

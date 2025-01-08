<?php

namespace App\Http\Controllers;

use App\Models\TestMentorRequest;
use Illuminate\Http\Request;

class TestMentorRequestController extends Controller
{
    /**
     * Store a new mentor request.
     */
    public function storeMentorRequest(Request $request)
    {
        $validated = $request->validate([
            'role' => 'required|string',
            'courses' => 'required|array',
            'rate' => 'nullable|string',
            'languages' => 'required|array',
            'location' => 'required|string',
            'motivation_letter' => 'nullable|string',
            'grades_or_resume' => 'nullable|string',
            'bio' => 'nullable|string',
            'keyword1' => 'nullable|string',
            'keyword2' => 'nullable|string',
            'keyword3' => 'nullable|string',
        ]);

        $mentorRequest = TestMentorRequest::create($validated);

        return response()->json([
            'message' => 'Mentor request submitted successfully!',
            'data' => $mentorRequest,
        ], 201);
    }
}

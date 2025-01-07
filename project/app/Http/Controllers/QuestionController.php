<?php

namespace App\Http\Controllers;

use App\Models\Question;
use Illuminate\Http\Request;
use Inertia\Inertia;

class QuestionController extends Controller
{
    public function index()
    {
        $questions = Question::latest()->get()->map(function ($question) {
            return [
                'id' => $question->id,
                'title' => $question->title,
                'content' => $question->content,
                'category' => $question->category,
                'tags' => $question->tags,
                'created_at' => $question->created_at->diffForHumans()
            ];
        });

        return Inertia::render('TestForumPage', [
            'questions' => $questions
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|max:255',
            'content' => 'required',
            'category' => 'required',
            'tags' => 'array'
        ]);

        try {
            $question = Question::create($validated);
            return response()->json([
                'message' => 'Question created successfully',
                'question' => $question
            ], 201);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Error creating question',
                'error' => $e->getMessage()
            ], 500);
        }
    }
}

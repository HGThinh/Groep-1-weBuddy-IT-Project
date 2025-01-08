<?php

namespace App\Http\Controllers;

use App\Models\Like;
use App\Models\Question;
use Illuminate\Http\Request;
use Inertia\Inertia;

class QuestionController extends Controller
{


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

    public function toggleLike(Question $question)
    {
        $user = \Illuminate\Support\Facades\Auth::user();
        $existing_like = Like::where('user_id', $user->id)
            ->where('question_id', $question->id)
            ->first();

        if ($existing_like) {
            $existing_like->delete();
            return response()->json([
                'liked' => false,
                'likes_count' => $question->likes()->count()
            ]);
        }

        Like::create([
            'user_id' => $user->id,
            'question_id' => $question->id
        ]);

        return response()->json([
            'liked' => true,
            'likes_count' => $question->likes()->count()
        ]);
    }
    public function index()
    {
        $user = \Illuminate\Support\Facades\Auth::user();
        $questions = Question::with(['likes'])
            ->withCount('likes')
            ->when($user, function ($query) use ($user) {
                $query->withExists(['likes as is_liked' => function ($query) use ($user) {
                    $query->where('user_id', $user->id);
                }]);
            })
            ->latest()
            ->get();

        return response()->json($questions);
    }
}

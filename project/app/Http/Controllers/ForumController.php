<?php

namespace App\Http\Controllers;

use App\Models\Question;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ForumController extends Controller
{
    // Retrieve all forum posts
    public function getForum()
    {

        $questions = Question::all();
        return Inertia::render('ForumPage', [
            'questions' => $questions
        ]);
    }

    public function createQuestion()
    {
        return Inertia::render('CreateQuestion');
    }

    public function storeQuestion(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'category' => 'required|string',
            'tags' => 'required|array'
        ]);

        $question = Question::create([
            'name' => Auth::user()->name ?? 'Anonymous',
            'title' => $request->title,
            'content' => $request->content,
            'category' => $request->category,
            'tags' => $request->tags,
            'is_answered' => false,
            'upvotes' => 0,
            'comments' => 0
        ]);

        return redirect()->route('forum.get');
    }

    // Retrieve a single forum post by ID
    public function getPost($id)
    {

        return Inertia::render('ForumPage', []);
    }

    // Add a new question to the forum
    public function sendQuestion(Request $request)
    {


        return redirect()->route('forum.get')->with('success', 'Question posted successfully.');
    }

    // Report a forum post
    public function sendReport(Request $request)
    {


        return redirect()->route('forum.get')->with('success', 'Post reported successfully.');
    }

    // Update an existing forum post
    public function updatePost(Request $request, $id)
    {

        return redirect()->route('forum.post.get', $id)->with('success', 'Post updated successfully.');
    }

    // Delete a forum post
    public function deletePost($id)
    {

        return redirect()->route('forum.get')->with('success', 'Post deleted successfully.');
    }
}

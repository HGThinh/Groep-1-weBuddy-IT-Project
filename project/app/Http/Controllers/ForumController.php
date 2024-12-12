<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ForumController extends Controller
{
    // Retrieve all forum posts
    public function getForum()
    {


        return Inertia::render('Forum', []);
    }

    // Retrieve a single forum post by ID
    public function getPost($id)
    {

        return Inertia::render('Forum/post', []);
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

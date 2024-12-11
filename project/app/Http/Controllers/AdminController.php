<?php

namespace App\Http\Controllers;


use App\Models\User;

class AdminController extends Controller
{
    // Ensure this method is defined
    public function getUsers()
    {
        // Fetch all users (or use any specific query you need)
        $users = User::all();

        // Return a view with the users
        return view('users', compact('users'));
    }
}

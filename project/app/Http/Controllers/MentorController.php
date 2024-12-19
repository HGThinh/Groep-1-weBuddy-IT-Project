<?php

namespace App\Http\Controllers;

use App\Models\Mentor;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MentorController extends Controller
{
    // Retrieve all mentors
    public function getMentor()
    {

        // Render mentor list page
        //return Inertia::render('MentorPage', []);
        $mentors = Mentor::all();
        return Inertia::render('TestMentor', [
            'mentors' => $mentors,
        ]);
    }

    // Retrieve mentor general information
    public function getInfo()
    {

        // Render mentorship info page
        return Inertia::render('Mentor/Info', []);
    }

    // Retrieve a single mentor's profile by ID
    public function getMentorProfile($id)
    {

        return Inertia::render('Mentor/Profile', []);
    }

    // Send a new mentorship request
    public function sendRequest(Request $request)
    {

        return redirect()->route('mentor.get')->with('success', 'Mentorship request sent successfully.');
    }

    // Send a mentorship application
    public function sendApplication(Request $request)
    {

        return redirect()->route('mentor.get')->with('success', 'Mentorship application submitted successfully.');
    }
}

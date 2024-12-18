<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class HomeController extends Controller
{
    public function getAboutus()
    {


        return Inertia::render('HomePage', []);
    }
}

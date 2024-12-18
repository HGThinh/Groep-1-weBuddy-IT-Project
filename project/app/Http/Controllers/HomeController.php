<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class HomeController extends Controller
{
    public function getHome()
    {


        return Inertia::render('HomePage', []);
    }
}

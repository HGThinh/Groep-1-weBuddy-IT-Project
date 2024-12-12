<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class AboutUsController extends Controller
{

    public function getAboutus()
    {


        return Inertia::render('Aboutus', []);
    }
}

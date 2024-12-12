<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class PointsController extends Controller
{
    public function getPoints()
    {
        return Inertia::render('Points', []);
    }
}

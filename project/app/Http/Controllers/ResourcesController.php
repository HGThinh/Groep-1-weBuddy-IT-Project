<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ResourcesController extends Controller
{
    // Retrieve all resources
    public function getResources()
    {


        // Render the Inertia page and pass data
        return Inertia::render('ResourcesPage', []);
    }

    // Retrieve a single resource by ID
    public function getResourcesPost($id)
    {


        // Render the Inertia page and pass data
        return Inertia::render('Resources/Post', []);
    }

    // Add a new resource
    public function sendResources(Request $request)
    {

        return redirect()->route('resources.get')->with('success', 'Resource added successfully.');
    }

    // Update an existing resource by ID
    public function updateResourcesPost(Request $request, $id)
    {


        return redirect()->route('resources.get')->with('success', 'Resource updated successfully.');
    }

    // Delete a resource by ID
    public function deleteResources($id)
    {

        return redirect()->route('resources.get')->with('success', 'Resource deleted successfully.');
    }
}

<?php

namespace App\Http\Controllers;

use App\Models\Resource;
use Illuminate\Http\Request;
use Inertia\Inertia;
use phpDocumentor\Reflection\Types\Resource_;

class ResourcesController extends Controller
{
    // Retrieve all resources
    public function getResources()
    {


        // Render the Inertia page and pass data
        return Inertia::render('TestResourcesPage', []);
    }
    public function getUploadResources()
    {
        return Inertia::render('UploadResources');
    }
    public function getResourcesAPI()
    {

        // Example data, you can fetch from your database
        $data = [
            'courses' => [
                "Programming Essentials",
                "Advanced React",
                "Web Development Basics",
                "Programming Essentials 2",
                "IT Essentials",
                "Desktop OS",
                "Network essentials"
            ],
            'coursesTagsResource' => [
                "Programming Essentials",
                "Advanced React",
                "Web Development Basics",
                "Programming Essentials 2",
                "IT Essentials",
                "Desktop OS",
                "Network essentials"
            ],
            'TypeResource' => [
                "Notes",
                "Study planning",
                "Summaries",
                "Past Exams",
                "Exercices"
            ],
            'resourcesData' => [
                [
                    'title' => "Summary - Chapter 4",
                    'description' => "This is a summary of Chapter 4, covering subnetting and basic network concepts.",
                    'type' => "txt",
                    'tags' => ["Network Essentials", "Subnetting", "Dutch"]
                ],
                [
                    'title' => "Study Planning - All Chapters",
                    'description' => "A complete study plan to prepare for the exams effectively.",
                    'type' => "pdf",
                    'tags' => ["Study Tips", "Planning", "Exams"]
                ]
                // Add more resources as needed
            ]
        ];

        return response()->json($data);
        // Render the Inertia page and pass data
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

    // Store Resource (including file)
    public function store(Request $request)
    {
        // Validate incoming data
        $validatedData = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required|string',
            'type' => 'required|string',
            'tags' => 'required|array',
            'file' => 'required|file|mimes:pdf,doc,docx,ppt,txt|max:10240', // max file size 10MB
        ]);

        // Handle the file upload
        if ($request->hasFile('file')) {
            $file = $request->file('file');
            $path = $file->store('resources'); // Store in 'resources' folder within storage/app

            // Save the resource record in the database, including file path
            $resource = Resource::create([
                'title' => $validatedData['title'],
                'description' => $validatedData['description'],
                'type' => $validatedData['type'],
                'tags' => json_encode($validatedData['tags']), // Store tags as JSON
                'file_path' => $path, // Save the file path in the database
            ]);

            // Return a success response
            return response()->json(['message' => 'Resource uploaded successfully!', 'resource' => $resource], 201);
        }

        return response()->json(['message' => 'No file uploaded'], 400);
    }
}

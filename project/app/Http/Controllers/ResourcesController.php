<?php

namespace App\Http\Controllers;

use App\Models\Resource;
use Illuminate\Http\Request;
use Inertia\Inertia;
use phpDocumentor\Reflection\Types\Resource_;
use Illuminate\Support\Facades\Storage;




class ResourcesController extends Controller
{
    public function downloadFile($filePath)
    {
        // Controleer of het bestand bestaat
        if (Storage::exists($filePath)) {
            // Haal de resource op uit de database
            $resource = Resource::where('file_path', $filePath)->first();
    
            if (!$resource) {
                return response()->json(['message' => 'Resource not found'], 404);
            }
    
            // Haal de originele naam van het bestand op
            $originalFileName = $resource->original_file_name;
    
            // Gebruik Storage::download om het bestand te downloaden met de originele naam
            return Storage::download($filePath, $originalFileName);
        }
    
        return response()->json(['message' => 'File not found'], 404);
    }
    
    // Retrieve all resources
    public function getResources($courseName = null)
    {
        $courseTag = $courseName ? '.' . urldecode($courseName) : null;

        // Render the Inertia page, passing the course tag
        return Inertia::render('TestResourcesPage', [
            'courseTag' => $courseTag,
            'courseName' => $courseName, // For display purposes
        ]);
    
    }
    public function getUploadResources()
    {
        return Inertia::render('UploadResources');
    }

    public function getResourcesAPI()
{
    // Fetch data from the database
    $courses = Resource::distinct('title')->pluck('title');
    $coursesTagsResource = Resource::distinct('tags')->pluck('tags');
    $typeResource = Resource::distinct('type')->pluck('type');
    $resourcesData = Resource::all();

    // Decode the tags field for each resource and include IDs
    $resourcesData = $resourcesData->map(function ($resource) {
        $resource->tags = json_decode($resource->tags, true); // Decode JSON into an array
        return [
            'id' => $resource->id, // Add resource ID
            'title' => $resource->title,
            'description' => $resource->description,
            'type' => $resource->type,
            'tags' => $resource->tags,
            'file_path' => $resource->file_path,
            'created_at' => $resource->created_at,
        ];
    });

    // Format the data to match your desired structure
    $data = [
        'courses' => $courses,
        'coursesTagsResource' => $coursesTagsResource,
        'TypeResource' => $typeResource,
        'resourcesData' => $resourcesData,
    ];

    return response()->json($data);
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
    public function deleteResource($id)
{
    $resource = Resource::findOrFail($id);

    // Delete the file from storage
    if (Storage::exists($resource->file_path)) {
        Storage::delete($resource->file_path);
    }

    // Delete the resource record from the database
    $resource->delete();

    return redirect()->route('profile.edit')->with('success', 'Resource updated successfully.');
}


    // Store Resource (including file)
    public function store(Request $request)
{
    // Validate incoming data
    $validatedData = $request->validate([
        'title' => 'required|string|max:255',
        'description' => 'required|string',
        'tags' => 'required|array',
        'file' => 'required|file|mimes:pdf,doc,docx,ppt,pptx,txt,html,css,js|max:10240', // max file size 10MB
    ]);

    // Handle the file upload
    if ($request->hasFile('file')) {
        $file = $request->file('file');
        $originalFileName = $file->getClientOriginalName(); // Get the original file name
        $path = $file->store('resources'); // Store the file in 'resources' folder within storage/app

        // Derive the file type from the file name
        $fileType = pathinfo($originalFileName, PATHINFO_EXTENSION);

        // Save the resource record in the database, including file path and type
        $resource = Resource::create([
            'title' => $validatedData['title'],
            'description' => $validatedData['description'],
            'type' => $fileType, // Use the derived file type
            'tags' => json_encode($validatedData['tags']), // Store tags as JSON
            'file_path' => $path, // Save the file path
            'original_file_name' => $originalFileName, // Store the original file name
            'user_id' => auth()->id(), // Save the user ID
        ]);

        // Return a success response
        return response()->json(['message' => 'Resource uploaded successfully!', 'resource' => $resource], 201);
    }

    return response()->json(['message' => 'No file uploaded'], 400);
}

}

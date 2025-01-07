<?php

namespace App\Http\Controllers;use App\Models\Resource;
use App\Models\Course; // Import the Course model
use Inertia\Inertia;

class HomeController extends Controller
{
    public function getCoursePage($id)
    {
        // Fetch the course by ID using the Course model
        $course = Course::findOrFail($id);

        // Add the '.' prefix to the course name for tag matching
        $courseTag = '.' . $course->course;

        // Fetch resources that have the tag of .{courseName}
        $resources = Resource::whereJsonContains('tags', $courseTag)
            ->orderBy('created_at', 'desc')
            ->get()
            ->map(function ($resource) {
                $resource->tags = json_decode($resource->tags, true); // Ensure tags are parsed as an array
                return $resource;
            });

        // Pass the course name and resources to the frontend
        return Inertia::render('CourseHome', [
            'courseName' => $course->course,
            'resources' => $resources,
        ]);
    }
}

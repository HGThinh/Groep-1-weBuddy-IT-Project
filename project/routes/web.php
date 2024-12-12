<?php

use App\Http\Controllers\AboutUsController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\MentorController;
use App\Http\Controllers\ForumController;
use App\Http\Controllers\PointsController;
use App\Http\Controllers\ResourcesController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    //Profile route
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');

    //Home route
    Route::get('/home', [HomeController::class, 'get'])->name('home.get'); // Retrieve home

    //Course route
    Route::get('/course/{id}', [HomeController::class, 'get'])->name('course.get'); // Retrieve course by id

    //Mentor route
    Route::get('/mentor', [MentorController::class, 'getMentor'])->name('mentor.get'); // Retrieve mentor
    Route::get('/mentor/info', [MentorController::class, 'getInfo'])->name('mentor.info.get'); // Retrieve mentor
    Route::get('/mentor/profile/{id}', [MentorController::class, 'getMentorProfile'])->name('mentor.profile.get'); // Retrieve mentor by id
    Route::post('/mentor/request', [MentorController::class, 'sendRequest'])->name('mentor.request.post'); // Send new mentorship request
    Route::post('/mentor/application', [MentorController::class, 'sendApplication'])->name('mentor.application.post');; // Send mentorship application

    //Forum route
    Route::get('/forum', [ForumController::class, 'getForum'])->name('forum.get'); // Retrieve forum
    Route::get('/forum/post/{id}', [ForumController::class, 'getPost'])->name('forum.post.get'); // Retrieve forum by id
    Route::post('/forum/ask', [ForumController::class, 'sendQuestion'])->name('forum.ask.post');; // Ask new question
    Route::post('/report', [ForumController::class, 'sendReport'])->name('report.post');; // Send report this post
    Route::put('/forum/post/{id}', [ForumController::class, 'updatePost'])->name('forum.post.update'); // Update post
    Route::delete('/forum/post/{id}', [ForumController::class, 'deletePost'])->name('forum.post.delete'); // Delete post

    //Resources route
    Route::get('/resources', [ResourcesController::class, 'getResources'])->name('resources.get'); // Retrieve resources
    Route::get('/resources/post/{id}', [ResourcesController::class, 'getResourcesPost'])->name('resources.post.get'); // Retrieve resources by id
    Route::post('/resources/add', [ResourcesController::class, 'sendResources'])->name('resources.post.post');; // Ask new question
    Route::put('/resources/post/{id}', [ResourcesController::class, 'updateResourcesPost'])->name('resources.post.update'); // Update post
    Route::delete('/resources/post/{id}', [ResourcesController::class, 'deleteResources'])->name('resources.post.delete'); // Delete post

    //Points route
    Route::get('/points', [PointsController::class, 'getPoints'])->name('points.get'); // Retrieve points

    //About us route
    Route::get('/aboutus', [AboutUsController::class, 'getAboutus'])->name('aboutus.get'); // Retrieve about us
    Route::post('/aboutus', [AboutUsController::class, 'sendIssue'])->name('aboutus.issue.post');; // Send issue

});

// Admin - GET routes (Requires login and admin access)
Route::middleware(['auth', 'isAdmin'])->group(function () {
    // Admin - POST routes (Requires login and admin access)


    Route::get('/admin/users', [AdminController::class, 'getUsers']); // Retrieve user's list
    Route::get('/admin/reports', [AdminController::class, 'getReports']); // Retrieve reports
    Route::get('/admin/posts', [AdminController::class, 'getPosts']); // Retrieve posts
    Route::get('/admin/comments', [AdminController::class, 'getComments']); // Retrieve comments
    Route::get('/admin/applications', [AdminController::class, 'getApplications']); // Retrieve applications




    // Admin - DELETE routes (Requires login and admin access)
    Route::delete('/admin/users/{id}', [AdminController::class, 'deleteUser']); // Delete user
    Route::delete('/admin/posts/{id}', [AdminController::class, 'deletePost']); // Delete post
    Route::delete('/admin/comments/{id}', [AdminController::class, 'deleteComment']); // Delete comment
});

require __DIR__ . '/auth.php';

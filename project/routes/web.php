<?php

use App\Http\Controllers\AboutUsController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\MentorController;
use App\Http\Controllers\ForumController;
use App\Http\Controllers\PointsController;
use App\Http\Controllers\ResourcesController;
use App\Http\Controllers\TestEmailController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Foundation\Auth\EmailVerificationRequest;

Route::get('/test-email', [TestEmailController::class, 'sendVerificationEmail']);

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

Route::get('/email/verify', function () {
    return view('auth.verify-email');
})->middleware('auth')->name('verification.notice');

Route::get('/email/verify/{id}/{hash}', function (EmailVerificationRequest $request) {
    $request->fulfill();

    return redirect('/home');
})->middleware(['auth', 'signed'])->name('verification.verify');

Route::post('/email/verification-notification', function (Request $request) {
    $request->user()->sendEmailVerificationNotification();

    return back()->with('message', 'Verification link sent!');
})->middleware(['auth', 'throttle:6,1'])->name('verification.send');

Route::middleware(['auth', 'verified'])->group(function () {
    // Profile route
    Route::get('/profile', [ProfileController::class, 'getProfile'])->name('profile.get');
    Route::get('/profile/edit', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile/edit', [ProfileController::class, 'update'])->name('profile.update');

    // Home route
    Route::get('/home', [HomeController::class, 'getHome'])->name('home.get');

    // Course route
    Route::get('/course/{id}', [HomeController::class, 'get'])->name('course.get');

    // Mentor route
    Route::get('/mentor', [MentorController::class, 'getMentor'])->name('mentor.get');
    Route::get('/mentor/info', [MentorController::class, 'getInfo'])->name('mentor.info.get');
    Route::get('/mentor/profile/{id}', [MentorController::class, 'getMentorProfile'])->name('mentor.profile.get');
    Route::post('/mentor/request', [MentorController::class, 'sendRequest'])->name('mentor.request.post');
    Route::post('/mentor/application', [MentorController::class, 'sendApplication'])->name('mentor.application.post');

    // Forum route
    Route::get('/forum', [ForumController::class, 'getForum'])->name('forum.get');
    Route::get('/forum/post/{id}', [ForumController::class, 'getPost'])->name('forum.post.get');
    Route::post('/forum/ask', [ForumController::class, 'sendQuestion'])->name('forum.ask.post');
    Route::post('/report', [ForumController::class, 'sendReport'])->name('report.post');
    Route::put('/forum/post/{id}', [ForumController::class, 'updatePost'])->name('forum.post.update');
    Route::delete('/forum/post/{id}', [ForumController::class, 'deletePost'])->name('forum.post.delete');

    // Resources route
    Route::get('/resources', [ResourcesController::class, 'getResources'])->name('resources.get');
    Route::get('/resources/post/{id}', [ResourcesController::class, 'getResourcesPost'])->name('resources.post.get');
    Route::post('/resources/add', [ResourcesController::class, 'sendResources'])->name('resources.post.post');
    Route::put('/resources/post/{id}', [ResourcesController::class, 'updateResourcesPost'])->name('resources.post.update');
    Route::delete('/resources/post/{id}', [ResourcesController::class, 'deleteResources'])->name('resources.post.delete');

    // Points route
    Route::get('/points', [PointsController::class, 'getPoints'])->name('points.get');

    // About us route
    Route::get('/aboutus', [AboutUsController::class, 'getAboutus'])->name('aboutus.get');
    Route::post('/aboutus', [AboutUsController::class, 'sendIssue'])->name('aboutus.issue.post');
});

// Admin - GET routes (Requires login and admin access)
Route::middleware(['auth', 'isAdmin'])->group(function () {
    Route::get('/admin/users', [AdminController::class, 'getUsers']);
    Route::get('/admin/reports', [AdminController::class, 'getReports']);
    Route::get('/admin/posts', [AdminController::class, 'getPosts']);
    Route::get('/admin/comments', [AdminController::class, 'getComments']);
    Route::get('/admin/applications', [AdminController::class, 'getApplications']);

    Route::delete('/admin/users/{id}', [AdminController::class, 'deleteUser']);
    Route::delete('/admin/posts/{id}', [AdminController::class, 'deletePost']);
    Route::delete('/admin/comments/{id}', [AdminController::class, 'deleteComment']);
});

require __DIR__ . '/auth.php';

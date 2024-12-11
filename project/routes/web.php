<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\AdminController;
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
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// Admin - GET routes (Requires login and admin access)
Route::middleware(['auth', 'isAdmin'])->group(function () {
    Route::get('/admin/users', [AdminController::class, 'getUsers']); // Retrieve user's list
    Route::get('/admin/reports', [AdminController::class, 'getReports']); // Retrieve reports
    Route::get('/admin/posts', [AdminController::class, 'getPosts']); // Retrieve posts
    Route::get('/admin/comments', [AdminController::class, 'getComments']); // Retrieve comments
    Route::get('/admin/applications', [AdminController::class, 'getApplications']); // Retrieve applications

    // Admin - POST routes (Requires login and admin access)
    Route::post('/admin/posts', [AdminController::class, 'addPost']); // Add new post
    Route::post('/admin/comments', [AdminController::class, 'addComment']); // Add new comment
    Route::post('/admin/reports', [AdminController::class, 'addReport']); // Add new report

    // Admin - PUT routes (Requires login and admin access)
    Route::put('/admin/users/{id}', [AdminController::class, 'updateUserProfile']); // Update user's profile

    // Admin - DELETE routes (Requires login and admin access)
    Route::delete('/admin/users/{id}', [AdminController::class, 'deleteUser']); // Delete user
    Route::delete('/admin/posts/{id}', [AdminController::class, 'deletePost']); // Delete post
    Route::delete('/admin/comments/{id}', [AdminController::class, 'deleteComment']); // Delete comment
});

require __DIR__ . '/auth.php';

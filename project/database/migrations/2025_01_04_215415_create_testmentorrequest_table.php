<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTestmentorrequestTable extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('testmentorrequest', function (Blueprint $table) {
            $table->id();
            $table->string('role'); // Role: Tutor, Buddy, eBuddy
            $table->json('courses'); // Courses: Array of selected courses
            $table->string('rate')->nullable(); // Rate: Free or filled-in value (only for Tutor)
            $table->json('languages'); // Languages: Array of selected languages
            $table->string('location'); // Location: Live or Online
            $table->text('motivation_letter')->nullable(); // Motivation letter
            $table->text('grades_or_resume')->nullable(); // Grades or Resume (file path or data)
            $table->text('bio')->nullable(); // Bio
            $table->string('keyword1')->nullable(); // Keyword 1
            $table->string('keyword2')->nullable(); // Keyword 2
            $table->string('keyword3')->nullable(); // Keyword 3
            $table->timestamps(); // Created at and Updated at
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('testmentorrequest');
    }
}

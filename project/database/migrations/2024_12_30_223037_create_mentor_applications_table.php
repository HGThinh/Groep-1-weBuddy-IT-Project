<?php
// database/migrations/xxxx_xx_xx_create_mentor_applications_table.php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMentorApplicationsTable extends Migration
{
    public function up()
    {
        Schema::create('test_mentor_applications', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained();
            $table->json('roles');
            $table->json('courses');
            $table->string('other_course')->nullable();
            $table->string('mode');
            $table->string('languages');
            $table->text('motivation');
            $table->string('resume_path');
            $table->enum('status', ['pending', 'approved', 'rejected'])->default('pending');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('test_mentor_applications');
    }
}

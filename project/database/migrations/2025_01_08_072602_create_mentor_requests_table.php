<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMentorRequestsTable extends Migration
{
    public function up()
    {
        Schema::create('mentor_requests', function (Blueprint $table) {
            $table->id();
            $table->string('role');
            $table->json('courses');
            $table->string('rate')->nullable();
            $table->json('languages');
            $table->string('location');
            $table->text('motivation_letter');
            $table->string('grades_or_resume')->nullable();
            $table->text('bio');
            $table->string('keyword1');
            $table->string('keyword2');
            $table->string('keyword3');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('mentor_requests');
    }
}

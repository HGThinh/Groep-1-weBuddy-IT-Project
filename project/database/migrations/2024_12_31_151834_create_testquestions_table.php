<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('testquestions', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('profile_picture')->nullable();
            $table->string('category');
            $table->string('title');
            $table->text('content');
            $table->boolean('is_answered')->default(false);
            $table->json('tags');
            $table->integer('upvotes')->default(0);
            $table->integer('comments')->default(0);
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('testquestions');
    }
};

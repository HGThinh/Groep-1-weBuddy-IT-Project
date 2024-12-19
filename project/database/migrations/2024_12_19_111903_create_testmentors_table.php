<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('testmentors', function (Blueprint $table) {
            $table->id(); // Unique ID for each mentor
            $table->string('name');
            $table->integer('points');
            $table->string('role');
            $table->json('tags'); // Store tags as JSON
            $table->text('description');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('testmentors');
    }
};

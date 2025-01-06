<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('mentors', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('application_id'); // Reference to the mentor application
            $table->string('name');
            $table->integer('points')->default(0);
            $table->string('role');
            $table->integer('rate');
            $table->json('tags')->nullable(); // Store tags as a JSON array
            $table->string('location');
            $table->text('bio');
            $table->text('motivation_letter');
            $table->string('link_resume')->nullable(); // Store resume link
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('mentors');
    }
};

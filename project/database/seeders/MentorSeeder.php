<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MentorSeeder extends Seeder
{
    public function run()
    {
        DB::table('testmentors')->insert([
            [
                'name' => 'John Doe',
                'points' => 250,
                'role' => 'Buddy',
                'tags' => json_encode(['React', 'JavaScript', 'CSS']),
                'description' => 'John is an experienced developer specializing in front-end technologies.',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Jane Smith',
                'points' => 300,
                'role' => 'Tutor',
                'tags' => json_encode(['Laravel', 'PHP', 'SQL']),
                'description' => 'Jane has a strong background in backend development and database management.',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}

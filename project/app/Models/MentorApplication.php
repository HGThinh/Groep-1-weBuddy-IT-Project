<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MentorApplication extends Model
{
    protected $fillable = [
        'user_id',
        'roles',
        'courses',
        'other_course',
        'mode',
        'languages',
        'motivation',
        'resume_path',
        'status',
    ];

    protected $casts = [
        'roles' => 'json',
        'courses' => 'json',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}

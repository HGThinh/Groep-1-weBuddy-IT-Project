<?php

// namespace App\Models;

// use Illuminate\Database\Eloquent\Model;

// class Mentor extends Model
// {
//     protected $table = 'mentors';
//     protected $primaryKey = 'mentor_id';

//     // which attributes should be mass assignable
//     protected $fillable = [
//         'grades', 'bio', 'location','rate','role', 'student_id'
//     ];

//     //relations
//     public function identity(){
//         return $this->belongsTo(Student::class);
//     }

//     public function language(){
//         return $this->belongsToMany(Language::class);
//     }

//     public function student(){
//         return $this->belongsToMany(Student::class);
//     }

//     public function course(){
//         return $this->belongsToMany(Course::class);
//     }

//     public function keyword(){
//         return $this->belongsToMany(Keyword::class);
//     }

//     public function mentorRequest(){
//         return $this->hasMany(MentorRequest::class);
//     }

//     public function endMentorRequest(){
//         return $this->hasMany(EndMentorRequest::class);
//     }
// }

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Mentor extends Model
{
    use HasFactory;

    protected $table = 'testmentors';

    protected $fillable = ['name', 'points', 'role', 'tags', 'description'];
    protected $casts = [
        'tags' => 'array',
    ];
}

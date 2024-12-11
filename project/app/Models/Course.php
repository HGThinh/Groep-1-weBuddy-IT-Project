<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    protected $table = 'courses';
    protected $primaryKey = 'course_id';

    // which attributes should be mass assignable
    protected $fillable = [
        'course', 'semester'];


    //relations
    public function mentor(){
        return $this->belongsToMany(Mentor::class);
    }

    public function student(){
        return $this->belongsToMany(Student::class);
    }

    public function degree(){
        return $this->belongstoMany(Degree::class);
    }

    public function mentorApplication(){
        return $this->belongstoMany(MentorApplication::class);
    }

    public function mentorRequest(){
        return $this->belongsToMany(MentorRequest::class);
    }   
}

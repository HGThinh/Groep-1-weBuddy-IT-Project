<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MentorApplication extends Model
{
    protected $table="mentor_applications";
    protected $primaryKey="mentor_application_id";

    protected $fillable=['grades','bio','location','rate','role','motivation_letter', 'student_id'];


    //relations

    public function language(){
        return $this->belongsToMany(Language::class);
    }

    public function course(){
        return $this->belongsToMany(Course::class);
    }

    public function student(){
        return $this->belongsTo(Student::class);
    }

}

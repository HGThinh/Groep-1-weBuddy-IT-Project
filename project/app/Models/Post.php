<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    protected $table = 'posts';
    protected $primaryKey = 'post_id';

    //Mass assignment reserved for attributes that a user can directly set
    protected $fillable = [
        'title', 'descirption', 'category', 'file_url', 'student_id', 'post_type_id'
    ];

    //relations

    public function student()
    {
        return $this->belongsTo(Student::class);
    }

    public function keyword(){
        return $this->belongsToMany(Keyword::class);
    }
   
    public function comment(){
        return $this->hasMany(Comment::class);
    }

    public function postType(){
        return $this->belongsTo(PostType::class);
    }

    public function report(){
        return $this->hasOne(Report::class);
    }

    public function notification(){
        return $this->hasMany(Notification::class);
    }
}

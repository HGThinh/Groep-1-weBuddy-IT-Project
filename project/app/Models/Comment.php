<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User;
use App\Models\Student;

class Comment extends Model
{
    protected $table = 'comments';
    protected $primaryKey = 'comment_id';

    // which attributes should be mass assignable
    protected $fillable = [
        'comment', 'file_url', 'student_id', 'post_id', 'parent_comment_id'];

    //relations

    public function student(){
        return $this->belongsTo(Student::class);
    }

    public function post(){
        return $this->belongsTo(Post::class);
    }

    public function parentComment(){
        return $this->belongsTo(Comment::class);
    }

    public function comment(){
        return $this->hasMany(Comment::class);
    }

    public function notification(){
        return $this->hasMany(Notification::class);
    }

    public function report(){
        return $this->hasOne(Report::class);
    }

  


}

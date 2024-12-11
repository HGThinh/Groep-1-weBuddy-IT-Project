<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Report extends Model
{

    protected $table = 'reports';

    protected $primaryKey = 'report_id';


    protected $fillable=['content, student_id, post_id, comment_id, report_type_id'];


    //relations

    public function reportType(){
        return $this->belongsTo(ReportType::class);
    }

    public function student(){
        return $this->belongsTo(Student::class);
    }

    public function comment(){
        return $this->belongsTo(Comment::class);
    }

    public function post(){
        return $this->belongsTo(Post::class);
    }

}

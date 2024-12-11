<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Degree extends Model
{

    protected $table = 'degrees';
    protected $primaryKey = 'degree_id';

    // which attributes should be mass assignable
    protected $fillable = [
        'degree'];


    //relation
    public function student(){
        return $this->hasMany(Student::class);
    }

    public function course(){
        return $this->belongsToMany(Course::class);
    }
}

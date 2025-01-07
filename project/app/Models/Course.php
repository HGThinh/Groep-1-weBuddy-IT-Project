<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    use HasFactory;

    // Define the table name (if it's not the default pluralized form)
    protected $table = 'courses';

    // Define the primary key
    protected $primaryKey = 'course_id';

    // Disable auto-incrementing if not using it
    public $incrementing = true;

    // Specify the key type if the primary key is not an integer
    protected $keyType = 'int';

    // Fields that are mass assignable
    protected $fillable = [
        'course_id',
        'course',
        'semester',
    ];

    // Fields to cast to specific data types
    protected $casts = [
        'course_id' => 'integer',
        'semester' => 'integer',
    ];
}

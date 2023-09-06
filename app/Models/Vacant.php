<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Vacant extends Model
{
    use HasFactory;

    protected $fillable = [
        'area',
        'title',
        'description',
        'date_end',
    ];
}

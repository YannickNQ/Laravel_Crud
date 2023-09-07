<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Vacant extends Model
{
    use HasFactory;

    protected $fillable = [
        'area',
        'title',
        'description',
        'date_end',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}

<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;



class Sangjit extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    protected $with = ['user', 'lastUpdateBy'];

    // Relasi
    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function lastUpdateBy()
    {
        return $this->belongsTo(User::class, 'last_update_by');
    }

    //JSON
    protected function itemSangjitPria(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => json_decode($value, true),
            set: fn ($value) => json_encode($value),
        );
    }
    protected function itemSangjitWanita(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => json_decode($value, true),
            set: fn ($value) => json_encode($value),
        );
    }
}

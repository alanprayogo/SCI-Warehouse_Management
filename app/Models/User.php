<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use App\Models\Role;
use App\Models\GoodsReceipt;
use App\Models\MaterialRequest;
use Illuminate\Notifications\Notifiable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'email',
        'username',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    public function role()
    {
        return $this->belongsTo(Role::class);
    }

    public function goodsReceipt()
    {
        return $this->hasMany(GoodsReceipt::class);
    }

    public function materialRequest()
    {
        return $this->hasMany(MaterialRequest::class);
    }

    public function goodsIssued()
    {
        return $this->hasMany(GoodsIssued::class);
    }

    public function returnTransaction()
    {
        return $this->hasMany(ReturnTransaction::class);
    }

    public function stockOpname()
    {
        return $this->hasMany(StockOpname::class);
    }
}

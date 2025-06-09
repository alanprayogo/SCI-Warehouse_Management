<?php

namespace App\Models;

use App\Models\GoodsReceipt;
use App\Models\ReturnTransaction;
use Illuminate\Database\Eloquent\Model;

class Supplier extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    public function goodsReceipts()
    {
        return $this->hasMany(GoodsReceipt::class);
    }

    public function returnTransaction()
    {
        return $this->hasMany(ReturnTransaction::class);
    }
}

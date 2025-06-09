<?php

namespace App\Models;

use App\Models\Product;
use App\Models\ReturnTransaction;
use Illuminate\Database\Eloquent\Model;

class ReturnTransactionItem extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    public function product()
    {
        return $this->belongsTo(Product::class);
    }

    public function returnTransaction()
    {
        return $this->belongsTo(ReturnTransaction::class);
    }
}

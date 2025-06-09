<?php

namespace App\Models;

use App\Models\Product;
use App\Models\GoodsIssue;
use Illuminate\Database\Eloquent\Model;

class GoodsIssueItem extends Model
{
    use HasFactory;

    protected $guarderd = ['id'];

    public function product()
    {
        return $this->belongsTo(Product::class);
    }

    public function goodsIssue()
    {
        return $this->belongsTo(GoodsIssue::class);
    }
}

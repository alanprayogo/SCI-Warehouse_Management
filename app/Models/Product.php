<?php

namespace App\Models;

use App\Models\Unit;
use App\Models\Stock;
use App\Models\StockLog;
use App\Models\StockMovement;
use App\Models\GoodsIssueItem;
use App\Models\ProductCategory;
use App\Models\StockOpnameItem;
use App\Models\GoodsReceiptItem;
use App\Models\MaterialRequestItem;
use App\Models\ReturnTransactionItem;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $guarded = ['id'];    

    public function productCategory()
    {
        return $this->belongsTo(ProductCategory::class);
    }

    public function unit()
    {
        return $this->belongsTo(Unit::class);
    }

    public function stock()
    {
        return $this->hasMany(Stock::class);
    }

    public function goodsReceiptItem()
    {
        return $this->hasMany(GoodsReceiptItem::class);
    }

    public function stockMovement()
    {
        return $this->hasMany(StockMovement::class);
    }

    public function stockLog()
    {
        return $this->hasMany(StockLog::class);
    }

    public function materialRequestItem()
    {
        return $this->hasMany(MaterialRequestItem::class);
    }

    public function goodsIssueItem()
    {
        return $this->hasMany(GoodsIssueItem::class);
    }

    public function returnTransactionItem()
    {
        return $this->hasMany(ReturnTransactionItem::class);
    }

    public function stockOpnameItem()
    {
        return $this->hasMany(StockOpnameItem::class);
    }
}

<?php

namespace App\Models;

use App\Models\Stock;
use App\Models\StockLog;
use App\Models\GoodsIssue;
use App\Models\StockOpname;
use App\Models\GoodsReceipt;
use App\Models\StockMovement;
use App\Models\MaterialRequest;
use App\Models\ReturnTransaction;
use Illuminate\Database\Eloquent\Model;

class Warehouse extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    public function stock()
    {
        return $this->hasMany(Stock::class);
    }

    public function goodsReceipt()
    {
        return $this->hasMany(GoodsReceipt::class);
    }

    public function stockMovement()
    {
        return $this->hasMany(StockMovement::class);
    }

    public function stockLog()
    {
        return $this->hasMany(StockLog::class);
    }

    public function materialRequest()
    {
        return $this->hasMany(MaterialRequest::class);
    }

    public function goodsIssue()
    {
        return $this->hasMany(GoodsIssue::class);
    }

    public function returnTransaction()
    {
        return $this->hasMany(ReturnTransaction::class);
    }

    public function stockOpnament()
    {
        return $this->hasMany(StockOpname::class);
    }
}

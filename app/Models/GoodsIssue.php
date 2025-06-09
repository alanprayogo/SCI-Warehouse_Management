<?php

namespace App\Models;

use App\Models\User;
use App\Models\Warehouse;
use App\Models\GoodsIssueItem;
use Illuminate\Database\Eloquent\Model;

class GoodsIssue extends Model
{
    use HasFactory;

    protected $guarderd = ['id'];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function warehouse()
    {
        return $this->belongsTo(Warehouse::class);
    }

    public function goodsIssueItems()
    {
        return $this->hasMany(GoodsIssueItem::class);
    }
}

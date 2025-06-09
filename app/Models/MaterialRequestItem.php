<?php

namespace App\Models;

use App\Models\Product;
use App\Models\MaterialRequest;
use Illuminate\Database\Eloquent\Model;

class MaterialRequestItem extends Model
{
    use HasFactory;

    protected $guarded = ['id'];

    public function product()
    {
        return $this->belongsTo(Product::class);
    }

    public function materialRequest()
    {
        return $this->belongsTo(MaterialRequest::class);
    }
}

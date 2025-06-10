<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/master-user', function () {
    return Inertia::render('Master-User');
})->middleware(['auth', 'verified'])->name('master-user');

Route::get('/master-warehouse', function () {
    return Inertia::render('Master-Warehouse');
})->middleware(['auth', 'verified'])->name('master-warehouse');

Route::get('/master-supplier', function () {
    return Inertia::render('Master-Supplier');
})->middleware(['auth', 'verified'])->name('master-supplier');

Route::get('/master-product', function () {
    return Inertia::render('Master-Product');
})->middleware(['auth', 'verified'])->name('master-product');

Route::get('/manage-warehouse', function () {
    return Inertia::render('Manage-Warehouse');
})->middleware(['auth', 'verified'])->name('manage-warehouse');

Route::get('/incoming-good', function () {
    return Inertia::render('Incoming-Good');
})->middleware(['auth', 'verified'])->name('incoming-good');

Route::get('/stock-movement', function () {
    return Inertia::render('Stock-Movement');
})->middleware(['auth', 'verified'])->name('stock-movement');

Route::get('/stock-log', function () {
    return Inertia::render('Stock-Log');
})->middleware(['auth', 'verified'])->name('stock-log');

Route::get('/material-request', function () {
    return Inertia::render('Material-Request');
})->middleware(['auth', 'verified'])->name('material-request');

Route::get('/outgoing-good', function () {
    return Inertia::render('Outgoing-Good');
})->middleware(['auth', 'verified'])->name('outgoing-good');

Route::get('/return-transaction', function () {
    return Inertia::render('Return-Transaction');
})->middleware(['auth', 'verified'])->name('return-transaction');

Route::get('/stock-opname', function () {
    return Inertia::render('Stock-Opname');
})->middleware(['auth', 'verified'])->name('stock-opname');

Route::get('/report', function () {
    return Inertia::render('Report');
})->middleware(['auth', 'verified'])->name('report');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';

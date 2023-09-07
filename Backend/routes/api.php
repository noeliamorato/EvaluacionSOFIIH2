<?php

use App\Http\Controllers\ControllerCategorias;
use App\Http\Controllers\ControllerMedicamentos;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/Med', [ControllerMedicamentos::class, 'index']);
Route::post('/Med', [ControllerMedicamentos::class, 'store']);
Route::put('/Med/{id}', [ControllerMedicamentos::class, 'update']);
Route::delete('/Med/{id}', [ControllerMedicamentos::class, 'destroy']);

Route::get('/Cat', [ControllerCategorias::class, 'index']);
Route::post('/Cat', [ControllerCategorias::class, 'store']);
Route::put('/Cat/{id}', [ControllerCategorias::class, 'update']);
Route::delete('/Cat/{id}', [ControllerCategorias::class, 'destroy']);


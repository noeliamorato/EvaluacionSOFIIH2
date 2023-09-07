<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Medicamento extends Model
{
    use HasFactory;
    protected $filable =[
        'codigo',
        'descripcion',
        'nombre',
        'fecha_entrada',
        'fecha_ven',
        'stock',
        'id_categorias',
    ];
}

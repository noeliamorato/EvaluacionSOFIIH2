<?php

namespace App\Http\Controllers;

use App\Models\Categoria;
use Illuminate\Http\Request;

class ControllerCategorias extends Controller
{
    public function index()
    {
        return Categoria::all();
    }
    public function store(Request $request)
    { 
        //registrar a la base de datos
        $Cat=new Categoria();
        $Cat->nombre=$request->nombre;
        $Cat->save();
        return $Cat;
    }
    // actualizar
    public function update(Request $request, $id)
    {
        $Cat=Categoria::find($id);
        $Cat->nombre=$request->nombre;
        $Cat->save();
        return $Cat;
    }
    public function destroy($id)
    {
        return Categoria::destroy($id);
    }
}

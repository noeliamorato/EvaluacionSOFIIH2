<?php

namespace App\Http\Controllers;

use App\Models\Medicamento;
use Illuminate\Http\Request;

class ControllerMedicamentos extends Controller
{
    public function index()
    {
        return Medicamento::all();
    }
    public function store(Request $request)
    { 
        //registrar a la base de datos
        $Med=new Medicamento();
        $Med->codigo=$request->codigo;
        $Med->descripcion=$request->descripcion;
        $Med->nombre=$request->nombre;
        $Med->fecha_entrada=$request->fecha_entrada;
        $Med->fecha_ven=$request->fecha_ven;
        $Med->stock=$request->stock;
        $Med->id_categorias=$request->id_categorias;
        $Med->save();
        return $Med;
    }
    // actualizar
    public function update(Request $request, $id)
    {
        $Med=Medicamento::find($id);
        $Med->codigo=$request->codigo;
        $Med->descripcion=$request->descripcion;
        $Med->nombre=$request->nombre;
        $Med->fecha_entrada=$request->fecha_entrada;
        $Med->fecha_ven=$request->fecha_ven;
        $Med->stock=$request->stock;
        $Med->id_categorias=$request->id_categorias;
        $Med->save();
        return $Med;
    }
    public function destroy($id)
    {
        return Medicamento::destroy($id);
    }
}

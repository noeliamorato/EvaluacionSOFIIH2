import React, { useState, useEffect } from 'react';
import { Input } from '../../styles/agregar';

const FormMedicamentos = ({
    medicamentoActual,
    setMedicamentoActual,
    mostrarMedicamentos,
    closeModal
}) => {
    const [codigo, setCodigo] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [nombre, setNombre] = useState('');
    const [fechaEntrada, setFechaEntrada] = useState('');
    const [fechaVencimiento, setFechaVencimiento] = useState('');
    const [stock, setStock] = useState('');
    const [idCategorias, setIdCategorias] = useState('');

    useEffect(() => {
        if (Object.keys(medicamentoActual).length > 0) {
            setCodigo(medicamentoActual.codigo);
            setDescripcion(medicamentoActual.descripcion);
            setNombre(medicamentoActual.nombre);
            setFechaEntrada(medicamentoActual.fecha_entrada);
            setFechaVencimiento(medicamentoActual.fecha_ven);
            setStock(medicamentoActual.stock);
            setIdCategorias(medicamentoActual.id_categorias);
        } else {
            setCodigo('');
            setDescripcion('');
            setNombre('');
            setFechaEntrada('');
            setFechaVencimiento('');
            setStock('');
            setIdCategorias('');
        }
    }, [medicamentoActual]);

    const enviar = async (e) => {
        e.preventDefault();

        if (Object.keys(medicamentoActual).length > 0) {
            // Función actualizar
            const response = await fetch(`http://127.0.0.1:8000/api/Med/${medicamentoActual.id}`, {
                method: "PUT",
                headers: {
                    accept: "application/json",
                    "content-type": "application/json",
                },
                body: JSON.stringify({
                    id: medicamentoActual.id,
                    codigo: codigo,
                    descripcion: descripcion,
                    nombre: nombre,
                    fecha_entrada: fechaEntrada,
                    fecha_ven: fechaVencimiento,
                    stock: stock,
                    id_categorias: idCategorias,
                }),
            });

            if (response.ok) {
                mostrarMedicamentos();
                closeModal();
            }
        } else {
            // Función agregar
            const response = await fetch('http://127.0.0.1:8000/api/Med', {
                method: 'POST',
                headers: {
                    accept: "application/json",
                    "content-Type": "application/json",
                },
                body: JSON.stringify({
                    codigo: codigo,
                    descripcion: descripcion,
                    nombre: nombre,
                    fecha_entrada: fechaEntrada,
                    fecha_ven: fechaVencimiento,
                    stock: stock,
                    id_categorias: idCategorias,
                }),
            });

            if (response.ok) {
                mostrarMedicamentos();
                closeModal();
            }
        }
    };

    return (
        <div>
            <form>
                <div>
                    <div>
                        <label htmlFor="codigo">Código</label>
                        <Input
                            type="text"
                            id="codigo"
                            value={codigo}
                            onChange={(e) => setCodigo(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="descripcion">Descripción</label>
                        <Input
                            type="text"
                            id="descripcion"
                            value={descripcion}
                            onChange={(e) => setDescripcion(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="nombre">Nombre</label>
                        <Input
                            type="text"
                            id="nombre"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="fechaEntrada">Fecha de Entrada</label>
                        <Input
                            type="text"
                            id="fechaEntrada"
                            value={fechaEntrada}
                            onChange={(e) => setFechaEntrada(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="fechaVencimiento">Fecha de Vencimiento</label>
                        <Input
                            type="text"
                            id="fechaVencimiento"
                            value={fechaVencimiento}
                            onChange={(e) => setFechaVencimiento(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="stock">Stock</label>
                        <Input
                            type="text"
                            id="stock"
                            value={stock}
                            onChange={(e) => setStock(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="idCategorias">ID de Categorías</label>
                        <Input
                            type="text"
                            id="idCategorias"
                            value={idCategorias}
                            onChange={(e) => setIdCategorias(e.target.value)}
                        />
                    </div>
                </div>
                <button onClick={enviar}>
                    {Object.keys(medicamentoActual).length > 0 ? "Actualizar" : "Agregar"}
                </button>
            </form>
        </div>
    );
};

export default FormMedicamentos;

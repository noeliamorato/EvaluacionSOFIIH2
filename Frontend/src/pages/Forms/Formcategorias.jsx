import React, { useState, useEffect } from 'react';
import { Input } from '../../styles/agregar';

const FormCategorias = ({
    categoriaActual,
    setCategoriaActual,
    mostrarCategorias,
    closeModal
}) => {
    const [nombre, setNombre] = useState('');

    useEffect(() => {
        if (Object.keys(categoriaActual).length > 0) {
            setNombre(categoriaActual.nombre);
        } else {
            setNombre('');
        }
    }, [categoriaActual]);

    const enviar = async (e) => {
        e.preventDefault();

        if (Object.keys(categoriaActual).length > 0) {
            // Función actualizar
            const response = await fetch(`http://127.0.0.1:8000/api/Cat/${categoriaActual.id}`, {
                method: "PUT",
                headers: {
                    accept: "application/json",
                    "content-type": "application/json",
                },
                body: JSON.stringify({
                    id: categoriaActual.id,
                    nombre: nombre,
                }),
            });

            if (response.ok) {
                mostrarCategorias();
                closeModal();
            }
        } else {
            // Función agregar
            const response = await fetch('http://127.0.0.1:8000/api/Cat', {
                method: 'POST',
                headers: {
                    accept: "application/json",
                    "content-Type": "application/json",
                },
                body: JSON.stringify({
                    nombre: nombre,
                }),
            });

            if (response.ok) {
                mostrarCategorias();
                closeModal();
            }
        }
    };

    return (
        <div>
            <form>
                <div>
                    <div>
                        <label htmlFor="nombre">Nombre</label>
                        <Input
                            type="text"
                            id="nombre"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                        />
                    </div>
                </div>
                <button onClick={enviar}>
                    {Object.keys(categoriaActual).length > 0 ? "Actualizar" : "Agregar"}
                </button>
            </form>
        </div>
    );
};

export default FormCategorias;

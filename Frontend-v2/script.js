const API_URL = 'http://localhost:3000/api/obituarios/';

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('obituarioForm');
    form.addEventListener('submit', crearObituario);
});

async function crearObituario(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const datos = Object.fromEntries(formData.entries());

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(datos)
        });

        if (response.ok) {
            const result = await response.json();
            alert('Obituario registrado exitosamente');
            e.target.reset();
            mostrarObituario(result);
            cargarObituarios(); // Actualizar la lista después de crear uno nuevo
        } else {
            throw new Error('Error al registrar el obituario');
        }
    } catch (error) {
        console.error('Error:', error);
        alert(error.message);
    }
}

async function buscarObituario() {
    const id = document.getElementById('buscarId').value;
    if (!id) {
        alert('Por favor, ingrese un ID');
        return;
    }

    try {
        const response = await fetch(`${API_URL}${id}`);
        if (!response.ok) {
            throw new Error('Obituario no encontrado');
        }
        const obituario = await response.json();
        mostrarObituario(obituario);
    } catch (error) {
        console.error('Error:', error);
        alert(error.message);
    }
}

async function actualizarObituario() {
    const id = document.getElementById('actualizarId').value;
    const nombre = document.getElementById('actualizarNombre').value;
    const fecha = document.getElementById('actualizarFecha').value;
    const hora = document.getElementById('actualizarHora').value;

    if (!id) {
        alert('Por favor, ingrese un ID');
        return;
    }

    const datos = {};
    if (nombre) datos.nombre = nombre;
    if (fecha) datos.fechaFallecimiento = fecha;
    if (hora) datos.horaFallecimiento = hora;

    try {
        const response = await fetch(`${API_URL}${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(datos)
        });

        if (response.ok) {
            const result = await response.json();
            alert('Obituario actualizado exitosamente');
            mostrarObituario(result);
            cargarObituarios(); // Actualizar la lista después de actualizar
        } else {
            throw new Error('Error al actualizar el obituario');
        }
    } catch (error) {
        console.error('Error:', error);
        alert(error.message);
    }
}

async function eliminarObituario() {
    const id = document.getElementById('eliminarId').value;
    if (!id) {
        alert('Por favor, ingrese un ID');
        return;
    }

    try {
        const response = await fetch(`${API_URL}${id}`, {
            method: 'DELETE'
        });

        if (response.ok) {
            alert('Obituario eliminado correctamente');
            document.getElementById('detalleObituario').getElementsByTagName('tbody')[0].innerHTML = '';
            cargarObituarios(); // Actualizar la lista después de eliminar
        } else {
            throw new Error('Error al eliminar el obituario');
        }
    } catch (error) {
        console.error('Error:', error);
        alert(error.message);
    }
}

function mostrarObituario(obituario) {
    const tabla = document.getElementById('detalleObituario').getElementsByTagName('tbody')[0];
    tabla.innerHTML = '';
    const fila = tabla.insertRow();
    fila.insertCell().textContent = obituario.id;
    fila.insertCell().textContent = obituario.nombre;
    fila.insertCell().textContent = new Date(obituario.fechaFallecimiento).toLocaleDateString();
    fila.insertCell().textContent = obituario.horaFallecimiento;
}

async function cargarObituarios() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error('Error al cargar los obituarios');
        }
        const obituarios = await response.json();
        const tabla = document.getElementById('listaObituarios').getElementsByTagName('tbody')[0];
        tabla.innerHTML = '';
        obituarios.forEach(obituario => {
            const fila = tabla.insertRow();
            fila.insertCell().textContent = obituario.id;
            fila.insertCell().textContent = obituario.nombre;
            fila.insertCell().textContent = new Date(obituario.fechaFallecimiento).toLocaleDateString();
            fila.insertCell().textContent = obituario.horaFallecimiento;
        });
    } catch (error) {
        console.error('Error:', error);
        alert(error.message);
    }
}
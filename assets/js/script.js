const input = document.querySelector('input')
const button = document.querySelector('button')
const list = document.querySelector('.lista')
const totalTareas = document.querySelector('.total')
const tareasRealizadas = document.querySelector('.realizadas')

const tareas = [
{ id: 1734785109127, nombreTarea: 'Comprar verduras', completada: false},
{ id: 1734785109128, nombreTarea: 'Cambiar ampolleta', completada: false},
{ id: 1734785109129, nombreTarea: 'Veterinario anual Benito', completada: false}
]

const actualizarCantidad = () => {
    totalTareas.innerHTML = tareas.length
}

const actualizarRealizadas = () => {
    const realizadas = tareas.filter((tarea) => tarea.completada).length
    tareasRealizadas.innerHTML = realizadas
}

const marcarCompletada = (id) => {
    const tarea = tareas.find((tarea) => tarea.id === id)
    if (tarea) {
        tarea.completada = !tarea.completada
        mostrarLista()
        actualizarRealizadas()
    }
}

button.addEventListener('click', () => {
    if (input.value === '') return
    tareas.push({ id: Date.now(), nombreTarea: input.value, completada: false })
    input.value = ''
    mostrarLista()
    actualizarCantidad()
    actualizarRealizadas()
})

const mostrarLista = () => {
    list.innerHTML = tareas.map((tarea) =>
    `
        <div class="row justify-content-start align-items-center gap-3">

        <div class="col-xl-3 col-lg-2 col-sm-3 col-4"><span class="badge text-bg-secondary rounded-pill">${tarea.id}</span></div>

        <div class="col-xl-5 col-lg-7 col-md-6 col-sm-5 col-6"><span class="${ tarea.completada ? 'text-decoration-line-through text-muted' : '' }">${tarea.nombreTarea}</span></div>

        <div class="col-auto"><button onclick='eliminar(${tarea.id})' class="btn btn-danger">x</button></div>

        <div class="col-auto"><input class="form-check-input" type="checkbox" ${tarea.completada ? 'checked' : ''} onchange="marcarCompletada(${tarea.id})" ></div>

        <hr>

        </div>
    `
    ).join('')
}

const eliminar = (id) => {
    const index = tareas.findIndex((tarea) => tarea.id === id)
    tareas.splice(index, 1)
    mostrarLista()
    actualizarCantidad()
    actualizarRealizadas()
}



mostrarLista()
actualizarCantidad()
actualizarRealizadas()


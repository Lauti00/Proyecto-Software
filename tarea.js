
    // Seleccionamos todas las tareas
    const tareas = document.querySelectorAll('.tarea');

    // Recorremos cada tarea y asignamos el evento
    tareas.forEach(tarea => {
      tarea.addEventListener('click', () => {
        // Obtenemos los datos del elemento
        const titulo = tarea.dataset.titulo;
        const descripcion = tarea.dataset.descripcion;
        const prioridad = tarea.dataset.prioridad;

        // Insertamos los datos en el modal
        document.getElementById('inputTitulo').value = titulo;
        document.getElementById('inputDescripcion').value = descripcion;

        // Reiniciamos los checkboxes
        document.getElementById('prioridadAlta').checked = false;
        document.getElementById('prioridadMedia').checked = false;
        document.getElementById('prioridadBaja').checked = false;

        // Activamos el checkbox correcto
        if (prioridad === 'alta') {
          document.getElementById('prioridadAlta').checked = true;
        } else if (prioridad === 'media') {
          document.getElementById('prioridadMedia').checked = true;
        } else if (prioridad === 'baja') {
          document.getElementById('prioridadBaja').checked = true;
        }
      });
    });

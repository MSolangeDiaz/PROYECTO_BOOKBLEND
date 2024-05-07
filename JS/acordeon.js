document.addEventListener('DOMContentLoaded', function() {
    const acordeones = document.querySelectorAll('.acordeon');

    acordeones.forEach(function(acordeon) {
        const btnAcordeon = acordeon.querySelector('.btn-acordeon');

        btnAcordeon.addEventListener('change', function() {
            if (this.checked) {
                // Si se selecciona el botón del acordeón, deselecciona los otros botones
                acordeones.forEach(function(item) {
                    if (item !== acordeon) {
                        item.querySelector('.btn-acordeon').checked = false;
                    }
                });
            } else {
                // Si se deselecciona el botón del acordeón, cierra el contenido
                acordeon.querySelector('.contenido-acordeon').style.maxHeight = '0px';
            }
        });
    });

    // Evento para cerrar el acordeón cuando se hace clic fuera de él
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.acordeon')) {
            acordeones.forEach(function(acordeon) {
                acordeon.querySelector('.btn-acordeon').checked = false;
                acordeon.querySelector('.contenido-acordeon').style.maxHeight = '0px';
            });
        }
    });
});

  
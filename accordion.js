// seleccionando y guardando en una constante la clase acordeon-item que contiene todo lo relacionado a nuestro acordeon

const itemsAcordeon = document.querySelectorAll('.acordeon-item');

// Realizando la funcion para mostrar y ocultar el contenido del acordeon al hacer click

itemsAcordeon.forEach(item => {
    const titulo = item.querySelector('.acordeon-titulo');
    const contenido = item.querySelector('.acordeon-contenido');
    const icono =item.querySelector('ion-icon');

    //creando el evento que al hacer click, cambien la clase de los elementos del contenido y el icono para mostrar y ocultar
    titulo.addEventListener('click', ()=> {
        contenido.classList.toggle('show_1');
        icono.name = contenido.classList.contains('show_1') ? 'remove-circle-outline' : 'add-circle-outline';
    })
})
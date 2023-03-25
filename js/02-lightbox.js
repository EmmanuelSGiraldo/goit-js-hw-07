import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const listGallery = document.querySelector(".gallery"); // Seleccionamos el elemento con la clase "gallery" del HTML

// Para cada objeto en el array de galería, creamos un elemento "a" y un elemento "img",
// le asignamos las propiedades correspondientes y los añadimos al elemento padre "listGallery"
const galleryMarkup = galleryItems.forEach(
  (galleryItem) => {
    const galleryItemElem = document.createElement('a'); // Creamos el elemento "a"
    galleryItemElem.classList.add('gallery__item'); // Le añadimos la clase "gallery__item"
    galleryItemElem.setAttribute('href', galleryItem.original); // Le asignamos la propiedad "href" con el enlace a la imagen original

    const imgElem = document.createElement('img'); // Creamos el elemento "img"
    imgElem.classList.add('gallery__image'); // Le añadimos la clase "gallery__image"
    imgElem.setAttribute('src', galleryItem.preview); // Le asignamos la propiedad "src" con la imagen en miniatura
    imgElem.setAttribute('alt', galleryItem.description); // Le asignamos la propiedad "alt" con la descripción de la imagen

    galleryItemElem.appendChild(imgElem); // Añadimos el elemento "img" como hijo del elemento "a"
    listGallery.appendChild(galleryItemElem); // Añadimos el elemento "a" como hijo del elemento "listGallery"
  }
);

// Inicializamos la librería SimpleLightbox en las imágenes de la galería que se encuentren dentro del elemento "listGallery"
// y le añadimos las opciones de mostrar la descripción de la imagen (captionsData) y el retraso de la aparición de la descripción (captionDelay)
listGallery.addEventListener("click", (event) => event.preventDefault()); // Desactivamos el comportamiento por defecto al hacer clic en un enlace (para que no se cargue la imagen original)
let lightbox = new SimpleLightbox('.gallery a', { 
    captionsData: 'alt', // Mostramos la descripción de la imagen basada en el valor del atributo "alt"
    captionDelay: 250, // Esperamos 250 milisegundos antes de mostrar la descripción de la imagen
 });

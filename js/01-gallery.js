import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
// Seleccionar el contenedor de la galería
const containerGallery = document.querySelector(".gallery");

// Crear y renderizar el marcado HTML de los elementos de la galería
const galleryMarkup = galleryItems
  .map(
    (item) =>
      `<div class="gallery__item">
         <a class="gallery__link" href="${item.original}">
           <img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}">
         </a>
      </div>`
  )
  .join("\n");

// Insertar el marcado HTML en el contenedor de la galería
containerGallery.insertAdjacentHTML("afterbegin", galleryMarkup);

// Manejar el evento 'click' en los elementos de la galería
containerGallery.addEventListener("click", (event) => {
  event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace
  if (event.target.nodeName !== "IMG") return; // Si el elemento clicado no es una imagen, salir de la función

  // Crear una instancia de basicLightbox con la imagen original
  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}" alt="${event.target.alt}">`,
    {
      onShow: (instance) => {
        // Agregar el listener del evento 'keydown' para cerrar la instancia al presionar 'Escape'
        document.addEventListener("keydown", (event) => {
          if (event.code === "Escape") instance.close();
        });
      },
      onClose: () => {
        // Remover el listener del evento 'keydown' al cerrar la instancia
        document.removeEventListener("keydown", (event) => {
          if (event.code === "Escape") instance.close();
        });
      },
    }
  );

  // Mostrar la instancia de basicLightbox
  instance.show();
});
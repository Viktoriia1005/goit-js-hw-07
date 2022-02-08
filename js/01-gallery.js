import { galleryItems } from './gallery-items.js';
// Change code below this line

// Создание и рендер разметки

const galleryElements = document.querySelector('.gallery');
const createGalleryItemMarkup = ({preview, original, description}) =>
`
<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
`;

const makeGalleryMarkup = galleryItems.map(createGalleryItemMarkup).join('');

galleryElements.innerHTML = makeGalleryMarkup;
// console.log(galleryItems);

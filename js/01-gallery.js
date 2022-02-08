import { galleryItems } from './gallery-items.js';
// Change code below this line

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

galleryElements.innerHTML = galleryItems.map(createGalleryItemMarkup).join('');
// console.log(galleryItems);

import { galleryItems } from './gallery-items.js';
// Change code below this line

// Создание и рендер разметки по массиву данных

const galleryList = document.querySelector('.gallery');
const createGalleryItemMarkup = ({preview, original, description}) =>
`
    <a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
`;
const createGalleryMarkup = galleryItems.map(createGalleryItemMarkup).join('');
galleryList.insertAdjacentHTML('beforeend', createGalleryMarkup);

// Использование библиотеки

let upgradeGallery = new SimpleLightbox('.gallery a', {
    captions: true,
    captionPosition: 'bottom',
    captionsData: "alt",
    captionDelay: 250,
});

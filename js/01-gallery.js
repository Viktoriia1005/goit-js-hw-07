import { galleryItems } from './gallery-items.js';

// Создание и рендер разметки по массиву данных

const galleryList = document.querySelector('.gallery');

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

const createGalleryMarkup = galleryItems.map(createGalleryItemMarkup).join('');
galleryList.insertAdjacentHTML('beforeend', createGalleryMarkup)

// Открытие модального окна по клику на элементе галереи, закрытие при нажатии Esc

function modalWindow(src) {
  const onEscPress = event => {
    if (event.code === 'Escape') {
      instance.close();
    }
  }
  const instance = basicLightbox.create(
    `
      <img src="${src}"></img>
    `,
    {
      onShow: instance => {
        window.addEventListener('keydown', onEscPress);
      },
      onClose: instance => {
        window.removeEventListener('keydown', onEscPress);
      },
    },
  );
  instance.show();
}

function onGalleryClick (event) {
  if (!event.target.classList.contains('gallery__image')) {
    return;
  }
  event.preventDefault();
  modalWindow(event.target.dataset.source);
}

galleryList.addEventListener('click', onGalleryClick)


// Add imports above this line
import { galleryItems } from './gallery-items';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Change code below this line

// console.log(SimpleLightbox);

const galleryEl = document.querySelector('.gallery');

const galleryMarkup = galleryItems
  .map(
    ({ preview, original, description }) =>
      `<div>
    <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
    </div>`
  )
  .join('');

galleryEl.innerHTML = galleryMarkup;

galleryEl.addEventListener('click', onGalleryClick);

function onGalleryClick(evt) {
  evt.preventDefault();
}

const gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

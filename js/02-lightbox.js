import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');
const galleryItemsMarkup = createGalleryItemsShow(galleryItems);

function createGalleryItemsShow(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li>
                  <a  class="gallery__item" href="${original}" style="display:block"
    class="gallery__image">
                    <img class="gallery__image" src="${preview}" alt="${description}" />
                  </a>
              </li>`;
    })
    .join('');
}

galleryEl.insertAdjacentHTML('beforeend', galleryItemsMarkup);

let gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

gallery.on('show.simplelightbox', function () {});

console.log(galleryItems);

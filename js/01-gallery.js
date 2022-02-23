import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryElements = document.querySelector('.gallery');
const galleryItemsShow = createGalleryItemsShow(galleryItems);

function createGalleryItemsShow(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>`;
    })
    .join('');
}

galleryElements.insertAdjacentHTML('beforeend', galleryItemsShow);
galleryElements.addEventListener('click', onClickGalleryItem);

function onClickGalleryItem(event) {
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  event.preventDefault();

  const imgSrc = event.target.dataset.source;

  showModal(imgSrc);
}
let instance;
function showModal(imgSrc) {
  instance = basicLightbox.create(
    `<img src="${imgSrc}" style="display:block; height: 100vh">`,
  );

  instance.show(() => {
    addEscapeListener();
  });
}

function onEscapeClick(event) {
  if (event.code === 'Escape') {
    instance.close(() => {
      removeEscapeListener();
    });
  }
}

function addEscapeListener() {
  window.addEventListener('keydown', onEscapeClick);
}

function removeEscapeListener() {
  window.removeEventListener('keydown', onEscapeClick);
}

console.log(galleryItems);

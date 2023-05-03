// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css"
// Change code below this line

const refs = {
    gallery: document.querySelector(".gallery")
}

const galleryItemsMarkup = galleryItems.map(item => {
    return (
        `
        <li class="gallery__item">
            <a class="gallery__link" href=${item.original}>
                <img class="gallery__image" src=${item.original} alt=${item.description} />
            </a>
        </li>
        `
    )
}).join("")


refs.gallery.innerHTML = galleryItemsMarkup

let gallery = new SimpleLightbox('.gallery__item a', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
});


'use strict';



const galleryItems = [
    {
      preview: "./image/christ.jpg",
      fullview: "./image/christ-the-redeemer-Big.jpg",
      alt: "alt text 1"
    },
    {
      preview: "./image/man-and-woman.jpg",
      fullview: "./image/man-and-woman-Big.jpg",
      alt: "alt text 2"
    },
    {
      preview: "./image/people-inside.jpg",
      fullview: "./image/people-inside-building-Big.jpg",
      alt: "alt text 3"
    },
    {
      preview: "./image/photo-of-cloud.jpg",
      fullview: "./image/photo-of-cloud-Big.jpg",
      alt: "alt text 4"
    },
    {
      preview: "./image/two-men-performs.jpg",
      fullview: "./image/two-men-performs-Big.jpg",
      alt: "alt text 5"
    },
    {
      preview: "./image/woman-wearing.jpg",
      fullview: "./image/woman-wearing-Big.jpg",
      alt: "alt text 6"
    }
  ];

  const refs = {
      galleryContainer: document.querySelector('.galleryContainer'),
      fullview: document.querySelector('.fullview'),
      preview: document.querySelector('.preview'),
  }

  refs.preview
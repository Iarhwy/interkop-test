ymaps.ready(init);
function init() {
   var myMap = new ymaps.Map("map", { 
    center: [45.456930423199594,39.440698928558284], 
    zoom: 15, 
    controls: ['geolocationControl', 'zoomControl']
  },
  { 
    suppressMapOpenBlock: true,
    geolocationControlSize: "large",
    geolocationControlPosition:  { top: "285px", right: "20px" },
    geolocationControlFloat: 'none',
    zoomControlSize: "small",
    zoomControlFloat: "none",
    zoomControlPosition: { top: "210px", right: "20px" }
  },

  {autoFitToViewport: 'always'}
);

myMap.behaviors.disable('scrollZoom');

const myPlacemark = new ymaps.Placemark(
  [45.456930423199594,39.440698928558284],
  {},
  {
    iconLayout: "default#image",
    iconImageHref: "../img/ymap-location.svg",
    iconImageSize: [20, 20],
    iconImageOffset: [-20, -40],
  }
);

myMap.geoObjects.add(myPlacemark);
myMap.container.fitToViewport();
}


const mapDarken = document.querySelector('.contacts__map-darken');
const closeDark = document.querySelector('.contacts__btn');
const openDark = document.querySelector('.contacts__btn-open');

closeDark.addEventListener('click', () => {
  mapDarken.classList.add('contacts__map_darken-active');
  closeDark.classList.add('contacts__btn-remove');
  openDark.classList.add('contacts__btn-open-show');
})

openDark.addEventListener('click', () => {
  mapDarken.classList.remove('contacts__map_darken-active');
  closeDark.classList.remove('contacts__btn-remove');
  openDark.classList.remove('contacts__btn-open-show');
})
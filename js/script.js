var elem = document.querySelector('.carousel');
var flkty = new Flickity(elem, {
    // options
    hash: true,
    cellAlign: 'left',
    contain: true,
    pageDots: false
});
var restart = document.querySelector('.restart');
restart.addEventListener('click', function () {
    flkty.select(0);
})


var carousel = document.querySelector('.carousel');
var flkty = new Flickity(carousel, {
    imagesLoaded: true,
    percentPosition: false,
});

var container = carousel.querySelectorAll('.carousel-cell .container');
// get transform property
var docStyle = document.documentElement.style;
var transformProp = typeof docStyle.transform == 'string' ?
    'transform' : 'WebkitTransform';

flkty.on('scroll', function () {
    flkty.slides.forEach(function (slide, i) {
        var cont = container[i];
        var x = (slide.target + flkty.x) * -1 / 3;
        cont.style[transformProp] = 'translateX(' + x + 'px)';
    });
});

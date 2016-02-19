/*
Author: Ivan Tovar (Webmaster at S+E)
e-mail: ivxn2309@hotmail.com
  Date: Feb 05, 2016
*/

new navplate({
    selector: '#nav-trigger',
    type: 'slide',
    active: 'always',
    reveal: 'left'
});

new flickerplate({
    selector: '#mainbanner',
    dots: true,
    arrows: false,
    animation: 'transform-slide'
});

new flickerplate({
    selector: '#portfolio',
    dots: false,
    arrows: true,
    animation: 'transition-slide',
    autoFlick: false
});

new formplate({
    selector: '.formplate'
});
/* -----------------------------------------------------------------------------
 * Java Script here
 * -----------------------------------------------------------------------------
 */

/*
 * Smooth scroll plugin
 * Docs: https://github.com/cferdinandi/smooth-scroll
 */
var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 500, // Скорость прокрутки
  speedAsDuration: true, // Вне зависимости от расстояния будет крутить за одно время
  header: '#page-header' // Селектор header сайта, так как он fixed, его высоту надо учитывать для отступа
});

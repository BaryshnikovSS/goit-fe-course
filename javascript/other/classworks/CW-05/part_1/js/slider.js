'use strict';

import {SliderEngine} from './library.js';

const sliderDiv = document.getElementById('js_slider_div');
const gWidth = window.InnerWidth;
const gHeight = window.InnerHeight;

const slidreWidth = sliderDiv.style.width;
const sliderHeight = sliderDiv.style.height;

document.tytle = 'NEW_SLIDER';

sliderDiv.style.position = 'absolute';

// function setSizeHtmlElements(_htmlElements, _gWidth, _gHeight) {
//     _htmlElements.style.width = (_gWidth * .5) + 'px';
//     _htmlElements.style.height = (_gHeight * .5) + 'px';
// }

SliderEngine.setSizeHtmlElements(sliderDiv, gWidth* .5, gHeight* .5)
SliderEngine.setPositionHtmlElements(sliderDiv, (gWidth - slidreWidth), (gHeight - sliderHeight))
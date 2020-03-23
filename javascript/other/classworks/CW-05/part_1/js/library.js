export const SliderEngine = {
    
    setSizeHtmlElements: function (_htmlElements, _gWidth, _gHeight) {
        _htmlElements.style.width = (_gWidth) + 'px';
        _htmlElements.style.height = (_gHeight) + 'px';
    }

    setPositionHtmlElement: function (_htmlElements, _x, _y) {
        _htmlElements.style.left = _x + 'px';
        _htmlElements.style.top = _y + 'px';
    }
}
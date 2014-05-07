(function () {

  function noop () {}

  function mouseTracker (options) {

    options = options || {};
    var element = options.element || document.documentElement;
    var startX = options.startX != null ? options.startX : null;
    var startY = options.startY != null ? options.startY : null;

    var mouse = {
      x: startX,
      y: startY,
      onmove: noop
    };

    element.addEventListener('mousemove', function (event) {
      mouse.x = event.offsetX;
      mouse.y = event.offsetY;
      mouse.onmove(event);
    });

    return mouse;

  }

  if (typeof module !== 'undefined')
    module.exports = mouseTracker;
  else
    this.mouseTracker = mouseTracker;

})();

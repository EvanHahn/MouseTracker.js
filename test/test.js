/* global mouseTracker */

(function () {

  var mouse = mouseTracker({
    element: document.getElementById('box')
  });

  var el = document.createElement('pre');
  document.body.appendChild(el);

  function update () {
    el.innerHTML = mouse.x + ', ' + mouse.y;
  }

  update();
  mouse.onmove = update;

})();

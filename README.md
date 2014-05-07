mouse tracker dot js
====================

where's the mouse at?

```javascript
var mouse = mouseTracker();
```

now `mouse.x` and `mouse.y` stay updated! they're initially set to `null`.

that's basically it!

you can also set what element to bind to.

```javascript
var mouse = mouseTracker({
  element: document.querySelector('canvas')
});
```

if you don't like that the starting values being `null`:

```javascript
var mouse = mouseTracker({
  startX: 100,
  startY: 200
});
```

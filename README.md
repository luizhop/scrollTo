# scrollTo
Animate scroll to anchor HTML elements.<br>
This library is a helper to use the scrolling code by Pawel Grzybek, on https://pawelgrzybek.com/page-scroll-in-vanilla-javascript/

## How to use
Below there is a guidance on how to start using it, also you can see it working on the files inside _examples_ folder on this project.

1. First thing you'll need is load the library into your project.
```html
<script type="text/javascript" src="../dist/scrollTo.js"></script>
```

2. Once the library is loaded, you can use different methods to animate the scroll to elements.

#### **Method 1:** 
Set scroll for single elements using different settings, with the function `scrollTo()`

```html
<a id="nav-item" class="item" href="#">Navigation Item</a>
<div id="destination-element" class="destination-element">Destination Element</div>
```

```javascript
let nav_item = document.querySelector('#nav-item');
let destination_item = document.querySelector('#destination-element');

nav_item.addEventListener( 'click', () => {
    scrollTo(
        destination_item, {
            duration: 500,
            easing: 'easeInOutQuint',
            callback: messageAfterScroll
        }
    );
});

function messageAfterScroll() {
    console.log('scroll has finished');
}
```

#### **Method 2:** 
Set scroll for single elements using different settings and `href` attribute as destination, using function `scrollToHref()`

```html
<div id="nav">
    <a class="item" href="#destination-section-1">Scroll to Section 1</a>
    <a class="item" href="#destination-section-2">Scroll to Section 2</a>
    <a class="item" href="#destination-section-3">Scroll to Section 3</a>
</div>

<div id="destination-section-1" class="destination-section">Section 1</div>
<div id="destination-section-2" class="destination-section">Section 2</div>
<div id="destination-section-3" class="destination-section">Section 3</div>
```

```javascript
let nav_items = document.querySelectorAll('#nav .item');

scrollToHref( nav_items[0], {
    duration : 200, 
    easing : 'easeInOutCubic', 
    callback: () => console.log(`Just finished scrolling to Section 1`)
});

scrollToHref( nav_items[1], {
    duration : 300, 
    easing : 'easeInQuart', 
    callback: () => console.log(`Just finished scrolling to Section 2`)
});

scrollToHref( nav_items[2], {
    duration : 400, 
    easing : 'easeOutQuint', 
    callback: () => console.log(`Just finished scrolling to Section 3`)
});
```

#### **Method 3:** 
Set scroll for multiple elements with the same settings and `href` attribute as destination, using function `allScrollTo()`



```html
<div id="nav">
    <a class="item" href="#destination-section-1">Scroll to Section 1</a>
    <a class="item" href="#destination-section-2">Scroll to Section 2</a>
    <a class="item" href="#destination-section-3">Scroll to Section 3</a>
</div>

<div id="destination-section-1" class="destination-section">Section 1</div>
<div id="destination-section-2" class="destination-section">Section 2</div>
<div id="destination-section-3" class="destination-section">Section 3</div>
```

```javascript
let nav_items = document.querySelectorAll('#nav .item');

allScrollTo( nav_items, {
    duration : 300, 
    easing : 'easeInOutCubic', 
    callback: () => console.log(`Just finished scrolling to ${window.pageYOffset}px`)
});
```
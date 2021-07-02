/**
 * 
 * Simple Scroll To Element
 * This library is a helper to use the scrolling code by Pawel Grzybek, on https://pawelgrzybek.com/page-scroll-in-vanilla-javascript/
 * 
 */



scrollTo = function (destination, options = {}) {

    const easings = {
        linear(t) {
          return t;
        },
        easeInQuad(t) {
          return t * t;
        },
        easeOutQuad(t) {
          return t * (2 - t);
        },
        easeInOutQuad(t) {
          return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        },
        easeInCubic(t) {
          return t * t * t;
        },
        easeOutCubic(t) {
          return (--t) * t * t + 1;
        },
        easeInOutCubic(t) {
          return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
        },
        easeInQuart(t) {
          return t * t * t * t;
        },
        easeOutQuart(t) {
          return 1 - (--t) * t * t * t;
        },
        easeInOutQuart(t) {
          return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t;
        },
        easeInQuint(t) {
          return t * t * t * t * t;
        },
        easeOutQuint(t) {
          return 1 + (--t) * t * t * t * t;
        },
        easeInOutQuint(t) {
          return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t;
        }
    };

    const settings = {
        duration : 200, 
        easing : 'linear',
        callback: ''
    };

    const user_settings = options;

    for (const attrname in user_settings) {
      	settings[attrname] = user_settings[attrname];
    }

    const start = window.pageYOffset;
    const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();

    const documentHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
    const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
    const destinationOffset = typeof destination === 'number' ? destination : destination.offsetTop;
    const destinationOffsetToScroll = Math.round(documentHeight - destinationOffset < windowHeight ? documentHeight - windowHeight : destinationOffset);
  
    if ('requestAnimationFrame' in window === false) {
		console.log('requestAnimationFrame false');
		window.scroll(0, destinationOffsetToScroll);
		if (settings.callback) {
			settings.callback();
		}
		return;
    }

  
    function scroll() {
        const now = 'now' in window.performance ? performance.now() : new Date().getTime();
        const time = Math.min(1, ((now - startTime) / settings.duration));
        const timeFunction = easings[settings.easing](time);
        const scrollY = Math.ceil((timeFunction * (destinationOffsetToScroll - start)) + start);

		console.log('--');
        // console.log('start: ' + start);
        // console.log('documentHeight: ' + documentHeight);
        // console.log('windowHeight: ' + windowHeight);
        // console.log('destinationOffset: ' + destinationOffset);
		// console.log('destinationOffsetToScroll: ' + destinationOffsetToScroll);
		console.log('time: ' + time);
		console.log('easing: ' + easings[settings.easing]);
        console.log('timeFunction: ' + timeFunction);
        console.log('scrollY: ' + scrollY);


        window.scroll(0, scrollY);

        if (window.pageYOffset === destinationOffsetToScroll) {
            if (settings.callback) {
                settings.callback();
            }
            return;
        }

        requestAnimationFrame(scroll);
    }

  scroll();

}



scrollToHref = function (nav_item, options = {}) {

    let destination_section = document.querySelector(nav_item.getAttribute('href'));

    nav_item.addEventListener('click', () => {
      	scrollTo( destination_section, options );
    });

}



allScrollTo = function (nav_items, options = {}) {

    nav_items.forEach(function(nav_item){
        scrollToHref( nav_item, options );
    });

}


module.exports = {
    scrollTo, 
    scrollToHref, 
    allScrollTo
};


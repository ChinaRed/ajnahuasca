// sliderFade.js my first plugin in action :)

$(document).ready(function() {
  var $gridCol1 = $('.block > .block--item'),
      $colDouble = $('.block > .block--item__double');
  
// Div heights of the grid.
  
/*  gridHeight($gridCol1, $colDouble);
  
  $(window).resize(function() {
    gridHeight($gridCol1, $colDouble);
  });*/
  
  $('#grid-slider').sliderFade({
    delay: 2000
  });
  
  $('#grid-slider-2').sliderFade();

});

// Div heights of the grid.

function gridHeight(obj, dObj) {
  var $width = obj.outerWidth(true),
      $doubleWidth = ($width * 2);

  obj.css({
    'height': $width
  });
  dObj.css({
    'height': $doubleWidth
  });
}



/*global jQuery */
/*!
 * sliderFade.js 0.1
 *
 * Copyright 2014, Marco Barría
 * In Development and is not advisable to use it in a real job.
 */

;(function($, window, undefined) {

  $.fn.sliderFade = function(options) {

    var s = $.extend({
      image: $(this).find('img'),
      autoPlay: true,
      dot: true,
      bgDots: '#000',
      bgDotsActive: '#fff',
      position: 0,
      delay: 3000
    }, options);

    return this.each(function() {

      var $this = $(this),

        init = function() {
          initStyle();
            if (s.autoPlay) {
              requestInterval(function() {
                next();
              }, s.delay);
            }
        },

        initStyle = function() {
          var dots = '<div class="dots" style="background-color: '+s.bgDots+'; border-radius: 100%; position: relative; float: right; margin: 10px 10px 0 0; width: 5px; height: 5px; z-index:'+(s.image.length + 1)+';"></div>';
          $this.css({
            '-webkit-backface-visibility': 'hidden'
          });
          s.image.css({
            'position': 'absolute',
            '-moz-user-select': 'none',
            '-webkit-user-select': 'none',
            '-ms-user-select': 'none',
            '-webkit-transform': 'scale(1.1) translateZ(0px)',
            'transform': 'scale(1.1) translateZ(0px)',
            '-webkit-transition': 'opacity 800ms ease-in-out',
            'transition': 'opacity 800ms ease-in-out'
          });
          s.image.first().css({
            'opacity': 1
          });
          for (var i = 0; i < s.image.length; i++) {
            s.image.eq(i).css({
              'z-index': (s.image.length - i)
            });
            if (s.dot) {
              $this.prepend(dots).clone(i);
            }
          }
          $this.find($('.dots')).first().css({
            'background-color': s.bgDotsActive
          });
        },

        next = function() {
          oldPosition = s.position;
          s.position = ((s.position + 1) % s.image.length);
          opacityInOut(oldPosition, s.position);
          $this.find($('.dots')).eq(s.position).css({
            'background-color': s.bgDotsActive
          });
          $this.find($('.dots')).not($this.find($('.dots')).eq(s.position)).css({
            'background-color': s.bgDots
          });
        },

        opacityInOut = function(prev, next) {
          s.image.eq(prev).css('opacity', 0);
          s.image.eq(next).css('opacity', 1);
        };

      window.requestAnimFrame = (function() {
        return window.requestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.oRequestAnimationFrame ||
          window.msRequestAnimationFrame ||
          function(callback, element) {
            window.setTimeout(callback, 1000 / 60);
          };
      })();

      window.requestInterval = function(fn, delay) {
        if (!window.requestAnimationFrame &&
          !window.webkitRequestAnimationFrame &&
          !(window.mozRequestAnimationFrame && window.mozCancelRequestAnimationFrame) &&
          !window.oRequestAnimationFrame &&
          !window.msRequestAnimationFrame)
          return window.setInterval(fn, delay);

        var start = new Date().getTime(),
          handle = new Object();

        function loop() {
          var current = new Date().getTime(),
            delta = current - start;

          if (delta >= delay) {
            fn.call();
            start = new Date().getTime();
          }

          handle.value = requestAnimFrame(loop);
        };

        handle.value = requestAnimFrame(loop);
        return handle;
      }

      window.clearRequestInterval = function(handle) {
        window.cancelAnimationFrame ? window.cancelAnimationFrame(handle.value) :
          window.webkitCancelAnimationFrame ? window.webkitCancelAnimationFrame(handle.value) :
          window.webkitCancelRequestAnimationFrame ? window.webkitCancelRequestAnimationFrame(handle.value) :
          window.mozCancelRequestAnimationFrame ? window.mozCancelRequestAnimationFrame(handle.value) :
          window.oCancelRequestAnimationFrame ? window.oCancelRequestAnimationFrame(handle.value) :
          window.msCancelRequestAnimationFrame ? window.msCancelRequestAnimationFrame(handle.value) :
          clearInterval(handle);
      };

      init();

    });
  };
console.log('made it!');
}(jQuery, window));
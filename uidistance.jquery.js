/* ===== uidistance.js ===== */
// A plugin to get position information about an element

(function($) {

	"use strict"

	$.fn.distance = function(side, target) {

		// Get the element data
		var $d = $(document);
		var $w = $(window);
		var $element = this;
		var $e = {
			height: $element.outerHeight(),
			width: $element.outerWidth(),
			offsetTop: $element.offset().top,
			offsetLeft: $element.offset().left,
		}

		// Return from selected method
		var distance = function(side, target) {

			// Element Top and Document Top 
			if (target === 'document-top' && side === 'top') {
				return $e.offsetTop;
			}

			// Element Bottom and Document Bottom
			if (target === 'document-top' && side === 'bottom') {
				return $e.offsetTop + $e.height;
			}

			// Element Top and Document Top
			if (target === 'document-bottom' && side === 'top') {
				return $d.height() - $e.offsetTop;
			}

			// Element Bottom and Document Bottom
			if (target === 'document-bottom' && side === 'bottom') {
				return $d.height() - ($e.offsetTop + $e.height);
			}

			// Element Top and Window Top
			if (target === 'window-top' && side === 'top') {
				return $e.offsetTop - $w.scrollTop();
			}
			
			// Element Bottom and Window Top
			if (target === 'window-top' && side === 'bottom') {
				return ($e.offsetTop + $e.height) - $w.scrollTop();
			}

			// Element Top and Window Bottom
			if (target === 'window-bottom' && side === 'top') {
				return $w.height() - distance('top', 'window-top');
			}

			// Element Bottom and Window Bottom
			if (target === 'window-bottom' && side === 'bottom') {
				return $w.height() - distance('bottom', 'window-top');
			}

			// Element Left and Document Left
			if (target === 'document-left' && side === 'left') {
				return $e.offsetLeft;
			}

			// Element Right and Document Left
			if (target === 'document-left' && side === 'right') {
				return $e.offsetLeft + $e.width;
			}

			// Element Left and Document Right
			if (target === 'document-right' && side === 'left') {
				return $d.width() - $e.offsetLeft;
			}

			// Element Right and Document Right
			if (target === 'document-right' && side === 'right') {
				return $d.width() - ($e.offsetLeft + $e.width);
			}

			// Element Left and Window Left
			if (target === 'window-left' && side === 'left') {
				return $e.offsetLeft - $w.scrollLeft();
			}

			// Element Right and Window Left
			if (target === 'window-left' && side === 'right') {
				return ($e.offsetLeft + $e.width) - $w.scrollLeft();
			}

			// Element Left and Window Right
			if (target === 'window-right' && side === 'left') {
				return $w.width() - distance('left', 'window-left');
			}

			// Element Right and Window Right
			if (target === 'window-right' && side === 'right') {
				return $w.width() - distance('right', 'window-left');
			}

			// Target/Side combination does not exist
			else { console.error('Target/Side combination is invalid: ' + target + ' from element ' + side) }

		}

		// Return the result
		return Math.round(distance(side, target));

	}

})(jQuery);
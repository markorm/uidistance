# uidistance

jQuery plugin to get relative distances from elements to window and document boundaries.

Options

Element top and bottom: window-top, window-bottom, document-top, document-bottom.

Element left and right:	window-left, window-right, document-left, document-right.

Implementation:

$('#element').distance('side', 'target');

e.g 

find the distance from the right of the element to the right of the window.

$('#element').distance('right', 'window-right');

find the distance from the bottom of the element to the bottom of the document.

$('#element').distance('bottom', 'document-bottom');

var SCROLL_OFFSET = 40;
AA_CONFIG.scrollOffset = SCROLL_OFFSET;	
var PAGE_BOTTOM_PADDING = 25;
var ARROW_OPACITY = 0.6;
	
var wnd = $(window);	

function VisibilityInfo(_isVisible) {
	this.isVisible = _isVisible;
}

window.onload = function() { 										
	var titlePage = $(".titlePage");

	var navbar = new Navbar(wnd, titlePage);
	var collages = new Collages(wnd);	
	
	var vocalRegion = new VocalRegion(wnd);
	var guitarRegion = new GuitarRegion(wnd);
	var paintingRegion = new PaintingRegion(wnd);
	var knittingRegion = new KnittingRegion(wnd);	
}
function Navbar(_wnd, _titlePage) {
	var self = this;
	
	var wnd = _wnd;
	var titlePage = _titlePage;
	
	var navbar = $(".navbar");
	var isNavbarVisible = false;
	
	var changeNavbarOpacity = function() {
		var heughtLimit = titlePage.height() - SCROLL_OFFSET;
		if (wnd.scrollTop() >= heughtLimit && !isNavbarVisible) {
			navbar.animate({"opacity": 1}, 500);
			isNavbarVisible = true;
		} else if (wnd.scrollTop() < heughtLimit && isNavbarVisible) {
			navbar.animate({"opacity": 0}, 500);
			isNavbarVisible = false;
		}		
	}
	
	wnd.bind('scroll', function() {
		changeNavbarOpacity();
	});	
	
	changeNavbarOpacity();
}
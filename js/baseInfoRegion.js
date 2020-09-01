function BaseInfoRegion(_wnd) {
	var self = this;
	var wnd = _wnd;
	
	/*This method should be inherited in child classes:
		- getGalery()
		- getInfo()
		- getInfoVisible()
		- getPage()
		- getNextArrow()
		- getPrevArrow()
	*/
	
	var setBlocHeightAndPosition = function() {
		setBlockPosition(self.getGalery(), self.getInfo(), self.getInfoVisible());			
		setPageHeight(self.getPage(), self.getInfo(), self.getGalery());	
		
		setArrowVerticalPosition(self.getPage(), self.getNextArrow());
		setArrowVerticalPosition(self.getPage(), self.getPrevArrow());
	}
	
	wnd.bind('resize', function() {
		setBlocHeightAndPosition();
	});
	
	var slide = function(block1, block2, arrow1, arrow2, left) {
		if (left) {
			block1.animate({"left": -1 * wnd.width()});
			block2.animate({"left": 0});
			arrow1.animate({"opacity": 0});
			arrow2.animate({"opacity": ARROW_OPACITY});
		} else {
			block1.animate({"left": 0});
			block2.animate({"left": wnd.width()});
			arrow1.animate({"opacity": ARROW_OPACITY});
			arrow2.animate({"opacity": 0});
		}
	}

	var setArrowVerticalPosition = function(page, arrow) {
		arrow.css("top", (page.height() / 2) - (arrow.height() / 2));
	}

	var setBlockPosition = function(galery, info, infoVisible) {
		if (infoVisible.isVisible) {
			galery.css("left", wnd.width());
		} else {
			info.css("left", -1 * wnd.width());
		}
	}

	var setPageHeight = function(page, info, galery) {
		var pageHeight = 0;
		info.find(".row").each(function() {
			pageHeight += $(this).height();
		})
		page.css("height", pageHeight + PAGE_BOTTOM_PADDING);
					
		var galleryTitleHeight = galery.find(".titleRow").height();
		galery.find(".contentRow").css("height", pageHeight - galleryTitleHeight);
	}

	var addPageHoverEvent = function(page, visibilityInfo, next, prev) {
		page.hover(function() {
			if (visibilityInfo.isVisible) {
				next.animate({"opacity": ARROW_OPACITY});
				prev.animate({"opacity": 0});
			} else {
				prev.animate({"opacity": ARROW_OPACITY});
				next.animate({"opacity": 0});
			}
		}, function() {
			next.animate({"opacity": 0});
			prev.animate({"opacity": 0});
		});
	}

	var addArrowClickHandler = function(arrow, info, galery, next, prev, infoVisible) {
		var isNextArrowClicked = (arrow == next);

		arrow.click(function() {
			slide(info, galery, next, prev, isNextArrowClicked);
			infoVisible.isVisible = !isNextArrowClicked;
		});
	}
	
	setBlocHeightAndPosition();
	
	addPageHoverEvent(self.getPage(), self.getInfoVisible(), self.getNextArrow(), self.getPrevArrow());
	addArrowClickHandler(self.getNextArrow(), self.getInfo(), self.getGalery(), self.getNextArrow(), self.getPrevArrow(), self.getInfoVisible());
	addArrowClickHandler(self.getPrevArrow(), self.getInfo(), self.getGalery(), self.getNextArrow(), self.getPrevArrow(), self.getInfoVisible());	
}
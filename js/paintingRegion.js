function PaintingRegion(_wnd) {
	var self = this;
	
	var paintingGalery = $("#paintingGalery");
	var paintingInfo = $("#paintingInfo");
	
	var paintNext = $("#paintingNextArrow");				
	var paintPrev = $("#paintingPrevArrow");
	var paintingPage = $(".paintingPage");
	
	var paintingInfoVisible = new VisibilityInfo(true);
	
	self.getGalery = function() {
		return paintingGalery;
	}
	
	self.getInfo = function() {
		return paintingInfo;
	}
	
	self.getInfoVisible = function() {
		return paintingInfoVisible;
	}
	
	self.getPage = function() {
		return paintingPage;
	}
	
	self.getNextArrow = function() {
		return paintNext;
	}
	
	self.getPrevArrow = function() {
		return paintPrev;
	}
	
	BaseInfoRegion.call(this, _wnd);
}
function KnittingRegion(_wnd) {
	var self = this;
	
	var knittingGalery = $("#knittingGalery");
	var knittingInfo = $("#knittingInfo");
	
	var knitNext = $("#knittingNextArrow");				
	var knitPrev = $("#knittingPrevArrow");
	var knittingPage = $(".knittingPage");
	
	var knittingInfoVisible = new VisibilityInfo(true);
	
	self.getGalery = function() {
		return knittingGalery;
	}
	
	self.getInfo = function() {
		return knittingInfo;
	}
	
	self.getInfoVisible = function() {
		return knittingInfoVisible;
	}
	
	self.getPage = function() {
		return knittingPage;
	}
	
	self.getNextArrow = function() {
		return knitNext;
	}
	
	self.getPrevArrow = function() {
		return knitPrev;
	}
	
	BaseInfoRegion.call(this, _wnd);
}
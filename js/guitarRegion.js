function GuitarRegion(_wnd) {
	var self = this;
	
	var guitarGalery = $("#guitarGalery");
	var guitarInfo = $("#guitarInfo");
	
	var guitNext = $("#guitarNextArrow");				
	var guitPrev = $("#guitarPrevArrow");
	var guitarPage = $(".guitarPage");
	
	var guitarInfoVisible = new VisibilityInfo(true);
	
	self.getGalery = function() {
		return guitarGalery;
	}
	
	self.getInfo = function() {
		return guitarInfo;
	}
	
	self.getInfoVisible = function() {
		return guitarInfoVisible;
	}
	
	self.getPage = function() {
		return guitarPage;
	}
	
	self.getNextArrow = function() {
		return guitNext;
	}
	
	self.getPrevArrow = function() {
		return guitPrev;
	}
	
	BaseInfoRegion.call(this, _wnd);
}
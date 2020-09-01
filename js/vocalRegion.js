function VocalRegion(_wnd) {
	var self = this;
	
	var vocalGalery = $("#vocalGalery");
	var vocalInfo = $("#vocalInfo");
	
	var vocNext = $("#vocalNextArrow");				
	var vocPrev = $("#vocalPrevArrow");
	var vocalPage = $(".vocalPage");
	
	var vocalInfoVisible = new VisibilityInfo(true);
	
	self.getGalery = function() {
		return vocalGalery;
	}
	
	self.getInfo = function() {
		return vocalInfo;
	}
	
	self.getInfoVisible = function() {
		return vocalInfoVisible;
	}
	
	self.getPage = function() {
		return vocalPage;
	}
	
	self.getNextArrow = function() {
		return vocNext;
	}
	
	self.getPrevArrow = function() {
		return vocPrev;
	}
	
	BaseInfoRegion.call(this, _wnd);
}
function PhotoLayer(_wnd) {
	var self = this;
	
	var wnd = _wnd;
	var photoLayer = $(".photoLayer");
	var largePhoto = photoLayer.find(".largePhoto");
	var closePhoto = $(".closePhoto");
	
	self.showPhotoLayer = function(clickedImage) {
		largePhoto.attr("src", clickedImage.attr("src"));	
		largePhoto.css("height", "auto");
		largePhoto.css("width", "auto");
			
		photoLayer.css("display","block");
		adjustPhotoSize();
		photoLayer.animate({opacity: 1});				
	}
				
	var adjustPhotoSize = function() {
		var wndHeight = photoLayer.height();
		var wndWidth = wnd.width();				
				
		var photoHeight = largePhoto.height();
		var photoWidth = largePhoto.width();
					
		var newPhotoWidth = photoHeight;
		var newPhotoHeight = photoWidth;
					
		newPhotoWidth = wndWidth * 0.8;
		newPhotoHeight = photoHeight * newPhotoWidth / photoWidth;
						
		if (newPhotoHeight >= wndHeight * 0.8) {
			newPhotoHeight = wndHeight * 0.8;
			newPhotoWidth = photoWidth * newPhotoHeight / photoHeight;	
		}
					
		largePhoto.height(newPhotoHeight);
		largePhoto.width(newPhotoWidth);
	}
				
	var hidePhototLayer = function() {
		photoLayer.animate({opacity: 0}, function() {photoLayer.css("display","none");	});				
	}
		
	wnd.bind('resize', function() {
		adjustPhotoSize();
	})	

	closePhoto.click(function() {
		hidePhototLayer();
	})
}
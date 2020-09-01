function Collages(_wnd) {
	var self = this;
	
	var wnd = _wnd;
	
	var collage = $(".Collage");
	var collageImages = collage.find("img");
	
	var photoLayer = new PhotoLayer(wnd);
	
	var resizeTimer = null;						
				
	wnd.bind('resize', function() {
		resizeCollage();
	})

	var resizeCollage = function() {
		if (resizeTimer) clearTimeout(resizeTimer);
		resizeTimer = setTimeout(collageInit, 200);
	}
	
	var collageInit = function() {
		collage.removeWhitespace().collagePlus(
			{
				'allowPartialLastRow' : true,						
				'targetHeight'  : 250
			}
		);
	};

	collageImages.each(function() {
		$(this).click(function() {
			photoLayer.showPhotoLayer($(this));					
		});
	});
		
	collageInit();	
}
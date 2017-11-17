function configureGestures(contentId, previousPage, nextPage){
		var myElement = document.getElementById(contentId);
		
		var mc = new Hammer(myElement);
		mc.get('pinch').set({ enable: true });
		mc.get('swipe').set({ direction : Hammer.DIRECTION_ALL });
		mc.on("pinchin", function(ev) {
			var currentFS = myElement.style.fontSize;
			var value=100;
			if(currentFS==""){
				value = value/1.01;
			}else{
				value = Number(currentFS.substring(0, 3))/1.01;
			}
			if(value<100){
				value=100;
			}
			myElement.style.fontSize=value+"%";
		});
		mc.on("pinchout", function(ev) {
			var currentFS = myElement.style.fontSize;
			var value=100;
			if(currentFS==""){
				value = value*1.01;
			}else{
				value = Number(currentFS.substring(0, 3))*1.01;
			}
			if(value>200){
				value=200;
			}
			myElement.style.fontSize=value+"%";
		});
		myElement.style.touchAction="pan-y";


		mc.on("swiperight", function(ev) {
			window.location.replace(previousPage);
		});
		mc.on("swipeleft", function(ev) {
			window.location.replace(nextPage);
		});
	}
	
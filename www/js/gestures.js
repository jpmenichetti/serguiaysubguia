
function configureGestures(contentId, previousPage, nextPage){
		var myElement = document.getElementById(contentId);
		
		var mc = new Hammer(myElement
			,{
				preventDefault: false
			//touchAction: auto
			//recognizers: [
			//	[Hammer.Pan,{direction: Hammer.DIRECTION_HORIZONTAL}]
		}
		);
		mc.get('rotate').set({ enable: false });
		
		mc.get('swipe').set({ direction : Hammer.DIRECTION_HORIZONTAL });
		mc.get('pinch').set({ enable: false });
		//mc.get('pinch').set({ enable: true });
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
		//myElement.style.touchAction="pan-y";
		//myElement.style.touchAction="auto";

		/*mc.on("swiperight", function(ev) {
			window.location.replace(previousPage);
		});
		mc.on("swipeleft", function(ev) {
			window.location.replace(nextPage);
		});
		mc.on("swipeup",function(ev) {
			window.scrollBy(0,100);
		});
		mc.on("swipedown",function(ev) {
			window.scrollBy(0,-100);
		});*/
		mc.on("swipe", function(ev){
			//alert(ev.direction);
			event.preventDefault();
			if(ev.direction == Hammer.DIRECTION_LEFT)
			{
				window.location.replace(nextPage);
			}
			else if(ev.direction == Hammer.DIRECTION_RIGHT)
			{
				window.location.replace(previousPage);
			}
			else
			{
				alert(ev.direction);
			}
		});
	}
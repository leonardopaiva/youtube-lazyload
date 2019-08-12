var youtube = document.querySelectorAll( ".youtube-video" );

class E4MYoutubeVideo {
	constructor(name) {
		this.init();
	}

	init() {
		for (var i = 0; i < youtube.length; i++) {
 
			// thumbnail image source.
			// sddefault.jpg for sd quality
			// maxresdefault.jpg for max quality
			var source = "https://img.youtube.com/vi/"+ youtube[i].dataset.embed +"/sddefault.jpg"; 

			this.loadThumbImage(i, source);

			this.initImageEvent(i);
		}
	}

	loadThumbImage(i, source) {
		// Load the image asynchronously
		var image = new Image();
		image.src = source;
		image.addEventListener( "load", function() {
			youtube[ i ].appendChild( image );
		}( i ) );
	}

	initImageEvent(i) {
		youtube[i].addEventListener( "click", function() {
 
			var iframe = document.createElement( "iframe" );
		
				iframe.setAttribute( "frameborder", "0" );
				iframe.setAttribute( "allowfullscreen", "" );
				iframe.setAttribute( "allow", "autoplay;" );
				iframe.setAttribute( "src", "https://www.youtube.com/embed/"+ this.dataset.embed +"?rel=0&showinfo=0&autoplay=1" );
		
				this.innerHTML = "";
				this.appendChild( iframe );
		} );
	}
}

const E4MYoutubeVideo = new E4MYoutubeVideo();
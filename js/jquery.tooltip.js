$.fn.betterTooltip = function() {

// setting up defaults for the function

	var defaults = {
		speed: 200,
		delay: 300
	};
	var options = $.extend(defaults, options);

// function to generate the tooltip
	getTip = function() {
		var tTip = 
		'<div class="tooltip">' +
			'<div class="innerT"' +
			'</div>' +
		'</div>';
		return tTip;
	}
	$("body").prepend(getTip());

	$(this).each(function(){
	 
	    var $this = $(this);
	    var tip = $('.tooltip');
	    var tipInner = $('.tooltip .innerT');
	     
	    var tTitle = (this.title);
	    var htmlTitle = $this.html().trim();
	    this.title = "";
	     
	    var offset = $(this).offset();
	    var tLeft = offset.left;
	    var tTop = offset.top;
	    var tWidth = $this.width();
	    var tHeight = $this.height();
	    var $doc = $(document);
	    // var $win, dTop, dBottom;
	    // $win = $(window);
     //    offset = $this.offset();
     //    dTop = offset.top - $doc.scrollTop();
     //    dBottom = $win.height() - dTop - $this.height();
        // dLeft = offset.left - $doc.scrollLeft(),
        // dRight = $win.width() - dLeft - $this.width();

	    /* Mouse over and out functions*/
	        $this.hover(function() {
	        	dTop = $this.offset().top - $(document).scrollTop();
	            tipInner.html(htmlTitle);
              	if (dTop < 60) {
              		setTip(tTop+(tHeight*2.5), tLeft);
              	} else if (dTop > 60) {
      				setTip(tTop, tLeft);	        		
              	}
	            setTimer();
	        }, 
	        function() {
	            stopTimer();
	            tip.hide();
	            // tip.remove();
	        }
	    );
	    setTimer = function() {
	    	$this.showTipTimer = setInterval("showTip()", defaults.delay);
	    }

	    stopTimer = function() {
	    	clearInterval($this.showTipTimer);
	    }

	   	// position the tool tip 

	   	setTip = function(top,left) {
	   		var topOffset = tip.height();
	   		var xTip = (left-($this.width()/2)) + "px";
	   		var yTip = (top-topOffset-60) + "px";
	   		tip.css({'top' : yTip, 'left' : xTip});
	   	}

	   	showTip = function() {
	   		stopTimer();
	   		tip.fadeIn(defaults.speed);
	   	}
	});

};



// activates the tooltip
$(document).ready(function() {
	$('.tTip').betterTooltip();
});
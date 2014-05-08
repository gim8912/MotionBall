$(document).ready(function(){
	console.log("ready");	


	function handleMotionEvent(event) {

	    var x = event.accelerationIncludingGravity.x;
	    var y = event.accelerationIncludingGravity.y;
	    var z = event.accelerationIncludingGravity.z;
	    var flag = 1;
	    var shakepoint = 0;


		//$("#xVal").html(x);
		//$("#yVal").html(y);
		//$("#zVal").html(z);
		$("#sVal").html(shakepoint);

		var maxX = window.innerWidth - $("#ball").width();
		var maxY = window.innerHeight - $("#ball").height();
		var factor = 3;
	
		x = Math.round(x); // 1이하 소숫점 버림.
		
		//var orgX = $("#ball").css("left"); 
		orgX = parseFloat(orgX); // 스트링을 숫자로 변환
		var newX = orgX + x;
		newX = Math.max(0, newX);
		newX = Math.min(maxX, newX);


		//$("#ball").css("left", Math.round(newX));

		y = Math.round(y );
		var orgY = $("#ball").css("top");
		orgY = parseFloat(orgY);
		var newY = orgY - y;
		newY = Math.max(0, newY);
		newY = Math.min(maxY, newY);
		
		if(x > 6 && flag === -1){
			flag = 1;
			shakepoint++;
		}
		else if(x < -6 && flag === 1)
		{
			flag = -1;
			shakepoint++;
		}

		//$("#ball").css("top", Math.round(newY));
		
	}
	


	window.addEventListener("devicemotion", handleMotionEvent, true);


	//$("#ball").css("left", 30);
	//$("#ball").css("top", 30);
});

$(document).ready(function(){
	console.log("ready");
	
	var temp_x = 0;
	var flag = 1;
	var shakepoint = 0;
	
	var shake = function(){
		
		if(temp_x > 2){
			shakepoint++;
			flag = 1;
		}
		else if(temp_x < -2)
		{
			shakepoint++;
			flag = -1;
		}
	}
	
	function handleMotionEvent(event) {
		
	

		var x = event.accelerationIncludingGravity.x; // 스마트폰 센서 값 받아오는 명령어 x값
		var y = event.accelerationIncludingGravity.y; // y값
		var z = event.accelerationIncludingGravity.z; // z값
		x = Math.round(x); // 1이하 소숫점 버림.
		temp_x = x;
		
		$("#xVal").html(Math.round(x));
		$("#sVal").html(temp_x);

		var maxX = window.innerWidth - $("#ball").width();
		var maxY = window.innerHeight - $("#ball").height();
		var factor = 3;
	
		
		
		//var orgX = $("#ball").css("left"); 
		
		orgX = parseFloat(orgX); // 스트링을 숫자로 변환
		var newX = orgX + x;
		newX = Math.max(0, newX);
		newX = Math.min(maxX, newX);
		//$("#ball").css("left", Math.round(newX));

		var orgY = $("#ball").css("top");
		orgY = parseFloat(orgY);
		var newY = orgY - y;
		newY = Math.max(0, newY);
		newY = Math.min(maxY, newY);
		//$("#ball").css("top", Math.round(newY));
		
		
		
	}
	


	window.addEventListener("devicemotion", handleMotionEvent, true);
	shake();

	//$("#ball").css("left", 30);
	//$("#ball").css("top", 30);
});

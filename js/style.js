window.onload = function(){
	var disc_play = document.getElementById("disc_play");
	var audio = document.getElementsByTagName("audio")[0];
	var page1 = document.getElementById("page1");
	var page2 = document.getElementById("page2");
	var page3 = document.getElementById("page3");
	/*唱片的点击事件*/
	/*disc_play.onclick = function(){
		if(audio.paused){
			audio.play();
			this.style.animationPlayState = "running";
		}else{
			audio.pause();
			this.style.animationPlayState = "paused";
		}
	}*/

	disc_play.addEventListener("ended",function(){
		this.style.animationPlayState = "paused";
	},false);
	disc_play.addEventListener("touchstart",function(){
		if(audio.paused){
			audio.play();
			this.style.animationPlayState = "running";
		}else{
			audio.pause();
			this.style.animationPlayState = "paused";
		}
	},false);

	/*页面跳转*/
	page1.addEventListener("click",function(){
		page1.style.display = "none";
		page2.style.display = "block";
		page3.style.display = "block";
		page3.style.top = "100%";
		setTimeout(function(){
			page2.setAttribute("class","page fadeout");
			page3.setAttribute("class","page fadein");
		},5000);	
		
	},false);
}
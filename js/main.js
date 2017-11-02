function openVideo(){
	$("#videoBox").addClass("booth");
	var video = document.getElementById('video2'),
	vendorUrl = window.URL || window.webkitURL;

	

	navigator.getMedia = navigator.getUserMedia || 
						 navigator.webkitGetUserMedia ||
						 navigator.mozGetUserMedia ||
						 navigator.msGetUserMedia;

	//Capture Video
	navigator.getMedia({
		video:true,
		audio:false
	},function(stream){
		console.log(stream);
		video.src = vendorUrl.createObjectURL(stream);
		video.play();
	},function(error){
		//An error occured
		//console.log(error);
		//hmm
	});
}
function closeVideo(){
	/*
	var video = document.getElementById('video2');
	video.src = "";
	$("#videoBox").removeClass("booth"); */
	$("#videoBox").removeClass("booth")
	var video = document.getElementById('video2'),
	vendorUrl = window.URL || window.webkitURL;

	

	navigator.getMedia = navigator.getUserMedia || 
						 navigator.webkitGetUserMedia ||
						 navigator.mozGetUserMedia ||
						 navigator.msGetUserMedia;

	//Capture Video
	navigator.getMedia({
		video:false,
		audio:false
	},function(stream){
		console.log(stream);
		video.src = "";
		video.stop();
	},function(error){
		//An error occured
		//console.log(error);
		//hmm
	});
		
}

//Google login
function onSignIn(googleUser){
	var profile = googleUser.getBasicProfile();
	$(".g-signin2").css("display","none");
	$(".data").css("display", "block");
	$("#pic").attr('src', profile.getImageUrl());
	$("#name").text(profile.getName());
	$("#email").text(profile.getEmail());
}

function signOut(){
	var auth2 = gapi.auth2.getAuthInstance();
	auth2.signOut().then(function(){
		alert("You have been successfully signed out.")
		$(".g-signin2").css("display","block");
		$(".data").css("display", "none");
	});
}



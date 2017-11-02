(function(){
	var video = document.getElementById('video'),
		vendorUrl = window.URL || window.webkitURL;

	navigator.getMedia = navigator.mediaDevices.getUserMedia || 
						 navigator.mediaDevices.webkitGetUserMedia ||
						 navigator.mediaDevices.mozGetUserMedia ||
						 navigator.mediaDevices.msGetUserMedia;

	//Capture Video
	navigator.getMedia({
		video:true,
		audio:false
	},function(stream){
		video.src = vendorUrl.createObjectURL(stream);
		video.play();
	},function(error){
		//An error occured
		//console.log(error);
	});

})();

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



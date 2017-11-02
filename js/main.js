

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


//Simple Video call
navigator.webkitGetUserMedia({video:true, audio:true}, function(stream){
	//Simple Chat
	var Peer = require ('simple-peer')
	var peer = new Peer({
		initiator: location.hash === '#init',
		trickle: false,
		stream: stream
	})


	peer.on('signal', function(data){
		document.getElementById('yourId').value = JSON.stringify(data)
	})

	document.getElementById('connect').addEventListener('click', function(){
		var otherId = JSON.parse(document.getElementById('otherId').value)
		peer.signal(otherId)
	})

	document.getElementById('send').addEventListener('click', function(){
		var yourMessage = document.getElementById('yourMessage').value
		peer.send(yourMessage)
	})

	peer.on('data', function(data){
		document.getElementById('messages').textContent += data + '\n'
	})

	peer.on('stream', function(stream){
		var video = document.createElement('video')
		document.body.appendChild(video)

		video.src = window.URL.createObjectURL(stream)
		video.play()
	})

}, function(err){
	console.error(err);
}



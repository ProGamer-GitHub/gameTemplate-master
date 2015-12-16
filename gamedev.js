$( document ).ready(function() {

	$("#goRight1").click(function() {
		$("#exploreBody").css("background-image", "url('img/Battle2E.png')");
		$("#goRight1").hide();
		$("#goBack").hide();
		$("#goLeft1").hide();
		$("#goRight-Straight1").show();
		$("#goRight-Right2").show();
		$("#goRight-Straight3").show();
	});

	$("#goRight-Straight1").click(function() {
		$("#exploreBody").css("background-image", "url('img/Battle6.png')");
		$("#goRight-Straight1").hide();
		$("#goRight-Straight2").show();
		$("#goRight-Right2").hide();
		$("#goBack").hide();
		$("#goRight1").hide();
		$("#goLeft1").hide();
	});

	$("#goRight-Straight2").click(function() {
		$("#exploreBody").css("background-image", "url('img/exploreRight3.jpg')");
		$("#goRight-Straight2").hide();
		$("#goRight-Straight3").show();
		$("#goRight-Straight1").hide();
	});

	$("#goRight-Straight3").click(function() {
		$("#exploreBody").css("background-image", "url('img/Battle6.png')");
		$("#goRight-Right2").hide();
		$("#goBack").hide();
		$("#goRight1").hide();
		$("#goLeft1").hide();
	});

	$("#goRight-Right2").click(function() {
		$("#exploreBody").css("background-image", "url('img/Battle2S.png')");
		$("#goRight-Right2").hide();
		$("#goBack").hide();
		$("#goRight1").hide();
		$("#goRight-Straight1").hide();
		$("#goLeft1").hide();
		$("#goRight-Straight3").show();
	});


	$("#goLeft1").click(function() {
		$("#exploreBody").css("background-image", "url('img/Battle2S.png')");
		$("#goLeft1").hide();
		$("#goBack").hide();
		$("#goRight-Straight3").show();
		$("#goRight1").hide();
		$("#goRight-Straight1").hide();
	});

	$("#goRight-Straight1").click(function() {
		$("#exploreBody").css("background-image", "url('img/Battle6.png')");
		$("#goLeft2").hide();
		$("#goLeft3").show();
		$("#goRight-Straight1").hide();
	});


	$("#goBack").click(function() {
		$("#exploreBody").css("background-image", "url('img/exploreHome1.jpg')");
		$("#goBack").hide();
		$("#goRight1").show();
		$("#goLeft1").show();
		$("#goRight-Straight1").hide();
	});



});
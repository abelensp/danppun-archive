function change_page(link) {
	if (link == "abt") {
		$("#div-abt").show();
		$("#div-bsh").hide();
		$("#div-game").hide();
		$("#div-rvw").hide();
		$("#div-shr").hide();
		$(".about").show();
		$(".games").hide();
		$(".bookshelf").hide();
		$(".reviews").hide();
		$(".shrines").hide();
	} else if (link == 'bsh') {
		$("#div-abt").hide();
		$("#div-game").hide();
		$("#div-bsh").show();
		$("#div-rvw").hide();
		$("#div-shr").hide();
		$(".about").hide();
		$(".games").hide();
		$(".bookshelf").show();
		$(".reviews").hide();
		$(".shrines").hide();
	} else if (link == 'game') {
		$("#div-abt").hide();
		$("#div-bsh").hide();
		$("#div-game").show();
		$("#div-rvw").hide();
		$("#div-shr").hide();
		$(".about").hide();
		$(".bookshelf").hide();
		$(".games").show();
		$(".reviews").hide();
		$(".shrines").hide();
	}  else if (link == 'rvw') {
		$("#div-abt").hide();
		$("#div-bsh").hide();
		$("#div-game").hide();
		$("#div-shr").show();
		$("#div-rvw").show();
		$(".about").hide();
		$(".bookshelf").hide();
		$(".games").hide();
		$(".reviews").show();
		$(".shrines").hide();
	}else if (link == 'shr') {
		$("#div-abt").hide();
		$("#div-bsh").hide();
		$("#div-game").hide();
		$("#div-rvw").hide();
		$("#div-shr").show();
		$(".about").hide();
		$(".bookshelf").hide();
		$(".games").hide();
		$(".reviews").hide();
		$(".shrines").show();
	}else {
		console.log("Tried to activate unknown language " + link);
	}
}
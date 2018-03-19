function auCentieme(nombre){
  return Math.round(100*nombre)/100;
}

$("form").on("submit", function(e) {
	e.preventDefault();
	if (jQuery.isNumeric($("input:first").val())) {
		$("input:last").val(auCentieme(parseInt($("input:first").val()) / 6.5) + " Euros");
		$("input:first").val($("input:first").val() + " Francs");
	}
	else if ($("input:first").val().match("[0-9]+\ Francs")) {
		$("input:last").val(auCentieme(parseInt($("input:first").val().replace("Francs", "")) / 6.5) + " Euros");
		$("input:first").val($("input:first").val());
	}
	else {
		console.log("Ce n'est pas un chiffre !");
	}
})
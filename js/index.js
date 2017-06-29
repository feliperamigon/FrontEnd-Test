$(document).ready(function(){

// Makes the div fullpage (Slider)
	$("#wrapper").fullpage();
// Adding Item to the shopping cart
	$(".glyphicon-shopping-cart").click(function(){
		var plant = $(this).siblings("span.plant").text();
		var price = $(this).siblings("span.price").text();
		$(".shopping-cart").append("<tr><td>"+plant+"</td><td>"+price+"</td><tr>");
		console.log(plant+" el nombre de la planta");
	});
// Add a new plant
	$(".glyphicon-plus").click(function(){
		$("#cart").hide();
		$("#add-new-plant").fadeIn();
	});
	$("#add-plant").click(function(){
		$("#add-new-plant").fadeOut("slow");
		$("#cart").fadeIn();
	});
});
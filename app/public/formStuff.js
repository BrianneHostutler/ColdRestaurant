$("#submit").on("click", function(){

	// Here we grab the form elements
	var newReservation = {
		customerName: $('#reserve_name').val().trim(),
		phoneNumber: $('#reserve_phone').val().trim(),
		customerEmail: $('#reserve_email').val().trim(),
	};

	console.log(newReservation);

$.post(currentURL + "/api/tables.html", newReservation,
function(data){

	// If a table is available... tell user they are booked.
	if(data == true){
		alert("Yay! You are officially booked!")
	}

	// If a table is available... tell user they on the waiting list.
	if(data == false){
		alert("Sorry you are on the wait list")
	}

	// Clear the form when submitting
	$('#reserve_name').val("");
	$('#reserve_phone').val("");
	$('#reserve_email').val("");
	$('#reserve_uniqueID').val("");
});	

return false;	

});
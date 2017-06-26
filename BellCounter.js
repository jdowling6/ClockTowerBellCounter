function BellCounter() {

	this.countBells = countBells;
	this.validateInput = validateInput;

	function countBells(startTime, endTime) {
		if (validateInput(startTime, endTime)) {

			var startInput = startTime.split(':'),
				endInput = endTime.split(':'),
				startHours = parseInt(startInput[0]),
				startMinutes = parseInt(startInput[1]),
				endHours = parseInt(endInput[0]),
				endMinutes = parseInt(endInput[1]);

			return 1;

		} else {
			console.log('Error in countBells().');
		}
	}

	function validateInput(startTime, endTime) {
		var startInput = startTime.split(':'),
			endInput = endTime.split(':'),
			startHours = parseInt(startInput[0]),
			startMinutes = parseInt(startInput[1]),
			endHours = parseInt(endInput[0]),
			endMinutes = parseInt(endInput[1]);

		return (
			startTime.length === 5 &&
			endTime.length === 5 &&
			startInput.length === 2 &&
			endInput.length === 2 &&
			startMinutes != NaN &&
			startHours != NaN &&
			endMinutes != NaN &&
			endHours != NaN &&
			startHours >= 0 &&
			startHours < 24 &&
			startMinutes >= 0 &&
			startMinutes < 60 &&
			endHours >= 0 &&
			endHours < 24 &&
			endMinutes >= 0 &&
			endMinutes < 60
		)

	}

}

var bc = new BellCounter();

$('#calculateButton').click(function() {
	var startTime = $('#startTime').val(),
		endTime = $('#endTime').val(),
		valid = bc.validateInput(startTime, endTime);
	if (valid) {
		bc.countBells(startTime, endTime);
	} else {
		alert('Please enter a valid time (hh:mm) between 00:00 and 23:59');
	}
});

function BellCounter() {

	this.countBells = countBells;
	this.validateInput = validateInput;
	this.incrementHour = incrementHour;
	this.getTolls = getTolls;

	function countBells(startTime, endTime) {
		if (validateInput(startTime, endTime)) {

			var startInput = startTime.split(':'),
				endInput = endTime.split(':'),
				startHours = parseInt(startInput[0]),
				startMinutes = parseInt(startInput[1]),
				endHours = parseInt(endInput[0]),
				endMinutes = parseInt(endInput[1]);

			var sumToll = 0,
				iStartHour = startHours;

				if(startHours === endHours) {
				
					for(var i=0; i<=24; i++) {
						sumToll += getTolls(iStartHour);
						iStartHour = incrementHour(iStartHour);
					}

				} else {
					while(iStartHour !== endHours) {
						sumToll += getTolls(iStartHour);
						iStartHour = incrementHour(iStartHour);
					}

					sumToll += getTolls(endHours);
				}

				if(startMinutes !== 0) {
				 	sumToll -= getTolls(startHours);
				}

				return sumToll;
		} else {
			console.log('Error in countBells()');
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

	function incrementHour(hour) {
		if(hour === 23) {
			return 0;
		} else {
			if(hour > 23) {
				console.log('Error in incrementHour()');
			} else {
				return hour + 1;
			}
		}
	}

	function getTolls(hour) {
		if(hour > 12) {
			if( hour > 23 ) {
				console.log('Error in getTolls()');
			} else {
				return hour - 12
			}
		} else {
			if(hour === 0) {
				return 12;
			} else {
				return hour;
			}
		}
	}
}

(function() {
	var bc = new BellCounter();

	$('#calculateButton').click(function() {
		var startTime = $('#startTime').val(),
			endTime = $('#endTime').val(),
			valid = bc.validateInput(startTime, endTime);
		if (valid) {
			alert('Number of times the bell tolled is ' +
				bc.countBells(startTime, endTime) + '!');
		} else {
			alert('Please enter a valid time (hh:mm) between 00:00 and 23:59');
		}
	});
})();

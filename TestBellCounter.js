(function(){
	'use strict';

	function TestBellCounter() {

		function testCountBells() {
			var isPassing = true;

			//TC1 Treat same times as 24 hour passing
			//If either time is on the hour, count the tolls for that hour

			//TC1 1:00, 1:00 => 157 = (1+2+3+4+5+6+7+8+9+10+11+12+1+2+3+4+5+6+7+8+9+10+11+12+1)
			//TC2 9:00, 9:00 => = 165 = (9+10+11+12+1+2+3+4+5+6+7+8+9+10+11+12+1+2+3+4+5+6+7+8+9)
			//TC3 11:00, 11:00 => 167 = (11+12+1+2+3+4+5+6+7+8+9+10+11+12+1+2+3+4+5+6+7+8+9+10+11)
			//TC4 2:00, 3:00 => 5
			//TC5 14:00, 15:00 => 5
			//TC6 14:23, 15:42 => 3
			//TC7 23:00, 1:00 => 24

			//var bc = new BellCounter();

			//bc.countBells('11:00', '11:00');


			return isPassing;
		}

		function testValidateInput() {

		}

	}

})();

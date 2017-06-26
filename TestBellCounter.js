(function(){
	'use strict';

	function TestBellCounter() {

		function testCountBells() {
			var bc = new BellCounter(),
				isPassing = true;

			isPassing &= (157 === bc.countBells('1:00', '1:00'));
			isPassing &= (165 === bc.countBells('9:00', '9:00'));
			isPassing &= (167 === bc.countBells('11:00', '11:00'));
			isPassing &= (5 === bc.countBells('2:00', '3:00'));
			isPassing &= (5 === bc.countBells('14:00', '15:00'));
			isPassing &= (3 === bc.countBells('14:23', '15:42'));
			isPassing &= (24 === bc.countBells('23:00', '1:00'));

			return isPassing;
		}

		function testValidateInput() {
			var bc = new BellCounter(),
				isPassing = true;

			isPassing &= !bc.validateInput('1', '0:00');
			isPassing &= !bc.validateInput('0:00', '1');
			isPassing &= !bc.validateInput('0:0:0', '00:00');
			isPassing &= !bc.validateInput('00:00', '0:0:0');
			isPassing &= !bc.validateInput('00:aa', '00:00');
			isPassing &= !bc.validateInput('aa:00', '00:00');
			isPassing &= !bc.validateInput('00:00', '00:aa');
			isPassing &= !bc.validateInput('00:00', 'aa:00');
			isPassing &= !bc.validateInput('-1:00', '00:00');
			isPassing &= !bc.validateInput('24:00', '00:00');
			isPassing &= !bc.validateInput('00:-1', '00:00');
			isPassing &= !bc.validateInput('00:60', '00:00');
			isPassing &= !bc.validateInput('00:00', '-1:00');
			isPassing &= !bc.validateInput('00:00', '24:00');
			isPassing &= !bc.validateInput('00:00', '00:-1');
			isPassing &= !bc.validateInput('00:00', '00:60');

			return isPassing;
		}

	}

})();

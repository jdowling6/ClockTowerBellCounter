function TestBellCounter() {

	this.testCountBells = testCountBells;
	this.testValidateInput = testValidateInput;
	this.testIncrementHour = testIncrementHour;
	this.testGetTolls = testGetTolls;

	function testCountBells() {
		var bc = new BellCounter();
			console.log("TC1 " + (bc.countBells('2:00', '3:00')));
			console.log("TC2: " + (bc.countBells('14:00', '15:00')));
			console.log("TC3: " + (bc.countBells('14:23', '15:42')));
			console.log("TC4: " + (bc.countBells('23:00', '1:00')));
			console.log("TC5: " + (bc.countBells('1:00', '1:00')));
			console.log("TC6: " + (bc.countBells('9:00', '9:00')));
			console.log("TC7: " + (bc.countBells('11:00', '11:00')));
			console.log("TC8: " + bc.countBells('11:01', '11:01'));
			console.log("TC9: " + bc.countBells('1:01', '1:00'));

		return (
			(5 === bc.countBells('2:00', '3:00')) &&
			(5 === bc.countBells('14:00', '15:00')) &&
			(3 === bc.countBells('14:23', '15:42')) &&
			(24 === bc.countBells('23:00', '1:00')) &&
			(157 === bc.countBells('1:00', '1:00')) &&
			(165 === bc.countBells('9:00', '9:00')) &&
			(167 === bc.countBells('11:00', '11:00')) &&
			(156 === bc.countBells('11:01', '11:01')) &&
			(156 === bc.countBells('01:01', '01:00'))
		);
	}

	function testValidateInput() {
		var bc = new BellCounter();
		return (
			!bc.validateInput('1', '0:00') &&
			!bc.validateInput('0:00', '1') &&
			!bc.validateInput('0:0:0', '00:00') &&
			!bc.validateInput('00:00', '0:0:0') &&
			!bc.validateInput('00:aa', '00:00') &&
			!bc.validateInput('aa:00', '00:00') &&
			!bc.validateInput('00:00', '00:aa') &&
			!bc.validateInput('00:00', 'aa:00') &&
			!bc.validateInput('-1:00', '00:00') &&
			!bc.validateInput('24:00', '00:00') &&
			!bc.validateInput('00:-1', '00:00') &&
			!bc.validateInput('00:60', '00:00') &&
			!bc.validateInput('00:00', '-1:00') &&
			!bc.validateInput('00:00', '24:00') &&
			!bc.validateInput('00:00', '00:-1') &&
			!bc.validateInput('00:00', '00:60')
		);
	}

	function testIncrementHour() {
		var bc = new BellCounter();

		return (
			(0 === bc.incrementHour(23)) &&
			(1 === bc.incrementHour(0)) &&
			(undefined === bc.incrementHour(24))
		);

	}

	function testGetTolls() {
		var bc = new BellCounter();

		return (
			(12 === bc.getTolls(12)) &&
			(12 === bc.getTolls(0)) &&
			(undefined === bc.getTolls(24)) &&
			(1 === bc.getTolls(13))
		);
	}
}

(function() {
	var tbc = new TestBellCounter();
	tbc.testCountBells() ?
		$('#testCountBells span').text('PASS') :
		$('#testCountBells span').text('FAIL');
	tbc.testValidateInput() ? 
		$('#testValidateInput span').text('PASS') :
		$('#testValidateInput span').text('FAIL');
	tbc.testIncrementHour() ?
		$('#testIncrementHour span').text('PASS') :
		$('#testIncrementHour span').text('FAIL');
	tbc.testGetTolls() ?
		$('#testGetTolls span').text('PASS') :
		$('#testGetTolls span').text('FAIL');
})();

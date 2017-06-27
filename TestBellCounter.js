function TestBellCounter() {

	this.testCountBells = testCountBells;
	this.testValidateInput = testValidateInput;

	/** True if passes, false otherwise. */
	function testCountBells() {
		var bc = new BellCounter();

			//console.log("TC1: " + (157 === bc.countBells('1:00', '1:00')));
			//console.log("TC2: " + (165 === bc.countBells('9:00', '9:00')));
			//console.log("TC3: " + (167 === bc.countBells('11:00', '11:00')));
			console.log("TC3: " + (bc.countBells('2:00', '3:00')));
			console.log("TC4: " + (bc.countBells('14:00', '15:00')));
			console.log("TC5: " + (bc.countBells('14:23', '15:42')));
			console.log("TC6: " + (bc.countBells('23:00', '1:00')));

		return (
			//(157 === bc.countBells('1:00', '1:00')) &&
			//(165 === bc.countBells('9:00', '9:00')) &&
			//(167 === bc.countBells('11:00', '11:00')) &&
			(5 === bc.countBells('2:00', '3:00')) &&
			(5 === bc.countBells('14:00', '15:00')) &&
			(3 === bc.countBells('14:23', '15:42')) &&
			(24 === bc.countBells('23:00', '1:00')) 
		);
	}

	/** True if passes, false otherwise. */
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
		)
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
})();

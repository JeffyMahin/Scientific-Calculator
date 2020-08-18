var sq=Math.sqrt;
var log=Math.log;
var sin=Math.sin;
var cos=Math.cos;
var tan=Math.tan;
var cbrt=Math.cbrt;
var e=Math.exp;

function clickNum(n) {
    var existingNumber= $('#result').val()
    $('#result').val(existingNumber + n)

}

function clearResult() {
    $('#result').val('')

}

function deleteNumber() {
    var exist= $('#result').val()
    $('#result').val(exist.slice(0,-1))
}

function calculate() {
    var result= eval($('#result').val())
    $('#result').val(result)
}

// function sqrtNum() {
//     var exist= $('#result').val();
//     $('#result').val(Math.sqrt(exist))
// }

// function sinVal() {
//      var exist= $('#result').val()
//     $('#result').val(Math.sin(exist))
// }
// function cosVal() {
//      var exist= $('#result').val()
//     $('#result').val(Math.cos(exist))
// }
// function tanVal() {
//      var exist= $('#result').val()
//     $('#result').val(Math.tan(exist))
// }

// function squareNum() {
//     var exist= $('#result').val()
//     $('#result').val(exist**2)
// }

function factorialNum() {
    var present= $('#result').val();
    var output = 1;
    if(present <= 0){
			 output = 1;
		}else{
			for(i=1; i<=present; i++){
				output = output*i;
			}
		}
		$("#result").val(output);
}

// function expNum() {
//     var present= $('#result').val();
//     $('#result').val(Math.exp(present));
// }

// function lnFun() {
//      $('#result').val(Math.log($('#result').val()));
// }

// function cubeRoot() {
//     $('#result').val(Math.cbrt($('#result').val()));
// }

let EPSILON1 = 0.0001;
let x_arr = [];
let Fx_arr = [];
let fDer_arr = [];
let x1_arr = [];
let Ni = 0; Nj = 0; Nk = 0, Nm = 0;

function funct(x) {
	let eq = document.getElementById('NRequation').value;
	console.log('function ', eq);
	Fx_arr[Ni] = Number(eval(eq));
	console.log('value of fx', Fx_arr[Ni]);
	Ni++;
	x_arr[Nj] = Number(x);
	Nj++;
	return eval(eq);
}


// Derivative of the above function
// which is 3*x^x - 2*x
function derivFunc(x) {
	let der = math.derivative(document.getElementById('NRequation').value, 'x').evaluate({ x: x });
	console.log('derivative ', der);
	fDer_arr[Nk] = der;
	Nk++
	return der;
   

}

// Function to find the root
function newtonRaphson(x) {
	let h = funct(x) / derivFunc(x);
	while (Math.abs(h) >= EPSILON1) {
		h = funct(x) / derivFunc(x);

		// x(i+1) = x(i) - f(x) / f'(x)
		x = x - h;
		console.log('Value of X1', x);
		x1_arr[Nm] = Number(x);
		Nm++;
	}
	if (methodId == 'NR') {
		document.getElementById('Answer').innerHTML = "The value of the" + " root is : " + ((x * 100.0) / 100.0).toFixed(4);

	}
}

document.getElementById('Method').addEventListener('change', function () {
	var style = this.value == 'NR' ? 'block' : 'none';
	document.getElementById('hidden_div2').style.display = style;
});

function createNTable() {
	var text = document.getElementById('hidden_div2');
	console.log(text)
	console.log(text);
	var table = '<table><thead><tr><th>#</th><th>x</th><th>F(x)</th><th>F`(x)</th><th>X1</th></tr></thead><tbody>';
	for (let i = 0; i < x1_arr.length; i++) {
		table += '<tr><td>' + (i + 1) + '</td><td>' + x_arr[i].toFixed(4) + '</td><td>' + Fx_arr[i].toFixed(4) + '</td><td>' + fDer_arr[i].toFixed(4) + '</td><td>' + x1_arr[i].toFixed(4) + '</td><td>';
	}
	table += '</tbody></table>';
	text.innerHTML = table;
}
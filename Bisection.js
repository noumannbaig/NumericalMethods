
let p = 0, q = 0, r = 0;
let i = 0;
let ia = 0;
let ib = 0;
let ic = 0;
let ifa = 0;
let ifb = 0
let ifc = 0;
let methodId;
let methodVale;
var Valueofa = [];
var valueofb = [];
var valueofc = [];
var valueoffa = [];
var valueoffb = [];
var valueoffc = [];
var ValC;
function showOptions(s) {
	methodVale = s[s.selectedIndex].value; // get value
	methodId = s[s.selectedIndex].id; // get id
	console.log(methodId);
	console.log(methodVale);
}
let EPSILON = 0.0001;

// An example function whose solution is determined using
// Bisection Method. The function is x^3 - x^2 + 2
function isInputValid() {
	var SFx = document.getElementById("equation").value;
	SFx = SFx.toLowerCase();
	SFx = SFx.replace("`", "");
	SFx = SFx.replace("f(x)", "");
	SFx = SFx.replace("base", "");
	SFx = SFx.replace("log10^", "log");
	SFx = SFx.replace("^=", "=");

	if (SFx.indexOf("&") != -1 || SFx.indexOf("#") != -1 || SFx.indexOf("<") != -1 || SFx.indexOf(">") != -1) {
		// document.getElementById("check").innerHTML = 'Please enter equation only, &,#,<,> symbols are not allowed';
		alert("Please enter equation only, &,#,<,> symbols are not allowed")

		return false;
	}
	document.getElementById("equation").value = SFx;

	return true;
}

function func(x) {

	let eq = document.getElementById('equation').value;
	console.log('the value of x' + x);
	console.log(eval(eq));
	if (Number(x) == Valueofa[p]) {
		valueoffa[ifa] = Number(eval(eq));
		ifa++;
		p++;
	}
	// else if(Number(x)==valueofb[q])
	// {

	// 		valueoffb[ifb]=Number(eval(eq));
	// 		ifb++;
	// 		q++;


	// }
	else if (Number(x) == valueofc[r]) {
		valueoffc[ifc] = Number(eval(eq));
		ifc++
		r++;
	}
	return eval(eq);
}

function bisection(a, b) {
	Valueofa[ia] = Number(a);
	ia++;
	valueofb[ib] = Number(b);
	ib++
	valueoffb[ifb] = func(b);
	ifb++;
	if (func(a) * func(b) >= 0) {
		// document.write("You have not assumed"
		// 	+ " right a and b");
		document.getElementById('hidden_div').innerHTML = 'You have not assumed ' + 'right a and b';
		return;
	}

	let c = a;
	while ((b - a) >= EPSILON) {
		// Find middle point
		c = (a + b) / 2;
		valueofc[ic] = c;
		ic++;
		// Check if middle point is root
		if (func(c) == 0.0)
			break;

		// Decide the side to repeat the steps
		else if (func(c) * func(a) < 0) {
			b = c;
			valueofb[ib] = b;
			ib++;
			valueoffb[ifb] = func(b);
			ifb++;
		}
		else
			a = c;
		Valueofa[ia] = Number(a);
		ia++;
		valueofb[ib] = Number(b);
		ib++;
		valueoffb[ifb] = func(b);
		ifb++;

		// Valueofa[ia] = a;
		// ia++;
		// console.log('value of a',Valueofa[ia])
	}

	//prints value of c upto 4 decimal places
	if (methodId == 'Bis') {
		//    document.write("The value of " + "root is : "+ c.toFixed(4));
		// document.getElementById('hidden_div').innerHTML='Table is as follows '+ createTable();
		document.getElementById('Answer').innerHTML = 'The value of' + ' root is :' + c.toFixed(4);
	}

}
document.getElementById('Method').addEventListener('change', function () {
	var style = this.value == 'Bisec' ? 'block' : 'none';
	document.getElementById('hidden_div').style.display = style;
});

// const targetDiv = document.getElementById("BTable");
// const btn = document.getElementById("find");
// btn.onclick = function () {
//   if (targetDiv.style.display !== "none") {
//     targetDiv.style.display = "none";
//   } else {
//     targetDiv.style.display = "block";
//   }
// };
function createTable() {
	var text = document.getElementById('hidden_div');
	console.log(text);
	var table = '<table><thead><tr><th>#</th><th>a</th><th>b</th><th>f(a)</th><th>F(b)</th><th>c=a+b/2</th><th>f(c)</th></tr></thead><tbody>';
	for (let i = 0; i < valueofc.length; i++) {
		table += '<tr><td>' + (i + 1) + '</td><td>' + Valueofa[i].toFixed(4) + '</td><td>' + valueofb[i].toFixed(4) + '</td><td>' + valueoffa[i].toFixed(4) + '</td><td>' + valueoffb[i].toFixed(4) + '</td><td>' + valueofc[i].toFixed(4) + '</td><td>' + valueoffc[i].toFixed(4) + '</td><td>';
	}
	table += '</tbody></table>';
	text.innerHTML = table;
}
// Driver program

		// Initial values assumed
		// let a =-200, b = 300;
		// bisection(a, b);


// JavaScript Program to find root of an
// equations using secant method

// function takes value of x and returns f(x)
let E=0.0001;
let SSX0_arr=[];
let SSX1_arr=[];
let SSX2_arr=[];
let SSF0_arr=[];
let SSF1_arr=[];
let SSF2_arr=[];
let SX0=0,SX1=0,SX2=0,SF0=0,SF1=0,SF2=0,Sstep=0;
let Sfc,Sc;
let n=0;
function f(x)
{
	// we are taking equation as x^3+x-1
	let eq = document.getElementById('Sequation').value;
	return Number(eval(eq));
}

function secant(x1, x2)
{
	let xm, x0, c;
	if (f(x1) * f(x2) < 0) {
        SSX0_arr[SX0]=Number(x1);
        SSX1_arr[SX1]=Number(x2);
        SX0++;
        SX1++;
        SSF0_arr[SF0]=f(x1);
        SSF1_arr[SF1]=f(x2);
        SF0++;
        SF1++;
		do {
			// calculate the intermediate value
			x0 = (x1 * f(x2) - x2 * f(x1)) / (f(x2) - f(x1));
             
			// check if x0 is root of equation or not
			c = f(x1) * f(x0);
            SSX2_arr[SX2]=Number(c)
			SX2++;
			SSF2_arr[SF2]=   x0;
			SF2++;         
			// update the value of interval
			x1 = x2;
            SSX0_arr[SX0]=Number(x1);
            SX0++;
			x2 = x0;
            SSX1_arr[SX1]=Number(x2);
            SX1++;
            SSF0_arr[SF0]=f(x1);
            SF0++;
            SSF1_arr[SF1]=f(x2);
            SF1++;
            
			// update number of iteration
			n++;

			// if x0 is the root of equation then break the loop
			if (c == 0)
				break;
			xm = (x1 * f(x2) - x2 * f(x1)) / (f(x2) - f(x1));
		} while (Math.abs(xm - x0) >= E); // repeat the loop
								// until the convergence

        document.getElementById('Answer').innerHTML = "Root of the given equation=" + x0.toFixed(6)+'<br>' ;
		// document.write("No. of iterations = " + n + "<br>");
        console.log('No of iterations = '+ n)
	} else
		document.write("Can not find a root in the given interval");
}
document.getElementById('Method').addEventListener('change', function () {
	var style = this.value == 'Sec' ? 'block' : 'none';
	document.getElementById('hidden_div4').style.display = style;
});
function createSTable() {
	var text = document.getElementById('hidden_div4');
	console.log(text);
	var table = '<table><thead><tr><th>#</th><th>X0</th><th>X1</th><th>F(X0)</th><th>F(X1)</th><th>X2</th><th>F(X2)</th></tr></thead><tbody>';
	for (let i = 0; i < n; i++) {
		table += '<tr><td>' + (i+1) + '</td><td>' + SSX0_arr[i].toFixed(4) + '</td><td>' + SSX1_arr[i].toFixed(4) + '</td><td>' + SSF0_arr[i].toFixed(4) + '</td><td>' + SSF1_arr[i].toFixed(4) + '</td><td>'+SSX2_arr[i].toFixed(4) + '</td><td>'+SSF2_arr[i].toFixed(4) + '</td><td>';
		
	}
	table += '</tbody></table>';
	text.innerHTML = table;
}

// Driver code
	// initializing the values


// This code is contributed by Surbhi Tyagi.

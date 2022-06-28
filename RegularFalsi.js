
let EPSILON2 = 0.0001;
let X0_arr=[];
let X1_arr=[];
let X2_arr=[];
let F0_arr=[];
let F1_arr=[];
let f2_arr=[];
let X0=0;X1=0,X2=0,F0=0,F1=0,F2=0,step=0;
let fc,c;

function RFfunc(x){
	let eq = document.getElementById('RFequation').value;
	return Number(eval(eq));
}

// Prints root of func(x) in interval [a, b]
function regulaFalsi(aX, bX)
  {
	  if (RFfunc(aX) * RFfunc(bX) >= 0){
		document.write("You have not assumed right a and b\n");
		return;
	}
	X0_arr[X0]=Number(aX);
	X1_arr[X1]=Number(bX);
	X0++;
	X1++;
    F0_arr[F0]=RFfunc(aX);
	console.log('F0',F0_arr[F0]);
	F1_arr[F1]=RFfunc(bX);
	F0++;
	F1++;
	// let c=(aX*RFfunc(bX) - bX*RFfunc(aX))/ (RFfunc(bX) - RFfunc(aX));
	do{
	    c=aX-(aX-bX)*RFfunc(aX)/(RFfunc(aX)-RFfunc(bX));
		X2_arr[X2]=Number(c);	    // fc=RFfunc(c)
		f2_arr[F2]=RFfunc(X2_arr[X2]);
		X2++;
		F2++;
		if(RFfunc(aX)*RFfunc(c)<0)
		{
			bX=c;
			X1_arr[X1]=Number(bX);
			X1++;
			F1_arr[F1]=RFfunc(c);
			F1++;
			X0_arr[X0]=X0_arr[X0-1];
			F0_arr[F0]=F0_arr[F0-1];
			X0++;
			F0++;
		}
		else
		{
			aX=c;
			F0_arr[F0]=RFfunc(aX);
			F0++;
			X0_arr[X0]=Number(c);
			X0++;
			X1_arr[X1]=X1_arr[X1-1];
			X1++;
			F1_arr[F1]=F1_arr[F1-1];
			F1++;
		}
		console.log('step = ',step);
		step++;
	}
	while(Math.abs(RFfunc(c))>EPSILON2);
	
	if (methodId == 'rf') 
	{
		document.getElementById('Answer').innerHTML = "The value of the" + " root is : " + c.toFixed(4);
	
	}

}
document.getElementById('Method').addEventListener('change', function () {
	var style = this.value == 'RF' ? 'block' : 'none';
	document.getElementById('hidden_div3').style.display = style;
});
function createRTable() {
	var text = document.getElementById('hidden_div3');
	console.log(text);
	var table = '<table><thead><tr><th>#</th><th>X0</th><th>X1</th><th>F(X0)</th><th>F(X1)</th><th>X2</th><th>F(X2)</th></tr></thead><tbody>';
	for (let i = 0; i < step-1; i++) {
		table += '<tr><td>' + (i+1) + '</td><td>' + X0_arr[i] + '</td><td>' + X1_arr[i] + '</td><td>' + F0_arr[i] + '</td><td>' + F1_arr[i] + '</td><td>'+X2_arr[i] + '</td><td>'+f2_arr[i] + '</td><td>';
		
	}
	table += '</tbody></table>';
	text.innerHTML = table;
}


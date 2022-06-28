let EPSILON3 = 0.0001;
let N=10;
let SSX0_arr=[];
let SSX1_arr=[];
let SSX2_arr=[];
let SSF0_arr=[];
let SSF1_arr=[];
let SSF2_arr=[];
let SX0=0;SX1=0,SX2=0,SF0=0,SF1=0,SF2=0,Sstep=0;
let Sfc,Sc;

function Sfunc(x){
	let eq = document.getElementById('Sequation').value;
	return Number(eval(eq));
}

// Prints root of func(x) in interval [a, b]
function SecantMethod(aX, bX)
  {
	  if (Sfunc(aX) * Sfunc(bX) >= 0){
		document.write("You have not assumed right a and b\n");
		return;
	}
	SSX0_arr[SX0]=Number(aX);
	SSX1_arr[SX1]=Number(bX);
	SX0++;
	SX1++;
    SSF0_arr[SF0]=Sfunc(aX);
	SSF1_arr[SF1]=Sfunc(bX);
	SF0++;
	SF1++;
	// let c=(aX*RFfunc(bX) - bX*RFfunc(aX))/ (RFfunc(bX) - RFfunc(aX));
	do{
        SSF0_arr[SF0]=Sfunc(aX);
	    SSF1_arr[SF1]=Sfunc(bX);
	    SF0++;
	    SF1++;
        if(Sfunc(aX)==Sfunc(bX))
        {
            document.getElementById('hidden_div4').innerHTML = "Mathmatical error" ;

        }
	    Sc=aX-(bX-aX)*Sfunc(bX)/(Sfunc(bX)-Sfunc(aX));
		SSX2_arr[SX2]=Number(c);	    // Sfc=RFfunc(c)
		SSF2_arr[SF2]=Sfunc(SSX2_arr[SX2]);
		SX2++;
		SF2++;
        aX=bX;
        SSX0_arr[SX0]=SSX1_arr[SX1];
        SX0++;
        SSF0_arr[SF0]=SSF1_arr[SF1];
        SF0++;
        bX=Sc;
        SSF1_arr[SF1]=SSF2_arr[SF2];
        SF1++;
		if(Sstep>N)
		{
			console.log('Not convergent');
            break;
            
		}
		Sstep++;
		console.log('step',Sstep);
		console.log('voc',Sc);
	}
	while(Math.abs(Sfunc(Sc))>EPSILON2);
	
	if (methodId == 'rf') 
	{
		document.getElementById('Answer').innerHTML = "The value of the" + " root is : " + Sc.toFixed(4);
	
	}

}
document.getElementById('Method').addEventListener('change', function () {
	var style = this.value == 'Sec' ? 'block' : 'none';
	document.getElementById('hidden_div4').style.display = style;
});
function createSTable() {
	var text = document.getElementById('hidden_div4');
	console.log(text);
	var table = '<table><thead><tr><th>#</th><th>X0</th><th>X1</th><th>F(X0)</th><th>F(X1)</th><th>X2</th><th>F(X2)</th></tr></thead><tbody>';
	for (let i = 0; i < Sstep-1; i++) {
		table += '<tr><td>' + (i+1) + '</td><td>' + SSX0_arr[i] + '</td><td>' + SSX1_arr[i] + '</td><td>' + SSF0_arr[i] + '</td><td>' + SSF1_arr[i] + '</td><td>'+SSX2_arr[i] + '</td><td>'+SSF2_arr[i] + '</td><td>';
		
	}
	table += '</tbody></table>';
	text.innerHTML = table;
}


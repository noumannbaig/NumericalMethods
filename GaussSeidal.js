let Gx0=Number(0), Gy0=Number(0), Gz0= Number(0), Gx1, Gy1, Gz1, Ge1, Ge2, Ge3;
let Epsilon5=0.001;
let valueofGx=[];
let valueofGy=[];
let valueofGz=[];
let indexofGx=0;
let indexofGy=0;
let indexofGz=0;
let Gindex=0;
function GsfuncX(x,y,z)
{
    let eq1 = document.getElementById('GS1equation').value;
    return Number(eval(eq1));

}
function GsfuncY(x,y,z)
{
    let eq2 = document.getElementById('GS2equation').value;
    return Number(eval(eq2));

}
function GsfuncZ(x,y,z)
{
    let eq3 = document.getElementById('GS3equation').value;
    return Number(eval(eq3));

}
function GaussSeidel()
{
    do{
       Gx1=GsfuncX(Gx0,Gy0,Gz0);
       console.log('x ',Gx1);
       Gx0 = Gx1;
       Gy1=GsfuncY(Gx0,Gy0,Gz0);
       console.log('y ',Gy1);
       Gy0 = Gy1;
       Gz1=GsfuncZ(Gx0,Gy0,Gz0);
       Gz0 = Gz1;
       console.log('z ',Gz1);
       valueofGx[indexofGx]=Number(Gx1);
       indexofGx++;
       valueofGy[indexofGy]=Number(Gy1);
       indexofGy++;
       valueofGz[indexofGz]=Number(Gz1);
       indexofGz++;
       Ge1 = Math.abs(Gx0-Gx1);
       Ge2 = Math.abs(Gy0-Gy1);
       Ge3 = Math.abs(Gz0-Gz1);
       Gindex++;
    //    Gx0 = Gx1;
    //    Gy0 = Gy1;
    //    Gz0 = Gz1;
    }
    while(Ge1>Epsilon5 && Ge2>Epsilon5&& Ge3>Epsilon5);
    console.log(index);
    if (methodId == 'gs') {
		//    document.write("The value of " + "root is : "+ c.toFixed(4));
		// document.getElementById('hidden_div').innerHTML='Table is as follows '+ createTable();
		document.getElementById('Answer').innerHTML = 'The value of X is'+ Gx1 + 'The value of Y is'+ Gy1 + 'The value of Z is'+ Gz1;
	}
}
document.getElementById('Method').addEventListener('change', function () {
	var style = this.value == 'GS' ? 'block' : 'none';
	document.getElementById('hidden_div6').style.display = style;
});
function createGuassTable() {
	var text = document.getElementById('hidden_div6');
	console.log(text);
	var table = '<table><thead><tr><th>#</th><th>X</th><th>Y</th><th>Z</th></thead><tbody>';
	for (let i = 0; i < Gindex; i++) {
		table += '<tr><td>' + (i + 1) + '</td><td>' + valueofGx[i].toFixed(4) + '</td><td>' + valueofGy[i].toFixed(4) + '</td><td>' + valueofGz[i].toFixed(4) + '</td><td>' ;
	}
	table += '</tbody></table>';
	text.innerHTML = table;
}
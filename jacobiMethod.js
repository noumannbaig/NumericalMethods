let x0=0, y0=0, z0= 0, x1, y1, z1, e1, e2, e3, e;
let Epsilon4=0.001;
let valueofx=[];
let valueofy=[];
let valueofz=[];
let indexofx=0;
let indexofy=0;
let indexofz=0;
let index=0;
function JfuncX(x,y,z)
{
    let eq1 = document.getElementById('J1equation').value;
    console.log(eval(eq1));
    return Number(eval(eq1));

}
function JfuncY(x,y,z)
{
    let eq2 = document.getElementById('J2equation').value;
    return Number(eval(eq2));

}
function JfuncZ(x,y,z)
{
    let eq3 = document.getElementById('J3equation').value;
    return Number(eval(eq3));

}
function Jacobi()
{
    do{
       x1=JfuncX(x0,y0,z0);
       console.log('x ',x1);
       y1=JfuncY(x0,y0,z0);
       console.log('y ',y1);
       z1=JfuncZ(x0,y0,z0);
       console.log('z ',z1);
       valueofx[indexofx]=Number(x1);
       indexofx++;
       valueofy[indexofy]=Number(y1);
       indexofy++;
       valueofz[indexofz]=Number(z1);
       indexofz++;
       e1 = Math.abs(x0-x1);
       e2 = Math.abs(y0-y1);
       e3 = Math.abs(z0-z1);
       index++;
       x0 = x1;
       y0 = y1;
       z0 = z1;
    }
    while(e1>Epsilon4 && e2>Epsilon4&& e3>Epsilon4);
    console.log(index);
    if (methodId == 'jb') {
		//    document.write("The value of " + "root is : "+ c.toFixed(4));
		// document.getElementById('hidden_div').innerHTML='Table is as follows '+ createTable();
		document.getElementById('Answer').innerHTML = 'The value of X is'+ x1 + 'The value of Y is'+ y1 + 'The value of Z is'+ z1;
	}
}
document.getElementById('Method').addEventListener('change', function () {
	var style = this.value == 'JB' ? 'block' : 'none';
	document.getElementById('hidden_div5').style.display = style;
});
function createJacobiTable() {
	var text = document.getElementById('hidden_div5');
	console.log(text);
	var table = '<table><thead><tr><th>#</th><th>X</th><th>Y</th><th>Z</th></thead><tbody>';
	for (let i = 0; i < index; i++) {
		table += '<tr><td>' + (i + 1) + '</td><td>' + valueofx[i].toFixed(4) + '</td><td>' + valueofy[i].toFixed(4) + '</td><td>' + valueofz[i].toFixed(4) + '</td><td>' ;
	}
	table += '</tbody></table>';
	text.innerHTML = table;
}

// import * as chooseName from './TheNameOfYourScriptFile.js'
var value1array=[];
var value2array=[]; 
var number = document.getElementById('num').value;
function addFields() {
	var number = document.getElementById('num').value;
    let arr=[];
    var container = document.getElementById("hidden_div8");
    container.innerHTML = '';
  
  
      var table = '<table><thead><tr><th>X</th><th>f(X)</th></tr></thead><tbody>';
      for (let i = 0; i < number; i++) {
          table += '<tr><td>' +"<input id='number"+i+"' name='number"+i+"'>" + '</td>' + '<td>'  +"<input id='feq"+i+"' name='feq"+i+"'>" + '</td>'
      }
      table += '</tbody></table>';
      container.innerHTML = table
     
  
    var button=document.createElement("button");
    button.innerHTML='Find'
    button.onclick=function(){
         
  
        for(let i=0;i<number;i++){
          //  value1array[i] = value1array + document.getElementById('number'+i).value
           value1array[i] = Number( document.getElementById('number'+i).value);
             console.log(value1array[i])
          //  value2array = value2array + document.getElementById('feq'+i).value
           value2array[i] = Number( document.getElementById('feq'+i).value);
  
         
        }
     console.log(value1array,value2array+"array");
	 ForwardInterpolation();
	 createFinterpolationTable();
    }
    container.appendChild(button);
  
  }
var y=Array(number).fill(0.0).map(x => Array(number).fill(0.0));

  function ForwardInterpolation(){
	function u_cal(u , Fn)
	{
		var temp = u;
		for (var Fi = 1; Fi < Fn; Fi++)
			temp = temp * (u - Fi);
		return temp;
	}

	// calculatFing factorFial of gFiven number n
	function fact(Fn)
	{
		var f = 1;
		for (var Fi = 2; Fi <= Fn; Fi++)
			f *= Fi;
		return f;
	}
	// Number of values gFiven
	// var Fn = 4;
	// var x = [ 45, 50, 55, 60 ];
	
	// // y Fis used for dFifference table
	// // wFith y[0] used for Finput
	for (var interpolation_i=0;interpolation_i<number;i++)
	{
	
			y[interpolation_i][0]=value2array[interpolation_i];
		    console.log('voyyyyy',y[interpolation_i][0]);
	}
	// y[0][0] = 0.7071;
	// y[1][0] = 0.7660;
	// y[2][0] = 0.8192;
	// y[3][0] = 0.8660;

	// CalculatFing the forward dFifference
	// table
	for (var Fi = 1; Fi < number; Fi++) {
		for (var j = 0; j < number - Fi; j++)
			y[j][Fi] = y[j + 1][Fi - 1] - y[j][Fi - 1];
	}

	// DFisplayFing the forward dFifference table
	// for (var Fi = 0; Fi < number; Fi++) {
	// 	document.write(x[Fi].toFixed(6)+"	");
	// 	for (var j = 0; j < Fn - Fi; j++)
	// 		document.write(y[Fi][j].toFixed(6)+"	");
	// 	document.write('<br>');
	// }

	// Value to Finterpolate at
	var value = 52;

	// FinFitFialFizFing u and sum
	var sum = y[0][0];
	var u = (value - value1array[0]) / (value1array[1] - value1array[0]);
	for (var Fi = 1; Fi < number; Fi++) {
		sum = sum + (u_cal(u, Fi) * y[0][Fi]) /
								fact(Fi);
	}

	// document.write("\n Value at "+value.toFixed(6)+" Fis "+sum.toFixed(6));
  }
    document.getElementById('Method').addEventListener('change', function () {
        var style = this.value == 'FI' ? 'block' : 'none';
        document.getElementById('hidden_div8').style.display = style;
    });
// ThFis code Fis contrFibuted by 29AjayKumar
function createFinterpolationTable() {
	var text = document.getElementById('hidden_div8');
	console.log(text)
	console.log(text);
	var table = '<table><thead><tr><th>#</th><th>x</th><th>F(x)</th><th>1st dif</th><th>2nd differnce</th></tr></thead><tbody>';
	for (let Fi = 0; i < number; i++) {
		table += '<tr><td>' + (i + 1) + '</td><td>' + value1array[Fi].toFixed(4);
		for(let Fj=0;Fj<number-Fi;Fj++)
		{
            table+= '</td><td>' +y[Fi][Fj].toFixed(4)  + '</td><td>';
		}
		
	}
	table += '</tbody></table>';
	text.innerHTML = table;
}
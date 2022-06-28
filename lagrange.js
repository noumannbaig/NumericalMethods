// Javascript program for implementation
// of Lagrange's Interpolation

// To represent a data point
// corresponding to x and y = f(x)
var value1array=[];
var value2array=[];
// var number = document.getElementById('num').value;

function addFields() {
    // var number = document.getElementById('num').value;
    var number=3;
    var container = document.getElementById("hidden_div11");
    container.innerHTML = '';
  
  
      var table = '<table><thead><tr><th>X</th><th>f(X)</th></tr></thead><tbody>';
      for (let i = 0; i < number; i++) {
          table += '<tr><td>' +"<input id='number"+i+"' name='number"+i+"'>" + '</td>' + '<td>'  +"<input id='feq"+i+"' name='feq"+i+"'>" + '</td>'
      }
      table += '</tbody></table>';
      container.innerHTML = table
     
  
    var button=document.createElement("button");
    button.innerHTML='Find'+'<br>';
	// var input1=document.createElement("input");
	// input1.innerHTML="Enter Interpolation value:<input id= ip;type=int name=ipv>";
    button.onclick=function(){
         
  
        for(let i=0;i<number;i++){
          //  value1array[i] = value1array + document.getElementById('number'+i).value
           value1array[i] = Number( document.getElementById('number'+i).value);
             console.log(value1array[i])
          //  value2array = value2array + document.getElementById('feq'+i).value
           value2array[i] = Number( document.getElementById('feq'+i).value);
            console.log(value2array[i]);
         
        }

	}
    container.appendChild(button);
	// container.appendChild(input1);
  
  }


// function to interpolate the given
// data points using Lagrange's formula
// xi corresponds to the new data point
// whose value is to be obtained n
// represents the number of known data points
function interpolate(ip)
{
	let result = 0; // Initialize result
    let n=3;
	for (let Li = 1; Li <= n; Li++)
	{
		// Compute individual terms of above formula
		let term=1;
		for (let Lj = 1; Lj <= n; Lj++)
		{
			if (Li != Lj)
				term = term*(ip - value1array[Lj]) / (value1array[Li] - value1array[Lj]);
		}

		// Add current term to result
		result =result+term*value2array[Li];
		console.log('results'+ result);
	}

	return result;
}

// Driver code
// creating an array of 4 known data points

// let f=[new Data(0, 2), new Data(1, 3),
// 				new Data(2, 12), new Data(5, 147)];

// Using the interpolate function to obtain
	// a data point corresponding to x=3
// document.write("Value of f(3) is : " +
// 					interpolate(f, 3, 4));
if (methodId == 'Lag') {
	//    
	document.getElementById('Answer').innerHTML = "Value of f "+n +"is  " 
						interpolate(3);
}
document.getElementById('Method').addEventListener('change', function () {
var style = this.value == 'LG' ? 'block' : 'none';
document.getElementById('hidden_div11').style.display = style;
});




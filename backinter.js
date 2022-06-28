// javascript Program to interpolate using
// newton backward interpolation

	
// Calculation of u mentioned in formula
function backinter(){
function u_cal(u , n)
{
	var temp = u;
	for (var i = 1; i < n; i++)
		temp = temp * (u + i);
	return temp;
}

// Calculating factorial of given n
function fact(n)
{
	var f = 1;
	for (var i = 2; i <= n; i++) 
		f *= i;
	return f;
}

// Driver code


	// number of values given
	var n = 5;
	var x = [ 1891, 1901, 1911,
				1921, 1931 ];
				
	// y is used for difference
	// table and y[0] used for input
	var y = Array(n).fill(0.0).map(x => Array(n).fill(0.0));
	y[0][0] = 46;
	y[1][0] = 66;
	y[2][0] = 81;
	y[3][0] = 93;
	y[4][0] = 101;

	// Calculating the backward difference table
	for (var Bi = 1; Bi < n; Bi++)
	{
		for (var Bj = n - 1; Bj >= Bi; Bj--)
			y[Bj][Bi] = y[Bj][Bi - 1] - y[Bj - 1][Bi - 1];
	}

	// Displaying the backward difference table
	// for (var i = 0; i < n; i++)
	// {
	// 	for (var j = 0; j <= i; j++)
	// 		document.write(y[i][j] + "\t");
	// 	document.write('<br>');;
	// }
    for (var Bi = 0; Bi < n; Bi++) {
		for (var Bj = 0; Bj <=Bi; Bj++){
        document.getElementById('hidden_div9').innerHTML += y[Bi][Bj]+="\t" ;
        // document.getElementById('hidden_div8').innerHTML +='<br>'

        }
        document.getElementById('hidden_div9').innerHTML +='<br>'

		
	}
	// Value to interpolate at
	var value = 1925;

	// Initializing u and sum
	var sum = y[n - 1][0];
	var u = (value - x[n - 1]) / (x[1] - x[0]);
	for (var i = 1; i < n; i++)
	{
		sum = sum + (u_cal(u, i) * y[n - 1][i]) /
									fact(i);
	}
    if (methodId == 'Binter') {
		//    
		document.getElementById('Answer').innerHTML = "\n Value at " + value +
        " is " +sum;
	}
}
document.getElementById('Method').addEventListener('change', function () {
    var style = this.value == 'BI' ? 'block' : 'none';
    document.getElementById('hidden_div9').style.display = style;
});
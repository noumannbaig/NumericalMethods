	// javascript Program to interpolate using
	// newton forward interpolation
	// calculating u mentioned in the formula
function forinter(){
	function u_cal(u , n)
	{
		var temp = u;
		for (var Fi = 1; Fi < n; Fi++)
			temp = temp * (u - Fi);
		return temp;
	}

	// calculating factorial of given number n
	function fact(n)
	{
		var f = 1;
		for (var Fi = 2; Fi <= n; Fi++)
			f *= Fi;
		return f;
	}
	// Number of values given
	var n = 4;
	var x = [ 45, 50, 55, 60 ];
	
	// y is used for difference table
	// with y[0] used for input
	var y=Array(n).fill(0.0).map(x => Array(n).fill(0.0));
	y[0][0] = 0.7071;
	y[1][0] = 0.7660;
	y[2][0] = 0.8192;
	y[3][0] = 0.8660;
    console.log(y[0][0]);
	// Calculating the forward difference
	// table
	for (var Fi = 1; Fi < n; Fi++) {
		for (var j = 0; j < n - Fi; j++)
        {
			y[j][Fi] = y[j + 1][Fi - 1] - y[j][Fi - 1];
        }
	}
	// Displaying the forward difference table
	for (var Fi = 0; Fi < n; Fi++) {
        document.getElementById('hidden_div8').innerHTML += x[Fi]+"	";
		for (var j = 0; j < n - Fi; j++){
        document.getElementById('hidden_div8').innerHTML += y[Fi][j].toFixed(6)+"	" ;
        // document.getElementById('hidden_div8').innerHTML +='<br>'
        }
         document.getElementById('hidden_div8').innerHTML +='<br>'

		
	}
    // for (var Fi = 0; Fi < n; Fi++) {
    //     document.write(x[Fi].toFixed(6)+"    ");
    //     for (var j = 0; j < n - Fi; j++)
    //         document.write(y[Fi][j].toFixed(6)+"    ");
    //     document.write('<br>');
    // }

	// Value to interpolate at
	var value = 52;

	// initializing u and sum
	var sum = y[0][0];
	var u = (value - x[0]) / (x[1] - x[0]);
	for (var Fi = 1; Fi < n; Fi++) {
		sum = sum + (u_cal(u, Fi) * y[0][Fi]) /
								fact(Fi);
	}
    if (methodId == 'finter') {
		//    document.write("The value of " + "root is : "+ c.toFixed(4));
		// document.getElementById('hidden_div').innerHTML='Table is as follows '+ createTable();
		document.getElementById('Answer').innerHTML = "\n Value at "+value.toFixed(6)+" is "+sum.toFixed(6);
	}



// This code is contributed by 29AjayKumar
}
document.getElementById('Method').addEventListener('change', function () {
    var style = this.value == 'FI' ? 'block' : 'none';
    document.getElementById('hidden_div8').style.display = style;
});

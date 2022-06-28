
	function Eulerfunc(x, y)
	{
        let EulerEquation=document.getElementById('Eulerequation').value;
        console.log(EulerEquation);
        console.log(Number(eval(EulerEquation)));
        return Number(eval(EulerEquation));
	}

	// Function for Euler formula
	function euler(x,y,n,Ex0)
	{
        console.log('vox ',x);
        console.log('voy ',y);
        console.log('n ',n);
        console.log('apv ',Ex0);



		let temp = -0;
        h = (Ex0-x)/n;
		// Iterating till the point at which we
		// need approximation
		while (Ex0 < x) {
			temp = y;
			y = y + h * Eulerfunc(Ex0, y);
			Ex0 = Ex0 + h;
		}
        if (methodId == 'eu') {
            //    document.write("The value of " + "root is : "+ c.toFixed(4));
            // document.getElementById('hidden_div').innerHTML='Table is as follows '+ createTable();
            document.getElementById('Answer').innerHTML = "Approximate solution at x = "+ x + " is " + y;
        }
           
	}
    document.getElementById('Method').addEventListener('change', function () {
        var style = this.value == 'EU' ? 'block' : 'none';
        document.getElementById('hidden_div7').style.display = style;
    });
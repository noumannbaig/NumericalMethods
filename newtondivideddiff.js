    function proterm(ndi, value, x = []) {
        let pro = 1;
        for (let ndj = 0; ndj < ndi; ndj++) {
            pro = pro * (value - x[ndj]);
        }
        return pro;
    }
    function dividedDiffTable(x = [], y = [][10], n) {
        for (let ndi = 1; ndi < n; ndi++) {
            for (let ndj = 0; ndj < n - ndi; ndj++) {
                y[ndj][ndi] = (y[ndj][ndi - 1] - y[ndj + 1]
                [ndi - 1]) / (x[ndj] - x[ndi + ndj]);
            }
        }
    }
    function applyFormula(value, x = [], y = [][10], n) {
        let sum = y[0][0];

        for (let ndi = 1; ndi < n; ndi++) {
            sum = sum + (proterm(ndi, value, x) * y[0][ndi]);
        }
        return sum;
    }
    function printDiffTable(y = [][10], n) {
        for (let ndi = 0; ndi < n; ndi++) {
            for (let ndj = 0; ndj < n - ndi; ndj++) {
            document.getElementById('hidden_div10').innerHTML +="\t" +y[ndi][ndj]+"	" ;
            // document.getElementById('hidden_div8').innerHTML +='<br>'
            
            }
            document.getElementById('hidden_div10').innerHTML +='<br>'
            
        }
        
    }
    function newtondivided() {

        // number of inputs given
        let n = 4;
        let value, sum;
        let x = [5, 6, 9, 11];

        // y[][] is used for divided difference
        // table where y[][0] is used for input
        var y = Array(n).fill(0.0).map(x => Array(n).fill(0.0));
        y[0][0] = 12;
        y[1][0] = 13;
        y[2][0] = 14;
        y[3][0] = 16;

        // calculating divided difference table
        dividedDiffTable(x, y, n);

        // displaying divided difference table
        printDiffTable(y, n);

        // value to be interpolated
        value = 7;

        // printing the value
        if (methodId == 'Nddiff') {
            //    document.write("The value of " + "root is : "+ c.toFixed(4));
            // document.getElementById('hidden_div').innerHTML='Table is as follows '+ createTable();
            document.getElementById('Answer').innerHTML = "\nValue at " + value +" is "
        + applyFormula(value, x, y, n);
        }

    }
    document.getElementById('Method').addEventListener('change', function () {
        var style = this.value == 'NDD' ? 'block' : 'none';
        document.getElementById('hidden_div10').style.display = style;
    });

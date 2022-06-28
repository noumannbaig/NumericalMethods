// burger=document.querySelector('.burger')
// navbar=document.querySelector('.navbar')
// navlist=document.querySelector('.nav-list')
// rightnav=document.querySelector('.rightnav')

// burger.addEventListener('click',()=>{
//     rightnav.classList.toggle('v-nav');
//     navlist.classList.toggle('v-nav');
//     navbar.classList.toggle('h-nav');
// })
class bisection{
    constructor(a,b)
    {
        this.a=a;
        this.b=b;
    }
    showOptions(s) {
        console.log(String(s[s.selectedIndex].value)); // get value
        console.log(String(s[s.selectedIndex].id)); // get id
      }
     func(x)
	{
		return x*x*x - x*x + 2;
	}

	// Prints root of func(x) with error of EPSILON
	 bisectionMethod(a, b)
	{
		if (func(a) * func(b) >= 0)
		{
			document.write("You have not assumed"
						+ " right a and b");
			return;
		}

		let c = a;
		while ((b-a) >= EPSILON)
		{
			// Find middle point
			c = (a+b)/2;

			// Check if middle point is root
			if (func(c) == 0.0)
				break;

			// Decide the side to repeat the steps
			else if (func(c)*func(a) < 0)
				b = c;
			else
				a = c;
		}

				//prints value of c upto 4 decimal places
			console.log(methodVale)
			if(methodId=='Bis')	{
            document.write("The value of " +
            "root is : "+ c.toFixed(4));
			}
		
	}

}

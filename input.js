
// function addFields() {
//     var number = document.getElementById('num').value;
//     let arr=[];
//     var container = document.getElementById("hidden_div8");
//     container.innerHTML = '';
  
  
//       var table = '<table><thead><tr><th>X</th><th>f(X)</th></tr></thead><tbody>';
//       for (let i = 0; i < number; i++) {
//           table += '<tr><td>' +"<input id='number"+i+"' name='number"+i+"'>" + '</td>' + '<td>'  +"<input id='feq"+i+"' name='feq"+i+"'>" + '</td>'
//       }
//       table += '</tbody></table>';
//       container.innerHTML = table
     
  
//     var button=document.createElement("button");
//     button.innerHTML='Find'
//     button.onclick=function(){
//         var value1array=[];
//         var value2array=[];  
  
//         for(let i=0;i<number;i++){
//           //  value1array[i] = value1array + document.getElementById('number'+i).value
//            value1array[i] = Number( document.getElementById('number'+i).value);
//              console.log(value1array[i])
//           //  value2array = value2array + document.getElementById('feq'+i).value
//            value2array[i] = Number( document.getElementById('feq'+i).value);
  
         
//         }
//      console.log(value1array,value2array+"array");
//     }
//     container.appendChild(button);
  
//   }
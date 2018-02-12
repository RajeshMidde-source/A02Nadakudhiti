function temperatureConverter(){

    var tempinput = document.getElementById("inputFahrenheit").value;
    //alert(tempinput);
    var inverse=document.getElementById("inverseSelect").checked;
    calc(tempinput,inverse)
}
function calc(tempinput,inverse) {
   if((inverse!=true&&inverse!=false)||tempinput==null){
    throw Error('input cannot be null')
   }
      valNum = parseFloat(tempinput);
      var result = null;
      if(inverse==true){
          //alert("sai");
          
        $("#OutputLabel").html('Celsius:');
        $("#Inputlabel").html('Fahrenheit'); 
     // document.getElementById("outputCelcius").innerHTML='<p>'+((valNum-32)/1.8)+'</p>';
     result = Math.ceil((valNum-32)/1.8)
        $("#outputCelcius").html(result);
        return result;      
    }

    else{
        result=Math.ceil(valNum*1.8+32);
        $("#Inputlabel").html('Celsius:');
        $("#OutputLabel").html('Fahrenheit'); 
        $("#outputCelcius").html(result);

       // console.log(valNum);
       return result;
    }

    }
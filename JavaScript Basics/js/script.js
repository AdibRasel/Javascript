// ===================================
//================= Time =============
// =====================================
setInterval(myTimer, 1000);
        
function myTimer() {
  const d = new Date();
  document.getElementById("time").innerHTML = d.toLocaleTimeString();
}
// ===================================
//================= Time End=============
// =====================================


// Operator
// Operator
// Operator
// Operator



function submit(){
  var input_1, input_2, operator, result, res, res2;
  input_1 = document.getElementById("input_1").value;
  input_2 = document.getElementById("input_2").value;
  
  operator = document.querySelector("#select").value;

// JavaScript Arithmetic Operators
    if(operator === "+"){
      res = input_1 - 2 + 2;
      res2 = input_2 - 2 + 2;
      result = res + res2 ;
      document.getElementById("result").innerHTML = result;

    }else if(operator === "-" ) {
      result =  input_1 - input_2;
    document.getElementById("result").innerHTML = result;
    }else if(operator === "*" ) {
      result =  input_1 * input_2;
    document.getElementById("result").innerHTML = result;
    }else if(operator === "/" ) {
      result =  input_1 / input_2;
    document.getElementById("result").innerHTML = result;
    }else if(operator === "%" ) {
      result =  input_1 % input_2;
    document.getElementById("result").innerHTML = result;
    }else if(operator === "++" ) {
      result =  ++ input_1;
    document.getElementById("result").innerHTML = result;
    }else if(operator === "--" ) {
      result =  -- input_1;
    document.getElementById("result").innerHTML = result;
  }
}
  // JavaScript Arithmetic Operators End


  // JavaScript Comparison Operators
  function submit_com_oper(){
    var input_1, input_2, operator, result;
    input_1 = document.getElementById("input_1_com_oper").value;
    input_2 = document.getElementById("input_2_com_oper").value;
    operator = document.querySelector("#select_com_oper").value;

    if(operator === "=="){
      result = input_1 == input_2;
      document.getElementById("result_com_oper").innerHTML = result;
    }else if(operator ==="==="){
      result = input_1 === input_2;
      document.getElementById("result_com_oper").innerHTML = result;
    }else if(operator ==="!="){
      result = input_1 != input_2;
      document.getElementById("result_com_oper").innerHTML = result;
    }else if(operator ==="!=="){
      result = input_1 !== input_2;
      document.getElementById("result_com_oper").innerHTML = result;
    }else if(operator ===">"){
      result = input_1 > input_2;
      document.getElementById("result_com_oper").innerHTML = result;
    }else if(operator ===">="){
      result = input_1 >= input_2;
      document.getElementById("result_com_oper").innerHTML = result;
    }else if(operator ==="<"){
      result = input_1 < input_2;
      document.getElementById("result_com_oper").innerHTML = result;
    }else if(operator ==="<="){
      result = input_1 <= input_2;
      document.getElementById("result_com_oper").innerHTML = result;
    }
  }
  // JavaScript Comparison Operators End 


  // JavaScript Bitwise Operators

  function submit_bitw_oper(){
    var input_1, input_2, operator, result;
    input_1 = document.getElementById("input_1_bitw_oper").value;
    input_2 = document.getElementById("input_2_bitw_oper").value;
    operator = document.querySelector("#select_bitw_oper").value;

    if(operator === "&"){
      result = input_1 & input_2;
      document.getElementById("result_bitw_oper").innerHTML = result;
    }else if(operator === "|"){
      result = input_1 | input_2;
      document.getElementById("result_bitw_oper").innerHTML = result;
    }else if(operator === "^"){
      result = input_1 ^ input_2;
      document.getElementById("result_bitw_oper").innerHTML = result;
    }else if(operator === "~"){
      result = input_1 + input_2;
      document.getElementById("result_bitw_oper").innerHTML = result;
    }else if(operator === "<<"){
      result = input_1 << input_2;
      document.getElementById("result_bitw_oper").innerHTML = result;
    }else if(operator === ">>"){
      result = input_1 >> input_2;
      document.getElementById("result_bitw_oper").innerHTML = result;
    }else if(operator === ">>>"){
      result = input_1 >>> input_2;
      document.getElementById("result_bitw_oper").innerHTML = result;
    }

    
    // window.alert(result)
  }
  // JavaScript Bitwise Operators End


  // JavaScript Logical Operators

  function submit_logical_operators(){
    var input_1, input_2, operator, result;
    input_1 = document.getElementById("input_1_logical_operators").value;
    input_2 = document.getElementById("input_2_logical_operators").value;
    operator = document.querySelector("#select_logical_operators").value;

    if(operator === "and"){
      result = input_1 && input_2;
      document.getElementById("result_logical_operators").innerHTML = result;
    }else if(operator === "or"){
      result = input_1 || input_2;
      document.getElementById("result_logical_operators").innerHTML = result;
    }else if(operator === "not"){
      result = "সত্য কে মিথ্য করবে আর মিথ্যা কে সত্য করবে";
      document.getElementById("result_logical_operators").innerHTML = result;
    }

    // window.alert(result)
  }






  // JavaScript Logical Operators End 














// Operator
// Operator
// Operator

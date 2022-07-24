function submit(){
    bangla = document.getElementById("bangla").value;
    english = document.getElementById("english").value;
    math = document.getElementById("math").value ;
    ict = document.getElementById("ict").value;

    var Bangla_1 = bangla - 10;
    var Bangla_Result = Bangla_1 + 10 // Bangla Result

    var English_1 = english - 10;
    var English_Result = English_1 + 10; //English English Result

    var Math_1 = math - 10;
    var Math_Result = Math_1 + 10; // Math Result

    var Ict_1 = ict - 10;
    var Ict_Result = Ict_1 + 10 // Ict Result


    var total = Bangla_Result + English_Result + Math_Result + Ict_Result;




    if(total >= 401 ){
        document.getElementById("grade").innerHTML = "Not Result"
    }else if( total <= 400 && total >= 350 ){
        document.getElementById("grade").innerHTML = "A+"
    }else if( total <= 349 && total >= 200 ){
        document.getElementById("grade").innerHTML = "B"
    }else if( total <= 199 && total >= 150 ){
        document.getElementById("grade").innerHTML = "C"
    }else if( total <= 149 && total >= 132 ){
        document.getElementById("grade").innerHTML = "D"
    }else if( total <= 131){
        document.getElementById("grade").innerHTML = "F"
    }


    switch(true){
        case total >= 401 :
        document.getElementById("grade_switch").innerHTML = "Not Result";
        break;
        case total <= 400 && total >= 350:
        document.getElementById("grade_switch").innerHTML = "A+";
        break;
        case total <= 349 && total >= 200 :
        document.getElementById("grade_switch").innerHTML = "B";
        break;
        case total <= 199 && total >= 150 :
        document.getElementById("grade_switch").innerHTML = "C";
        break;
        case total <= 149 && total >= 132 :
        document.getElementById("grade_switch").innerHTML = "D";
        break;
        case total <= 131:
        document.getElementById("grade_switch").innerHTML = "F";
        break;
    }






    document.getElementById("total").innerHTML = total;
}
function for_loop_submit(){
    var condition = document.getElementById("for_loop_input").value;
    var text = document.getElementById("for_loop_text").value;

    for(var a = 1; a <= condition; a++){
        document.write(a + " " + text + "<br>")
    }
}




function while_loop_submit(){
    var condition = document.getElementById("while_loop_input").value;
    var text = document.getElementById("while_loop_text").value;
    var a = 1;
    while(a <= condition){
        document.write(a + " " + text + "<br>");
        a++;
    }
}





function do_while_loop_submit(){
    var condition = document.getElementById("do_while_loop_input").value;
    var text = document.getElementById("do_while_loop_text").value;
    var a = 1;
    do{
        document.write(a + " " + text + "<br>")
    a++;
    }while(a <= condition)
}



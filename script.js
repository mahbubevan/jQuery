$(document).ready(function(){
  $("button").click(function(){

    //alert($("input").val());
    //$("input").val("Hello World");
    //$("div>input").val("Hello Div");
    //$("body>input").val("second div");
    //$("#text1").val("Hello First");
    //$("#text2").val("Hello Second");
    if($("#text1").val()==" " || $("#text2").val()==" "){
      alert("Empty");
    }else{
      alert($("#text1").val() +" "+$("#text2").val());
    }
  });
});

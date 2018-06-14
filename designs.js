$(document).ready(function(){
    $("#sizePicker").submit(function makeGrid(grid){
      $("table tr").remove();  
     //Selecting Size Input.
      let rows = $("#inputHeight" ).val();
      let cols = $("#inputWeight" ).val();
      //Creating Rows and Columns
      for(let i=1; i<=rows; i++){
        $("table").append("<tr></tr>");
        for(let j=1; j<=cols; j++){
          $("tr:last").append("<td></td>");
        }
      }
      grid.preventDefault();
      $("td").attr("class","cells");
      $(".cells").click(function(event){
        let paint = $("#colorPicker").val();
        if($(this).attr("style")){
         $(this).removeAttr("style");
        // $(this).css("background-color","");
        } else {
        $(event.target).css("background-color",paint);
      }
      });
    });
  });
  
  //Feedback: 
  //var table = document.getElementById("myTable");
   // var row = table.insertRow(0);
   //var cell1 = row. insertCell(0);
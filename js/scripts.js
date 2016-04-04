function Chore(name, choreDone, ChoreNotDone) {
  this.nameKey = name;
  this.doneKey = choreDone;
  this.notDoneKey = ChoreNotDone;
}



$(document).ready(function(){
  $(".list").submit(function(event){
    event.preventDefault();

    var choreInput = $("#choreName").val();
  console.log(choreInput);

    var newChore = new Chore(choreInput);

     $("#list").append("<li class='chore'>" + newChore.nameKey + "</li>");


     $(".chore").last().click(function() {
  $("#show-list").show();
  $("#show-list h2").text(newChore.nameKey);
  $("#choreStatus").submit(function(event){
    event.preventDefault();

    var choreStatus = $("#done").val();
    if(choreStatus === "done") {
      newChore.doneKey = "done";
      $(".chore").append("<p>" + newChore.doneKey + "</p>");
    }
  });

  });

  });

});

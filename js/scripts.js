function Place(name, landmark, time) {
  this.nameKey = name;
  this.landKey = landmark;
  this.timeKey = time;
}



$(document).ready(function(){
  $(".places").submit(function(event){
    event.preventDefault();

    var placeInput = $("#placeName").val();
    var landmarkInput = $("#landmarks").val();
    var timeInput = $("#time").val();

    var newPlace = new Place(placeInput, landmarkInput, timeInput);

     $("ul#place").append("<li class='place'>" + newPlace.nameKey + "</li>");
     console.log(newPlace);

     $(".place").last().click(function() {
  $("#show-place").show();
  $("#show-place h2").text(newPlace.nameKey);
  $(".landmark").text(newPlace.landKey);
  $(".time").text(newPlace.timeKey);
  });

  });

});

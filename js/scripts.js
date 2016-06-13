function Place(city, state, country) {
  this.city = city;
  this.state = state;
  this.country = country;

}

Place.prototype.fullPlace = function () {
  return this.city + ", " + this.country;
};

$(document).ready(function(){
  $("#new-place").submit(function(event){
    event.preventDefault();
    var city = $("#new-city").val();
    var state = $("#new-state").val();
    var country = $("#new-country").val();

    var newPlace = new Place (city, state, country);
    console.log(newPlace);

    $("ul#places-seen").append("<li><span class='place'>" + newPlace.fullPlace() + "</span></li>");

    $("input#new-city").val("");
    $("input#new-state").val("");
    $("input#new-country").val("");

    $(".place").last().click(function() {
      $("#show-places").show();
      $("#show-places h2").text(newPlace.firstName);
      $(".city").text(newPlace.city);
      $(".state").text(newPlace.state);
      $(".country").text(newPlace.country);
    });
  });
});

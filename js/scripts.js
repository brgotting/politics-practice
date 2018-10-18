$(document).ready(function() {
  $("form#ageSelector").submit(function() {
    event.preventDefault();
    var ageRange = $("input:radio[name=ageRange]:checked").val();
    if (ageRange === "18-35") {
      result = "18-35";
    } else if (ageRange === "35+") {
      result = "35+";
    }
    $("#output").text(result);
  });
});

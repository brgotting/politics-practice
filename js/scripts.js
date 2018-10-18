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


  $("form#incomeSelector").submit(function() {
    event.preventDefault();
    var incomeRange = $("input:radio[name=incomeRange]:checked").val();
    if (incomeRange === "lessThan") {
      result = "lessThan";
    } else if (incomeRange === "moreThan") {
      result = "moreThan";
    }
    $("#output2").text(result);
  });




});

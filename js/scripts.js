//Business Logic
function getDemand(demand) {
  let survey1 = ''
  if (demand === "learning") {
    survey1 = "JavaScript"
  } else if (demand === "performance") {
    survey1 = "C++"
  } 
  return survey1
}
function getPurpose(purpose) {
  let survey2 = ''
  if (purpose === "front-end") {
    survey2 = "JavaScript"
  } else if (purpose === "back-end") {
    survey2 = "Python"
  } 
  return survey2
}

//UI Logic
$(document).ready(function() {
  $("form#language").submit(function(event) {
    const demand = $("select#demand").val();
    const survey1 = getDemand(demand)
    $("#output1").text(survey1);
    event.preventDefault();
  });
  $("form#language").submit(function(event) {
    const purpose = $("select#purpose").val();
    const survey2 = getPurpose(purpose)
    $("#output2").text(survey2);
    event.preventDefault();
  });
});
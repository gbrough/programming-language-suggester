//Business Logic
function getLanguage(demand,purpose) {
  let survey = ''
  if (demand === "learning") {
    survey = "JavaScript"
  } else if (demand === "performance") {
    survey = "C++"
  } else if (purpose === "front-end") {
    survey = "Ruby"
  } else if (purpose === "back-end") {
    survey = "C#"
  } 
  return survey
}


//UI Logic
$(document).ready(function() {
  $("form#language").submit(function(event) {
    const demand = $("select#demand").val();
    const purpose = $("select#purpose").val();
    const survey = getLanguage(demand,purpose)
    $("#output").text(survey);
    event.preventDefault();
  });
});

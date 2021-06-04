//Business Logic
function getLanguage(demand,purpose,size,industry,interest) {
  let survey = ''
  if (demand === "learning") {
    survey = "JavaScript"
  } else if (demand === "performance") {
    survey = "C++"
  } else if (purpose === "front-end") {
    survey = "Ruby"
  } else if (purpose === "back-end") {
    survey = "C#"
  } else if (size === "small") {
    survey = "Go"
  } else if (size === "large") {
    survey = "Rust"
  } else if (industry === "tech") {
    survey = "Swift"
  } else if (industry === "retail") {
    survey = "Kotlin"
  } else if (interest === "software") {
    survey = "Java"
  } else if (interest === "hardware") {
    survey = "Dart"
  } 
  return survey
}


//UI Logic
$(document).ready(function() {
  $("form#language").submit(function(event) {
    const demand = $("select#demand").val();
    const purpose = $("select#purpose").val();
    const size = $("select#size").val();
    const industry = $("select#industry").val();
    const interest = $("select#interest").val();
    const survey = getLanguage(demand,purpose,size,industry,interest)
    $("#output").text(survey);
    event.preventDefault();
  });
});

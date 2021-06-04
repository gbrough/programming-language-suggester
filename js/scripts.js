//Business Logic
function getLanguage(demand,purpose,size,industry,interest) {
  let survey = ''
  if (demand === "learning") {
    survey = "JavaScript"
  } else if (demand === "performance") {
    survey = "C++"
  } else if (purpose === "front-end") {
    survey = "PHP"
  } else if (purpose === "back-end") {
    survey = "SQL"
  } else if (size === "small") {
    survey = "Ruby"
  } else if (size === "large") {
    survey = "C#"
  } else if (industry === "tech") {
    survey = "Swift"
  } else if (industry === "other") {
    survey = "Java"
  } else if (interest === "software") {
    survey = "Python"
  } else if (interest === "hardware") {
    survey = "Assembly"
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
  $(".clickable").click(function() {
    $("#result-showing").toggle();
    $("#result-hidden").toggle();
  });
});


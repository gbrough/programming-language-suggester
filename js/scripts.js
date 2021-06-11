//Business Logic
function getLanguage(demand,purpose,size,industry,interest) {
  let survey = '';
  if (demand === "learning" && purpose === "front-end" && size === "small" && industry === "tech" && interest === "software") {
    survey = "JavaScript";
  } else if (demand === "performance" && purpose === "back-end" && size === "large" && industry === "other" && interest === "hardware") {
    survey = "Python";
  } else {
    survey = "C++";
  }
  return survey;
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
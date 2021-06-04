//Business Logic

function getLanguage(demand, purpose, size, industry, interest) {
  let survey1 = ''

  if (demand === "learning") {
    survey1 = "JavaScript"
  } else if (demand === "performance") {
    survey1 = "C++"
  } 
  return survey1
}

//UI Logic
$(document).ready(function() {
  $("form#language").submit(function(event) {
    const demand = $("select#demand").val();
    const purpose = $("select#purpose").val();
    const size = $("select#size").val();
    const industry = $("select#industry").val();
    const interest = $("select#interest").val();
    const survey1 = getLanguage(demand, purpose, size, industry, interest)
    $("#output").text(survey1);
    $("#output2").text(survey2);

    event.preventDefault();
  });
});
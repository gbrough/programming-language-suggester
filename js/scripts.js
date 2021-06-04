//Business Logic

function getLanguage(demand, purpose, size, industry, interest) {
  let language = ''

  if (demand === "learning") {
    language = "Java Script"
  } else if (demand === "performance") {
    language = "C++"
  } else if (purpose === "front-end") {
    language = "Java Script"
  } else if (purpose === "back-end") {
    language = "Python"
  } else if (size === "small") {
    language = "Java Script"
  } else if (size === "large") {
    language = "Python"
  } else if (industry === "tech") {
    language = "JavaScript"
  } else if (industry === "retail") {
    language = "Python"
  } else if (interest === "software") {
    language = "Java Script"
  } else if (interest === "hardware") {
    language = "C++"
  }
  return language
}

//UI Logic
$(document).ready(function() {
  $("form#language").submit(function(event) {
    const demand = $("select#demand").val();
    const purpose = $("select#purpose").val();
    const size = $("select#size").val();
    const industry = $("select#industry").val();
    const interest = $("select#interest").val();
    const language = getLanguage(demand, purpose, size, industry, interest)
      
 //   alert('our suggestion is: ' + language)
    $("#output").text(language);

    event.preventDefault();
  });
});
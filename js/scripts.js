//Business Logic

function getLanguage(demand, purpose, size, industry, interest) {
  let language = ''

  if (demand === "learning") {
    language = "Java Script"
  } else if (gender === "male") {
    language = "Robert Downey Jr."
  } else if (gender === "they") {
    language = "Liv Hewson"
  }
  if (genre === "sci-fi") {
    language = language + " or Chris Hemsworth"
  } else if (genre === "fantasy") {
    language = language + " or Liv Tyler"
  } else if (genre === "rom-com") {
    language = language + " or Chris Klein"
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
      
    alert('our suggestion is: ' + language)
    event.preventDefault();
  });
});
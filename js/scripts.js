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
function getSize(size) {
  let survey3 = ''
  if (size === "small") {
    survey3 = "JavaScript"
  } else if (size === "large") {
    survey3 = "C++"
  } 
  return survey3
}
function getIndustry(industry) {
  let survey4 = ''
  if (industry === "tech") {
    survey4 = "Python"
  } else if (industry === "retail") {
    survey4 = "JavaScript"
  } 
  return survey4
}
function getInterest(interest) {
  let survey5 = ''
  if (interest === "software") {
    survey5 = "Python"
  } else if (interest === "hardware") {
    survey5 = "C++"
  } 
  return survey5
}

//UI Logic
$(document).ready(function() {
  $("form#language").submit(function(event) {
    const demand = $("select#demand").val();
    const purpose = $("select#purpose").val();
    const size = $("select#size").val();
    const industry = $("select#industry").val();
    const interest = $("select#interest").val();
    const survey1 = getDemand(demand)
    const survey2 = getPurpose(purpose)
    const survey3 = getSize(size)
    const survey4 = getIndustry(industry)
    const survey5 = getInterest(interest)
    $("#output1").text(survey1);
    $("#output2").text(survey2);
    $("#output3").text(survey3);
    $("#output4").text(survey4);
    $("#output5").text(survey5);
    event.preventDefault();
  });
});
$(document).ready(function() {
  $(".output1").click(function() {
    $("#answer1-showing").toggle();
    $("#answer1-hidden").toggle();
  });
});
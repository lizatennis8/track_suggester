$(document).ready(function() {

  $("#formOne").submit(function(event) {

    var enterpriseInput = $("#enterprise").val();
    var environmentInput = $("#environment").val();
    var aspectsInput = $("input:radio[name=aspects]:checked").val();
    var dateInput = $("#date").val();
    var timeInput = $("input:radio[name=time]:checked").val();

    $(".enterprise").text(enterpriseInput);
    $(".environment").text(environmentInput);
    $(".aspects").text(aspectsInput);
    $(".date").text(dateInput);
    $(".time").text(timeInput);

    if (enterpriseInput === "Yes" && environmentInput === "Working at a large company") {
      $("#rubyrails").show();
      $("#rubyrails").siblings().hide();
    } else if (enterpriseInput === "No" && environmentInput === "Working at an agency that serves small businesses and start ups") {
      $("#cssreact").show();
      $("#cssreact").siblings().hide();
    } else if (timeInput === "10 hours") {
      $("#cplusdotnet").show();
      $("#cplusdotnet").siblings().hide();
    }
    event.preventDefault();
  });
});

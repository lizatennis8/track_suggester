$(document).ready(function() {

  $("#formOne").submit(function(event) {

    var enterpriseInput = $("#enterprise").val();
    var environmentInput = $("#environment").val();
    var aspectsInput = $("input:radio[name=aspects]:checked").val();
    var dateInput = $("#date").val();
    var timeInput = $("input:radio[name=time]:checked").val();
    var nameInput = $("#name").val();
    var emailInput = $("#email").val();


    $(".enterprise").text(enterpriseInput);
    $(".environment").text(environmentInput);
    $(".aspects").text(aspectsInput);
    $(".time").text(timeInput);
    $(".name").text(nameInput);
    $(".email").text(emailInput);
    $(".date").text(dateInput);


    if (enterpriseInput === "Yes" && environmentInput === "Working at a large company") {
      $("#rubyrails").show();
      $("#rubyrails").siblings().hide();
      $("#thankyou").show();
    } else if (enterpriseInput === "No" && environmentInput === "Working at an agency that serves small businesses and start ups") {
      $("#cssreact").show();
      $("#cssreact").siblings().hide();
      $("#thankyou").show();
    } else if (timeInput === "10hours") {
      $("#dontdoit").show();
      $("#dontdoit").siblings().hide();
    }


    $("#formOne").hide();

    event.preventDefault();
  });
});

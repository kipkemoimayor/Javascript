//business logic
function Contact(first, last) {
  this.firstName = first;
  this.lastName = last;
}

//user interface logic
$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
    event.preventDefault();
    var inputFirst = $("input#new-first-name").val();
    var inputLast = $("input#new-last-name").val();
    var newContact = new Contact(inputFirst, inputLast);
    $("ul#contacts").append("<li><span class = 'contact'>" + newContact.firstName + "</span></li>");

    $(".contact").last().click(function() {
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.firstName);
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
    });





    $("input#new-first-name").val();
    $("input#new-last-name").val();
  });
});

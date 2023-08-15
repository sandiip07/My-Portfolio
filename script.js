// dynamic change typing
var typed = new Typed("#element", {
  strings: ["Web Developer", "C++ Coder..."],
  typeSpeed: 100,
  loop: true,
  loopCount: Infinity,
});

// contact form
var btn = document.getElementById("sendEmailBtn");
btn.addEventListener("click", function (e) {
  e.preventDefault();
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var subject = document.getElementById("subject").value;
  var msg = document.getElementById("message").value;
  var body =
    "name :" +
    name +
    "<br/> email :" +
    email +
    "<br/> subject :" +
    subject +
    "<br/> message :" +
    msg;

  Email.send({
    SecureToken: "e5043d09-100c-4083-808d-70e85153a0e2",
    To: "sandiip2021@gmail.com",
    From: email,
    Subject: subject,
    Body: body,
  }).then((message) => alert(message));
});

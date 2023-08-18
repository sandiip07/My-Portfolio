// dynamic change typing
var typed = new Typed("#element", {
  strings: ["Web Developer", "C++ Coder..."],
  typeSpeed: 100,
  loop: true,
  loopCount: Infinity,
  backSpeed: 100,
});

///mailsend
function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_7p0jycv";
  const templateID = "template_bxvlniv";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      (document.getElementById("name").value = ""),
        (document.getElementById("email").value = ""),
        (document.getElementById("message").value = "");
      console.log(res);
      alert("your message sent successfully");
    })
    .catch(() => console.log(err));
}

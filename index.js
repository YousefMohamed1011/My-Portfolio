let icon = document.getElementById("icon");
let nav = document.getElementById("nav");

icon.onclick = () => {
  nav.classList.toggle("active");
};

let number1 = document.getElementById("number1");
let number2 = document.getElementById("number2");
let number3 = document.getElementById("number3");
let number4 = document.getElementById("number4");

function animateCounter(element, max) {
  let counter = 0;
  let interval = setInterval(() => {
    if (counter >= max) {
      clearInterval(interval);
    } else {
      counter += 1;
      element.innerHTML = `${counter}%`;
    }
  }, 30);
}

animateCounter(number1, 92);
animateCounter(number2, 92);
animateCounter(number3, 75);
animateCounter(number4, 40);
function emailsend() {
  Email.send({
    Host: "s1.maildns.net",
    Username: "karsayousef74@gmail.com",
    Password:
      "6C79566662F8FCDA1D8A9C46BC12AB9FA46453F9CE9733E2665D5E08FA6D677F3E65BF0A5E698DDD7BFDCBD34AD895A4",
    To: "them@website.com",
    From: "karsayousef74@gmail.com",
    Subject: "This is the subject",
    Body: "And this is the body",
  }).then((message) => alert(message));
}

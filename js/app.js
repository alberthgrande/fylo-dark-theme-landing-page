const btn = document.querySelector("#button");

btn.addEventListener("click", function () {
  const inputEmail = document.querySelector("#email");
  let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (inputEmail.value.match(mailformat)) {
    inputEmail.style.borderColor = "green";
    inputEmail.style.borderWidth = "2px";
  } else {
    inputEmail.style.borderColor = "red";
  }
});

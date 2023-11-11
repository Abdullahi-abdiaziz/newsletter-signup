const submitBtn = document.getElementById("submit-btn");
const main = document.querySelector(".container");
const feedback = document.querySelector(".success");
const input = document.querySelector("input");
const dismiss = document.getElementById("dismiss");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  validate();
});

dismiss.addEventListener("click", () => {
  window.location.reload();
});

const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

const validate = () => {
  const result = document.getElementById("result");
  const email = document.getElementById("email").value;
  result.innerText = "";

  if (validateEmail(email)) {
    main.classList.add("hide");
    feedback.style.display = "block";
  } else {
    result.innerText = "Valid email required";
    result.style.color = "red";
    input.classList.add("error-state");
  }
  return false;
};

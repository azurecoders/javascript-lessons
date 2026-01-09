// const registration_heading_element = document.getElementById(
//   "registration-heading"
// );

// registration_heading_element.innerText = "Updated Javascript Line";
// registration_heading_element.classList.add("text-red-700");

// const counter_value = document.getElementById("counter-value");
// const increment_btn = document.getElementById("increment-btn");
// const reset_btn = document.getElementById("reset-btn");
// const decrement_btn = document.getElementById("decrement-btn");

// counter_value.innerText = 0;

// // Event

// // Click
// increment_btn.addEventListener("click", function () {
//   console.log("Increment button is clicked");

//   counter_value.innerText = Number(counter_value.innerText) + 1;
// });

// decrement_btn.addEventListener("click", function () {
//   console.log("Decrement button is clicked");

//   counter_value.innerText = Number(counter_value.innerText) - 1;
// });

// reset_btn.addEventListener("click", function () {
//   console.log("The reset button is clicked");

//   counter_value.innerText = 0;
// });

const name_input_field = document.getElementById("name");
const email_input_field = document.getElementById("email");
const submit_btn = document.getElementById("submit-btn");
const registration_form = document.getElementById("registration-form");

// Helper Function

const generateToken = () => {
  return Math.random() * 10000;
};

// React -> Onchange

const data = {
  name: "",
  email: "",
};

registration_form.addEventListener("submit", function (e) {
  e.preventDefault();
});

name_input_field.addEventListener("input", function (e) {
  data.name = e.target.value;
});

email_input_field.addEventListener("input", function (e) {
  data.email = e.target.value;
});

submit_btn.addEventListener("click", function () {
  if (data.name == "") {
    alert("Name field is required");
    return;
  }

  if (data.name.length < 3) {
    alert("Your name must be more then 3 charachters");
    return;
  }

  const databaseOfEmails = ["xyz@gmail.com", "abc@gmail.com"];

  if (!databaseOfEmails.includes(data.email)) {
    alert("Your email is not registered in the database");
    return;
  }

  // const finalDataToBeShownUser = {
  //   ...data,
  //   token: generateToken(),
  // };

  console.log("Final Value in Data: ", {
    ...data,
    token: generateToken(),
  });

  alert(`You are successfully registered ${data.name}`);

  // window.location.reload();
});

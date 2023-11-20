// Adding student name and ID
var studentName = "Ansh Mukeshbhai Paghadal";
var studentID = "200544015";

document.addEventListener("DOMContentLoaded", function () {
  var studentInfo = document.createElement("p");
  studentInfo.textContent =
    "Student Name: " + studentName + " | Student ID: " + studentID;
  document.querySelector("main").insertAdjacentElement("afterend", studentInfo);
  studentInfo.style.textAlign = "center";
  var form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    var size = document.getElementById("size").value;
    var crust = document.getElementById("crust").value;

    var cheeseOptions = [];
    var cheeseCheckboxes = document.querySelectorAll(
      'input[name="toppings"][value^="Cheese"]:checked'
    );
    cheeseCheckboxes.forEach(function (checkbox) {
      cheeseOptions.push(checkbox.value);
    });
    var cheese = cheeseOptions.length > 0 ? cheeseOptions.join(", ") : "";

    var meat = document.querySelector('input[name="meat"]').value;

    var toppings = [];
    var toppingsCheckboxes = document.querySelectorAll(
      'input[name="toppings"]:checked'
    );
    toppingsCheckboxes.forEach(function (checkbox) {
      toppings.push(checkbox.value);
    });

    var firstName = document.querySelector('input[name="fname"]').value;
    var lastName = document.querySelector('input[name="lname"]').value;
    var email = document.querySelector('input[type="email"]').value;

    // Create Pizza object
    var pizza = new Pizza(
      size,
      crust,
      cheese,
      meat,
      toppings,
      firstName,
      lastName,
      email
    );

    // Create a container div for pizza details
    var pizzaDetailsContainer = document.createElement("div");
    pizzaDetailsContainer.style.padding = "20px";
    pizzaDetailsContainer.style.border = "2px solid black";
    pizzaDetailsContainer.style.margin = "0 auto";
    pizzaDetailsContainer.style.borderRadius = "5px";
    pizzaDetailsContainer.style.maxWidth = "680px";
    pizzaDetailsContainer.style.position = "fixed";
    pizzaDetailsContainer.style.top = "50%";
    pizzaDetailsContainer.style.left = "50%";
    pizzaDetailsContainer.style.transform = "translate(-50%, -50%)";
    pizzaDetailsContainer.style.background = "rgba(255, 255, 255)";
    pizzaDetailsContainer.style.zIndex = "999";
    document.body.appendChild(pizzaDetailsContainer);

    var pizzaDetails = document.createElement("div");
    pizzaDetails.innerHTML =
      "<h3>Order Confirmation:</h3>" +
      pizza.firstName +
      " " +
      pizza.lastName +
      ", for ordering with AP Pizza!</p>" +
      "<p>You have ordered a " +
      pizza.size +
      " pizza with " +
      pizza.crust +
      " crust, topped with " +
      pizza.cheese +
      " cheese and " +
      pizza.meat +
      ".</p>" +
      "<p>Toppings: " +
      (pizza.toppings.length > 0 ? pizza.toppings.join(", ") : "None") +
      "</p>" +
      "<p>An email confirmation will be sent to: " +
      pizza.email +
      "</p>";

    pizzaDetailsContainer.appendChild(pizzaDetails);
  });
});

// Pizza class
class Pizza {
  constructor(size, crust, cheese, meat, toppings, firstName, lastName, email) {
    this.size = size;
    this.crust = crust;
    this.cheese = cheese;
    this.meat = meat;
    this.toppings = toppings;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }
}

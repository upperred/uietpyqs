var name = prompt("what is your name?");
alert("hello " +  name );


// Get all elements with the class "bun"
const bunElements = document.querySelectorAll(".bun");

// Loop through the selected elements and add a click event listener to each
bunElements.forEach((bun) => {
  bun.addEventListener("click", handleClick);
});

function handleClick() {
  alert("I got clicked");
}


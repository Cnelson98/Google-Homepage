function getSearchValue() {
  document
    .getElementById("searchButton")
    .addEventListener("click", logSearchValue);
}

function logSearchValue() {
  let input = document.getElementById("search").value;

  console.log(input);

  if (input.length !== 0) {
    window.location.href = "https://www.google.com/search?q=" + input;
  } else {
    alert("Please Enter In Search Bar");
  }
}

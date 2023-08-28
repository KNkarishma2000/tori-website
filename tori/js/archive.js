document.getElementById("viewMoreBtn").addEventListener("click", function() {
  const cardContainer = document.querySelector(".card-container");
  cardContainer.classList.toggle("hide-cards");

  // Change the text of the button
  const viewMoreBtn = document.getElementById("viewMoreBtn");
  if (cardContainer.classList.contains("hide-cards")) {
    viewMoreBtn.textContent = "View Less";
  } else {
    viewMoreBtn.textContent = "View More";
  }
});

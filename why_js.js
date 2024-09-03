document.querySelectorAll(".heart-icon").forEach((icon) => {
  icon.addEventListener("click", () => {
    icon.style.color = "red"; // Change heart color to red on click
    alert("Thank you for clicking! 😊");
  });
});

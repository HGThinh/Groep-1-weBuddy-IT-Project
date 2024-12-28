// searchbar functionality
document.getElementById("searchButton").addEventListener("click", function() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const sections = document.querySelectorAll(".resource-card, .forum-question");
  
    sections.forEach((section) => {
      const text = section.innerText.toLowerCase();
      if (text.includes(searchInput)) {
        section.style.display = "block";
      } else {
        section.style.display = "none";
      }
    });
  });
  
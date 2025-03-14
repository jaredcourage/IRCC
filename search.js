function redirectToSearch() {
    let input = document.getElementById('searchInput').value.trim();

    if (input !== "") {
        // Redirect to search-results.html with query parameter
        window.location.href = `search-results.html?query=${encodeURIComponent(input)}`;
    } else {
        alert("Please enter a search term.");
    }
}





document.addEventListener("DOMContentLoaded", function () {
    function getQueryParameter(name) {
        let params = new URLSearchParams(window.location.search);
        return params.get(name);
    }

    let searchTerm = getQueryParameter("query");
    document.getElementById("searchInput").value = searchTerm; // Pre-fill search bar
    document.getElementById("searchInput").focus(); // Focus on search bar
    document.getElementById("searchTerm").textContent = searchTerm;

    let navLinks = [
        { text: "Home", url: "index.html" },
        { text: "Services", url: "services.html" },
        { text: "Apply for Job", url: "apply.html" },
        { text: "Contact", url: "contact.html" },
        { text: "Immigration", url: "immigration.html" },
        { text: "Visa", url: "visa.html" },
        { text: "Citizenship", url: "citizenship.html" }
    ];

    let resultsList = document.getElementById("resultsList");
    resultsList.innerHTML = ""; 

    let matchFound = false;

    navLinks.forEach(link => {
        if (link.text.toLowerCase().includes(searchTerm.toLowerCase())) {
            let newItem = document.createElement("li");
            newItem.innerHTML = `<a href="${link.url}">${link.text}</a>`;
            resultsList.appendChild(newItem);
            matchFound = true;
        }
    });

    if (!matchFound) {
        resultsList.innerHTML = "<li>No results found.</li>";
    }
});

// Function for searching again
function redirectToSearch() {
    let input = document.getElementById('searchInput').value.trim();
    if (input !== "") {
        window.location.href = `search-results.html?query=${encodeURIComponent(input)}`;
    } else {
        alert("Please enter a search term.");
    }
}





const toggle_btn = document.querySelector('.toggle_btn')
const toggle_btnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')


 toggle_btn.onclick = function () {
   dropDownMenu.classList.toggle('open')
   const isOpen = dropDownMenu.classList.contains('open')

   toggle_btnIcon.classList = isOpen
   ? 'fa-solid fa-xmark'
   : 'fa-solid fa-chevron-down'
 

 }



 


 document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const menuList = document.getElementById("links");
    const sectionDiv = document.querySelector(".section-div");

    menuToggle.addEventListener("click", function () {
        if (menuList.classList.contains("hidden")) {
            menuList.classList.remove("hidden");
            sectionDiv.style.marginTop = `${menuList.offsetHeight + 20}px`; // Move section down
        } else {
            menuList.classList.add("hidden");
            sectionDiv.style.marginTop = "20px"; // Reset position
        }
    });
});















/// the codes for getting  search button


document.addEventListener("DOMContentLoaded", function () {
    // Toggle filter options
    document.querySelectorAll(".toggle-btn-1").forEach(button => {
        button.addEventListener("click", function () {
            let filterOptions = this.parentElement.nextElementSibling;
            if (filterOptions.style.display === "block") {
                filterOptions.style.display = "none";
                this.textContent = "+";
            } else {
                filterOptions.style.display = "block";
                this.textContent = "-";
            }
        });
    });

    // Search functionality
    document.getElementById("search-btn").addEventListener("click", function () {
        let searchQuery = document.getElementById("search-input").value.toLowerCase();
        let selectedCategory = document.querySelector('input[name="category"]:checked');
        let selectedPrice = document.querySelector('input[name="price"]:checked');

        let category = selectedCategory ? selectedCategory.value : "Any";
        let price = selectedPrice ? selectedPrice.value : "Any";

        let resultsContainer = document.getElementById("results");
        resultsContainer.innerHTML = "";

        // Example search results
        let results = [
            { title: "AI in 2025", sub: "Technology", desc: "Future of AI and Machine Learning.", price: "Paid" },
            { title: "Healthy Living", sub: "Health", desc: "How to stay fit and eat healthy.", price: "Free" },
            { title: "Stock Market Tips", sub: "Finance", desc: "Learn the basics of investing.", price: "Paid" },
        ];

        let filteredResults = results.filter(result =>
            (category === "Any" || result.sub === category) &&
            (price === "Any" || result.price === price) &&
            (searchQuery === "" || result.title.toLowerCase().includes(searchQuery))
        );

        if (filteredResults.length === 0) {
            resultsContainer.innerHTML = "<p>No results found.</p>";
        } else {
            filteredResults.forEach(result => {
                let div = document.createElement("div");
                div.classList.add("result-item");
                div.innerHTML = `
                    <h1>${result.title}</h1>
                    <h2>${result.sub}</h2>
                    <p>${result.desc}</p>
                    <p class="price">${result.price} - Not Accepting Applications</p>
                `;
                resultsContainer.appendChild(div);
            });
        }
    });
});


// feedback

function showFeedback() {
    // Hide the feedback box
    document.getElementById("feedback-box").style.display = "none";
    
    // Show the feedback message
    document.getElementById("thank-you-message").style.display = "flex";
}








///////





document.addEventListener('DOMContentLoaded', function() {
    const headers = document.querySelectorAll('.step-header i'); // Select only the icon

    headers.forEach(icon => {
        icon.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevent triggering the parent click event

            // Set the URL where you want to navigate
            window.location.href = "http://127.0.0.1:5500/css/index.html"; // Change to your desired URL
        });
    });
});





///////


document.addEventListener('DOMContentLoaded', function() {
    const headers = document.querySelectorAll('.step-head');

    headers.forEach(header => {
        header.addEventListener('click', function() {
            const content = this.nextElementSibling;
            const icon = this.querySelector('i');

            if (content.style.display === 'block') {
                content.style.display = 'none';
                icon.style.transform = 'rotate(0deg)';
            } else {
                content.style.display = 'block';
                icon.style.transform = 'rotate(90deg)';
            }
        });
    });
});






  //////



  function goToCountryInfo() {
    const countrySelect = document.getElementById("countrySelect");
    const selectedCountry = countrySelect.value;
  
    if (selectedCountry) {
      // Redirect to different pages based on the selected country
      switch (selectedCountry) {
        case "USA":
          window.location.href = "https://travel.gc.ca/";
          break;
        case "UK":
          window.location.href = "http://127.0.0.1:5500/countryPages/uk.html";
          break;
        case "Canada":
          window.location.href = "http://127.0.0.1:5500/countryPages/canada.html";
          break;
        case "Australia":
          window.location.href = "http://127.0.0.1:5500/countryPages/australia.html";
          break;
        case "India":
          window.location.href = "http://127.0.0.1:5500/countryPages/india.html";
          break;
        default:
          alert("Country not found.");
      }
    } else {
      alert("Please select a country.");
    }
  }
  






  
  

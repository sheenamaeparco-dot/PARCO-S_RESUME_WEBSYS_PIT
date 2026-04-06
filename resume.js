$(document).ready(function () {

    $('#darkModeBtn').on('click', function () {
    $('body').toggleClass('dark-mode');

    if ($('body').hasClass('dark-mode')) {
        $(this).text('Light Mode');
    } else {
        $(this).text('Dark Mode');
    }
});
    
// --- FEATURE 1 ---
    const visitorName = prompt("Welcome! What is your name?");
    if (visitorName) {
        const welcomeArea = document.getElementById("about"); 
        const greeting = document.createElement("p"); 
        greeting.innerText = "Welcome, " + visitorName + "!";
        greeting.style.color = "#4FB3D9";
        greeting.style.fontWeight = "bold";
        welcomeArea.prepend(greeting);
    }

    // --- FEATURE 2 ---
    const contactForm = document.getElementById("contactForm");
    contactForm.onsubmit = function(event) {
        const nameInput = document.getElementById("name").value.trim();
        const emailInput = document.getElementById("email").value.trim();
        const messageInput = document.getElementById("message").value.trim();

if (nameInput === "" || emailInput === "" || messageInput === "") {
    alert("Please fill in your name, email, and message!");
    event.preventDefault();
} else {
    alert("Success! Message sent.");
    event.preventDefault();
}
    };

    // --- INTERACTION 1  ---
    $('.projects h3').on('click', function() {
        $('.projects ul').toggle(); // Rubric: Use toggle() method
        
        // INTERACTION 2 
        if ($('.projects ul').is(':visible')) {
            $(this).text("PROJECTS (Click to Hide)");
        } else {
            $(this).text("PROJECTS (Click to Show)");
        }
    });

    $('.skillsList li').on('click', function() {
        $(this).css('color', 'skyblue'); 
        console.log("Skill selected: " + $(this).text()); 
    });
});

// --- FEATURE 3 
$('#skillSearch').on('keyup', function() {
    let value = $(this).val().toLowerCase();

    $('.skillsList li').filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
});


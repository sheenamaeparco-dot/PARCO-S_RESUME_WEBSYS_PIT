# PROMPTS.md
Appendix B: AI Prompt Log (Template)

Entry #1
Tool Used: ChatGPT
Prompt:
"How to create a contact form with JavaScript validation?"
AI Output:
Provided a script using document.getElementById to capture form inputs and an if/else statement to check for empty values. It also included event.preventDefault() to stop the page from refreshing if the form is invalid.
How I used/modified it in my project:
I added this to my js/resume.js file. Now, if a user tries to click "Send" without typing their name or email, an alert pops up instead of the page breaking.

Entry #2
Tool Used: ChatGPT
Prompt:
"How can I add interactivity to a web resume using JavaScript and jQuery?"
AI Output:
Provided guidance on using JavaScript/jQuery for clickable links, form validation, and dynamic content updates.
How I used/modified it in my project:
I implemented a contact form with basic validation and dynamic updates to the skills section, like a search filter.

Entry #3
Tool Used: ChatGPT
Prompt:
"How to create a toggle effect for showing and hiding resume sections?"
AI Output:
Sample code using jQuery's .toggle() method to show/hide elements.
How I used/modified it in my project:
I applied this to the "Projects" section, allowing users to show or hide projects when they click the header.

Entry #4
Tool Used: ChatGPT
Prompt:
"Create a script to greet the user by their name when they first visit the resume website."
AI Output:
JavaScript code that asks the user for their name and displays a greeting.
How I used/modified it in my project:
Used this to display a personalized welcome message on the About section based on the user's input.

Entry #5
Tool Used: ChatGPT
Prompt:
"Give me CSS styles to make a sidebar look modern and clean."
AI Output:
Recommended a modern sidebar design using flexbox and a dark color scheme.
How I used/modified it in my project:
Used the suggested styles for my sidebar and adjusted the color scheme to match my design.

Entry #6
Tool Used: ChatGPT
Prompt:
"Create an interactive button that toggles between dark and light modes for the resume."
AI Output:
Provided JavaScript and CSS for switching between two themes.
How I used/modified it in my project:
I added the dark/light mode toggle, allowing the user to switch between the two themes using a button.

Entry #7
Tool Used: ChatGPT
Prompt:
"Can you help me create a dynamic list filter for my skills section?"
AI Output:
Provided code for a basic search/filter function using jQuery.
How I used/modified it in my project:
I used this to filter through the skills list based on the text entered in the search bar.

Entry #8
Tool Used: ChatGPT
Prompt:
"How do I center a div vertically and horizontally using flexbox?"
AI Output:
Demonstrated using display: flex, justify-content, and align-items for centering.
How I used/modified it in my project:
I applied flexbox to center the header content and profile image.

Entry #9
Tool Used: ChatGPT
Prompt:
"What’s the best way to style a form and make it user-friendly?"
AI Output:
Suggested using padding, borders, and background colors to make form fields visually clear.
How I used/modified it in my project:
Styled the contact form to be clean and easy to read with modern UI elements.

Entry #10
Tool Used: ChatGPT
Prompt:
"How do I add a smooth scrolling effect to my one-page resume?"
AI Output:
Explained how to use scroll-behavior: smooth in CSS for smooth scrolling between sections.
How I used/modified it in my project:
I added this property to enable smooth scrolling when users click on the navigation links.

Entry #11
Tool Used: ChatGPT
Prompt: 
"How can I display the contact form without page refresh?"
AI Output: Explained the use of the event.preventDefault() method within a JavaScript submit event listener. This keeps the user on the same page after they click "Send," allowing a "Thank You" message to appear instead of a blank white screen.
How I used/modified it in my project: 
I applied this to my #contact-form ID in my js/resume.js file. I modified the code to trigger a simple alert("Message Sent!") to give the user feedback before clearing the input fields manually.

Entry #12
Tool Used: ChatGPT
Prompt: "How to create a personalized greeting when the page loads?"
AI Output: AI provided the JavaScript solution to ask for the visitor’s name with prompt() and display it on the page.
How I used/modified it in my project: I used this code to display a personalized greeting at the top of my page as soon as the user lands on it, creating a more engaging user experience.

Entry #13
Tool Used: ChatGPT
Prompt: "How to create a personalized greeting when the page loads?"
AI Output: AI provided the JavaScript solution to ask for the visitor’s name with prompt() and display it on the page.
How I used/modified it in my project: I used this code to display a personalized greeting at the top of my page as soon as the user lands on it, creating a more engaging user experience.

Entry #14
Tool Used: ChatGPT
Prompt: "How to fix the layout and spacing issues on my resume?"
AI Output: AI guided me on using Flexbox to control gaps, padding, and alignment between sections.
How I used/modified it in my project: I applied Flexbox to adjust the alignment of my resume sections, ensuring no overlap and better organization.

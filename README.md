# 🌟HNG Stage 1 Task — Multi-page Profile Website

This is a 3-page static website built for the HNG Internship (Stage 1). It expands on the original Stage 0 profile card by adding a reflective "About Me" page and a functional "Contact Us" page with client-side form validation.

The project is built with vanilla HTML, CSS, and JavaScript, focusing on responsiveness, accessibility, and semantic markup.

## 💡Pages & Features 

This project consists of three main pages:

### 🏠 1. Home Page (`index.html`) 
* **Dynamic Profile Card 📇**: Displays user information, including an avatar, bio, hobbies, and dislikes.
* **Real-time Clock ⏰**: A dynamic clock that updates every 100 milliseconds to show the current time.
* **Avatar Upload 🖼️**: Users can upload and preview their own profile image.
* **Social Links 🔗**: Links to professional profiles (GitHub, LinkedIn, etc.).

### 🧑‍💻 2. About Me Page (`about.html`) 
* **Reflective Sections 🧠**: A dedicated page sharing details about my bio, goals in the HNG program, areas of confidence, and a note to my future self.
* **Semantic Structure 🧱**: Uses `<main>`, `<section>`, and heading tags for a clear and accessible content hierarchy.

### 📨 3. Contact Us Page (`contact.html`)
* **Contact Form 📝**: A clean, accessible form for users to send a message.
* **Client-Side Validation ⚙️**: Built with vanilla JavaScript, the form validates:
    * All fields are required.
    * Email address must be in a valid format.
    * The message must be at least 10 characters long.
* **User Feedback 📣**: Provides clear success and error messages for each field, linked with `aria-describedby` for accessibility.

### General Features
* ✅ **Fully Responsive 📱💻**: Looks great on mobile, tablet, and desktop devices using CSS Flexbox and Grid.
* ♿ **Accessible**: Built with semantic HTML (nav, main, section, article) and ARIA attributes.
* 🌙 **Dark Mode Ready**: Adapts to the user's system preference (`prefers-color-scheme`).
* ⌨️ **Keyboard Navigable**: All interactive elements are reachable and usable via keyboard.

---

## 🛠️ Tech Stack

* **HTML5**: For structure and semantics.
* **CSS3**: For all styling, responsiveness, and dark mode.
* **Vanilla JavaScript**: For all interactivity, including the real-time clock, avatar upload, and contact form validation.

---

## 💻 Getting Started

To run this project locally:

1.  **Clone the repository:**
    ```bash
     git clone https://github.com/00Yila/Multi-page-Profile.git
    ```
2.  **Navigate to the directory:**
    ```bash
    cd Multi-page-Profile
    ```
3.  **Run the project:**
    * Simply open the `index.html` file in your web browser.
    * **Recommended:** Use the **"Live Server"** extension in VS Code. Right-click `index.html` and select "Open with Live Server" for automatic reloading on save.

---

## 🧩 Task Requirements (Data-Test IDs)

This project includes all required `data-testid` attributes for testing purposes.

### Home Page
* `data-testid="test-profile-card"`
* `data-testid="test-user-name"`
* `data-testid="test-user-bio"`
* `data-testid="test-user-time"`
* `data-testid="test-user-avatar"`
* `data-testid="test-user-social-links"`
* `data-testid="test-user-social-twitter"`
* `data-testid="test-user-social-github"`
* `data-testid="test-user-social-linkedin"`
* `data-testid="test-user-hobbies"`
* `data-testid="test-user-dislikes"`

### Contact Page
* `data-testid="test-contact-name"`
* `data-testid="test-contact-email"`
* `data-testid="test-contact-subject"`
* `data-testid="test-contact-message"`
* `data-testid="test-contact-submit"`
* `data-testid="test-contact-success"`
* `data-testid="test-contact-error-name"`
* `data-testid="test-contact-error-email"`
* `data-testid="test-contact-error-subject"`
* `data-testid="test-contact-error-message"`

### About Page
* `data-testid="test-about-page"`
* `data-testid="test-about-bio"`
* `data-testid="test-about-goals"`
* `data-testid="test-about-confidence"`
* `data-testid="test-about-future-note"`
* `data-testid="test-about-extra"`

---

## 👤 Author

* **David-Pari K. Arabs**
* GitHub: [@00Yila](https://github.com/00Yila)
* LinkedIn: [David-Pari Arabs](https://www.linkedin.com/in/david-pari-arabs)
* Twitter: [@Whyte_prime](https://x.com/Whyte_prime)

## 🪄 Acknowledgments

This project was developed as part of HNG Internship Stage-1 frontend-track task.

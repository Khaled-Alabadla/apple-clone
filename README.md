# Apple Clone Project

This is a functional Vanilla HTML, CSS, and JS architecture for a 4-person team to collaborate on cloning Apple.com.

## Folder Structure
- `index.html`: The main entry page.
- `store.html`, `iphone.html`, etc.: These pages will be created by team members.
- `assets/css/variables.css`: Contains CSS variables to control light and dark modes.
- `assets/css/global.css`: Base typography and resets.
- `assets/css/header.css`: Apple-style fixed blurry navbar.
- `assets/js/main.js`: Handles theme toggling and GSAP initializations.
- `assets/images/`: Put all your `.png` and `.jpg` files here.
- `assets/icons/`: Put `.svg` icons here.

## How to Collaborate (Git Workflow)
Avoid editing `index.html` all at the same time if possible. 

1. **Create your branch:**
   ```bash
   git checkout -b feature/your-feature-name
   ```
2. **Work within Comments:** 
   In `index.html`, always wrap your work in HTML comments so the team leader knows what section it is:
   ```html
   <!-- START: iPhone Section -->
   <section class="iphone-section">
      ...
   </section>
   <!-- END: iPhone Section -->
   ```
3. **Commit & Push:**
   ```bash
   git add .
   git commit -m "Added iPhone Section"
   git push origin feature/your-feature-name
   ```
4. **Open a Pull Request:** Ask the Team Leader to review your changes.

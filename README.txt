# CleverBright StoryWorks — Children's Book Marketing Portfolio

This is a multi-page, responsive static website starter designed for a children's book marketing team.

## Files
- `index.html` — home page
- `services.html` — services
- `portfolio.html` — portfolio gallery with category filters
- `reviews.html` — author review/testimonial page
- `team.html` — founder and team profiles
- `contact.html` — enquiry form that prepares an email
- `styles.css` — shared colors, layout, typography, and responsive styles
- `script.js` — mobile menu, portfolio filters, and email form behavior

## Important before publishing
1. Replace `CleverBright StoryWorks` if you choose another business name.
2. Replace `hello@example.com` in `script.js`, `contact.html`, and footer links with your real team email.
3. Replace placeholder names, roles, bios, and the emoji/photo placeholders in `team.html` with real information and photos used with permission.
4. Replace sample portfolio mockups with your real client work. Do not describe concept mockups as paid client projects.
5. Replace sample reviews with genuine, permission-approved author testimonials. Never invent endorsements.
6. Confirm you have the necessary rights and permissions for book covers, excerpts, narration, music, and promotional assets.
7. The contact form uses `mailto:` and does not store submissions. A serverless form provider would be needed for a form that sends directly without opening the visitor's email app.

## Publish free with GitHub Pages
1. Create a GitHub account.
2. Create a public repository named `YOUR-USERNAME.github.io`.
3. Upload all files from this folder to the repository root.
4. In repository Settings → Pages, choose “Deploy from a branch”, select `main` and `/(root)`, then save.
5. Visit `https://YOUR-USERNAME.github.io` after deployment completes.

## How to add a new page later
1. Copy an existing page such as `services.html` and rename the copy (example: `genres.html`).
2. Update the page title and main content.
3. Add a link to the new page in the navigation on each HTML file, and optionally in the footer.
4. Upload the changed files to GitHub. GitHub Pages will republish the site.

This website uses HTML, CSS, and JavaScript only. No paid software or build process is required.


## Add a team member
Open `team.html` in a text editor. Find `<div class="team-grid">`, copy one complete `<article class="person"> ... </article>` card, paste it before the closing `</div>` for the grid, and edit the name, role, bio, email, and photo area. Save and upload the updated `team.html` to GitHub.

## Change the contact email
Search all HTML files and `script.js` for `hello@example.com`, then replace it with your real team inbox. The contact form is a `mailto:` helper: it opens the visitor's default email application and does not store messages.

## Add a new page
Copy a page file, edit its `<title>` and page content, then add a navigation link in each HTML file inside the `<nav class="nav-links">` element. Upload all updated files to your GitHub repository.

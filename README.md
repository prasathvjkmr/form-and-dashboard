# IDRIVE Dashboard & Registration UI

A responsive web dashboard and registration form built with HTML, SCSS, and JavaScript.

## Features

- **Dashboard UI**: Sidebar navigation, header with theme switcher, search, and notification/profile icons.
- **Responsive Design**: Mobile-friendly layout with hamburger menu.
- **Theme Support**: Light, dark, and auto (system) themes.
- **Registration Form**: Client-side validation for user registration.
- **Invoice & Sales Pages**: Example data tables for invoices, sales, and recent activity.
- **SCSS Architecture**: Modular SCSS with abstracts, base, components, and themes.

## Project Structure

- `*.html` — Main HTML pages (dashboard, register, invoice, etc.)
- `assets/images/` — SVG icons and logo.
- `assets/js/` — JavaScript for UI logic and validation.
- `assets/sass/` — SCSS source files (compiled to `style.css`).

## Getting Started

1. **Clone or Download** this repository.
2. **Install Live Server** (optional, for local development).
3. **Open `dashboard.html` or `register.html`** in your browser.

> No build step is required if you use the provided `assets/sass/style.css`.  
> To modify styles, edit SCSS files in `assets/sass/` and recompile using a SCSS compiler.

## SCSS Compilation

If you want to edit styles:

```sh
# Install Sass globally if not already installed
npm install -g sass

# Compile SCSS to CSS
sass assets/sass/style.scss assets/sass/style.css
```

## Customization

- **Theme Colors**: Edit variables in [`assets/sass/abstracts/_variables.scss`](assets/sass/abstracts/_variables.scss).
- **Sidebar & Header**: Modify components in [`assets/sass/components/`](assets/sass/components/).
- **Form Validation**: Update logic in [`assets/js/register.js`](assets/js/register.js).

## License

MIT License

---

**Preview**

![Dashboard Screenshot](assets/images/logo.svg)

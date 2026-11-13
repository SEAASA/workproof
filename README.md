# WorkProof Official Website & Landing Portal

Modern, responsive, SEO-optimized landing website for the **WorkProof** Android app — built with a high-contrast **Deep Carbon Black, Optical Yellow, and Pure White** design system.

Features:
- **Home Page (`index.html`)**: Complete showcase of WorkProof's forensic GPS geotag camera, real-time telemetry HUD, cryptographic pixel verification, automated PDF report generator, satellite field mapping, and theme engine.
- **Privacy Policy (`privacy.html`)**: Transparent, GDPR-compliant privacy document outlining WorkProof's zero-cloud architecture and Android permissions.
- **Terms & Conditions (`terms.html`)**: Evidentiary disclaimers, permitted use, and local device custody terms.
- **Custom 404 Page (`404.html`)**: Styled error fallback for GitHub Pages.
- **Search Engine Optimization**: Complete Open Graph, Twitter Cards, Schema.org JSON-LD Structured Data, `sitemap.xml`, `robots.txt`, and Web App Manifest (`site.webmanifest`).

---

## 🚀 How to Host for Free on GitHub Pages (Step-by-Step)

GitHub Pages provides **100% free, fast, SSL-secured static website hosting** with automatic global CDN delivery.

### Option A: Create a New GitHub Repository for the Website

If you want to host the website in its own repository (e.g. `workproof-web`):

1. **Initialize Git in the `Workproof Web` folder:**
   Open PowerShell or Terminal inside `C:\ANTIGRAVITYPROJECTS\Workproof Web`:
   ```bash
   cd "C:\ANTIGRAVITYPROJECTS\Workproof Web"
   git init
   git add .
   git commit -m "Initial commit: WorkProof landing site, privacy policy, and terms"
   ```

2. **Create a new repository on GitHub:**
   - Log into [GitHub.com](https://github.com).
   - Click the **`+`** icon at the top right &rarr; **New repository**.
   - Set the Repository name (e.g., `workproof` or `workproof-web`).
   - Keep it **Public** (required for free GitHub Pages on personal accounts).
   - Leave "Initialize with README" **unchecked** (since you already have one).
   - Click **Create repository**.

3. **Link your local repository and push:**
   ```bash
   git branch -M main
   git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/<YOUR_REPO_NAME>.git
   git push -u origin main
   ```

4. **Enable GitHub Pages:**
   - In your GitHub repository, click on **Settings** (tab at the top).
   - In the left sidebar, click **Pages** (under the "Code and automation" section).
   - Under **Build and deployment**:
     - **Source**: Select `Deploy from a branch`.
     - **Branch**: Select `main` and folder `/ (root)`.
     - Click **Save**.

5. **Your Site is Live! 🎉**
   - GitHub will build and deploy your site within 60 to 90 seconds.
   - Your live website URL will be:
     `https://<YOUR_GITHUB_USERNAME>.github.io/<YOUR_REPO_NAME>/`
   - You will see a green checkmark with: *"Your site is live at..."*

---

### Option B: Host as Your Main GitHub Profile Site (`username.github.io`)

If you want the site to load directly at `https://<YOUR_USERNAME>.github.io`:

1. Name your repository exactly: `<YOUR_USERNAME>.github.io`
2. Push this folder to the `main` branch.
3. GitHub Pages automatically enables itself and serves `index.html` at `https://<YOUR_USERNAME>.github.io/`.

---

### Option C: Adding a Custom Domain (Optional)

If you own a custom domain (e.g., `workproof.app` or `workproof.io`):
1. In your GitHub repository, go to **Settings &rarr; Pages**.
2. Under **Custom domain**, type your domain name (e.g. `workproof.app`) and click **Save**.
3. In your DNS provider (e.g. Cloudflare, Namecheap, GoDaddy), add:
   - **4 A Records** pointing `@` to GitHub Pages IPs:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - **1 CNAME Record** pointing `www` to `<YOUR_USERNAME>.github.io`.
4. Check **Enforce HTTPS** in GitHub repository settings.

---

## 💻 Local Preview (Testing on Your Computer)

You can preview the website instantly using any local HTTP server:

### Using Python (Pre-installed):
```bash
cd "C:\ANTIGRAVITYPROJECTS\Workproof Web"
python -m http.server 8000
```
Open [http://localhost:8000](http://localhost:8000) in your browser.

### Using VS Code:
Right-click `index.html` and select **"Open with Live Server"**.

---

## 📁 Repository Structure

```text
Workproof Web/
├── index.html                  # Main landing page with full feature tour & FAQ
├── privacy.html                # Comprehensive Privacy Policy
├── terms.html                  # Terms and Conditions of Use
├── 404.html                    # Custom 404 error page
├── sitemap.xml                 # Search engine sitemap
├── robots.txt                  # Search bot indexing rules
├── site.webmanifest            # PWA & Web App Manifest
├── favicon.ico                 # Browser icon
├── .nojekyll                   # Prevents Jekyll filtering on GitHub Pages
├── .gitignore                  # Ignores large open-source folders & temp files
└── assets/
    ├── css/
    │   └── style.css           # Black & Optical Yellow design system
    ├── js/
    │   └── main.js            # Lightbox, gallery filtering, and FAQ accordion
    └── images/
        ├── logo.png            # Clean transparent WorkProof logo
        ├── logo-square.png     # Square logo emblem
        ├── bg_topo_map.webp    # Topographic grid background
        ├── screenshots/        # High-resolution screenshots of the app
        └── themes/             # Theme engine showcases
```

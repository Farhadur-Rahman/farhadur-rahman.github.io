# Dr. Md Farhadur Rahman — Portfolio Website

A multi-page academic portfolio with collapsible sidebar navigation, 
enhanced LiDAR point cloud background, and dedicated project pages.

---

## 📁 File Structure

```
professor-portfolio/
├── index.html                        ← Main page (all sections)
├── css/
│   └── style.css                     ← All styling — edit here for design changes
├── js/
│   ├── lidar.js                      ← Three.js LiDAR background animation
│   ├── sidebar.js                    ← Sidebar open/close, scroll-spy
│   └── main.js                       ← Publications filter + fade animations
├── pages/
│   ├── project-liana-lidar.html      ← Liana & LiDAR project page
│   ├── project-smart-agriculture.html ← SMART Agriculture / UAV page
│   ├── project-surf-it.html          ← SURF-IT flood forecasting page
│   └── project-espar.html            ← ESPAR climate farming page
├── images/
│   ├── profile.jpg                   ← YOUR PHOTO (add this!)
│   ├── liana-hero.jpg                ← Project hero images (add these)
│   └── ...                           ← All project + gallery photos go here
├── .github/
│   └── workflows/
│       └── deploy.yml                ← Auto-deploys to GitHub Pages on push
└── README.md                         ← This file
```

---

## 🖼 Adding Your Profile Photo

1. Put your photo inside the `images/` folder
2. Name it exactly `profile.jpg`
3. The website will automatically display it

For best results: use a portrait photo, at least 600×800 pixels.

---

## 🖼 Adding Project Photos

For each project page, there are placeholder divs like:
```html
<div class="project-img-placeholder">ADD PROJECT PHOTO HERE — images/liana-hero.jpg</div>
```

To replace a placeholder with a real image:
1. Add your image to the `images/` folder (e.g. `liana-hero.jpg`)
2. In the HTML, **delete** the `<div class="project-img-placeholder">` block
3. **Uncomment** (remove the `<!--` and `-->`) the `<img>` tag above it:
   ```html
   <img src="../images/liana-hero.jpg" alt="Liana infestation" class="project-hero-img" />
   ```

Same process for gallery images inside `.project-gallery` divs.

---

## ✏️ Editing Content in VS Code

Open the folder in VS Code:
```
File → Open Folder → select professor-portfolio/
```

### Changing text on the main page
- Open `index.html`
- Use **Ctrl+F** (or Cmd+F on Mac) to search for any text you want to change
- Edit directly — the site needs no build step

### Changing colors or fonts
- Open `css/style.css`
- Scroll to the `:root { }` block at the top — all colors are CSS variables:
  ```css
  --gold:    #c9a84c   /* accent color */
  --emerald: #2dd4a0   /* secondary accent */
  --navy:    #080c18   /* background */
  ```
- Change any value and save — done!

### Adding a new project page
1. Copy `pages/project-liana-lidar.html` 
2. Rename it to `pages/project-your-project.html`
3. Edit the content inside
4. Add a link in the sidebar of `index.html`:
   ```html
   <li><a href="pages/project-your-project.html"><span class="nav-num">→</span> Your Project</a></li>
   ```
5. Add the same link in all other page sidebars too

### Adding a new publication
- Open `js/main.js`
- Find the `const PUBS = [` array at the top
- Copy an existing entry and update it:
  ```javascript
  {
    year: 2026,
    authors: "Author, A., Rahman, M. F., et al.",
    title: "Title of the paper",
    journal: "Journal Name",
    doi: "https://doi.org/10.xxxx/xxxxx",
    tags: ["Tag1", "Tag2", "Bangladesh"]
  },
  ```
- Save. The publications page updates automatically.

---

## 🚀 Publishing on GitHub Pages

### First time setup

1. **Create a GitHub account** at github.com (if you don't have one)

2. **Create a new repository**:
   - Go to github.com → click "+" → "New repository"
   - Name it: `farhadur-rahman` (or any name you like)
   - Set it to **Public**
   - Do NOT initialise with README

3. **Upload your files** (easiest way — no command line needed):
   - On the new repo page, click **"uploading an existing file"**
   - Drag and drop your entire `professor-portfolio/` folder
   - Add commit message: "Initial site upload"
   - Click **"Commit changes"**

4. **Enable GitHub Pages**:
   - Go to repository **Settings** → **Pages**
   - Source: **GitHub Actions**
   - The `.github/workflows/deploy.yml` file handles deployment automatically

5. **Your site will be live at**:
   ```
   https://YOUR-USERNAME.github.io/REPOSITORY-NAME/
   ```

### Updating the site after changes

If you make changes in VS Code:
- Save your files
- Go to your GitHub repository
- Click the file you changed → pencil icon to edit → paste new content → commit
- The site auto-deploys in ~1-2 minutes

OR use GitHub Desktop app (easiest for beginners):
- Download from desktop.github.com
- Sync changes with one click

---

## 🔧 Advanced: Running Locally

Open `index.html` directly in a browser — no server needed for basic viewing.

For full functionality (font loading, etc.):
```bash
# Python 3
python -m http.server 8000
# Open: http://localhost:8000
```

---

## 📝 Adding Blog Posts (Future)

The current site doesn't have a blog, but you can add one:

1. Create a `blog/` folder
2. Copy `pages/project-liana-lidar.html` as a template
3. Use it to write posts — same format as project pages
4. Add blog links to the sidebar nav section

For a full blogging system (with listing page, dates, categories), 
consider upgrading to **Jekyll** (free, works with GitHub Pages):
- https://jekyllrb.com/docs/github-pages/

---

## 🎨 Design Reference

| Element | Font | Color |
|---------|------|-------|
| Headings | Cormorant Garamond | `#dde4f0` / `#c9a84c` |
| Body text | DM Sans | `#aab4c8` |
| Labels/codes | Space Mono | `#7a8699` |
| Accent gold | — | `#c9a84c` |
| Accent emerald | — | `#2dd4a0` |
| Background | — | `#080c18` |

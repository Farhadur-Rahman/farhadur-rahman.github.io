Dr. Md Farhadur Rahman — Academic Portfolio Website
Live Site: https://farhadur-rahman.github.io
Repository: github.com/Farhadur-Rahman/farhadur-rahman.github.io

About This Site
This is the personal academic portfolio website of Dr. Md Farhadur Rahman, Assistant Professor, Department of Remote Sensing and GIS, Gazipur Agricultural University (GAU), Bangladesh. The site showcases his research, publications, projects, and professional profile.
Built with plain HTML, CSS, and JavaScript — no frameworks, no build tools. Everything runs directly in the browser.

Live URL
https://farhadur-rahman.github.io

File Structure
farhadur-rahman.github.io/
│
├── index.html                        ← Main page (all sections)
│
├── css/
│   └── style.css                     ← All design and layout styles
│
├── js/
│   ├── lidar.js                      ← Animated LiDAR background
│   ├── sidebar.js                    ← Sidebar open/close behaviour
│   └── main.js                       ← Publications list and filter
│
├── pages/
│   ├── specialization.html           ← UAV platforms and skills page
│   ├── project-liana-lidar.html      ← Liana & LiDAR project details
│   ├── project-smart-agriculture.html← SMART Agriculture project
│   ├── project-surf-it.html          ← SURF-IT project details
│   └── project-espar.html            ← ESPAR project details
│
├── images/                           ← ALL photos go in this folder
│   ├── profile.jpg                   ← Your profile photo
│   ├── liana-hero.jpg                ← Liana project hero image
│   ├── uav-air3s.jpg                 ← DJI Air 3S photo
│   ├── uav-inspire2.jpg              ← DJI Inspire 2 photo
│   ├── uav-m300.jpg                  ← Matrice 300 RTK photo
│   └── uav-m350.jpg                  ← Matrice 350 RTK photo
│
└── README.md                         ← This file

How to Edit the Site
You can edit everything directly on GitHub — no software needed.
Step 1 — Go to the repository
Visit github.com/Farhadur-Rahman/farhadur-rahman.github.io and log in.
Step 2 — Open any file
Click the file you want to edit (e.g. index.html).
Step 3 — Edit
Click the pencil icon ✏️ at the top right of the file.
Step 4 — Save
Scroll down → click "Commit changes" → click "Commit changes" again.
The site updates automatically within 1–2 minutes.

Common Editing Tasks
✏️ Change your name, title, or bio

Open index.html
Press Ctrl+F in your browser to search for the text you want to change
Edit it → Commit


📸 Add or replace a photo

Go to the repository on GitHub
Click the images/ folder
Click "Add file" → "Upload files"
Upload your photo
Important: Name it exactly as expected (see table below)
Click "Commit changes"

PhotoFile nameYour profile photoprofile.jpgLiana project main imageliana-hero.jpgDJI Air 3Suav-air3s.jpgDJI Inspire 2uav-inspire2.jpgMatrice 300 RTKuav-m300.jpgMatrice 350 RTKuav-m350.jpg

Tip: If your photo is a .png file, you can either rename it to .jpg or update the src in the HTML to match the correct extension.


📄 Add a new publication

Open js/main.js
Find the line that says const PUBS = [
Add a new entry at the top (for newest first):

javascript{
  year: 2026,
  authors: "Your Author, A., Rahman, M. F., et al.",
  title: "Title of your new paper here",
  journal: "Journal Name",
  doi: "https://doi.org/10.xxxx/xxxxxx",
  tags: ["Tag1", "Tag2", "Bangladesh"]
},

Commit — the publication appears on the site automatically.


Tags tip: Use tags like "LiDAR", "UAV", "Bangladesh" so the filter buttons work correctly.


🗂️ Add a new project page

Go to the pages/ folder on GitHub
Open any existing project file (e.g. project-liana-lidar.html)
Click the pencil icon → Select all → Copy
Go back to pages/ folder → Click "Add file" → "Create new file"
Name it: project-yourproject.html
Paste the copied content and edit the text
Commit

Then add a link to it in index.html inside the sidebar section:
html<li><a href="pages/project-yourproject.html">Your Project Name</a></li>

🎨 Change colors
All colors are defined at the top of css/style.css inside :root { }:
css:root {
  --gold:    #c9a84c;   /* gold accent color */
  --emerald: #2dd4a0;   /* green accent color */
  --navy:    #080c18;   /* dark background */
}
Change any value and commit — the whole site updates.

📞 Update contact information

Open index.html
Search for farhad.rsgis@gau.edu.bd to find the contact section
Edit email, phone, or location
Commit


Adding Collaborators
To give someone else access to edit this repository:

Go to Settings → Collaborators
Click "Invite collaborators"
Enter their GitHub username
They accept the email invitation
They now have full edit access


How the Site Deploys
Every time you commit a change to GitHub, the site automatically rebuilds and goes live within 1–2 minutes. No manual steps needed.
This is handled by GitHub Pages (Settings → Pages → Deploy from branch: main).

Technical Details
ItemDetailFrameworkNone — plain HTML/CSS/JS3D BackgroundThree.js r128 (LiDAR point cloud)FontsCormorant Garamond, DM Sans, Space Mono (Google Fonts)HostingGitHub Pages (free)Build stepNone required


Sudip Sen
GitHub: github.com/Sudip-Sen

Last updated: May 2026

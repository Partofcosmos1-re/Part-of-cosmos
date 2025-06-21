# Part of Cosmos Website

This is the source code for the Part of Cosmos website. It's a Progressive Web App (PWA) ready to be deployed.

## How to Make Your Website Live (for free)

You can host this website for free using services like Netlify, Vercel, or GitHub Pages. Here's a guide using Netlify, which is very user-friendly.

### Step 1: Push Your Code to GitHub

1.  **Create a GitHub Account:** If you don't have one, sign up at [https://github.com](https://github.com).
2.  **Create a New Repository:** Create a new, empty repository on GitHub. Do *not* initialize it with a README or .gitignore file.
3.  **Push Your Local Code to GitHub:** In your terminal, run the following commands, replacing `<your-github-repo-url>` with the URL of the repository you just created:
    ```bash
    git add .
    git commit -m "Initial commit"
    git branch -M main
    git remote add origin <your-github-repo-url>
    git push -u origin main
    ```

### Step 2: Deploy with Netlify

1.  **Sign Up for Netlify:** Go to [https://www.netlify.com](https://www.netlify.com) and sign up using your GitHub account.
2.  **Create a New Site:** Click "Add new site" -> "Import an existing project".
3.  **Connect to GitHub:** Choose GitHub and authorize Netlify to access your repositories.
4.  **Select Your Repository:** Find and select the repository you just pushed your website to.
5.  **Deploy:** The default settings should be correct. Just click "Deploy site".

Netlify will build and deploy your website, giving you a free `*.netlify.app` URL.

## How to Run Ads with Google AdSense

This website is set up with placeholders for Google AdSense.

1.  **Sign Up for Google AdSense:** Go to [https://www.google.com/adsense/start/](https://www.google.com/adsense/start/) and create an account. Your site will need to be reviewed and approved.
2.  **Get Your Publisher ID:** Once approved, find your unique publisher ID (it looks like `ca-pub-1234567890123456`).
3.  **Update `index.html`:** Open `index.html` and replace `ca-your-pub-id` in the AdSense script tag with your actual publisher ID.
4.  **Create Ad Units:** In your AdSense account, create ad units. Google will give you a piece of code for each ad unit.
5.  **Add Ad Units to Your Site:** Replace the `<!-- Ad unit placeholder -->` div in `index.html` with the code for your ad unit.

Your website is now ready! You've successfully prepared it for free hosting and ad integration. 
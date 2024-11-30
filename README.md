<h2 align="center">
  <p>🚀 Personal website built with Astro 4.0 🚀</p>
  <a href="https://www.cherniavskyi.dev/" target="_blank">www.cherniavskyi.dev</a>
</h2>

<div align="center">
  <img alt="Demo" src="./demo/theme.webp" />
  <img alt="Demo" src="./demo/insights.webp" />
</div>

<p align="center">
Code is licensed under MIT, words and images are licensed under <a href='https://creativecommons.org/licenses/by-nc-sa/4.0/'>CC BY-NC-SA 4.0</a>.
</p>

## 🚀 Getting Started

Follow these steps to set up and run the project locally:

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 16+ recommended)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. ```bash
    npm install
  ```

### Running the Development Server
1. Run: `npm run dev`

2. Open your browser and navigate to: `http://localhost:4321`

### Tailwind CSS and DaisyUI Integration

Tailwind CSS is pre-configured with `DaisyUI` for components.
To change the theme, edit the `tailwind.config.js` file or use DaisyUI’s theme switcher feature. Refer to the [DaisyUI documentation](https://daisyui.com/docs/themes/) for more details.

### Deployment

The project uses GitHub Actions for automated deployment to AWS S3 and CloudFront. To set up your deployment pipeline:

1.	Update the deployment configuration in .github/workflows/deploy.yml with your AWS credentials and S3 bucket details.
2.	Push changes to the main branch to trigger the deployment workflow.

Your application will be automatically deployed and accessible through your configured CloudFront distribution.

## ✨ All Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

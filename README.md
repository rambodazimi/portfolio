# Rambod Azimi · VS Code Portfolio

A VS Code themed portfolio for Rambod Azimi, AI Data Engineer at SoftSim and AI/ML researcher based in Montréal.

**Website:** https://rambodazimi.github.io/vscode-portfolio/

## Develop

Requires Node.js 22 and npm.

```bash
npm ci
npm run dev
```

Open http://localhost:3000. No API keys are required. The GitHub page reads public data in the browser and provides a profile link if the API is unavailable or rate-limited.

## Content

Edit `portfolio.config.ts` for biography, experience, skills, publications, projects, and contact links. Research is shown at `/articles/` to preserve the template's route. Skills also appear as VS Code extensions. The terminal, command palette, themes, and editor tabs remain interactive.

## Deploy

GitHub Actions builds and deploys `main` to GitHub Pages using `.github/workflows/deploy.yml`. In the repository's **Settings → Pages**, the source must be **GitHub Actions**. Pushes to `main` publish updates automatically; the workflow also supports manual runs.

The build exports static files to `out/`. To reproduce the Pages build:

```bash
NEXT_PUBLIC_BASE_PATH=/vscode-portfolio npm run build
```

For root-domain hosting, leave `NEXT_PUBLIC_BASE_PATH` empty and update `profile.siteUrl`. No paid hosting or server secrets are needed.

## Content sources

Public professional information was checked on November 17, 2026. The current SoftSim role was confirmed directly by Rambod. Work experience and skills were updated from Rambod’s May 2026 résumé, with QSnxt’s end date corrected to October 2026 per his instruction. Additional research roles and education come from his [existing website](https://rambodazimi.github.io/experience/); projects come from his [GitHub profile](https://github.com/rambodazimi), and model work from [Hugging Face](https://huggingface.co/rambodazimi).

Publications link to their primary records:

- [Gen-Fab · Springer, 2026](https://link.springer.com/article/10.1007/s00158-026-04272-3)
- [SEMU-Net · arXiv / WACV 2025](https://arxiv.org/abs/2411.16973)
- [KD-LoRA · PMLR / NeurIPS ENLSP 2024](https://proceedings.mlr.press/v262/azimi24a.html)

## Attribution

Adapted from [Nitin Ranganath's vscode-portfolio](https://github.com/itsnitinr/vscode-portfolio). The original MIT license is retained in `LICENSE`.

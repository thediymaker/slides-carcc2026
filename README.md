# CarCC 2026 — Marp Deck

Source: converted from a Google Slides presentation into a [Marp](https://github.com/marp-team/marp) Markdown deck.

The deck lives in [slides.md](slides.md).

## Preview

- Install the **Marp for VS Code** extension, open `slides.md`, and click the preview icon.

## Build with marp-cli

```powershell
npm install        # installs @marp-team/marp-cli locally
npm run build      # -> dist/slides.html
npm run pdf        # -> dist/slides.pdf
npm run pptx       # -> dist/slides.pptx
npm run serve      # live server with speaker view
```

Or run it without installing via npx:

```powershell
npx @marp-team/marp-cli slides.md -o dist/slides.html
```

## Notes

- Topic: self-hosting persistent campus LLMs — the software stack (k3s + Rancher, LiteLLM, CNPG, HAProxy, account/usage portal) and the move to the [Obleth](https://obleth.com) fairshare gateway.
- Theme/colors (ASU maroon + gold, high-contrast tables) are defined inline in the `style:` block of the front matter in `slides.md`.
- To add screenshots (e.g. the usage portal or dashboard), drop images into an `images/` folder and reference them with `![w:900](images/file.png)`.

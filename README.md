# Running Persistent LLMs for an Entire Campus

A technical talk on operating always-on, self-hosted LLM inference for Arizona
State University: the software stack we run, why our HPC playbook did not fit,
the realities of non-NVIDIA hardware, and the fairshare admission layer we are
building to replace per-key rate limiting.

**Presented at CarCC 2026 by Johnathan Lee — Sr. HPC System Architect, Arizona State University.**

## View the talk

Live slides: **https://thediymaker.github.io/slides-carcc2026/**

Press `F` for fullscreen and `P` for presenter view.

## What it covers

- **Why self-host inference** — fixed-cost capacity, data locality, and a single OpenAI-compatible API for the whole campus.
- **The production stack** — Kubernetes (k3s + Rancher), vLLM on Gaudi2, LiteLLM, HAProxy, CloudNativePG, and an in-house account/usage portal.
- **Why batch HPC did not fit** — a persistent multi-tenant service breaks every assumption Slurm makes.
- **The Gaudi2 reality** — we were handed non-NVIDIA hardware and made it work; the stack no longer cares what is underneath it.
- **Real-time observability** — live node grid, per-model inference telemetry, and the Rancher control plane across ~200 nodes.
- **Where LiteLLM stops and Obleth begins** — token-measured, weighted fairshare admission for a saturated, self-hosted cluster.

## Repository layout

- [slides.md](slides.md) — the talk source.
- `images/` — diagrams and dashboard screenshots used in the deck.
- `tools/render-images.js` — rasterizes the SVG architecture diagram to PNG.
- `.github/workflows/deploy.yml` — builds and publishes the deck to GitHub Pages on every push to `main`.

## Building locally

The published site rebuilds automatically on push, but to preview or export locally:

```powershell
npm install
npm run build      # -> slides.html (open it next to the images/ folder)
npm run pdf        # -> dist/slides.pdf
npm run pptx       # -> dist/slides.pptx
npm run serve      # live server with presenter view
```

## Links

- Obleth fairshare gateway: https://obleth.com
- More from the presenter: https://github.com/thediymaker

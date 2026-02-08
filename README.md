# Science & Mathematics 🧬

This body of work reframes agency, coordination, and emergence as thermodynamically constrained phenomena governed by feasibility, horizon adequacy, and irreducible maintenance costs, unifying behavior across physical, biological, and social systems.

Built with [Astro](https://astro.build) using the minimal Chiri theme, optimized for mathematical content with KaTeX support.

**Live Site**: [scienceandmathematics.com](https://scienceandmathematics.com/)

## Philosophy

> _Rigor. Clarity. Simplicity. Wonder._

Science is not a collection of facts, but a method of intervention—a systematic way of asking universal questions and interpreting observations. Mathematics serves as our universal language for encoding these discoveries, allowing understanding to transcend cultural and linguistic boundaries.

## Featured Content

Current posts explore cutting-edge topics in theoretical physics and mathematics:

- **Black Hole Horizons and Dimensional Reduction Correspondence**
- **Conservation, Dissipation, and Field Emergence**
- **Fourier Transforms and the Uncertainty Principle**
- **Golden Ratio and Prime Resonance in Quantum Transport**
- **The Thermodynamic Computational Speed Limit**
- **Type Ia Supernova Information-Theoretic Energetics**

## Technical Features

- [x] Built with Astro for optimal performance
- [x] Responsive design with light/dark mode
- [x] KaTeX support for mathematical notation
- [x] MDX for rich content authoring
- [x] Table of contents for long-form articles
- [x] Image viewer for scientific diagrams
- [x] Code syntax highlighting with copy functionality
- [x] RSS feed and sitemap generation
- [x] OpenGraph meta tags for social sharing

## Development

### Prerequisites

- Node.js 18+
- pnpm (recommended package manager)

### Setup

```bash
git clone https://github.com/kurtkemple/scienceandmathematics.com.git
cd scienceandmathematics.com
pnpm install
pnpm dev
```

### Content Management

- **New posts**: `pnpm new "Post Title"` (use `_title` for drafts)
- **Configuration**: Edit `src/config.ts` for site settings
- **About page**: Modify `src/content/about/about.md`
- **Posts**: Add markdown files to `src/content/posts/`

### Deployment

The site is configured for Netlify deployment with the `@astrojs/netlify` adapter. For other platforms:

- **Vercel**: `pnpm add @astrojs/vercel` and update `astro.config.ts`
- **Cloudflare Pages**: `pnpm add @astrojs/cloudflare` and update `astro.config.ts`
- **Static hosting**: `pnpm add @astrojs/static` and update `astro.config.ts`

Refer to [Astro Deployment Guides](https://docs.astro.build/en/guides/deploy/) for detailed instructions.

## Available Commands

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm preview` | Preview production build |
| `pnpm new "Title"` | Create new post (use `_title` for drafts) |
| `pnpm update-theme` | Update Chiri theme to latest version |
| `pnpm lint` | Run ESLint |
| `pnpm format` | Format code with Prettier |

## Project Structure

```
src/
├── components/          # Reusable Astro components
│   ├── layout/         # Layout components (Header, Footer, etc.)
│   ├── ui/             # UI components (ThemeToggle, etc.)
│   └── widgets/        # Content widgets (PostList, About, etc.)
├── content/            # Content collections
│   ├── about/          # About page content
│   └── posts/          # Blog posts in Markdown/MDX
├── layouts/            # Page layouts
├── pages/              # Astro pages and API routes
├── plugins/            # Custom Remark/Rehype plugins
├── styles/             # Global CSS styles
└── utils/              # Utility functions
```

## Contributing

This is a personal blog, but if you find issues or have suggestions for improving the technical implementation, feel free to open an issue or submit a pull request.

## Acknowledgments

- Built with [Astro](https://astro.build)
- Theme based on [Chiri](https://github.com/the3ash/astro-chiri) by the3ash
- Mathematical typesetting powered by [KaTeX](https://katex.org/)

## License

MIT

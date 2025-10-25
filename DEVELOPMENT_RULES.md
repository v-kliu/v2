# Development Rules & Notes

## Build Requirements

**IMPORTANT**: After ANY development work, ensure the project passes the build before deployment:

```bash
npm run build
```

This ensures:
- No TypeScript errors
- No build-time issues
- Ready for Vercel deployment

## Deployment Workflow

1. Make your changes
2. Test locally with `npm run dev`
3. **Run `npm run build`** - THIS IS MANDATORY
4. Only push to deployment if build succeeds

## Design Philosophy

- **Minimalistic & Clean**: Less is more - avoid excessive effects
- **Casual & Confident Tone**: Lowercase headings, casual copy (inspired by Aiden Bai's style)
- **Space Theme with Grid**: Subtle grid lines for visual guidance
- **Professional but Hip**: Not corporate, not flashy - just cool

## Tech Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion
- Radix UI Components

## Project Structure

### Main Files
- `portfolio.tsx` - Main portfolio component (260 lines, refactored from 1000+)
- `lib/portfolio-data.ts` - Centralized data configuration (skills, timeline, projects, navigation)

### Components
- `components/star-background.tsx` - Space-themed background with stars
- `components/grid-overlay.tsx` - Visual grid guidance overlay
- `components/hero-section.tsx` - Landing section with profile
- `components/about-section.tsx` - About and skills section
- `components/timeline-section.tsx` - Experience/education timeline
- `components/timeline-entry.tsx` - Individual timeline entry (reusable)
- `components/projects-section.tsx` - Projects showcase
- `components/contact-section.tsx` - Contact form with EmailJS

### Maintainability
- **Modular Components**: Each section is a separate, reusable component
- **Centralized Data**: All content in `lib/portfolio-data.ts` for easy updates
- **Clear Documentation**: Each component has JSDoc comments explaining purpose
- **TypeScript Types**: Full type safety throughout the codebase
- **Clean Code**: Follow React best practices, use meaningful variable names

## Key Features

- Grid overlay for visual structure
- Minimalist design with subtle shadows
- Casual, confident copywriting
- Responsive across all devices
- EmailJS contact form integration
- Smooth scroll animations with Framer Motion
- Custom cursor effect (desktop only)

## Making Changes

### Update Content
Edit `lib/portfolio-data.ts` to update:
- Skills and technologies
- Timeline entries (education, experience, hackathons)
- Project listings
- Navigation items

### Update Styles
- Global styles: `styles/globals.css` or `app/globals.css`
- Component-specific: Edit Tailwind classes in respective component files
- Design tokens: Modify Tailwind config in `tailwind.config.js`

### Add New Sections
1. Create new component in `components/`
2. Import and use in `portfolio.tsx`
3. Add navigation item to `lib/portfolio-data.ts`

## Notes

- Amazon SDE Intern offer signed ✅
- No longer need to be overly formal
- Focus on personality and authenticity
- Let the work speak for itself

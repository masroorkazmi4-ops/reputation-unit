# Reputation Unit — Visual System

## 1. Visual Concept

**"Dark precision studio."**

Near-black base with clean structural geometry, crisp off-white editorial typography, a controlled indigo-to-violet accent, and subtle technical depth through a fine grid overlay. Every decision is made with restraint — no decorative excess, no random gradients, no neon overload.

The site should feel like the portfolio of a team that writes serious code and thinks carefully about design. Quiet confidence, not loud showmanship.

---

## 2. Color System

### Base Palette

| Token | Hex | Usage |
|---|---|---|
| `--color-bg` | `#08080f` | Page background — near-black with a barely-perceptible blue undertone |
| `--color-bg-secondary` | `#0d0d1a` | Alternate section backgrounds |
| `--color-surface` | `#111120` | Card and surface backgrounds |
| `--color-surface-elevated` | `#181830` | Elevated cards, dropdowns, hover states |
| `--color-border` | `#1e1e3a` | Default subtle borders |
| `--color-border-strong` | `#2e2e55` | Stronger borders, dividers, active states |

### Text

| Token | Hex | Usage |
|---|---|---|
| `--color-text-primary` | `#f0f0fa` | Main body and headings — off-white, not pure white |
| `--color-text-secondary` | `#9898b8` | Descriptions, subheadings, muted content |
| `--color-text-muted` | `#55556a` | Placeholders, timestamps, footer secondary text |
| `--color-text-inverse` | `#08080f` | Text on light/white backgrounds (button labels) |

### Accent — Indigo/Violet

| Token | Hex | Usage |
|---|---|---|
| `--color-accent` | `#6366f1` | Primary accent — Tailwind indigo-500 |
| `--color-accent-hover` | `#4f46e5` | Hover state — Tailwind indigo-600 |
| `--color-accent-subtle` | `#1e1e4a` | Accent-tinted surface, badge backgrounds |
| `--color-accent-glow` | `rgba(99,102,241,0.15)` | Soft ambient glow behind hero, cards |

### Utility

| Token | Value | Usage |
|---|---|---|
| `--color-success` | `#22c55e` | Form success states only |
| `--color-error` | `#ef4444` | Form error states only |
| `--color-white` | `#ffffff` | Only for button fills, code backgrounds |

---

## 3. Typography System

**Fonts:** Geist Sans (primary) + Geist Mono (technical/code). No new fonts added in Phase 3.

### Scale

| Role | Size | Weight | Line Height | Letter Spacing |
|---|---|---|---|---|
| Display (hero H1) | `3.5rem / 56px` | `700` | `1.1` | `-0.03em` |
| H1 | `2.75rem / 44px` | `700` | `1.15` | `-0.02em` |
| H2 | `2rem / 32px` | `600` | `1.2` | `-0.015em` |
| H3 | `1.375rem / 22px` | `600` | `1.3` | `-0.01em` |
| Body Large | `1.125rem / 18px` | `400` | `1.75` | `0` |
| Body | `1rem / 16px` | `400` | `1.7` | `0` |
| Small | `0.875rem / 14px` | `400` | `1.6` | `0` |
| Eyebrow | `0.75rem / 12px` | `600` | `1` | `0.15em` |
| Code / Technical | Geist Mono, `0.875rem` | `400` | `1.6` | `0` |

### Eyebrow Pattern
Eyebrow labels appear above section headings.
Format: `UPPERCASE · TRACKING-WIDE · ACCENT COLOR`

---

## 4. Spacing System

### Container

| Context | Max Width | Horizontal Padding |
|---|---|---|
| Page container | `1200px` | `24px` (mobile) / `48px` (tablet) / `64px` (desktop) |
| Narrow (content) | `768px` | Same padding |
| Wide (full-bleed) | `100%` | No padding |

### Section Padding

| Breakpoint | Top/Bottom Padding |
|---|---|
| Mobile (`< 768px`) | `80px` |
| Tablet (`768px–1024px`) | `96px` |
| Desktop (`> 1024px`) | `128px` |

### Card Padding

| Size | Padding |
|---|---|
| Standard card | `24px` |
| Large card | `32px` |

### Grid Gaps

| Context | Gap |
|---|---|
| Service cards | `16px` |
| Portfolio cards | `24px` |
| Process steps | `32px desktop / 20px mobile` |

### Header Height

Target: `64px` — fixed, backdrop-blur, semi-transparent surface

---

## 5. Component Style Rules

### Buttons

**Primary:**
- Background: `--color-accent` → hover: `--color-accent-hover`
- Text: white
- Height: `44px`
- Padding: `0 28px`
- Radius: `9999px` (full pill)
- Font: `14px`, `600` weight
- Transition: background-color 200ms ease

**Secondary:**
- Background: transparent
- Border: `1px solid --color-border-strong`
- Text: `--color-text-primary`
- Same sizing as primary
- Hover: border color `--color-accent`, text `--color-accent`

**Ghost:**
- No background, no border
- Text: `--color-text-secondary`
- Hover: text `--color-text-primary`, background: `--color-surface`
- Padding: `0 16px`

### Cards

**Standard card:**
- Background: `--color-surface`
- Border: `1px solid --color-border`
- Radius: `12px`
- Padding: `24px`
- Hover: border `--color-border-strong`, subtle translate-up `-2px`
- Transition: `border-color 200ms ease, transform 200ms ease`

**Elevated card:**
- Background: `--color-surface-elevated`
- Accent top-border or accent-glow on hover

### Tags / Badges

- Background: `--color-accent-subtle`
- Text: `--color-accent`
- Border: `1px solid` with 30% accent opacity
- Radius: `9999px`
- Padding: `2px 10px`
- Font: `12px`, `500` weight, uppercase, letter-spacing

### Section Headings Pattern

```
[EYEBROW — small, uppercase, accent colored, tracked]
[H2 — large, bold, tight tracking, off-white]
[Description — body large, muted color, max-width 640px]
```

### Portfolio Cards

- Full card is a link if URL exists
- Status badge top-right (LIVE / PREVIEW / LAUNCH-READY)
- Industry label as a tag
- Title: H3 weight
- Description: body, muted
- Tech tags: badge row at bottom
- Hover: card lift + border accent

### Process Cards

- Large step number: display size, `--color-accent` opacity 30%
- Step title: H3
- Step description: body muted
- Visual connector between steps on desktop (line or dot)

### FAQ Items

- Accordion-style
- Question: body, `--color-text-primary`, semi-bold
- Answer: body, `--color-text-secondary`
- Border-bottom separator
- Expand/collapse — CSS only for Phase 3, JS in Phase 4

### Contact Form Fields

- Background: `--color-surface`
- Border: `1px solid --color-border`
- Radius: `8px`
- Padding: `12px 16px`
- Text: `--color-text-primary`
- Placeholder: `--color-text-muted`
- Focus: border `--color-accent`, box-shadow glow `--color-accent-glow`

---

## 6. Motion Rules

### Duration Tokens

| Token | Value | Usage |
|---|---|---|
| `--duration-fast` | `150ms` | Instant feedback (button press, focus) |
| `--duration-base` | `200ms` | Default hover transitions |
| `--duration-slow` | `350ms` | Card lifts, panel opens |
| `--duration-page` | `500ms` | Page-level enter animations (Phase 6) |

### Easing Tokens

| Token | Value | Usage |
|---|---|---|
| `--ease-base` | `cubic-bezier(0.4, 0, 0.2, 1)` | General transitions |
| `--ease-out` | `cubic-bezier(0, 0, 0.2, 1)` | Entering elements |
| `--ease-in` | `cubic-bezier(0.4, 0, 1, 1)` | Exiting elements |
| `--ease-spring` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Playful lift/bounce |

### Hover Lift

- Cards: `translateY(-2px)`
- Buttons: `translateY(-1px)`
- No heavy 3D transforms

### Fade / Slide Direction

- Elements enter from bottom: `translateY(16px)` → `translateY(0)`
- Opacity: `0` → `1`
- Framer Motion or Intersection Observer added in Phase 6

---

## 7. Accessibility Rules

### Contrast

- All text on dark backgrounds must meet WCAG AA minimum
  - Body text: `--color-text-primary` (#f0f0fa) on `#08080f` → contrast ~15:1 ✓
  - Muted text: `--color-text-secondary` (#9898b8) on `#08080f` → contrast ~5.5:1 ✓ (AA)
  - Accent on dark: #6366f1 on #08080f → contrast ~4.8:1 (use accent for UI, not small body text)

### Focus States

- All interactive elements must have a visible focus ring
- Use: `outline: 2px solid var(--color-accent); outline-offset: 2px`
- Never use `outline: none` without a replacement

### Keyboard Behavior

- All navigation, buttons, and links must be fully keyboard-accessible
- Tab order must be logical (top → down, left → right)
- Accordion/FAQ items must be triggerable by Enter/Space

### Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Mobile Tap Targets

- Minimum tap target size: `44px × 44px`
- Buttons and links must always meet this minimum
- Nav links in mobile menu must have generous padding

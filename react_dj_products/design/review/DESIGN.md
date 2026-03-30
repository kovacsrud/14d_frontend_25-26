# Design System Specification: The Curated Commerce Identity

## 1. Overview & Creative North Star: "The Digital Atelier"
This design system moves away from the "template-heavy" look of traditional e-commerce. Our Creative North Star is **The Digital Atelier**—a space that feels bespoke, architectural, and high-trust. 

We reject the rigid, boxed-in layouts of the past. Instead, we embrace **Intentional Asymmetry** and **Tonal Depth**. By layering surfaces and utilizing sophisticated typography scales, we create an editorial experience where product imagery breathes and brand authority is communicated through white space rather than heavy borders.

## 2. Colors: Tonal Authority
The palette is rooted in deep, authoritative blues (`primary`) and professional grays (`secondary`), punctuated by a high-energy emerald (`tertiary`) that signals action and growth.

### The "No-Line" Rule
**Strict Mandate:** Designers are prohibited from using 1px solid borders to define sections. Layout boundaries must be achieved through background color shifts. 
*   *Example:* A hero section using `surface` transitions into a feature section using `surface-container-low`. The change in "weight" provides the structure.

### Surface Hierarchy & Nesting
Treat the UI as a physical stack of premium materials. Use the `surface-container` tiers to create depth:
*   **Base Layer:** `surface` (The foundation).
*   **Secondary Content:** `surface-container-low` (Subtle inset feel).
*   **Interactive Cards:** `surface-container-lowest` (The "brightest" white, appearing to sit closest to the user).
*   **Navigation/Modals:** `surface-bright` (For maximum visibility).

### The "Glass & Gradient" Rule
To elevate the "out-of-the-box" feel, use **Glassmorphism** for floating headers or persistent filters. Apply `surface-container-lowest` at 80% opacity with a `backdrop-filter: blur(20px)`. 
*   **Signature Textures:** For primary CTAs, do not use flat fills. Use a subtle linear gradient from `primary` (#00327d) to `primary-container` (#0047ab) at a 135-degree angle to add "soul" and dimension.

## 3. Typography: Editorial Sophistication
We use a dual-sans-serif approach to balance character with readability.

*   **Display & Headlines (Manrope):** Chosen for its geometric precision and modern "tech-premium" feel. Use `display-lg` for Hero statements to command attention. High contrast in scale between headlines and body text is required to maintain the editorial look.
*   **Body & Labels (Inter):** The workhorse. Inter provides exceptional legibility for product descriptions and technical specs.
*   **Hierarchy as Brand:** Use `title-lg` for product names and `label-md` (uppercase with 5% letter spacing) for category tags to create an authoritative, "catalog" aesthetic.

## 4. Elevation & Depth: The Layering Principle
We convey hierarchy through **Tonal Layering** rather than structural lines.

*   **Natural Lift:** Place a `surface-container-lowest` card on a `surface-container-low` section. This creates a soft, organic lift that feels integrated into the environment.
*   **Ambient Shadows:** For floating elements (like a "Buy Now" sticky bar), use extra-diffused shadows. 
    *   *Spec:* `offset-y: 12px`, `blur: 32px`, `color: rgba(25, 28, 30, 0.06)`. Note the use of `on-surface` (#191c1e) as the shadow tint—never use pure black.
*   **The "Ghost Border" Fallback:** If a container needs more definition (e.g., a search input), use a "Ghost Border": `outline-variant` (#c3c6d5) at **15% opacity**. This provides a hint of structure without cluttering the visual field.

## 5. Components: Refined Interaction

### Buttons
*   **Primary:** Gradient fill (`primary` to `primary-container`), `on-primary` text, `DEFAULT` (0.5rem) roundedness.
*   **Secondary:** `surface-container-high` background with `on-surface` text. No border.
*   **Tertiary (Accent):** `tertiary-container` background with `on-tertiary-container` text. Use sparingly for "New" or "Sale" highlights.

### Input Fields
*   **Style:** `surface-container-low` fill. No border.
*   **Focus State:** Transition to `surface-container-lowest` with a 1px "Ghost Border" using the `surface-tint`.
*   **Rounding:** `sm` (0.25rem) to maintain a professional, slightly sharper edge than buttons.

### Cards & Lists
*   **Rule:** Forbid divider lines.
*   **Execution:** Use `24` (6rem) or `16` (4rem) spacing to separate list items or content blocks. 
*   **Image Handling:** Product images should sit on `surface-container-highest` to provide a "studio backdrop" effect before the user interacts.

### Floating Action Trays
Instead of traditional sidebars, use floating "trays" for filters or carts. Use the **Glassmorphism** spec with `xl` (1.5rem) rounded corners to make the tech feel "soft" and approachable.

## 6. Do’s and Don’ts

### Do
*   **Do** use asymmetrical margins. If a text block is left-aligned, allow the right side to breathe excessively.
*   **Do** use the `tertiary` emerald color (#003f2e) for high-conversion moments, like "Checkout" or "Success" states.
*   **Do** stack `surface` tokens to create "rooms" within the page.

### Don't
*   **Don't** use 100% opaque borders or dividers. They break the "Atelier" flow.
*   **Don't** use standard drop shadows. If it looks like a "shadow," it's probably too dark. It should look like "depth."
*   **Don't** crowd the layout. If you feel a section needs a border to separate it, you actually need more `spacing` (try `20` or `24`).
*   **Don't** use `primary` for everything. Let the neutrals (`surface` tiers) do the heavy lifting, saving the deep blues for navigation and primary actions.
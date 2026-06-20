# Interactive Upgrade Plan (Phase 8A)

## 1. Current Visual Weakness
The site is clean and professional but feels like a standard landing page. It lacks the distinctive premium technical "wow" factor expected from a high-end web development studio. The hero is too flat, and the portfolio cards don't visually convey the complexity of the systems built.

## 2. What Will Be Upgraded in Phase 8A
* **Hero Composition:** The hero will be split into a two-column desktop layout (left: copy/CTAs, right: pseudo-3D `SystemCoreVisual`).
* **Pseudo-3D Visual:** We will create a `SystemCoreVisual` component using CSS 3D transforms (`perspective`, `rotateX`, `rotateY`, `translateZ`) to simulate floating UI layers and data nodes without WebGL overhead.
* **Portfolio Presentation:** The flat abstract project labels will be upgraded into `.browser-frame` structures with `.depth-card` hover effects (slight lift and 3D tilt).
* **Card Depth:** Services and Process cards will receive subtle hover lifts and border glows.

## 3. What Will NOT Be Added Yet
* No WebGL / Canvas / React Three Fiber.
* No Spline integrations.
* No heavy physics-based animation libraries (e.g., Framer Motion).
* No fake screenshots, client logos, or metrics.

## 4. Future Phase 8B Ideas
* Implement a real interactive 3D object using Spline for the hero.
* Add an interactive "data-node orbit" using WebGL.
* Create a scroll-linked screenshot browser wall for portfolio projects (when real screenshots are available).

## 5. Performance Rules
* All animations must be powered by CSS transitions and keyframes to utilize the GPU and prevent main-thread blocking.
* Limit the use of heavy `box-shadow` during CSS animations.

## 6. Mobile Fallback Rules
* 3D tilt effects and complex floating panels will be flattened or simplified on mobile viewports to prevent cramped UI and performance lag on lower-end devices.

## 7. Reduced Motion Rules
* All `.floating-panel`, `.orbital-glow`, and 3D hover transitions will be disabled for users with `prefers-reduced-motion: reduce`.

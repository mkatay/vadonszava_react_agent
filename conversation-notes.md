# React vs Vanilla JS Teaching Notes

## Date
2026-08-13

## Topic
Creating a Tailwind v4 React app that mirrors a vanilla JS app, using data-driven components and route-based navigation.

## Project context
- The app is built in React in the workspace folder: `vadonszava`
- The vanilla JS version exists in a sibling folder: `tailwind_demo`
- Goal: reproduce the same page visually and structurally in React for teaching purposes
- Tech stack:
  - React 19
  - React Router v8
  - Vite
  - Tailwind CSS v4

## Main learning goals
- Compare vanilla JavaScript DOM-based implementation with React component-based architecture
- Show how to move repeated data into a single JSON file
- Explain route-driven navigation with `NavLink`
- Explain dark mode state management at the app root
- Demonstrate reusable component design and layout patterns

## Important implementation decisions

### 1. App-level theme state
The dark mode state must live in the top-level component so all children can access it.

This was implemented in `src/App.jsx`:

```jsx
const [isDark, setIsDark] = useState(true)

useEffect(() => {
  document.documentElement.classList.toggle('dark', isDark)
}, [isDark])
```

This allows the navbar to toggle the theme correctly and keeps the state consistent across views.

### 2. Navigation with React Router
The navbar uses `NavLink` instead of anchor tags or `href` values when using the data router model.

Example pattern:

```jsx
<NavLink
  key={item.label}
  to={item.to}
  end={item.to === '/'}
  className={({ isActive }) => ...}
>
  {item.label}
</NavLink>
```

This is better than ID-based navigation because it follows the route structure, which is a standard React Router approach.

### 3. Shared data model
The project uses a central `src/data.json` file for data such as:
- navigation items
- benefits
- routes
- equipment items
- gallery items

This demonstrates a clean pattern for separating content from presentation.

### 4. Layout behavior
The footer should stay at the bottom of the page when the content is short.

The root layout was adjusted using a flex column:

```jsx
<div className="min-h-screen flex flex-col bg-bg text-text">
  <MyNavbar isDark={isDark} setIsDark={setIsDark} />
  <main className="flex-1">
    <Outlet />
  </main>
  <MyFooter isDark={isDark} setIsDark={setIsDark} />
</div>
```

This ensures that if the page content is short, the footer is pushed down to the bottom of the screen.

### 5. Theme toggle placement
The theme button was moved to the navbar and kept visible in all layouts.

This was a deliberate decision so:
- it is always available
- it follows the main navigation
- it is not duplicated in the footer
- it works consistently on desktop and mobile

## Routing structure
The app uses data router configuration including these routes:
- `/`
- `/about`
- `/traillist`
- `/gallery`
- `/equipment`

This is a good teaching example of how a React app organizes sections as separate routes instead of just DOM sections on one page.

## Main app architecture
Files involved:
- `src/App.jsx` — app shell and theme state
- `src/main.jsx` — router setup
- `src/components/MyNavbar.jsx` — navigation and theme toggle
- `src/components/MyFooter.jsx` — footer and legal text
- `src/components/Home.jsx` — landing page content
- `src/components/About.jsx` — about page
- `src/components/TrailList.jsx` — list of trails
- `src/components/Gallery.jsx` — image gallery
- `src/components/Equipment.jsx` — equipment list
- `src/data.json` — shared content data

## Build verification
The project was confirmed to build successfully with:

```bash
npx vite build
```

Result:
- `✓ 87 modules transformed`
- `✓ built in 314ms`

## Key takeaway
This project demonstrates that React is not just a different syntax for writing the same HTML. It encourages:
- component reuse
- state management at the correct level
- route-driven navigation
- better data organization
- cleaner app structure for teaching and maintenance

## Sample teaching questions
1. Why is the theme state kept at the top level instead of inside a component?
2. Why is `NavLink` preferred over `a href` in a React Router app?
3. What is the benefit of moving repeated content into `data.json`?
4. How does the root flex layout help with footer placement?
5. What is the difference between a static HTML page and a component-driven React app?

## Notes for students
This project is designed to help compare:
- Vanilla JS: direct DOM manipulation, page-specific logic, more repetitive code
- React: reusable UI, component structure, shared state, scalable architecture

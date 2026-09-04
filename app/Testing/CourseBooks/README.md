# CourseBook learning workspace

This folder is a starter workspace for rebuilding the approved piano-book mockup as a reusable React and TypeScript component.

No component, styling, interaction, course data, or page integration has been implemented yet. The existing piano-key experiment is preserved separately in `app/Testing/PianoKeys`.

## Files

- `CourseBook.types.ts` — define the shape of the props accepted by one book.
- `courseBookData.ts` — create placeholder objects for Piano, French, Math, English, and Music Adventure.
- `CourseBook.tsx` — build one reusable book component.
- `CourseBook.module.css` — recreate the cover, pages, shadow, and hover-opening effect.

## Recommended build order

1. Define `CourseBookProps` in `CourseBook.types.ts`.
2. Build one static book in `CourseBook.tsx` using those props.
3. Add the shared book styles in `CourseBook.module.css`.
4. Add placeholder course objects in `courseBookData.ts`.
5. Create `app/Testing/CourseBooks/page.tsx` and map over that data to render all five books.
6. Add click state and the course-detail view only after the static books work.

## React and Next.js boundary

The static book can remain a Server Component. When you add state or click handlers, place `"use client"` at the top of the smallest interactive component rather than converting the entire page unnecessarily.

CSS Modules are appropriate here because their class names are scoped to this component and will not collide with the existing Testing-page styles.

## Design reference

Use the approved [`piano-book-minimal-mockup.html`](../../../../../../../Docs/piano-book-minimal-mockup.html) as the visual reference. Treat its course copy, schedules, prices, ages, and availability as placeholders unless separately confirmed.

# CourseBook learning workspace

Route: `/Testing/CourseBooks`.

This is the simpler learning version: five book covers, selected-course state, and a basic details overlay with an X button. The full open-book design and sample reservation form remain in `Docs/piano-book-minimal-mockup.html` as a separate reference.

## Follow the state flow

1. `page.tsx` owns `idSelected` and `isOpen`.
2. Clicking a cover calls its `onclick` prop. The parent selects that course and sets `isOpen` to `true`.
3. `selectedBook` is calculated from `courseContent[idSelected]` on each render.
4. `OpenBook` receives the selected details and `isOpen`. Its inline style makes the overlay visible or hidden.
5. The X button calls the `onclick` callback supplied by the parent, which sets `isOpen` to `false`.

The custom prop is named `onclick` to match your original code and types. The actual HTML button prop must be `onClick`. Custom prop names can differ, but their spelling must match between the caller, component, and type.

## Next learning step

Practice passing one additional value into `OpenBook`, such as the course's display title, and rendering it instead of the course ID. Keep the selected ID as the state value; derive the rest from the course data.

The overlay is intentionally a basic learning component. Keyboard focus management and the full reservation flow are later steps.

## Check the result

Open a book, confirm its ID and details, close it with X, and open a different book. The main website and design mockup are separate from this testing route.

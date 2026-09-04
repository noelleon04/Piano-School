# Testing workspaces

The experiments in this folder are separated by feature so their files and learning goals do not become mixed together.

## `PianoKeys`

This is the existing interactive piano-key experiment.

- Page: `PianoKeys/page.tsx`
- Styles: `PianoKeys/page.module.css`
- Local route: `http://localhost:3000/Testing/PianoKeys`

## `CourseBooks`

This is the starter workspace for the reusable piano-book course component.

- Component starter: `CourseBooks/_components/CourseBook/CourseBook.tsx`
- Type starter: `CourseBooks/_components/CourseBook/CourseBook.types.ts`
- Data starter: `CourseBooks/_components/CourseBook/courseBookData.ts`
- Style starter: `CourseBooks/_components/CourseBook/CourseBook.module.css`
- Learning guide: `CourseBooks/_components/CourseBook/README.md`

The CourseBooks workspace does not have a `page.tsx` yet, so it does not currently create a browser route. Create that page only when you are ready to render the component.

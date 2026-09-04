

export type ColourTheme = 
| "Green"
| "Red"
| "Yellow"
| "Blue"
| "Purple"

export type  Cover = {
   courseTitle: string;
   symbol: string;
   subject:string;
   theme: ColourTheme;
}

export type CourseDetails = {
  details: string;
  format: string;
  description: string;
  pricing: string;
}

export type Course = {
  cover: Cover;
  courseDetail: CourseDetails;
}

export type CourseContent ={
  Piano: Course;
  French: Course;
  Math: Course;
  English: Course;
  MusicAdventure: Course;
}

export type CourseId = keyof CourseContent;

export type CoverProp = {
  courseId: CourseId;
  cover: Cover;
}

export type openBookProp = {
  courseId: CourseId;
  courseDetails: CourseDetails;
}
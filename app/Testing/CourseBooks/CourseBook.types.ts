

export type ColourTheme = 
| "Green"
| "Red"
| "Yellow"
| "Blue"
| "Purple"

export type CourseId = string;

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
  courseId:CourseId;
  cover: Cover;
  courseDetail: CourseDetails;
}

export type CourseProp ={
  Courses: Course[];
}

export type CoverProp = {
  courseId: CourseId;
  cover: Cover;
  onclick : ()=> void;
}

export type openBookProp = {
  isOpen: boolean;
  courseId: CourseId;
  courseDetails: CourseDetails;
  onclick : ()=>void;
}

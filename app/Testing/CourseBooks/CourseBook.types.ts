

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
  Offerings: Offering[];
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
  OfferingArray: Offering[];
  onclick : ()=>void;
}



export type Offering = {
  offeringId: number;
  dayOfWeek: string;
  startTime: string;
  endTime: string;
  courseId: string; 
  isVisible: boolean;
  isOpen: boolean;
  capacity: number;
}

export type daysOfWeek = 
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday"
  | "Unavailable"
  | "Start";




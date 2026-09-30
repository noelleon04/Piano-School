import { getCourseOffering } from "@/database/offering";
import Signup from "./signup"
import { getCourse } from "@/database/courses";

type Props = {
  searchParams: Promise<{
    courseId?: string| string[];
    offeringId?: string|string[];
  }>;
};

export default async function loadCourseBook({searchParams}:Props){
    let course;
    let offering;
    const params = await searchParams;

    if(typeof params.courseId !== "string" || typeof params.offeringId !== "string"){
      return <p>Missing or invalid course ID.</p>
    }

    const courseId = params.courseId
    const offeringId = params.offeringId
    if(params.courseId.trim () === ""){
      return <p>Invalid course ID</p>
    }
    try{
      course = await getCourse(courseId);
      offering = await getCourseOffering(courseId);
    }
    catch{
      return <h1>Invalid Course ID</h1>
    }
    if(!course|| !offering){
      return <h1>Invalid Course ID or Offering Id</h1>
    }

    const selectedOffer = offering.find(offer=> offer.offeringId == Number(offeringId))

    if(!selectedOffer){
      return <h1> Invalid Offering ID.</h1>
    }

  return (
    <Signup course={course} offering={offering} selectedOffer={selectedOffer}></Signup>
  )
}
   
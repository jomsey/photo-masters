"use client"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";


export default function ReadMoreButton(){
    const router = useRouter();
    return <button onClick={()=>router.push("/about")}>Read More <FontAwesomeIcon icon={faArrowRight}/></button>;
}
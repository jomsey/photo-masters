"use client"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";


export default function Button(){
    const router = useRouter();
    return <button onClick={()=>router.push("/showcase")}>See Our Gallery <FontAwesomeIcon icon={faArrowRight} fade/></button>;
}
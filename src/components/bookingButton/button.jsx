"use client"

import { useRouter } from "next/navigation"

export default function Button(){
    const router = useRouter()
    return <button onClick={()=>router.push("/booking")}>
        Book Us
    </button>
}
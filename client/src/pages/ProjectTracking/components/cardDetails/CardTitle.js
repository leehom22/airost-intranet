import { useState } from "react";


export default function CardTitle({value}){

    const [details,setDetail]=useState(value)
    const [isEditing, setIsEditing] = useState(false);
    console.log(value)
    const handleKeyDown=(e)=>{
        if(e.key==="Enter"){
            setIsEditing(false);
        }
        console.log(details)
    }

    const handleBlur=()=>{
        setIsEditing(false);
    }

    return (
        <>
        {
            isEditing===true?
            (
                <input
                type="text"
                value={details}
                autoFocus
                onChange={(e)=>setDetail(e.target.value)}
                style={{color: "black"}}
                onKeyDown={handleKeyDown}
                onBlur={handleBlur}
                />
            )
            : <h3 className="font-bold text-lg" onClick={()=>setIsEditing(true)}>{details}</h3> 
        }
        </>
    )
}
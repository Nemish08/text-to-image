import { useState } from "react"
import fetch_response from "../../utils/fetch_response"

export default function Home(){
    const [flag,setFlag] = useState(false)
    const [prompt,setPrompt] = useState("")
    const [loader,setLoader] = useState(false)
    const [src,setSrc] = useState("")
    const handler = async(e)=>{
        
        if(e.key === "Enter"){
            console.log(e.key)
            setLoader(true)
            setFlag(true)
            if(prompt){
               let respone = await  fetch_response(prompt)
               respone = 'https://api.codetabs.com/v1/proxy/?quest=' + respone
               setSrc(respone)
               console.log(respone)
            }
            setLoader(false)
            
        }
        
    }
    return (
        <>
           <div className=" w-screen h-screen bg-slate-200 flex flex-col items-center  justify-center">
                <div className=" h-[500px] w-[600px] bg-white rounded-3xl  justify-center flex flex-col items-center gap-5">
                <div>Imageefy</div>
                    <div className="flex w-[90%]">
                        <label className=" bg-blue-300 py-2 px-4 rounded-l-2xl">Prompt</label>
                        <input type="text" className=" border-none outline-none bg-blue-50 rounded-r-2xl px-2 overflow-y-auto w-full " 
                        value = {prompt}
                        onChange={(e)=>setPrompt(e.target.value)}
                        onKeyDown={handler}
                    />
                    </div>
                    <div>
                        {loader&&<div>Loader.....</div>}
                        {flag&&<div>
                            <img src={src} width={300}></img>
                        </div>}
                    </div>
                    
                </div>
           </div> 
        </>
    )
}
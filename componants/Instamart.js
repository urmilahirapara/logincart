import { useState } from "react"

const Section=({title,description,isVisible,setIsVisible})=>{
  
  return(
  <div className="border border-black m-2 p-2">
    <h1 className="font-bold text-x1" >{title}</h1>
    {
      !isVisible?(
    <button className="cursor-pointer underline " onClick={()=>setIsVisible(true)}>Show</button>)

    :(
    <button className="cursor-pointer underline " onClick={()=>setIsVisible(false)}>Hide</button> )
}
    {isVisible&&<p>{description}</p>} 
    </div>
  
  )
}
const Instamart = () => {
  const[sectionVisible,setSectionvisible]=useState("team");
 
  return (
    <div>
      <h1 className="text-3xl p-2 m-2 font-bold ">Instamart</h1>
     <Section title={"About Instamart"}
     description={"This is comming from About instamart"} 
     isVisible={sectionVisible==="about"} 
     setIsVisible={(display) => {
                        if(display) {
                          setSectionvisible("about")
                        } else {
                          setSectionvisible(" ") 
                        }
                        }}
                        />

     <Section title={"Team Instamart"} description={"This is comming from Team instamart"} 
     isVisible={sectionVisible==="team"}
     setIsVisible={(display) => {
                        if(display) {
                          setSectionvisible("team")
                        } else {
                          setSectionvisible(" ") 
                        }
                        }} />

     <Section title={"Career Instamart"} description={"This is comming from Careers instamart"}
      isVisible={sectionVisible==="career"}
      setIsVisible={(display) => {
                        if(display) {
                          setSectionvisible("career")
                        } else {
                          setSectionvisible(" ") 
                        }
                        }}/>

    </div>
   
  )
}

export default Instamart

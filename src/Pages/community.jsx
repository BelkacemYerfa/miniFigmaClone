import { Search } from "../components/search"
import { SideBar } from "../components/sideBar"
import { motion } from 'framer-motion' 
import { useState } from 'react'
import { Link } from "react-router-dom"

export const Community = ({user})=>{
  const date = new Date() ; 
  const [FileArray , setFileArray] = useState([
    {
      name : 'File 1' , 
      bg : '' , 
      id : '1' , 
      modification : `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear() % 2000} ` , 
    },
  ]) ; 
 return(
    <section className='HomeSection'>
      <SideBar user={user} />
      <div className='File_Section' >
        <div className="searchHolder" >
           <Search />
           <div className="projectChoice" >
            <h2>
              Project
            </h2>
            <motion.button 
            whileTap={{scale : .9}}
            onClick={()=>{
              setFileArray(FileArray => [ ...FileArray , {
                name : 'bylka' , 
                bg : '' , 
                id : '' , 
                modification : `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear() % 2000} `
               }])
            }}
            className="projectBtn">
             <div className="addBtn">
              <span class="material-symbols-rounded">
               add
              </span>
             </div>
              New Project
            </motion.button>
            </div>
        </div>
        <div className="fileModification" >
          <div className="FileContainer" >
          <h2>
            Recently added
          </h2>
          <div className="fileList" >
             {
              FileArray.map(elem =>(
               <div className="FileDataHolder" >
                 <Link
                 to='/file/studio' 
                 className="fileHolder"
                 id = {elem.id}
                >
                  {elem.name}
                </Link>
                <p className="modificationData" >
                  Last modification : {elem.modification}
                </p>
               </div>
              ))
             }
          </div>
          </div>
        </div>
      </div>
   </section>   
 )
}
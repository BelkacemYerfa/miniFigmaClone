import { Search } from "../components/search";
import { SideBar } from "../components/sideBar";
import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChoiceDropDown } from "../components/choiceDropDown";

export const History = ()=>{
 const date = new Date() ; 
 const [Drop , setDrop] = useState(false)
 const [FileHistory , setFileHistory] = useState([
  {
   exist : true ,
   FileName : 'File 1' , 
   CreatedDate :`${date.getDate()}-${date.getMonth()+1}-${date.getFullYear() % 2000} ` , 
   ModificationDate : `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear() % 2000} ` , 
   State : 'Modified'
  },
  {
   exist : true ,
   FileName : 'File 2' , 
   CreatedDate :`${date.getDate()}-${date.getMonth()+1}-${date.getFullYear() % 2000} ` , 
   ModificationDate : `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear() % 2000} ` , 
   State : 'checked'
  },
  {
   exist : true ,
   FileName : 'File 3' , 
   CreatedDate :`${date.getDate()}-${date.getMonth()+1}-${date.getFullYear() % 2000} ` , 
   ModificationDate : `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear() % 2000} ` , 
   State : 'checked'
  },
  {
   exist : true ,
   FileName : 'File 4' , 
   CreatedDate :`${date.getDate()}-${date.getMonth()+1}-${date.getFullYear() % 2000} ` , 
   ModificationDate : `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear() % 2000} ` , 
   State : 'Modified'
  },
  {
   exist : true ,
   FileName : 'File 5' , 
   CreatedDate :`${date.getDate()}-${date.getMonth()+1}-${date.getFullYear() % 2000} ` , 
   ModificationDate : `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear() % 2000} ` , 
   State : 'Modified' 
  },
 ])
 return(
  <section className="HomeSection">
    <SideBar />
    <div className="HistoryHolder">
     <h1 className="HistoryTitle" >
       Build History
      </h1>
     <div className="searchFiles" >
       <Search />
       <br />
       <div className="DataInfoHolder" >
         <motion.div 
         whileTap={{scale : .9}}
         onClick={()=>{
          setDrop(!Drop)
         }}
         className="BtnChoice" >
           All 
           <span class="material-symbols-rounded RBtn ">
            expand_more
           </span>
         </motion.div>
         {
          Drop && (
            <ChoiceDropDown />
          )
         }
         <div className="TableInfo" >
           <h2>
             Build Name 
           </h2>
           <h2>
            Date Created
           </h2>
           <h2>
            Last Modification
           </h2>
           <h2>
            State
           </h2>
         </div>
         <div className="FilesData" >
           {
            FileHistory.map(elem => (
              <div className="TableInfo dataFileHolder"  >
                <p className="modificationData" >
                  {elem.FileName}
                </p >
                <p className="modificationData">
                  {elem.CreatedDate}
                </p>
                <p className="modificationData">
                 {elem.ModificationDate}
                </p>
                {
                 elem.State === 'Modified' ? (
                  <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.3623 22.3622C25.7306 18.994 25.7306 13.5329 22.3623 10.1646C18.994 6.79636 13.533 6.79636 10.1647 10.1646C6.79644 13.5329 6.79644 18.994 10.1647 22.3622C13.533 25.7305 18.994 25.7305 22.3623 22.3622Z" stroke="#FFCC00" stroke-width="2" stroke-miterlimit="10"/>
                    <path d="M12.6694 16.2634L19.8569 16.2634" stroke="#FFCC00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>

                 ) : (
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.4531 9.87061L10.1793 14.9019L7.54688 12.3862" stroke="#3AAF00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M11.5 20.6519C16.2635 20.6519 20.125 16.7903 20.125 12.0269C20.125 7.2634 16.2635 3.40186 11.5 3.40186C6.73654 3.40186 2.875 7.2634 2.875 12.0269C2.875 16.7903 6.73654 20.6519 11.5 20.6519Z" stroke="#3AAF00" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  
                 ) 
                }
              </div>
            ))
           }
         </div>
       </div>
     </div>
    </div>
  </section>
 );
}
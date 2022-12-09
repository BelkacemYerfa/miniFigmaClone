import { motion } from 'framer-motion'
import { useEffect, useState } from 'react';
import { FabricJSCanvas, useFabricJSEditor } from 'fabricjs-react'

export const Studio = ({user})=>{
 const BgArray = [
   'red' , 
   'white' , 
   'black' , 
   'gray' , 
   'orange' , 
   'yellow' , 
   'blue' ,
   'green' , 
   'purple' ,
   'aqua'
 ] ;
 const { editor, onReady } = useFabricJSEditor()
 const [BgShape , setBgShape] = useState('') ; 
 const [Stroke , setStroke] = useState('') ; 
 const [Draw , setDraw] = useState(false) ; 
 const [elementDropDown , setElementDropDown] = useState(false) ; 
 const shape = document.getElementById('shape') ; 
 shape?.addEventListener('mouseover' , ()=>{
  setElementDropDown(true)
  console.log(elementDropDown)
 })
 const addRectangle = ()=>{
  editor.addRectangle();
 }
 const addCircle = ()=>{
  editor.addCircle() ; 
 }
 const addDraw = ()=>{
  setDraw(!Draw)
  editor.canvas.isDrawingMode = false
  if( Draw ){
    editor.canvas.isDrawingMode = true
  }
 }
 const addLine = ()=>{
  editor.addLine() ; 
 }
 const addText = ()=>{
  editor.addText('Add text')
 }
 const deleteSelected = ()=>{
   editor.deleteSelected() ; 
 }
 const deleteAll = ()=>{
  editor.deleteAll()
 }
 useEffect(()=>{
  console.log(BgShape) ; 
  setBgShape('')
 } , [BgShape])
 useEffect(()=>{
  console.log(Stroke)
  setStroke('')
 } , [Stroke])
 return(
  <section className="StudioContainer" >
   <nav className="navBarElements" >
    <div className='hodlerInfoUser' style={{
        display : 'flex' , 
        alignItems : 'center' , 
        gap : '10px' , 
        backgroundColor : 'transparent' , 
        color : 'white' , 
        padding : '0px'
       }} >
        <img className="userIcon" height={100} width={100} src={user?.photoURL} alt="" />
        <h2 className='userName' >
          {user?.displayName}
        </h2>
       </div>
     <div className="ListItemsHolder" >
     <div className="material-symbols-rounded RBtn "
      onClick={addRectangle}
     >
       square
      </div>
      <div className="material-symbols-rounded RBtn "
       onClick={addCircle}
      >
       circle
      </div>
      <div className="material-symbols-rounded RBtn rotation "
       onClick={addLine}
      >
       line_end
      </div>
      <div className="material-symbols-rounded RBtn"
       onClick={addDraw}
      >
      edit
      </div>
      <div className="material-symbols-rounded RBtn" 
       onClick={addText}
      >
      title
      </div>
      <div className="material-symbols-rounded RBtn" 
       onClick={deleteSelected}
      >
      delete
      </div>
     </div>
    <div style={{
      display : 'flex' , 
      alignItems : 'center' , 
      gap : '10px'
    }} >
    <motion.button
      whileTap={{scale : .9}}
      type="submit" value='Export' className="ExportBtn"
     >
      Export
     </motion.button>
     <motion.button
      whileTap={{scale : .9}}
      type="submit" value='Export' className="ExportBtn deleteBtn"
      onClick={deleteAll}
      style={
        {
          display : 'flex' , 
          alignItems : 'center' , 
          gap : '5px'
        }
      }
     >
       <span className="material-symbols-rounded RBtn ">
        delete
       </span>
      Delete All
     </motion.button>
    </div>
   </nav>
   <div className="UiContainer" onMouseEnter={()=>{
    editor.canvas.selection = false ; 
   }} > 
   <div className='fabricContainer'>
   <FabricJSCanvas className='Shape' id='shape' onReady={onReady} />
   </div>
    <div className='sideBarModification' >
     <div className='holder' >
       <h2 className='TitleHolder' >
        Background
       </h2>
       <br />
       <div className='ElementHolder' >
       {
      BgArray.map( elem =>(
       <motion.div className='circle'
        whileTap={{scale : .9}}
        onClick={async ()=>{
         setBgShape(elem)
         editor.setFillColor(elem) ; 
         editor.canvas.freeDrawingBrush.color = `${elem}`;
        }}
       style={{
        backgroundColor : `${elem}` , 
        height : 32 , 
        width : 32 , 
        borderRadius : '50%' ,
        cursor : 'pointer' 
       }} ></motion.div>
      ))
     }
       </div>     
     </div>
     <br />
     <br />
     <div className='holder' >
       <h2 className='TitleHolder' >
        Stroke
       </h2>
       <br />
       <div className='ElementHolder' >
       {
      BgArray.map( elem =>(
       <motion.div className='circle'
        whileTap={{scale : .9}}
        onClick={async()=>{
          setStroke(elem)
          editor.setStrokeColor(elem)
        }}
       style={{
        border :  ` 2px solid ${elem}` , 
        height : 32 , 
        width : 32 , 
        borderRadius : '50%' ,
        backgroundColor : 'transparent' , 
        cursor : 'pointer' 
       }} ></motion.div>
      ))
     }
       </div>     
     </div>  
     <div className='ZoomFunct' >
      <motion.div 
      className='ZoomFuncCont'
       whileTap={{scale : .9}}
      onClick={()=>{
        editor.zoomIn()
       }}>
       <span class="material-symbols-rounded">
        add
        </span>
       </motion.div>
       <motion.div 
        whileTap={{scale : .9}}
        className='ZoomFuncCont'
       onClick={()=>{
        editor.zoomOut()
       }} >
         <span class="material-symbols-rounded">
        remove
        </span>
       </motion.div>
      </div>
     </div>
    </div>
  </section>
 );
}
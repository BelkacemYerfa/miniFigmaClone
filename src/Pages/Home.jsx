import { useNavigate } from 'react-router-dom' ; 
import icon from '../images/2003805 copy.png'
export const Home = ({user})=>{
  const navigate = useNavigate()
 return(
   <div className="Home">
     <nav className="navBar" >
       <div style={{
        display : 'flex' , 
        alignItems : 'center' , 
        gap : '10px' 
       }} >
        <img className='AppIcon' src={icon} alt="" />
        <p style={{
          fontSize : 18 , 
          fontWeight : 500 , 
        }} >
          Designo
        </p>
       </div>
       <div className='hodlerInfoUser' style={{
        display : 'flex' , 
        alignItems : 'center' , 
        gap : '10px'
       }} >
        <img className="userIcon" height={100} width={100} src={user?.photoURL} alt="" />
        <h2 className='userName' >
          {user?.displayName}
        </h2>
       </div>
     </nav>
     <div className='choice-holder' >
       <div className='NewFile-Holder' id='newFile' >
        <button className='BtnStyle' >
           <p>
            New File
           </p>
          <div className='addBtn' >
          <span class="material-symbols-rounded">
           add
          </span>
         </div>
        </button>
       </div>
       <button 
       className='BtnStyle'
       onClick={()=>{navigate('/file')}} 
       >
         Recent Project
       </button>
     </div>
   </div>
 );
}
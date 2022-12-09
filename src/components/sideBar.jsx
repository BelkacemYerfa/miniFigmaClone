import { Link } from 'react-router-dom';
import googleIcon from '../images/2991148.png';

export const SideBar = ({user})=>{
 
 const ListArray = [
  {
   redirect : '/file' , 
   htmlCode : "home" , 
   text : 'Home' , 
  } ,
  {
   redirect : '/file/history' , 
   htmlCode : "history" , 
   text : 'Build History' , 
  } , 
  {
   redirect : '/documentation' , 
   htmlCode : "description" , 
   text : 'Documentation' , 
  }
 ]

 return(
  <div className='sideBar' >
    <div className='ImageHolder' >
      <img className="userIcon" height={100} width={100} src={user?.photoURL} alt="" />
      <h2 className='userName' >
        {user?.displayName}
      </h2>
    </div>
    <ul className='list' >
      {
       ListArray.map(elem=>(
         <Link to={elem.redirect} className='ListItem'  >
           <span class='material-symbols-rounded'>
            {elem.htmlCode}
           </span>
           {elem.text}
         </Link>
       ))
      }
    </ul>
  </div> 
 );
}
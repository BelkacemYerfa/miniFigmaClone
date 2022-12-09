import googleIcon from '../images/2991148.png';
import { useNavigate } from 'react-router-dom'
import { signInWithPopup } from 'firebase/auth'
import { auth, google } from '../config/firebase';

export const Main = ({handleUser})=>{
 const navigate = useNavigate() ; 
 const signWithGoogle = async ()=>{
  const userData = await signInWithPopup(auth , google)
  if(userData?.user){
    navigate('/Home') ; 
    handleUser(userData?.user)
  }
 }
 return (
  <div className='BtnHolder' >
   <button 
   className="googleBtn"
   onClick={signWithGoogle}
   >
     <img className='icon' src={googleIcon} alt="google pic" />
     Connect With Google
   </button>
  </div>
 )
}
import './input.css';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom' ; 
import { Home } from './Pages/Home';
import { Community } from './Pages/community';
import { Main } from './Pages/main';
import { History } from './Pages/History';
import { Studio } from './studioCode/studio';
import { Docementation } from './Pages/decomentation';
import { useState } from 'react';

function App() { 
  const [user , setUser] = useState({}) ; 
  const handleUser = (userData)=>{
    setUser(userData)
  }
  return (
    <div className="App">
      <Router>
        <Routes>    
          <Route path='/' element={<Main handleUser={handleUser} user={user} />}  />    
          <Route path={user?.uid ? '/Home' : '/404'} element={<Home user={user} />} />
          <Route path={user?.uid ? '/file' : '/404'} element={<Community user={user} />} />
          <Route path={user?.uid ? '/file/history' : '/404'} element={<History user={user} />} />
          <Route path={user?.uid ? '/file/studio' : '/404'} element={<Studio user={user} />} />
          <Route path={user?.uid ? '/documentation' : '/404'} element={<Docementation user={user} />} ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
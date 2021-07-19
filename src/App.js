import React, { useState, useEffect} from 'react';
import './App.css';
import Sidebar from './Components/Sidebar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ResumeScreen from './Containers/ResumeScreen';
import MyCourseScreen from './Containers/MyCoursesScreen';
import { getUser } from './services/requests';

function App() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const { data } = await getUser()
        setUser(data)
      } catch (err) {
        console.err(err)
      }
    }
    getUserData()
  }, [])
  
  return (
    
    <Router>
      
      <main className="App">
        <Sidebar props={user}/>
        <div className="main-content">
            <Switch>
              <Route exact path="/">
                <ResumeScreen props={user}/>
              </Route>
              <Route exact path="/containers/mycoursesscreen">
                <MyCourseScreen />
              </Route>
            </Switch>
        </div>

      </main>
    </Router>
  )
}

export default App;

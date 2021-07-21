import React, { useState, useEffect} from 'react';
import './App.css';
import Sidebar from './Components/Sidebar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './Containers/Dashboard';
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
          <Switch>
            <Route exact path="/">
              <Dashboard props={user}/>
            </Route>
            <Route path="/containers/mycoursesscreen">
              <MyCourseScreen />
            </Route>
          </Switch>
      </main>
    </Router>
  )
}

export default App;

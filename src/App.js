import React, { useState, useEffect} from 'react';
import './App.css';
import Sidebar from './Components/Sidebar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './Containers/Dashboard';
import MyCourseScreen from './Containers/MyCoursesScreen';
import { getUser, getCourses } from './services/requests';

function App() {
  const [user, setUser] = useState([]);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const { data } = await getUser()
        setUser(data)
      } catch (err) {
        console.err(err)
      }
    }
    const getCoursesData = async () => {
      try {
        const { data } = await getCourses()
        setCourses(data)
      } catch (err) {
        console.err(err)
      }
    }
 
    getUserData();
    getCoursesData();
  }, [])

  return (
    
    <Router>
      <main className="App">
        <Sidebar props={user}/>
        <Switch>
          <Route exact path="/">
            <Dashboard props={user}/>
          </Route>
          <Route path="/mycoursesscreen">
            <MyCourseScreen props={courses}/>
          </Route>
        </Switch>
      </main>
    </Router>
  )
}

export default App;

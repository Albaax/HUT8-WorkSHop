import React, { useState, useEffect} from 'react';
import './App.css';
import Sidebar from './Components/Sidebar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './Containers/Dashboard';
import { getUser, getCourses } from './services/requests';
import MyCourses from './Containers/MyCourses';

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

  const routes = [
    {
      path: '/',
      exact: true,
      main: () => <Dashboard props={user} />,
    },
    {
      path: '/mycourses',
      main: () => <MyCourses props={courses} />,
    },
  ]
  
  return (
    
    <Router>
      <main className="App">
        <Sidebar props={user}/>
        <Switch>
        {routes.map((route, i) => (
            <Route
              key={i}
              path={route.path}
              exact={route.exact}
              children={<route.main />}
            />
          ))}
        </Switch>
      </main>
    </Router>
  )
}

export default App;

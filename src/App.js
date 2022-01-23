import './App.css';
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard';
import AllStudents from './components/AllStudents';
import AddStudents from './components/AddStudents';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import EditStudent from './components/EditStudent'
import React,{useState} from 'react'

export const StudentContext = React.createContext();

function App() {
  let data = {
    earning:"40,000",
    annual:"2,40,000",
    task:20,
    pending:26

  }

  let [students,setStudents] = useState([
      {
        name:"Karan",
        email:"karan@gmail.com",
        mobile:"753232167",
        class:"B30WD"
      },
      {
        name:"Raj",
        email:"Raj@gmail.com",
        mobile:"9921312325",
        class:"B20WE"
      },
      {
        name:"arjun",
        email:"arjun@gmail.com",
        mobile:"982141342",
        class:"B30WD"
      }
  ]);

  return <>
    <BrowserRouter>
      
        <div style={{display:"grid",gridTemplateColumns:"15% 85%"}}>
            <div >
                <Sidebar/>
            </div>
            <div>
            <StudentContext.Provider value={{students,setStudents}}>
                <Routes>
                      <Route path='/dashboard' element={<Dashboard data={data}/>}/>
                      <Route path ='/all-students' element={<AllStudents/>}/>
                      <Route path = '/add-student' element={<AddStudents/>}/>
                      <Route path ='/edit-student/:id' element={<EditStudent/>}/>
                      <Route path = '/' element={<Dashboard data={data}/>}/>
                </Routes>
              </StudentContext.Provider>
            </div>
        </div>
    </BrowserRouter>
  </>
}

export default App;

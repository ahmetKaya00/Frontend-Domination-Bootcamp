import React from "react";
import TaskList from "./components/TaskList";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TaskDetail from "./components/TaskDetail";
import { TaskProvider } from "./TaskContext";

function App(){
  
  return(
    <TaskProvider>
      <Router>
        <Routes>
          <Route path="/" element={<TaskList/>}></Route>
          <Route path="/task/:taskId" element={<TaskDetail/>}></Route>
        </Routes>
      </Router>
    </TaskProvider>
  );
}
export default App;
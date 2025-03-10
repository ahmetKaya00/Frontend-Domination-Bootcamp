import { createContext, useState } from "react";

const TaskContext = createContext();

const TaskProvider = ({children}) => {
    const [taskList, setTaskList] = useState(['Görev 1','Görev 2','Görev 3']);

    const addTask = (task) => {
        setTaskList([...taskList,task]);
    };

    return(
        <TaskContext.Provider value={{taskList,addTask,setTaskList}}>
            {children}
        </TaskContext.Provider>
    );
}

export {TaskContext, TaskProvider}
import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TaskContext } from "../TaskContext";
import { Alert, Input, ListGroup, ListGroupItem,Button } from "reactstrap";
import alertify from "alertifyjs";

function TaskDetail(){
    const {taskId} = useParams();
    const {taskList,setTaskList} = useContext(TaskContext);

    const [updateTask,setUpdateTask] = useState('');
    const navigate = useNavigate();

    const task = taskList[taskId];

    if(!task){
        return <Alert color="danger">Görev bulunamadı!</Alert>
    }

    const handeUpdateTask = () => {
        if(updateTask.trim === ''){
            alertify.error('Görev adı boş olamaz!')
            return;
        }
        const newTaskList = [...taskList];
        newTaskList[taskId] = updateTask;
        setTaskList(newTaskList);
        alertify.success("Görev başarılı bir şekilde güncellendi!")
        setUpdateTask('');
    }

    const handeDeleteTask = () =>{
        const newTaskList = taskList.filter((_,index) => index !== parseInt(taskId));
        alertify.success("Görev başarılı bir şekilde silindi!");
        navigate('/');
    };

    return(
        <div className="container mt-4">
            <h1>Görev Detayı</h1>
            <ListGroup>
                <ListGroupItem><strong>Görev:</strong>{task}</ListGroupItem>
            </ListGroup>
            <div className="mt-4">
                <Input
                    type="text"
                    value={updateTask}
                    onChange={(e)=>setUpdateTask(e.target.value)}
                    placeholder="Görev Güncelle"
                    className="mb-2"
                />
                <Button color="primary" onClick={handeUpdateTask}>Güncelle</Button>
                <Button color="danger" onClick={handeDeleteTask}>sil</Button>
            </div>
        </div>
    );
}

export default TaskDetail;
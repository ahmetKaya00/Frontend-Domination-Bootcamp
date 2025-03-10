import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { TaskContext } from "../TaskContext";
import alertify from "alertifyjs";
import { Alert, Button, Input, ListGroup, ListGroupItem } from "reactstrap";

function TaskList(){
    const { taskList, addTask } = useContext(TaskContext);
    const [newTask, setNewTask] = useState('');
    const [error,setError] = useState('');

    const handleAddTask = () => {
        if(newTask.trim() === ''){
            setError('Görev adı boş olamaz!');
            return;
        }
        addTask(newTask);
        setNewTask('');
        setError('');
        alertify.success('Görev başarıyla eklendi!')
    }
    return(
        <div className="container mt-4">
            <h1 className="mb-4">Görev Listesi</h1>
            {taskList.length === 0 ? (
                <Alert color="warning">Henüz bir görev eklenmedi.</Alert>
            ):(
                <ListGroup>
                {taskList.map((task, index) => (
                    <ListGroupItem key={index}>{task} - <Link to={`/task/${index}`}>Detaya Git</Link></ListGroupItem>
                ))}
            </ListGroup>
            )}

            <Input
            className="mt-3 mb-4"
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="Yeni Görev Ekle"
            />
            <Button onClick={handleAddTask}>Görev Ekle</Button>
            {error && <Alert color="danger" className="mt-3">{error}</Alert>}
        </div>
    );
}
export default TaskList;
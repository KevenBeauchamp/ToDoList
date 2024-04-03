import { useDispatch, useSelector } from "react-redux";
import AddTasks from "./AddTasks";
import Button from "./Button";
import classes from '../css/Tasks.module.css';
import images from "../assets/cochevert.jpg"
import { useRef, useState } from "react";
import { deleteTask, editTask, editTaskToFait } from "../action/task.action";

export default function Tasks(task){
    const taskData = task.task
    const [changeToEdit,upadteToEdit] = useState(false);
    const [editContent, setEditContent] = useState(taskData.title);
    const [editFait, setEditFait] = useState(taskData.fait);
    const form = useRef();
    const forms = useRef();
    const dispatch = useDispatch();
    function handleChangeToEdit(){
        upadteToEdit(true);
    }
    function handleChangeToFait(){
        setEditFait(1);       
    }
    function saveEdit(){
        // setEditFait(1);   
        upadteToEdit(false);    
    }
    const handleEditForFait = (e) => {
        e.preventDefault();
    
        const taskDataFetchs = {
            title: taskData.title,
            date_task: taskData.date_task,
            fait:editFait,
            id: taskData.id,
        };
    
        dispatch(editTaskToFait(taskDataFetchs));
        // setEditFait(taskData.fait);
        // Tasks.forceUpdate();
      };
      const handleChangeToSave = (e) => {
        e.preventDefault();
        const taskDataFetch = {
            title: editContent,
            date_task: taskData.date_task,
            fait:taskData.fait,
            id: taskData.id,
        };
    
        dispatch(editTask(taskDataFetch));
        console.log(taskDataFetch)
        upadteToEdit(false);
    }
      
    return(
        <>
            <div id="task"> 
                <table className={classes.allTasks}>
                    <thead>
                        <tr>
                        <th>Description</th>
                        <th>Date</th>
                        <th>Statut</th>
                        <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            !changeToEdit ?      
                                <tr key={taskData.id}>
                                    <td className={classes.title}>    
                                        
                                           { taskData.title}
                                        
                                    </td>
                                    <td className={classes.dateTask}>{taskData.date_task}</td>
                                    <td id="fait">{(taskData.fait==1? <img className={classes.imagesproject} src={images} alt="" />:<form ref={form} onSubmit={(e) => handleEditForFait(e)}><Button  onClick={handleChangeToFait}  className={classes.greenButton}>Fait</Button></form>)}</td>
                                    <td className={classes.case}>
                                        <Button onClick={handleChangeToEdit} className={classes.blueButton} >Edit</Button>
                                        <Button onClick={() => dispatch(deleteTask(taskData.id))} className={classes.warningButton}>Delete</Button>
                                    </td>                            
                                </tr>
                                : 
                                
                                    <tr key={taskData.id}>
                                        
                                            <td  className={classes.title}>  
                                            <form ref={forms} onSubmit={(e) => handleChangeToSave(e)}>
                                            <div className={classes.alignVertical}>
                                                <div>
                                                    <input
                                                        type="text"
                                                        defaultValue={taskData.title}
                                                        onChange={(e) => setEditContent(e.target.value)}
                                                        
                                                        />

                                                </div>
                                                <div>
                                                    <Button className={classes.blueButton} >Save</Button> 
                                                </div>
                                                
                                            
                                            </div>
                                           
                                            </form> 
                                            </td>
                                            <td>{taskData.date_task}</td>
                                            <td>{(taskData.fait==1? <img className={classes.imagesproject} src={images} alt="" />:<Button onClick={handleChangeToFait}  className={classes.greenButton}>Fait</Button>)}</td>
                                            <td className={classes.case}>
                                                <Button onClick={handleChangeToEdit} className={classes.blueButton} >Edit</Button>
                                                <Button className={classes.warningButton}>Delete</Button>
                                            </td>  
                                                                 
                                    </tr>
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
    
}
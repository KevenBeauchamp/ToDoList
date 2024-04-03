import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, getPosts } from "../action/task.action";
import classes from "../css/AddTasks.module.css"

export default function AddTasks(){
    const form = useRef();
    // const user = useSelector((state) => state.userReducer);
    const dispatch = useDispatch();

    const handleForm = async (e) => {
        e.preventDefault();

        const tasksData = {
        title: form.current[0].value,
        date_task: form.current[1].value,
        fait: 0,
        };
        // console.log(tasksData);
        await dispatch(addTask(tasksData));
        dispatch(getPosts());
        form.current.reset();
    };
    return(
        <>
            <section className={classes.TaskInput}>
                <div className={classes.formContainer}>
                    <form ref={form} onSubmit={(e) => handleForm(e)}>
                        <input className={classes.input} type="text" placeholder="Titre de votre tache" />
                        <input  className={classes.input} type="date" placeholder="Date de votre tache" />
                        {/* <input type="number" placeholder="Fait" /> */}
                        <input  className={classes.button} type="submit" value="Enregistrer" />
                    </form>
                </div>
            </section>
        </>
    )
}
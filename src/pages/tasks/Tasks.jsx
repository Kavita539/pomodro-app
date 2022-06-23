import {
    Navbar,
    TaskModal
} from "../../components";
import React, {
    useState
} from "react";
import {
    useTask,
    useAuth
} from "../../context";
import {
    PencilAltIcon,
    PlusCircleIcon,
    TrashIcon,
} from "@heroicons/react/solid";
import {
    deleteTask,
    EditTask
} from "../../services";
import {
    taskConstants
} from "../../constants";

const Tasks = () => {
    const [modal, setModal] = useState(false);
    const [task, setTask] = useState({
        title: "",
        description: "",
        time: "",
    });
    const {
        authState: {
            token,
            userInfo
        },
    } = useAuth();
    const {
        state: {
            tasks
        },
        dispatch,
    } = useTask();
    const userName = userInfo?.firstName || "Guest";

    const editTask = async (task) => {
        try {
            const data = await EditTask(token, task);
            dispatch({
                type: taskConstants.EDIT_TASK,
                payload: data
            });
        } catch (error) {
            console.log(error);
        }
        setModal(false);
        setTask("");
    };

    return(
        <>
			<div className="h-full">
			    <Navbar />
			    <div className="w-full flex flex-col items-center h-4/5">
			        <div className="w-4/5 h-4/5 mt-8 md:p-8">
			            <h2 className="font-semibold text-xl md:text-2xl md:mx-4 text-white ">{`Welcome back ${userName}`}</h2>
			            <h3 className="my-4 md:mx-4 md:text-2xl font-medium text-white">
			                {tasks && tasks.length === 0
			                ? " Hey!! You have 0 task to do. Get staerted by adding tasks"
			                : `Hey!! You have ${tasks.length} tasks to Do. Happy tasking :)`}
			            </h3>
			            <div className=" rounded-3xl  bg-white dark:bg-neutral-600 shadow-2xl p-4 md:p-8">
			                <div className="flex justify-between">
			                    <h2 className="font-extrabold text-xl text-center">
			                        To-Do List
			                    </h2>
			                    <PlusCircleIcon className="h-10 w-10   text-blue-500 cursor-pointer" onClick={(e)=> {
			                        e.preventDefault();
			                        setTask("");
			                        setModal(true);
			                        }}
			                        />
			                </div>
			                {tasks && tasks.length !== 0 ? (
			                <>
			                    {tasks.map((item) => (
			                    <div key={item._id} className="flex justify-between md:p-4 items-center">
			                        <div className="flex gap-2 items-center ">
			                            <input type="checkbox" className="w-4 h-4" onChange={()=> {
			                            item.isDone = !item.isDone;
			                            editTask(item);
			                            }}
			                            checked={item.isDone}
			                            />
			                            <p className={`text-xl ${ item.isDone ? "line-through" : null }`}>
			                                {item.title}
			                            </p>
			                        </div>

			                        <div className="flex gap-4 ">
			                            <PencilAltIcon className="w-6 h-6 cursor-pointer" onClick={(e)=> {
			                                e.preventDefault();
			                                setTask(item);
			                                setModal(true);
			                                }}
			                                />
			                                <TrashIcon className="w-6 h-6 cursor-pointer" onClick={()=>
			                                    deleteTask(token, item._id, dispatch)
			                                    }
			                                    />
			                        </div>
			                    </div>
			                    ))}
			                </>
			                ) : (
			                <div>Start adding the TODO list here</div>
			                )}
			            </div>
			        </div>
			    </div>
			    <TaskModal modal={modal} setModal={setModal} task={task} setTask={setTask} />
			</div>
        </>
    );

};

export {
    Tasks
};
// export default function Todo(props) {
//     return(
//         <h4>Task {props.task} : From External File</h4>
//     )
// }

// or use

// export default function ToDo({task, isDone, time = 0}) {
//     if(isDone == true){
//         return <h4>Task : {task} - Done. Duration {time}. From External File</h4>
//     }else {
//         return <h4>Task : {task} - Incomplete. Duration {time}. From External File</h4>
//     }
// }

// conditional rendering: option 3 - ternary
// condition ? true : false

// export default function ToDo({task, isDone, time = 0}) {
//     return isDone ? <li>Done: {task}. Duration {time} </li> : <li>Not Done: {task} </li>
// }

// conditional rendering: option 4 - &&

// export default function ToDo({ task, isDone, time = 0 }) {
//   return (
//     isDone && (<li>Done Task: {task}. Duration {time}</li>)
//   );
// }


// conditional rendering: option 5 - ||

// export default function ToDo({ task, isDone, time = 0 }) {
//   return (isDone || (<li>Not Done Task: {task}. Duration {time}</li>));
// }

// conditional rendering: option 6

export default function ToDo({task, isDone, time = "0 min"}) {

    let listItem;

    if(isDone == true){
        listItem = <h4>Task : {task} - Complete. Duration: {time}. From External File</h4>
    }else {
        listItem = <h4>Task : {task} - Incomplete. Duration: {time}. From External File</h4>
    }
    return listItem;
}
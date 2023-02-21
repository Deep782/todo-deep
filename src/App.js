import {useState, useEffect} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import './App.css';
// import data from './Utlis/Dataset'
import TodoCard from './Component/TodoCard/TodoCard';
import './Utlis/Dataset.css'

function App() {
  const [toDos, setToDos] = useState([])
  const [newTitle, setNewTitle] = useState('')
  
  useEffect(()=>{
    let data = localStorage.getItem("data")
    if(data){
    setToDos(JSON.parse(data))
    }
  },[])
  const addHandler =()=>{
    let newTodo = {
      id: Math.random(),
      title: newTitle,
      isCompleted : false,
      isDeleted: false
    }

    toDos.push(newTodo)
    setToDos([...toDos])
    localStorage.setItem("data",JSON.stringify(toDos))
  }
  const completeHandler =(id) =>{
    const todo = toDos.find(e => e.id === id); // finds the element with id 
    todo.isCompleted = true // changes are made which are reflected automatically
    setToDos([...toDos]) //updating the current state
    localStorage.setItem("data",JSON.stringify(toDos)) //updating local storage with state
  }
  const deleteHandler =(id) =>{
    const todo = toDos.find(e => e.id === id); // Finds the element  by id
    todo.isDeleted = true // Changes are made 
    setToDos([...toDos])// updating the state
    localStorage.setItem("data",JSON.stringify(toDos)) // Updating Local Storage with state
  }
  console.log(toDos)
  return (
    <div className='main-container'>
      <div className='input-container'>
        <Box

          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <div className='text-container'>
          <TextField
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue=""
          onChange={(data)=>setNewTitle(data.target.value)} />
          </div>
        </Box>
        <Button variant="outlined" onClick={addHandler}>Add</Button>
      </div>
      <div className='output-container'>
        <div className='card-container'>
          <h4>Pending</h4>
          <div className='card-list'>
            {
              toDos.map((e) => {
                if(!e.isCompleted) {
                  return(
                  <div>
                    {!e.isDeleted && 
                     <TodoCard key={e.id} title={e.title} id= {e.id} complete={completeHandler} delete= {deleteHandler}/>}
                     </div>
                     )
                } else {
                  return <></>
                }
              })
            }
          </div>
        </div>
        <div className='card-container'>
          <h4>Completed</h4>
          <div className='card-list'>
          {
              toDos.map((e) => {
                if(e.isCompleted) {
                   return (!e.isDeleted && <TodoCard key={e.id} id={e.id} title={e.title} isCompleted={e.isCompleted} delete={deleteHandler}/>)
                } else {
                 return <></>
                }
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import './TodoCard.css'

const TodoCard = (props) => {

    let id = props.id

    return (
        <div className='card-wrapper'>
            <Card sx={{ maxWidth: 345 }}>

                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.title}
                    </Typography>
                </CardContent>

                <CardActions>
                    <Button size="small" onClick={()=>props.complete(id)}>complete</Button>
                    <Button size="small" onClick={()=>props.delete(id)}>Delete</Button>
                </CardActions>
            </Card>
            </div>
    )
}

export default TodoCard
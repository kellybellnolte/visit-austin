import {  Link, Outlet } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import { CardProps } from '../types/interfaces'
import Pages from "../pages/Pages.json"
import {useState } from 'react';

const ThingsToDo = () => {
    const [thingsToDo, setThingsToDo] = useState(Pages.activities)
    return(
        <>
        <h1>Things to Do in Austin</h1>
        <Grid container spacing={3} direction="row" justifyContent="flex-start" alignItems="flex-start">
        {thingsToDo.map((card: CardProps) => (
            <Grid item xs={12} sm={6} md={3} key={card.id}>
                <Card sx={{ maxWidth: 500 }}>
                <CardActionArea component={Link} to={`/${card.id}`}>
                    <CardMedia
                    key={card.id + "actvity-image"}
                    component="img"
                    height="300"
                    image={card.image}
                    alt={card.alt}                    />
                    <CardContent>
                    <Typography key={card.id + "actvity-name"} gutterBottom variant="h5" component="div">
                        {card.name}
                    </Typography>
                    <Typography key={card.id + "actvity-desc"} variant="body2" color="text.secondary">
                        {card.description}
                    </Typography>
                    </CardContent>
                </CardActionArea>
                </Card>
            </Grid>
            ))}
       </Grid>
  <Outlet />
        </>
    )
}

export default ThingsToDo
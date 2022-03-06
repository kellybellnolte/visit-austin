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

const HelpfulInfo = () => {
    const [info, setinfo] = useState(Pages.information)

    return(
        <>
    <h1>Helpful Info</h1>
    <Grid container spacing={3} direction="row" justifyContent="flex-start" alignItems="flex-start">
        {info.map((card: CardProps) => (
            <Grid item xs={12} sm={6} md={3} key={card.id}>
                <Card sx={{ mr:3, ml:2, maxWidth: 500 }}>
                <CardActionArea component={Link} to={`/${card.id}`}>
                    <CardMedia
                    key={card.id + "helpful-image"}
                    component="img"
                    height="300"
                    image={card.image}
                    alt={card.alt}                    />
                    <CardContent>
                    <Typography key={card.id + "helpful-name"} gutterBottom variant="h5" component="div">
                        {card.name}
                    </Typography>
                    <Typography key={card.id + "helpful-desc"} variant="body2" color="text.secondary">
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

export default HelpfulInfo
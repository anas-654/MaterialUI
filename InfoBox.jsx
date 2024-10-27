import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({info}){
   let hoturl="https://media.istockphoto.com/id/813720840/photo/summer-heat-wave-in-the-city.jpg?s=2048x2048&w=is&k=20&c=GFLYF-pRw41qTUwGyU4V1J1qcI0ilFkKx0zuDPd_uqE=";
   let coldurl="https://plus.unsplash.com/premium_photo-1676747433701-ebe10f095b77?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
   let rainurl="https://images.unsplash.com/photo-1503435824048-a799a3a84bf7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
   
    return (
        <div>

       
        
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image= {
         
            info.humidity>80?rainurl:
            info.temp>=30?hoturl:
coldurl
         }
          title="green iguana"
          
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city}
           {
           
            info.humidity>80?<ThunderstormIcon/>:
            info.temp>=30?<WbSunnyIcon/>:
<AcUnitIcon/>
           }
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {/* <p>{info.city}</p> */}
           <p>Feels like:{info.feels_like}&deg;C</p>
           <p>Pressure:{info.pressure}</p>
           <p>Temp:{info.temp}&deg;C</p>
           <p>Max-Temp:{info.temp_max}&deg;C</p>
           <p>Min-Temp:{info.temp_min}&deg;C</p>
           <p>The weather can be described as <i>{info.weather}</i> and feels like <b>{info.feels_like}</b></p>
          </Typography>
        </CardContent>
       
      </Card>
      </div>
    )
}
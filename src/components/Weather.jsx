import { useState } from "react";
import { Handler } from './HandleData'
import { Data } from './ShowData'
import { Button } from '@material-ui/core'
import {Container , CssBaseline,AppBar,Toolbar,Typography,Divider} from '@material-ui/core'
import { RiSkull2Fill } from 'react-icons/ri'
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Brightness2Icon from '@material-ui/icons/Brightness2';
import { NavBar } from './NavBar'


export const Weather = ({setDarkMode,themeState}) => {
  const [weatherData,setWeatherData] = useState(
  {coord:{lon:0,lat:0},weather:[{id:0,main:"",description:"",icon:""}],base:"",main:{temp:0,feels_like:0,temp_min:0,temp_max:0,pressure:0,humidity:0},visibility:0,wind:{speed:0,deg:0,gust:0},clouds:{all:0},dt:0,sys:{type:0,id:0,country:"",sunrise:0,sunset:0},timezone:0,id:0,name:"",cod:0,str_sunrise:'',str_sunset:'',apikStatus:'not assigned'}
)
const [units,setUnits] = useState({
  temperature: '',
  speed: '',
  pressure: 'bar',
  angle: '°'
})
  let themeMessage = ''
  let themeIcon 
  let barColor
  let buttonColor
  let textColor
  if(themeState) {
    themeMessage='switch to Light Mode'
    themeIcon=<WbSunnyIcon/>
    barColor='#C4B5FD'
    buttonColor='white'
    textColor='black'
  }
  else {
    themeMessage='switch to Dark Mode'
    themeIcon=<Brightness2Icon/>
    barColor='#8B5CF6'
    buttonColor='black'
    textColor='white'
  }
  return (
    <>
      <CssBaseline />
      <AppBar position='relative'>
        <Toolbar>
          <WbSunnyIcon style={{color:'#FBBF24'}}/>
          <Typography variant='h5'style={{paddingRight:'2rem'}}> Weather App </Typography>
          <RiSkull2Fill style={{color:buttonColor,paddingRight:'0.3rem'}}size={30}/>
          <Typography variant='small'> designed by ghozt </Typography>
        </Toolbar>
      </AppBar>
      <div style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between',paddingLeft:'4rem',paddingRight:'2rem',paddingTop:'2rem',paddingBottom:'2rem'}}>
      
      <Typography
          variant='h4' align='start' color='textPrimary' gutterBottom>Umbrella 🌧 🌂 or Sunscreen ☀️ 🧴</Typography>
      
      <Button variant='contained' 
      startIcon={themeIcon}
      style={{backgroundColor:buttonColor,color:textColor,display:'flex'}}
      onClick={() => {
        setDarkMode((oldData) => {
          if(oldData)return false
          else return true
        })
      }}
      >{themeMessage}
      </Button>
      </div>

      <div
      style={{backgroundColor:barColor,paddingTop:'0.3rem',borderStyle:'none',borderRadius:'2rem',marginLeft:'4rem',marginRight:'4rem'}}
      ></div>
      <Container maxWidth='md'>
      <Divider/>
      <Handler setWeatherData = { setWeatherData } setUnits={ setUnits }/>
      <div
      style={{backgroundColor:barColor,paddingTop:'0.3rem',borderStyle:'none',borderRadius:'2rem'}}
      ></div>
      <Data data={weatherData} units = { units }/>
      <div
      style={{backgroundColor:barColor,paddingTop:'0.24rem',borderStyle:'none',borderRadius:'2rem'}}
      ></div>
      </Container>
     <div style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center',fontSize:'0.8rem'}}>
      <NavBar bgColor={buttonColor}/>
     </div> 
     <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',paddingBottom:'4rem',paddingLeft:'3rem'}}>
        <small style={{paddingTop:'1rem'}}> In Case of Emergency Don't Contact Us </small> 
        <small style={{paddingTop:'1rem'}}> © Ghozt Inc All Rights Reserved 2021 </small>
        <small style={{paddingTop:'1rem'}}><a style={{textDecoration:'none',color:'#EC4899'}} href='https://www.911.gov/' target="_blank"> Reach out to us </a></small>
     </div>
     <Divider style={{marginBottom:'4rem'}}/>
    </>
  );
};

import { Typography , ListItem, List , ListItemIcon, ListItemText , Divider} from '@material-ui/core'
import ExploreIcon from '@material-ui/icons/Explore';
import CloudIcon from '@material-ui/icons/Cloud';
import { FaThermometerHalf  , FaWind , FaCloudSun} from 'react-icons/fa'
import { BiNotepad } from 'react-icons/bi'
import { BsClipboard } from 'react-icons/bs'
import { ImWarning } from 'react-icons/im'
import { BiBuildingHouse } from 'react-icons/bi'
export const Data = ({data , units}) =>{ 
    const time = (new Date(data.dt*1000-(data.timezone*1000)))
    if(data.cod==404){
      return (
        <>
        <div style={{paddingTop:'2rem'}}>
          <BiBuildingHouse size={60} />
          <h1>City Not Found!</h1>
          <h2>Please eneter a valid city</h2>
        </div>
        </>
      )
    }
    else if(data.apikStatus==='success'){
      return(
      <>
        <div style={{paddingBottom:'4rem'}}>
        <Typography 
        style={{padding:'4rem 0rem 1rem 0rem'}}
        variant='h5' align='start'> Weather in {data.name} 
        </Typography >
        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon>
              <CloudIcon/>
            </ListItemIcon>
            <ListItemText>
              Description: {data.weather[0].description}
            </ListItemText>
          </ListItem>
        </List>
        <Divider/>

      <List>   
        <ListItem button>
          <ListItemIcon>
            <ExploreIcon />
          </ListItemIcon>
          <ListItemText primary='co-ordinates' />
        </ListItem>
      </List>
      <ul style={{listStyle:'none'}}>
          <li style={{paddingLeft:'2.2rem'}}>Latitude: {data.coord.lat}</li>
          <li style={{paddingLeft:'2.2rem'}}>Longitude: {data.coord.lon}</li>
      </ul>
        <Divider />
       
       
        <List>   
        <ListItem button>
          <ListItemIcon>
        <FaThermometerHalf size={25}/>
          </ListItemIcon>
          <ListItemText primary='Temperature' />
        </ListItem>
      </List>
        <ul style={{listStyle:'none'}}>
          <li style={{paddingLeft:'2.2rem'}}>Feels Like: {data.main.feels_like} { units.temperature }</li>
          <li style={{paddingLeft:'2.2rem'}}>Temperature: {data.main.temp} { units.temperature }</li>
          <li style={{paddingLeft:'2.2rem'}}>Maximum Temperature: {data.main.temp_max} { units.temperature }</li>
          <li style={{paddingLeft:'2.2rem'}}>Minimum Temperature: {data.main.temp_min} { units.temperature }</li>
        </ul>
        <Divider />
       
        
        <List>   
        <ListItem button>
          <ListItemIcon>
            <BiNotepad size={25} />
          </ListItemIcon>
          <ListItemText primary='General info:' />
        </ListItem>
      </List>
        <ul style={{listStyle:'none'}}>
          <li style={{paddingLeft:'2.2rem'}}>Pressure: {data.main.pressure} { units.pressure }</li>
          <li style={{paddingLeft:'2.2rem'}}>Humidity: {data.main.humidity}</li>
        </ul>
        <Divider />
        
        
        <List>   
        <ListItem button>
          <ListItemIcon>
            <FaWind size={25}/>
          </ListItemIcon>
          <ListItemText primary='Wind:' />
        </ListItem>
      </List>
        <ul style={{listStyle:'none'}}>
          <li style={{paddingLeft:'2.2rem'}}>Speed: {data.wind.speed} { units.speed }</li>
          <li style={{paddingLeft:'2.2rem'}}>Angle: {data.wind.deg} { units.angle }</li>
          <li style={{paddingLeft:'2.2rem'}}>Gust: {data.wind.gust} </li>
        </ul>
        <Divider />
        
        
        <List>   
        <ListItem button>
          <ListItemIcon>
            <FaCloudSun size={25}/>
          </ListItemIcon>
          <ListItemText primary='Sunrise and Sunset:' />
        </ListItem>
      </List>
        <ul style={{listStyle:'none'}}>
            <li style={{paddingLeft:'2rem'}}>Sunrise: {data.str_sunrise} Local Time</li>
            <li style={{paddingLeft:'2rem'}}>Sunset: {data.str_sunset} Local Time</li>
        </ul>

        </div>
      </>
    )
    }
    else if(data.apikStatus==='not assigned'){
      return(
        <div style={{paddingTop:'3rem',paddingBottom:'3rem'}}>
          <Typography variant='h4' align='start' style={{color:'#F59E0B'}}>Enter your API Key and City and press update
          <BsClipboard style={{marginLeft:'1rem'}} size={40}/>
          </Typography >
        </div>
      )
    }
    else if(data.apikStatus==='auth_err'){
      return(
        <>
        <div style={{paddingTop:'2rem',paddingBottom:'2rem'}}>
          <ImWarning size={50}/>
          <Typography 
          style={{color:'red'}}
          variant='h4' align='start'>Authentication Failed
          </Typography >
          <h3> Try with a registered key </h3>
        </div>
        </>
      )
    }
    else{
      return(
        <h1>Weird Error Encountered</h1>
      )
    }
  }
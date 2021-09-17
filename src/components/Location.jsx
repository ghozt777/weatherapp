import { TextField, Button , Box} from '@material-ui/core'
import { useState } from "react";
import { AiFillSave } from 'react-icons/ai'
export const Location = ({ setLogin }) => {
  const [locationdata, setLocationData] = useState("New York");
  return (
    <>
      <Box component='div' p='2rem'>
      <TextField
        style={{marginRight:'1rem'}}
        id='outlined-basic'
        label="enter your city"
        variant='outlined'
        onChange={(event) => setLocationData(event.target.value)}
        />
      <Button 
      size='large'
      endIcon={<AiFillSave/>}
      style={{marginLeft:'1.5rem',marginTop:'0.35rem'}}
      variant='contained' color='secondary'
        onClick={() =>{
          setLogin((oldData) => {
            return { ...oldData, 
              location: locationdata
            };
          })
        }
      }
      >
        {" "}
        get info{" "}
      </Button>
    </Box>
    </>
  );
};

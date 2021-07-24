import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button'
import { FaBalanceScaleLeft } from 'react-icons/fa'
export const Buttons = ({ setButton}) => {
    const buttons = ["metric", "standard", "imperial"];
    return (
      <>
      <div style={{paddingTop:'1rem',paddingBottom:'1rem'}}>
        <Typography variant='h6' align='start' gutterBottom>Selct your unit (default: Metric)</Typography>
        {buttons.map((buttonElem, index) => (
          <Button variant='contained' color='primary'
          startIcon={<FaBalanceScaleLeft/>}
          style={{marginRight:'0.4rem'}}
          onClick={() =>
            setButton((data) => {
              return { ...data, units: buttonElem };
            })
          }
          key={index}
          >
            {" "}
            {buttonElem}{" "}
          </Button>
        ))}
        </div>
      </>
    );
  };
  
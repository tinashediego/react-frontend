import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import EditScreen from '../Agent/EditScreen';
import ScreenDetails from '../Agent/ScreenDetails';
import Report from '../Agent/Report'
import EditTest from './EditTest';
import Desicion from './Desicion';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Screen Patient' ,'Decision', 'Test Patient' ,'Report'];
}


export default function EditStepper() {




  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };


  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return <EditScreen next={handleNext} />;
        
          
      case 1:
        return <Desicion next={handleNext} reset={handleReset} />
   
      case 2:
        return <EditTest next={handleNext}/>;
  
        
     
  
        case 3:

    


        return <Report/>
          
        
      default:
        return 'Unknown stepIndex';
    }
  }
  

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>All steps completed</Typography>
            <Button color="primary" variant="contained" onClick={handleReset}>Start over</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
             
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

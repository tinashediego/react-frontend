import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddPatients from '../Agent/AddPatients';
import ScreenDetails from '../Agent/ScreenDetails';
import NewTest from './NewTest';
import Desicion from './Desicion';
import Report  from '../Agent/Report'

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
  return ['Add Patient', 'Screen Patient' ,'Decision', 'Test Patient' ,'Maisha Status Report'];
}


export default function HorizontalLabelPositionBelowStepper() {




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
        return <AddPatients next={handleNext} />;
      case 1:
        return <ScreenDetails next={handleNext} />;
      case 2:
  
        return <Desicion next={handleNext} reset={handleReset} />
     
  
        case 3:
  
          return <NewTest next={handleNext} />;


          case 4:
          return <Report  reset={handleReset}/>
        
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

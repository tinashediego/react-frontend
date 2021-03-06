import React from 'react'
import cx from 'classnames';
import { Card, CardContent, Typography, Grid, Button } from '@material-ui/core';


import styles from './Cards.module.css';

export default function Desicion({next ,reset}) {


    return (
        <div>

        <div className={styles.container}>
        <Grid container spacing={3} justify="center">
          <Grid item xs={12} md={3} component={Card} style={{backgroundColor:"rgba(255,0,0,0.2)"}}  className={cx(styles.card, styles.infected)} >
            <CardContent>
              
             
              <Typography color="textSecondary">
                <Button variant="contained" onClick={reset}  style={{ height:"20vh" , backgroundColor:"red" ,width:"40vh"}}  elevation={4}>FINISH</Button>
              </Typography>

          
            <Typography variant="body2" component="p">
            DO NOT PROCEED TO TEST
          </Typography>
         
            </CardContent>
          </Grid>
          <Grid item xs={12} md={3} component={Card} style={{backgroundColor:"rgba(0,255,0,0.1)"}}  className={cx(styles.card, styles.recovered)}>
            <CardContent>
              
              <Typography color="textSecondary" >
                <Button  variant="contained"  onClick={next} style={{backgroundColor:"#8BC34A" , height:"20vh" , width:"40vh"}} elevation={4}>PROCEED</Button>
              </Typography>


              <Typography variant="body2" component="p">
              PROCEED TO TEST
            </Typography>
            
            </CardContent>
          </Grid>
      
        </Grid>
      </div>
    
  
            
        </div>
    )
}

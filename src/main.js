import * as React from 'react';
import { createContext, useState } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import LapTap from './tab';

export const set=createContext()

function Main() {

    const [checkRadioCluster, setCheckRadioCluster] = useState(false)
    const [checkBoxCluster, setCheckBoxCluster] = useState(false)
    const [checkBoxSplit, setCheckBoxSplit] = useState(false)
    const [checkBoxTrip, setCheckBoxTrip] = useState(false)

    function  setCheckedRadio(e) {
        setCheckRadioCluster(e.target.checked)
        
    }
    function  setCheckedBoxCluster(e) {
        setCheckBoxCluster(e.target.checked)
        
    }

    function  setCheckedBoxSplit(e) {
        setCheckBoxSplit(e.target.checked)
    
    }

    function  setCheckedBoxTrip(e) {
        setCheckBoxTrip(e.target.checked)
      }

    function  handleClick() {
        

        if(checkBoxCluster){ 
                if(checkRadioCluster){ 
                    if(checkBoxSplit){ 
                        if(checkBoxTrip){ 
                            alert('All datas are valid!, send it to the server!')
                            return true
                        }
                        else{ 
                            alert('Please checked Trip Limit!')
                                return false
                            }
                    }
                    else{
                        alert('Please checked Split Delivery!')
                        return false
                    }
                }
                else{
                    alert('Please checked Clustering!')
                    return false
                }
        }
        else { 
            alert( ' Please checked Clustering')
            return false}
        
        
        
    }
    

    const value={
        radioCluster: setCheckedRadio,
        boxCluster: setCheckedBoxCluster,
        boxSplit : setCheckedBoxSplit,
        boxTrip : setCheckedBoxTrip,
        disabledRadio : checkBoxCluster,
        
    }
    return(
        
    <set.Provider value={value}>
        <div className= "main">
            <div className = "header" >
                <p className = "heading">
                    Update Organization
                </p>
                <span className = "delete" >X</span>
            </div>

            <div className="container">
                <LapTap></LapTap>
            </div>

            <div className="footer">

                <Stack direction="row" spacing={2}style={{ float:"right" , paddingRight:"24px", margin:"auto 0 auto auto"}}>
                    <Button variant="outlined">CANCEL</Button>
                    <Button variant="contained" onClick={handleClick} >
                         UPDATE
                    </Button>
                   
                </Stack>

            </div>
        </div>
    </set.Provider>
       
        
    )
    
}
export default Main;
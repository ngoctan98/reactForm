import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField'
import { set } from './main';


function Clustering() {
    const setCheck=React.useContext(set)
    const cluster = ['Auto', 'By Province', 'By Distric', 'By Town', 'By Drawing','Use Partner' ]
 

    return(

        <div>
             <FormGroup aria-label="gender">
                <FormControlLabel control={<Checkbox onChange={e => setCheck.boxCluster(e)} />} label="Use Clustering" />
            </FormGroup>

            <FormLabel component="legend" style={{ textAlign: "left" }}>Cluster:</FormLabel>
                <RadioGroup
                    aria-label="gender"
                    name="radio-buttons-group"
                    onChange={ e => setCheck.radioCluster(e)}
                >
                    {cluster.map((item,index) => 
                        <FormControlLabel key={index} disabled={!setCheck.disabledRadio} value={item} control={<Radio />} label={item} className="headingRadio" />
                    )}
                </RadioGroup>
                 <TextField
                 style={{ width: "100%" }}
                    required
                    id="filled-required"
                    label="label"
                    placeholder="placeholder"
                    variant="filled"
                    />
        </div>

    )
    
}


export default Clustering;
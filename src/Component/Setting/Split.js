import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { set } from '../Form';
import { useContext } from 'react';

function Split() {
    const setCheck = useContext(set)

    return (

        <div>
            <FormGroup>
                <FormControlLabel control={<Checkbox onClick={e => setCheck.boxSplit(e)} />} label="Split Delivery" className="headingCheckbox"/>
                <FormControlLabel  control={<Checkbox onClick={e => setCheck.boxSplit(e)}/>} label="Speed zone" />
            </FormGroup>
        </div>
    )
    
}


export default Split;
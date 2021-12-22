import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import { set } from '../Form';
import { useContext } from 'react';
import { useStyle ,styleTripForm} from './style';

export default function  Trip() {
    const setCheck = useContext(set)
    const classes= useStyle()

    return(

        <FormGroup className={classes.tripGroup}>
            <div className="formGroup">
                <FormControlLabel control={<Checkbox onClick={e => setCheck.boxTrip(e)}/>} label="Limit Number Of trip " />
                <FormControl sx={styleTripForm} >
                <InputLabel  variant="standard" >
                    
                </InputLabel>
                <NativeSelect
                    defaultValue={30}
                    inputProps={{
                    name: 'age',
                    id: 'uncontrolled-native',
                                }}
                >
                    <option value={10}>1</option>
                    <option value={20}>2</option>
                    <option value={30}>0</option>
                </NativeSelect>
                </FormControl>
            </div>
                <FormControlLabel  control={<Checkbox onClick={e => setCheck.boxTrip(e)}/>} label="Limit For Each Trip" />
                <FormControlLabel  control={<Checkbox onClick={e => setCheck.boxTrip(e)}/>} label="Minimum Order Quantity" />
        </FormGroup>

    )
    
}
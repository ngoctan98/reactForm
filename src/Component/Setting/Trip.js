import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import { set } from '../Form/Form';
import { useContext } from 'react';

export default function  Trip() {
    const setCheck = useContext(set)

    return(

        <FormGroup style={{marginTop:"8px"}}>
            <div style={{ 
                textAlign: "left" ,height:"42px"}}>
                <FormControlLabel control={<Checkbox onClick={e => setCheck.boxTrip(e)}/>} label="Limit Number Of trip " />
                <FormControl style={{ width: "10%", marginTop:"-16px"} }>
                <InputLabel variant="standard" >
                    
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
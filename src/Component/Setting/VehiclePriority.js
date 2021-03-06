import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import { ACSENDING, WEIGHT } from '../Constants';
import { styleForm1, styleForm2 } from './style';


export default function VehiclePriority() {

    return(

        <div className="vehicleHeading">
            <p className="vehicleP">Prioritize vehicles</p>
            <FormControl style={styleForm1}>
                <InputLabel variant="standard">
                </InputLabel>
                <NativeSelect
                    defaultValue={1}
                    inputProps={{
                    name: 'age',
                    id: 'uncontrolled-native',
                                }}
                >
                    {ACSENDING.map((item,index) =>
                        <option key={index} 
                            value={item.id}>
                            {item.value}
                        </option>
                    )}
                </NativeSelect>
            </FormControl>
            <p className="vehicleP">by</p>
            <FormControl style={styleForm2}>
                <InputLabel variant="standard"  > 
                </InputLabel>
                <NativeSelect
                    defaultValue={30}
                    inputProps={{
                    name: 'age',
                    id: 'uncontrolled-native',
                                }}>
                   {WEIGHT.map((item,index) =>
                        <option key={index} 
                            value={item.id}>
                            {item.value}
                        </option>
                    )}
                </NativeSelect>
            </FormControl>
            <p className="vehicleP">to optimize route</p>
        </div>
    )
    
}
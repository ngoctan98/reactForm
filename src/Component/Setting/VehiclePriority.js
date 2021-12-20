import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import { Acsending, Weight } from '../Constants/Constants';


export default function VehiclePriority() {

   

    return(

        <div style={{ display: "flex" , width:"100%", height:"48px",marginTop:"-8px"}}>
            <p style={{margin:"28px 0 0 0",lineHeight:"20px"}}>Prioritize vehicles</p>
            <FormControl style={{ width: "20%" , fontSize:"14px", marginLeft:"8px", marginRight:"8px"} }>
                <InputLabel variant="standard"
                >
                </InputLabel>
                <NativeSelect
                    defaultValue={1}
                    inputProps={{
                    name: 'age',
                    id: 'uncontrolled-native',
                                }}
                >
                    {Acsending.map((item,index) =>
                        <option key={index} 
                            value={item.id}>
                            {item.value}
                        </option>
                    )}
                   
                </NativeSelect>
            </FormControl>
            <p style={{margin:"28px 0 0 0",lineHeight:"20px"}}>by</p>

            <FormControl style={{ width: "17%" , marginLeft:"8px", marginRight:"8px"} }>
                <InputLabel variant="standard"  >
                    
                </InputLabel>
                <NativeSelect
                    defaultValue={30}
                    inputProps={{
                    name: 'age',
                    id: 'uncontrolled-native',
                                }}
                >
                   {Weight.map((item,index) =>
                        <option key={index} 
                            value={item.id}>
                            {item.value}
                        </option>
                    )}
                </NativeSelect>
            </FormControl>

            <p style={{margin:"28px 0 0 0",lineHeight:"20px"}}>to optimize route</p>


        </div>
    )
    
}
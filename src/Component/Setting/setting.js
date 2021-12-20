import Clustering from "./Clustering";
import Split from "./Split";
import VehiclePriority from "./VehiclePriority";
import Trip from "./Trip";

function  Setting() {

    return(

    <div >
        <div className="setting" >

            <div style={{ display: "flex" }}>
                <div style={{ width: "166px" }}>
                    <p style={{ float:"left",marginTop:"6px" }} className="headingRadio">Clustering</p>
                </div>
                <div style={{ flex: "1" }}>
                <Clustering></Clustering>
                </div>
            </div>

            <div style={{ display: "flex" }}>
                <div style={{ width: "166px" }}>
                    <p style={{ textAlign: "left", marginTop:"6px" }} className="headingRadio">Split Delivery</p>
                </div>

                <div>
                    <Split></Split>
                </div>
            </div>

            <div style={{ display: "flex" , width:"100%"}}>
                <div >
                    <p style={{ textAlign: "left" , width: "166px"}} className="headingRadio">Vehicle Priority</p>
                </div>

                <div style={{ width: "100%" }}>
                    <VehiclePriority></VehiclePriority>
                </div>
            </div>

            <div style={{ display: "flex" , width:"100%"}}>
                <div >
                    <p style={{ textAlign: "left",width: "166px"  }} className="headingRadio">Trip Limit</p>
                </div>

                <div style={{ width: "100%" }}>
                    <Trip></Trip>
                </div>
            </div>
                
        </div>
    </div>

        
        
    )
    
};



export default Setting;
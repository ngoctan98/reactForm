import Clustering from "./Clustering";
import Split from "./Split";
import VehiclePriority from "./VehiclePriority";
import Trip from "./Trip";

function  Setting() {

    return(

    <div >
        <div className="setting" >

            <div className="displayFlex">
                <p  className="headingRadio">Clustering</p>
                <div className="flex">
                <Clustering/>
                </div>
            </div>

            <div className="displayFlex">
                <p  className="headingRadio">Split Delivery</p>
                <div>
                    <Split/>
                </div>
            </div>

            <div className="displayFlex">
                <p  className="headingRadio ">Vehicle Priority</p>
                <div className="marginTop">
                    <VehiclePriority/>
                </div>
            </div>

            <div className="displayFlex">
                <p  className="headingRadio">Trip Limit</p>
                <div className="marginTop">
                    <Trip/>
                </div>
            </div>
                
        </div>
    </div>
    )
};



export default Setting;
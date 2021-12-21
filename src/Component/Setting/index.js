import Clustering from "./Clustering";
import Split from "./Split";
import VehiclePriority from "./VehiclePriority";
import Trip from "./Trip";

function  Setting() {

    return(

    <div >
        <div className="setting" >

            <div className="displayFlex">
                <div >
                    <p  className="headingRadio">Clustering</p>
                </div>
                <div className="flex">
                <Clustering/>
                </div>
            </div>

            <div className="displayFlex">
                <div >
                    <p  className="headingRadio">Split Delivery</p>
                </div>

                <div>
                    <Split/>
                </div>
            </div>

            <div className="displayFlex">
                <div className="marginTop" >
                    <p  className="headingRadio">Vehicle Priority</p>
                </div>

                <div >
                    <VehiclePriority/>
                </div>
            </div>

            <div className="displayFlex">
                <div className="marginTop" >
                    <p  className="headingRadio">Trip Limit</p>
                </div>

                <div >
                    <Trip/>
                </div>
            </div>
                
        </div>
    </div>
    )
};



export default Setting;
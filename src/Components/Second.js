import './Second.css'
import first from '../images/Second/Group 146831.svg'
import second from '../images/Second/Group 146822.svg'
import third from '../images/Second/Group 146826.svg'
import fifth from '../images/Second/Group 146836.svg'
import six from '../images/Second/Group 146841.svg'
import seven from '../images/Second/Group 146866.svg'
import egith from '../images/Second/Group 146867.svg'
import forth from '../images/Second/Group 146868.svg'
const Second=()=>{
    return(
        <div className="second">
        <div className="heading2">
            <div>MEASUREMENT </div>
            <div>TO OUR SUCCESS</div>
        </div>
        <div className='subHeading2'>Our process-driven approach keeps us going</div>

        <div className="iconGroup">
                <div className="iconSubGroup">
                    <img src={first} alt="" srcset="" />
                    <span className="iconName2">TRANSPARENCY AND RELIABILITY</span> 
                </div>
                <div className="iconSubGroup">
                    <img src={second} alt="" srcset="" />
                    <span className="iconName2">REAL TIME PROJECT STATUS</span>
                </div>
                <div className="iconSubGroup">
                    <img src={third} alt="" srcset="" />
                    <span className="iconName2">WELL STRUCTURED COMMUNICATION</span>
                </div>
                <div className="iconSubGroup">
                    <img src={forth} alt="" srcset="" />
                    <span className="iconName2">AGILE METHODOLOGY</span>
                </div>
                <div className="iconSubGroup">
                    <img src={fifth} alt="" srcset="" />
                    <span className="iconName2">ONSITE COLLABORATION</span>
                </div>
                <div className="iconSubGroup">
                    <img src={six} alt="" srcset="" />
                    <span className="iconName2">INNOVATION AT WORK</span>
                </div>
                <div className='group'>
                    <div className="iconSubGroup">
                        <img src={seven} alt="" srcset="" />
                        <span className="iconName2">CLIENT'S INVOLVEMENT IN EACH MILESTONE</span>
                    </div>
                    <div className="iconSubGroup">
                        <img src={egith} alt="" srcset="" />
                        <span className="iconName2">DEDICATED TEAM</span>
                    </div>
                </div>
               
            </div>
     
    </div>
    )

}

export default Second;
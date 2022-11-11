import dia from '../images/Third/Group 146891.svg'
import TRAVEL from '../images/Third/Group 146891 (1).svg'
import HEALTH from '../images/Third/Group 146905.svg'
import HOSPITAL from '../images/Third/Group 146909.svg'
import ECOM from '../images/Third/Group 146914.svg'
import EDUCATION from '../images/Third/Group 146919.svg'
import MOBILE from '../images/Third/Group 146926.svg'
import IT from '../images/Third/Group 146929.svg'
import AGRITECH from '../images/Third/Group 146932.svg'
import './Third.css'
const Third=()=>{
    return(
        <div className="third">
            <div className="heading3">
                <div>WE ARE WORKING</div> <div>WITH THESE INDUSTRIES</div>

            </div>

            <div className="iconGroup">
                <div className="iconSubGroup">
                    <img src={dia} alt="" srcset="" />
                    <span className="iconName">MEDIA & ENTERTAINMENT</span> 
                </div>
                <div className="iconSubGroup">
                    <img src={HEALTH} alt="" srcset="" />
                    <span className="iconName">HEALTH CARE & WELLNESS</span>
                </div>
                <div className="iconSubGroup">
                    <img src={HOSPITAL} alt="" srcset="" />
                    <span className="iconName">HOSPITALITY & REAL ESTATE</span>
                </div>
                <div className="iconSubGroup">
                    <img src={ECOM} alt="" srcset="" />
                    <span className="iconName">RETAIL & E COMMERCE</span>
                </div>
                <div className="iconSubGroup">
                    <img src={EDUCATION} alt="" srcset="" />
                    <span className="iconName">EDUCATION & LEARNING</span>
                </div>
                <div className="iconSubGroup">
                    <img src={TRAVEL} alt="" srcset="" />
                    <span className="iconName">TRAVEL & TRANSPORT</span>
                </div>
                <div className="iconSubGroup">
                    <img src={MOBILE} alt="" srcset="" />
                    <span className="iconName">MOBILE & TELECOM</span>
                </div>
                <div className="iconSubGroup">
                    <img src={IT} alt="" srcset="" />
                    <span className="iconName">IT & ITES</span>
                </div>
                <div className="iconSubGroup">
                    <img src={AGRITECH} alt="" srcset="" />
                    <span className="iconName">AGRITECH</span>
                </div>
            </div>
        </div>
    )
}

export default Third;
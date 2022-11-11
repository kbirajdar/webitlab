import logo from "../Group 82.svg"
import Second from './Second'
import Third from './Third'
import './First.css'
const First=()=>{
    return(
        <>
        <div className="FirstContaner">
            <div className="NavBar">
                <div className="Logo">
                    <h1><span className="DESIGN">DESIGN</span> <span className="Agency">AGENCY</span></h1>
                    
                </div>
                
                <div className="llist">
                    <p>Specialize in</p>
                    <p>Case Study</p>
                    <p>Process</p>
                    <p>Industries</p>
                </div>
                
                <div className="Buttons">
                    <button className="box">Schedule A Call</button>
                    <button className="box1">We are Hiring</button>

                </div>
            </div>
            <div className="Section">
                <img className="LogoImage" src={logo}/>
                <div className="logoTag">
                    <h5>INNOVATION DIGITAL TECHNOLOGY</h5>
                </div>
                <div className="logosmallTag">
                    <h5>everything we do is the consumer, imagination and you.</h5>
                </div>
            </div>
           
            


        </div>
        <div className="second"><Second/>
        </div>
        <Third/>

        
        </>
        
    )
}

export default First;

import React from "react";
import './App.css';
import tree from './tree.png';
import treepic from '/home/student/innovas/src/treepic.svg';
import lavyne from '/home/student/innovas/src/lavyne.jpg';
import queen from '/home/student/innovas/src/Queen.jpeg';
import maryann from '/home/student/innovas/src/maryann.png';
import desktop from '/home/student/innovas/src/desktop.svg';

// import { useMediaQuery } from "react-responsive";
// import { FaFacebookF } from 'react-icon/fa';
// import { FaLinkedin } from 'react-icons/fa';
// import { FaInstagram } from 'react-icons/fa';


function Body() {
    return (
        <>
        <div className="greenbox"></div>
        <div className="greenboxtwo"></div>  
        <div className="home">
            <div>
            <div className="greetings">Hello kind people</div><div className="line"></div>
            <div className="save">SAVE OUR</div>
            <div className="planet">PLANET</div> 
            <div className="description">
                      <p>
                        Our economy is largely dependent on tourisn and 
                        rain-fed agriculture, both susceptible to climate<br/> change.                       
                        increased intensity of hazardous droughts and heat waves directly harm animals,
                        destroy crops<br/>  and wreck havoc on                                 
                        rain-fed agriculture, both susceptible to climate change.
                        increased intensity of<br/>  hazardous droughts and heat waves directly harm animals,
                        on people’s livelihoods.
                       </p>
            </div>
            <div>
                <button className="learn">Learn more</button>
            </div>
            </div>
       <div className="photo">
                 <img src={tree}/> 
        
            </div>       
        </div>
        <div className="overview">
            <div className="more">OVERVIEW</div>
        
            <div className="content">
                <div className="card">
                    <div className="eclipse"></div>
                    <h2 className="headtop">PROBLEM STATEMENT</h2>
                    <p className="problem">
                        How might we curb deforestation in community forest to reduce the emission
                        of carbon dioxide in order to mitigate the effects of global warming?
                    </p>
            </div>
            <div className="card">
                    <div className="eclipse"></div>
                    <h2 className="headtop">FINDINGS </h2>
                    <p className="problem">
                        How might we curb deforestation in community forest to reduce the emission
                        of carbon dioxide in order to mitigate the effects of global warming?
                    </p>
            </div>
            <div className="card">
                    <div className="eclipse"></div>
                    <h2 className="headtop">POSSIBLE SOLUTION </h2>
                    <p className="problem">
                        Create a sound alert system, that assesses recorded sounds and decide upon the 
                        nature of these segments, and alerts rangers incase the sound recorded corresponds
                        to the dangerous sound.
                    </p>
            </div>
            </div>
        </div>  

       

   

    <div>
    <div className="product"> 
            <div className="words">
                <h1 className="head">Our Product</h1>
                <p> Novva is an alert device that is used to perform forest monitoring <br/> actions
                designed for KFS that offers real time analysis and <br/>classification  from live sound recordings and notifies 
                the ranges<br/> incase the registered sound corresponds to the sounds classified <br/>as dangerous sounds.
                </p>
                <button>LEARN MORE</button>
            </div>
            <div className="pictures">
                <div className="rectangle"></div>
                <div className="rectangletwo"></div>
                <div> <img src={treepic} className="tree"/></div>
                
            </div>
        </div>
        <div><h1 className="headwork">How does it work ?</h1></div>
        <div>
            <img src={desktop} className="desktop"/> 
        </div>
       
        <div>
            <h1>Our Team</h1>
            <div className="team">
                <div>
                    <div> <img src={queen} className="circle" /> </div>
                    <h4>Joy Wamaitha</h4>
                </div>
                <div>
                    <div> <img src={queen} className="circle"/> </div>
                    <h4>Quenzy Ong'eye</h4>
                </div>
                <div>
                    <div> <img src={lavyne} className="circles" /> </div>
                    <h4>Lavyne Owiti</h4>
                </div>
                <div>
                    <div> <img src={maryann} className="circle" /> </div>
                    <h4>Maryann Gathanga</h4>
                </div>
                <div>
                    <div > <img src={maryann} className="circle" /> </div>
                    <h4>Salma Suleiman</h4>
                </div>
            </div>
        </div>
        <div className="footer">
            <h2 className="headertwo">Contact</h2>
            <p className="phead">info@innovas.com</p>
            <p className="phead">+254700245143</p>
        {/* <div className='icon'>
                <div className='twoicon'><FaFacebookF/></div>
                <div className='twoicon'><FaLinkedin/></div>
                <div className='twoicon'><FaInstagram/></div>
            </div>  */}
        </div>
    </div>

    </>
   )
}

export default Body;



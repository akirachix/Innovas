import './App.css';
import tree from './tree.png';
import treepic from './treepic.png';
import lavyne from './maryann.png';
import queen from './maryann.png';
import maryann from './maryann.png';
import desktop from './desktop.png';
import React, { useRef } from "react";
// import { useMediaQuery } from "react-responsive";
// import { FaFacebookF } from 'react-icon/fa';
// import { FaLinkedin } from 'react-icons/fa';
// import { FaInstagram } from 'react-icons/fa';


export default function Body() {

    const home = useRef(null);
    const about = useRef(null);
    const product = useRef(null);
    const team = useRef(null);
    const contact = useRef(null);
    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: 'smooth'
        });
    };

    return (
        <>


            <div className="greenbox">
            </div>
            <div className="greenboxtwo"></div>
            <div className='nav'>

                <ul>
                    <h2 onClick={() => scrollToSection({ home })} id='home'>Home</h2>
                    <h2 onClick={() => scrollToSection(about)} id='about'>About</h2>
                    <h2 onClick={() => scrollToSection(product)} id='product'>Product</h2>
                    <h2 onClick={() => scrollToSection(team)} id='team'>Team</h2>
                    <h2 onClick={() => scrollToSection(contact)} id='contact'>Contact</h2>
                </ul>
            </div>
            <div ref={home} className="home">
                <div>
                    <div className="greetings">Hello kind people</div><div className="line"></div>
                    <div className="save">SAVE OUR</div>
                    <div className="planet">PLANET</div>
                    <div className="description">
                        <p>
                            Our economy is largely dependent on tourisn and
                            rain-fed agriculture, both susceptible to climate<br /> change.
                            increased intensity of hazardous droughts and heat waves directly harm animals,
                            destroy crops<br />  and wreck havoc on
                            rain-fed agriculture, both susceptible to climate change.
                            increased intensity of<br />  hazardous droughts and heat waves directly harm animals,
                            on people’s livelihoods.
                        </p>
                    </div>
                    <div>
                        <button className="learn">Learn more</button>
                    </div>
                </div>
                <div className="photo">
                    <img src={tree} />

                </div>
            </div>
            <div ref={about} className="about">
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
                <div ref={product} className="product">
                    <div className="words">
                        <h1 className='head'>Our Product</h1>
                        <p className='now'> Novva is an alert device that is used to perform forest monitoring <br /> actions
                            designed for KFS that offers real time analysis and <br />classification  from live sound recordings and notifies
                            the ranges<br /> incase the registered sound corresponds to the sounds classified <br />as dangerous sounds.
                        </p>
                        <button>LEARN MORE</button>
                    </div>
                    <div className="pictures">
                        <div className="rectangle"></div>
                        <div className="rectangletwo"></div>
                        <div> <img src={treepic} className="tree" /></div>

                    </div>
                </div>
                <div><h1 className="headwork">How does it work ?</h1></div>
                <div>
                    <img src={desktop} className="desktop" />
                </div>

                <div>

                    <h1>Our Team</h1>
                    <div ref={team} className="team">
                        <div>
                            <div> <img src={queen} className="circle" /> </div>
                            <h4>Joy Wamaitha</h4>
                        </div>
                        <div>
                            <div> <img src={queen} className="circle" /> </div>
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
                <div ref={contact} className="contact">
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





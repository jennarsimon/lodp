import React from 'react';
import jenna from '../assets/images/jenna.jpeg';
import daniella from '../assets/images/daniella.jpeg';
import hannah from '../assets/images/hannah.jpeg';
import papa from '../assets/images/papa.jpeg';
import jisoo from '../assets/images/jisoo.jpeg';
import adrian from '../assets/images/adrian.png';
import carl from '../assets/images/carl.jpeg';
import abigail from '../assets/images/abigail.jpeg';
import '../stylesheets/aboutus.css';

export default class AboutUs extends React.Component {
    render() {
        return (
            <div id='aboutDiv'>
                <div id="description" className="pale-brown">
                    <div>
                        <h1 id="aboutUsTitle">About Us</h1>
                    </div>
                    <div id="aboutText">
                        <p>The Brown and White Tech and Innovation team is a Lehigh University student organization centered around open data, which is data that everyone can access. Our mission is to encourage data and information transparency at Lehigh. These datasets provide information that ranges from university tuition to student life statistics. We also collect data by acquiring statistics from Lehigh students, and compile and analyze the data so that it can be easily understood by the general public. This student-run group works with Lehigh University’s journalism department and The Brown and White to ensure that all of the data published are accurate and accessible.</p>
                    </div>
                </div>
                <div id="team" className="brown-text">
                    <h1 id="meetTeam">Meet the Team</h1>
                    <div id="directory">
                        <div id="jenna">
                            <img alt="jenna" src={jenna} />
                            <h2>Jenna Simon</h2>
                            <h3>Class of 2022</h3>
                        </div>
                        <div id="hannah">
                            <img alt="hannah" src={hannah} />
                            <h2>Hannah Leland</h2>
                            <h3>Class of 2022</h3>
                        </div>
                        <div id="jisoo">
                            <img alt="jisoo" src={jisoo} />
                            <h2>JiSoo Park</h2>
                            <h3>Class of 2023</h3>
                        </div>
                        <div id="papa">
                            <img alt="papa" src={papa} />
                            <h2>Papa Asibuo</h2>
                            <h3>Class of 2024</h3>
                        </div>
                        <div id="adrian">
                            <img alt="adrian" src={adrian} />
                            <h2>Adrian Ross</h2>
                            <h3>Class of 2024</h3>
                        </div>
                        <div id="carl">
                            <img alt="carl" src={carl} />
                            <h2>Carl Freyer</h2>
                            <h3>Class of 2025</h3>
                        </div>
                        <div id="daniella">
                            <img alt="daniella" src={daniella} />
                            <h2>Daniella Stokic</h2>
                            <h3>Class of 2025</h3>
                        </div>
                        <div id="abigail">
                            <img alt="abigail" src={abigail} />
                            <h2>Abigail Vogel</h2>
                            <h3>Class of 2025</h3>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
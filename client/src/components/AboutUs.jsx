import React from 'react';
import jenna from '../assets/images/jenna.jpeg';
import daniella from '../assets/images/daniella.jpeg';
import hannah from '../assets/images/default.jpeg';
import papa from '../assets/images/default.jpeg';
import jiSoo from '../assets/images/default.jpeg';
import adrian from '../assets/images/default.jpeg';
import carl from '../assets/images/default.jpeg';
import abigail from '../assets/images/default.jpeg';

export default class AboutUs extends React.Component {
    render() {
        return (
            <div id='aboutDiv'>
                <div>
                    <div>
                        <h1>About Us</h1>
                    </div>
                    <div>
                        <p>The Brown and White Tech and Innovation team is a Lehigh University student organization centered around open data, which is data that everyone can access. Our mission is to make sure the datasets we compile are accessible to all members of the community. These datasets provide information that ranges from university tuition to student life statistics. We also collect data by acquiring statistics from Lehigh students, and compile and analyze the data so that it can be easily understood by the general public. This student-run group works with Lehigh University’s journalism department, the Brown and White, in order to ensure that all of the data published are accurate and accessible.</p>
                    </div>
                </div>
                <div>
                    <div>
                        <h1>Team Members</h1>
                    </div>
                    <div id='directoryDiv'>
                        <div>
                            <div>
                                <img alt='hannah' src={hannah} />
                            </div>
                            <div>
                                <h2>Hannah Leland, 2022</h2>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img alt='jenna' src={jenna} />
                            </div>
                            <div>
                                <h2>Jenna Simon, 2022</h2>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img alt='jisoo' src={jiSoo} />
                            </div>
                            <div>
                                <h2>JiSoo Park, 2023</h2>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img alt='papa' src={papa} />
                            </div>
                            <div>
                                <h2>Papa Kofi Asibuo, 2024</h2>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img alt='adrian' src={adrian} />
                            </div>
                            <div>
                                <h2>Adrian Ross, 2024</h2>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img alt='carl' src={carl} />
                            </div>
                            <div>
                                <h2>Carl Freyer, 2025</h2>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img alt='daniella' src={daniella} />
                            </div>
                            <div>
                                <h2>Daniella Stokic, 2025</h2>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img alt='abigail' src={abigail} />
                            </div>
                            <div>
                                <h2>Abigail Vogel, 2025</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
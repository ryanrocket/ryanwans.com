import React from 'react';

import { Container, Section } from 'reactbulma';
import { Text, Spacer, Display, Image } from '@geist-ui/react';
import Banner from './Banner';
import Lines from './Lines';
import PreFoot from './PreFoot';
import HorzLine from './HorzLine.js';
import D1R05C from '../img/D1R05C.png';
import PAGS from '../img/PAGS.png';

class WansResearch extends React.Component {
    render() {
        return (
            <div style={{position: 'relative'}}>
                <div style={{position:'relative', width: '100%'}}>
                    <canvas id="gradient-canvas" style={{maxHeight: '180px'}} data-js-darken-top data-transition-in />
                    <div style={{position: "absolute", top: '0', left: '0', width: '100%', height: '100%'}}>
                        <Section style={{height: '100%'}}>
                            <Container style={{height:'100%'}}>
                                <Text h1 className="colorthru-text hero-text"><b>WANS</b> RESEARCH</Text>
                                <Text h1 className="hero-sub-text" style={{paddingTop:'0px', maxWidth: '800px'}}>
                                    Revolutionizing Ku and Ka band research while designing breakthough technology.
                                </Text>
                            </Container>
                        </Section>
                    </div>
                </div>
                <Banner message="This page is still under construction." goup={true} />
                <Container style={{position: 'relative'}}>
                    <Section style={{position: 'relative', zIndex: '2'}}>
                        <Text className="pre-bigHeader" b>Our Mission</Text>
                        <HorzLine />
                        <Spacer y={0.5} />
                        <Text p className="pre-p">
                            Wans Research, founded in 2020 by Ryan Wans, focuses on creating game-changing technology in fields such as SATCOM,
                            Radar, and communications systems through mixed-signal research. Wireless technology has, and will continue to shape
                            how our society operates, allowing for further innovation in the automotive, communications, aerospace, and other
                            industries. Creating a solid framework and foundation for systems such as 5G, automotive radar, and interplanetary 
                            communication is paramount for ensuring the future success of these systems. All of which, we at Wans Research help 
                            to innovate on. Our skillset, covering both digital and analog domains, allows for the creation of cutting-edge 
                            antennas, RF front-ends, architectures, and systems that allow us to reach the aforementioned goals. 
                        </Text>
                    </Section>
                    <Section style={{position: 'relative', zIndex: '2'}}>
                        <Text className="pre-bigHeader" b>Highlighted Projects</Text>
                        <HorzLine />
                        <Spacer y={2} />
                        <div className="columns">
                            <div className="column is-half">
                                <Text h3 b>
                                    The <b>"D1R05C"</b> Automotive Radar
                                </Text>
                                <HorzLine />
                                <Text h4>
                                    <ul>
                                        <li>Ka-band (26GHz) Superheterodyne FMCW Doppler Radar</li>
                                        <li>27.5dBm Peak Output Power</li>
                                        <li>Weather and Fog Resilience</li>
                                        <li>Low Phase Noise and Jitter</li>
                                        <li>80m/s Max Detection Speed</li>
                                        <li>SPI-compatible Interface</li>
                                        <li><a rel="noreferrer" target="_blank" href="https://docs.google.com/document/d/1JKIdJDNH4xMipM4gUvHd0eHD2lFQVsR6alGso6Ij_70/edit?usp=sharing">Click to view datasheet</a></li>
                                    </ul>
                                </Text>
                                <Display shadow caption={<p>Top Layer 3D Render</p>}>
                                    <Image width={450} src={D1R05C} />
                                </Display>
                            </div>
                            <div className="column is-half">
                                <Text h3 b>
                                    Codename "PAGS" (Unnamed)
                                </Text>
                                <HorzLine />
                                <Text h4>
                                    <ul>
                                        <li>X-band (10GHz) Phased Array</li>
                                        <li>Undisclosed until futher notice</li>
                                    </ul>
                                </Text>
                                <Display shadow caption={<p>Top Layer 3D Render</p>}>
                                    <Image width={450} src={PAGS} />
                                </Display>
                            </div>
                        </div>
                    </Section>
                    <Lines style={{zIndex: '0'}} />
                    <Spacer y={5} />
                </Container>
                <PreFoot message="Want to learn more?" redir="/contact" button="Contact Us" />
            </div>
        )
    }
}

export default WansResearch;

/*
<section class="section-process">
                            <div class="section-container">
                                <div class="process-steps-container container-medium with-padding">
                                    <div class="process-step-container process-step-1">
                                        <div class="process-step-title-container">
                                            <h1 class="process-step-title">Fast.</h1>
                                            <div class="process-step-title-overlay">Fast.</div>
                                        </div>
                                    </div>
                                    <div class="process-step-container process-step-2">
                                        <div class="process-step-title-container">
                                            <h1 class="process-step-title">Modern.</h1>
                                            <div class="process-step-title-overlay">Modern.</div>
                                        </div>
                                    </div>
                                    <div class="process-step-container process-step-3">
                                        <div class="process-step-title-container">
                                            <h1 class="process-step-title">Professional.</h1>
                                            <div class="process-step-title-overlay">Professional.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
 */
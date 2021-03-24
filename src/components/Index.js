import React from 'react';

import { Container, Section } from 'reactbulma';
import { Text, Spacer } from '@geist-ui/react';
import Banner from './Banner';
import Typed from 'react-typed';
import Lines from './Lines';
import HorzLine from './HorzLine.js';
import { Instagram, Github, Linkedin, Mail } from '@geist-ui/react-icons'

const heroStrings = [
    "secure",
    "fast",
    "data-driven",
    "accessible",
    "unique",
    "modern",
    "large-scale"
]

class Index extends React.Component {
    render() {
        return (
            <div style={{position: 'relative'}}>
                <div style={{position:'relative', width: '100%'}}>
                    <canvas id="gradient-canvas" data-js-darken-top data-transition-in />
                    <div style={{position: "absolute", top: '0', left: '0', width: '100%', height: '100%'}}>
                        <Section style={{height: '100%'}}>
                            <Container style={{height:'100%'}}>
                                <Text h1 className="colorthru-text hero-text">Hello, I'm Ryan Wans</Text>
                                <Text h1 className="hero-sub-text" style={{paddingTop:'50px', maxWidth: '800px'}}>
                                    I design and build <span className="hero-underline">
                                        <Typed style={{transform: 'translateY(20px)'}} strings={heroStrings} loop typeSpeed={45} backSpeed={40} startDelay={1000} backDelay={2600} />
                                    </span>  websites and web-applications using industry leading technology and techniques.
                                </Text>
                            </Container>
                        </Section>
                    </div>
                </div>
                <Banner message="Welcome to the newly redesigned ryanwans.com!" goup={true} />
                <Container style={{position: 'relative'}}>
                    <Section style={{zIndex: '2', position: 'relative'}}>
                        <div className="columns">
                            <div className="column is-one-quarter has-text-centered">
                                <Instagram size={28} />
                                <Spacer y={0.5} />
                                <a href="https://instagram.com/ryanwans">
                                    @ryanwans
                                </a>
                            </div>
                            <div className="column is-one-quarter has-text-centered">
                                <Github size={28} />
                                <Spacer y={0.5} />
                                <a href="https://github.com/ryanrocket">
                                    @ryanrocket
                                </a>
                            </div>
                            <div className="column is-one-quarter has-text-centered">
                                <Linkedin size={28} />
                                <Spacer y={0.5} />
                                <a href="https://www.linkedin.com/in/ryan-wans/">
                                    ryan-wans
                                </a>
                            </div>
                            <div className="column is-one-quarter has-text-centered">
                                <Mail size={28} />
                                <Spacer y={0.5} />
                                <a href="mailto:ryan@ryanwans.com">
                                    ryan@ryanwans.com
                                </a>
                            </div>
                        </div>
                    </Section>
                    <Section style={{position: 'relative', zIndex: '2'}}>
                        <Text className="pre-bigHeader" b>Biography</Text>
                        <HorzLine />
                        <Spacer y={0.5} />
                        <Text p className="pre-p">
                            Hello, I'm Ryan Wans, a fullstack and systems engineer based out of Annapolis, MD. With a strong analytical and critical thinking background, 
                            I excel in creating, testing, and optimizing embedded systems. Some of my strongest disciplines are cloud-native application, JAMStack web-apps, 
                            systems engineering, big data analytics, and discrete mathematics. I love learning new things and I'm always ready to dive into foreign conceps, 
                            head first. Some of my favorite topics to study are philosophy, globalization, existentialism, and agile practices &amp; methodologies.
                        </Text>
                    </Section>
                    <Lines style={{zIndex: '0'}} />
                </Container>
            </div>
        )
    }
}

export default Index;

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
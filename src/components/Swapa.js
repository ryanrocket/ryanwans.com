import React from 'react';

import { Container, Section } from 'reactbulma';
import { Text, Spacer } from '@geist-ui/react';
import Banner from './Banner';
import Lines from './Lines';
import PreFoot from './PreFoot';
import HorzLine from './HorzLine.js';

class Swapa extends React.Component {
    render() {
        return (
            <div style={{position: 'relative'}}>
                <div style={{position:'relative', width: '100%'}}>
                    <canvas id="gradient-canvas" style={{height: '475px'}} data-js-darken-top data-transition-in />
                    <div style={{position: "absolute", top: '0', left: '0', width: '100%', height: '100%'}}>
                        <Section style={{height: '100%'}}>
                            <Container style={{height:'100%'}}>
                                <Text h1 className="colorthru-text hero-text">Project SWAPA</Text>
                                <Text h1 className="hero-sub-text" style={{paddingTop:'25px', maxWidth: '800px'}}>
                                    Revolutionizing the design and performance of Ku to Ka band phased array antennas.
                                </Text>
                            </Container>
                        </Section>
                    </div>
                </div>
                <Banner message="This page is a temporary placeholder for Project SWAPA" goup={true} />
                <Container style={{position: 'relative'}}>
                    <Section style={{position: 'relative', zIndex: '2'}}>
                        <Text className="pre-bigHeader" b>Abstract</Text>
                        <HorzLine />
                        <Spacer y={0.5} />
                        <Text p className="pre-p">
                            Information regarding Project SWAPA will be kept confidential until further notice. Please check back at a later date.
                        </Text>
                    </Section>
                    <Lines style={{zIndex: '0'}} />
                    <Spacer y={5} />
                </Container>
                <PreFoot message="Inquire More" redir="/contact" button="Contact Me" />
            </div>
        )
    }
}

export default Swapa;
import React from 'react';

import { Container, Section } from 'reactbulma';
import { Text, Spacer, Divider, Image, Display } from '@geist-ui/react';
import HorzLine from './HorzLine';
import Lines from './Lines';
import { Activity, CloudDrizzle, Database, Lambda } from '@geist-ui/react-icons'
import Me from '../img/IMG_4516.JPG';

class About extends React.Component {
    render() {
        // eslint-disable-next-line
        return (
            <div>
                <Container style={{alignContent: 'center', justifyContent: 'center', textAlign: 'center'}}>
                    <Section style={{textAlign: 'center', maxWidth: '800px', alignSelf: 'center', justifySelf: 'center', display: 'inline-block'}}>
                        <Spacer y={5} className="is-hidden-mobile" />
                        <Text type="success" style={{letterSpacing: '3px', fontSize: '14px!important'}}>
                            ABOUT ME
                        </Text>
                        <Text h1 className="pre-bigHeader pre-textgrad1">
                            Creating systems for the future.
                        </Text>
                        <Spacer y={2.5} />
                        <Text h2 className="pre-subHeader">
                            I design and build cloud-native infrastructures to tackle the most <b>robust and ambitious goals.</b>
                        </Text>
                        <Spacer y={6} className="is-hidden-mobile" />
                    </Section>
                </Container>
                <Divider />
                <Container>
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

                        <Spacer y={2} />
                        <Display shadow caption={<p>Hey look, it's me!</p>}>
                            <Image width={400} height={533} src={Me} />
                        </Display>
                        <Spacer y={3} />

                        <Text className="pre-bigHeader" b>Software Skillset</Text>
                        <HorzLine />
                        <Spacer y={0.5} />
                        <Text p className="pre-p">
                            My strongest skills lay in fullstack web development. More specifically, JAMStack apps. I have 3+ years experience using Vue and React, alongisde 
                            accompanying tools like Redux, design systems, serverless deployment, and CI/CD. Moving away from the frontend, I have over 5 years experience designing
                            and creating backend systems with tools like GraphQL, Swagger, containerization with Docker and K8s or ECS, and almost every tool on AWS. Some additional 
                            infrastructure skills I have include scaling, load-balancing, network security, data pipelines, realtime systems, and satellite systems. Contrary to web 
                            development, I have experience in Arduino on custom PCB's, low-level C programs, and desktop applications using Electron.
                        </Text>
                        <Section style={{zIndex: '2', position: 'relative'}}>
                        <div className="columns">
                            <div className="column is-one-quarter has-text-centered">
                                <Activity size={28} />
                                <Spacer y={0.5} />
                                Analytics &amp; Telemetry
                            </div>
                            <div className="column is-one-quarter has-text-centered">
                                <CloudDrizzle size={28} />
                                <Spacer y={0.5} />
                                Cloud Native
                            </div>
                            <div className="column is-one-quarter has-text-centered">
                                <Database size={28} />
                                <Spacer y={0.5} />
                                Big Data
                            </div>
                            <div className="column is-one-quarter has-text-centered">
                                <Lambda size={28} />
                                <Spacer y={0.5} />
                                Serverless
                            </div>
                        </div>
                    </Section>
                        <Spacer y={3} />
                        <Text className="pre-bigHeader" b>Project Management</Text>
                        <HorzLine />
                        <Spacer y={0.5} />
                        <Text p className="pre-p">
                            I've managed everything from small 4 person teams to large-scale Agile projects. My latest endeavour includes co-founding and managaing a startup 
                            company with tens of thousands of dollars in seed funding. I've garnered skills in the fields of Scrum &amp; Kanban, Agile methodologies, continuous 
                            development and continuous integration, and software like Jira and Confluence.
                        </Text>
                    </Section>
                    <Lines style={{zIndex: '0'}} />
                </Container>
            </div>
        )
    }
}

export default About;
import React from 'react';
import { Container, Section } from 'reactbulma';
import { Text, Spacer, Divider } from '@geist-ui/react';
import styled from 'styled-components'
import HorzLine from './HorzLine';
import Lines from './Lines';
import PreFoot from './PreFoot'

const Constricted = styled.div`
    @media screen and (min-width: 1216px) {
        max-width: 640px!important;
        width: 640px!important;
    }
    @media screen and (min-width: 1024px) and (max-width: 1215px) {
        max-width: 100%!important;
        width: 100%!important;
    }
    margin: 0 auto;
    position: relative;
`;

class Portfolio extends React.Component {
    render() {
        return (
            <div>
                <Container style={{alignContent: 'center', justifyContent: 'center', textAlign: 'center'}}>
                    <Section style={{textAlign: 'center', maxWidth: '800px', alignSelf: 'center', justifySelf: 'center', display: 'inline-block'}}>
                        <Spacer y={5} className="is-hidden-mobile" />
                        <Text type="success" style={{letterSpacing: '3px', fontSize: '14px!important'}}>
                            PORTFOLIO
                        </Text>
                        <Text h1 className="pre-bigHeader pre-textgrad2">
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
                <Constricted>
                    <div className="columns">
                        <div className="column is-half" style={{padding: "10px 20px"}}>
                            <Text b>
                                Sort By:
                            </Text>
                            <Divider />
                            <ul>
                                <li><a href="#projects">Projects</a></li>
                                <li><a href="#experience">Experience</a></li>
                            </ul>
                        </div>
                        <div className="column is-half" style={{padding: "10px 20px"}}>
                            <Text b>
                                Quick Access:
                            </Text>
                            <Divider />
                            <ul>
                                <li><a href="#aeolus">Project Aeolus</a></li>
                                <li><a href="#jsprojects">Extraneous Projects</a></li>
                                <li><a href="#site">Personal Website</a></li>
                            </ul>
                        </div>
                    </div>
                    <Spacer y={1} />
                </Constricted>
                <Divider id="projects">PROJECTS</Divider>
                <Container >
                    <Section style={{position: 'relative', zIndex: '2'}} id="aeolus">
                        <Text className="pre-bigHeader" b >
                            Project Aeolus 
                        </Text>
                        <HorzLine />
                        <Spacer y={0.5} />
                        <Text h4 style={{lineHeight: '25px'}}>
                            Project Aeolus works to automate and modernize drone fleet systems. Besides being a cofounder 
                            of the company, my role in Project Aeolus is head of electrical and software systems. The company 
                            exposed me to being both an engineer and entrepreneur at the same time, all while under the pressures
                            of time. Working at Project Aeolus involved having a wide variety of tools and skills, such as serverless 
                            functions, cloud-native applications, containerization, satellite systems, data firehoses, and more.
                        </Text>
                        <Spacer y={1.5} />
                        <div className="columns">
                            <div className="column is-half">
                                <Text h3 b>
                                    Garnered Experience
                                </Text>
                                <HorzLine />
                                <Text h4>
                                    <ul>
                                        <li>Satellite Systems &amp; API's (Iridium and Astrocast)</li>
                                        <li>React Web Applications w/ Apollo GraphQL</li>
                                        <li>Containerized Golang Services</li>
                                        <li>Remote and Dependency-Free Systems</li>
                                        <li>PCB Design and Fabrication</li>
                                        <li>Distributed Systems</li>
                                    </ul>
                                </Text>
                            </div>
                            <div className="column is-half">
                                <Text h3 b>
                                    Tools &amp; Systems Utilized
                                </Text>
                                <HorzLine />
                                <div className="columns">
                                    <div className="column is-half">
                                        <Text h4>
                                            <ul>
                                                <li>JS+TS, Golang, C++, Make, Java, Python</li>
                                                <li>Swagger Hub</li>
                                                <li>AWS EC2, EKS, and more</li>
                                                <li>Serverless Functions</li>
                                            </ul>
                                        </Text>
                                    </div>
                                    <div className="column is-half">
                                        <Text h4>
                                            <ul>
                                                <li>React</li>
                                                <li>GraphQL w/ Apollo</li>
                                                <li>Design Systems</li>
                                                <li>Agile SCRUM and XP</li>
                                            </ul>
                                        </Text>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Section>
                    <Spacer y={2} />
                    <Section style={{position: 'relative', zIndex: '2'}} id="site">
                        <Text className="pre-bigHeader" b >
                            Personal Website 
                        </Text>
                        <HorzLine />
                        <Spacer y={0.5} />
                        <Text h4 style={{lineHeight: '25px'}}>
                            My personal website has been a 4 year-long project, changing every year as I learn newer technologies.
                            Other than acting as a basic portfolio, I also host and provide some analytical and public services, 
                            because why not?
                        </Text>
                        <Spacer y={1.5} />
                        <div className="columns">
                            <div className="column is-half">
                                <Text h3 b>
                                    Garnered Experience
                                </Text>
                                <HorzLine />
                                <Text h4>
                                    <ul>
                                        <li>More Involved React Development</li>
                                        <li>The Limits of Serverless Functions</li>
                                        <li>Serverless Websocket-Utilized Apps</li>
                                        <li>Design Systems</li>
                                    </ul>
                                </Text>
                            </div>
                            <div className="column is-half">
                                <Text h3 b>
                                    Tools &amp; Systems Utilized
                                </Text>
                                <HorzLine />
                                <div className="columns">
                                    <div className="column is-half">
                                        <Text h4>
                                            <ul>
                                                <li>JS+TS, Golang, Python</li>
                                                <li>Email JS</li>
                                                <li>Vercel</li>
                                                <li>Serverless Functions</li>
                                            </ul>
                                        </Text>
                                    </div>
                                    <div className="column is-half">
                                        <Text h4>
                                            <ul>
                                                <li>React</li>
                                                <li>GraphQL w/ Apollo</li>
                                                <li>Bulma + Geist UI + Evergreen</li>
                                            </ul>
                                        </Text>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Section>
                    <Spacer y={2} />
                    <Section style={{position: 'relative', zIndex: '2'}} id="jsprojects">
                        <Text className="pre-bigHeader" b >
                            Extraneous Projects
                        </Text>
                        <HorzLine />
                        <Spacer y={0.5} />
                        <Text h4 style={{lineHeight: '25px'}}>
                            In any aspect of fullstack developing, it's inevitable that you'll have to create your own tools 
                            if one doesn't quite fit your needs. This is just a collection of some tools that i've created 
                            that are open for public usage. Ensure you read the README before using any of my tools to ensure 
                            a smooth experience!
                        </Text>
                        <Spacer y={1.5} />
                        <div className="columns">
                            <div className="column is-half">
                                <Text h3 b>
                                    Garnered Experience
                                </Text>
                                <HorzLine />
                                <Text h4>
                                    <ul>
                                        <li>Javascript can be annoying</li>
                                        <li>Hosting and Serving Packages</li>
                                    </ul>
                                </Text>
                            </div>
                            <div className="column is-half">
                                <Text h3 b>
                                    Some Highlighted Tools
                                </Text>
                                <HorzLine />
                                <div className="columns">
                                    <div className="column is-half">
                                        <Text h4>
                                            <ul>
                                                <li><a href="https://github.com/ryanwans/FARlert">Farlert</a></li>
                                                <li><a href="https://github.com/ryanwans/window-protector">Window Protector</a></li>
                                            </ul>
                                        </Text>
                                    </div>
                                    <div className="column is-half">
                                        <Text h4>
                                            <ul>
                                                <li><a href="https://github.com/ryanrocket/greenlight">Greenlight</a></li>
                                                <li><a href="https://github.com/ryanrocket/templatr">Templatr</a></li>
                                            </ul>
                                        </Text>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Spacer y={4} />
                    </Section>
                    <Lines style={{zIndex: '0'}}/>
                </Container>
                <Divider id="experience">EXPERIENCE</Divider>
                <Container style={{position: 'relative', zIndex: '2'}}>
                    <Section style={{position: 'relative', zIndex: '2'}}>
                        <Text className="pre-bigHeader" b >
                            Software Engineering
                        </Text>
                        <HorzLine />
                        <Spacer y={1} />
                        <div className="columns">
                            <div className="column is-one-quarter">
                                <Text h3 b>
                                    <ul>
                                        <li>JAMStack Applications</li>
                                    </ul>
                                    <ul>
                                        <li>Serverless Functions</li>
                                    </ul>
                                    <ul>
                                        <li>Create React App</li>
                                    </ul>
                                    <ul>
                                        <li>Vue Web Apps</li>
                                    </ul>
                                    <ul>
                                        <li>Golang and C++</li>
                                    </ul>
                                </Text>
                            </div>
                            <div className="column is-one-quarter">
                                <Text h3 b>
                                    <ul>
                                        <li>CSS Preprocessors</li>
                                    </ul>
                                    <ul>
                                        <li>Websockets and WebRTC</li>
                                    </ul>
                                    <ul>
                                        <li>Electron Applications</li>
                                    </ul>
                                    <ul>
                                        <li>Arduino Software</li>
                                    </ul>
                                    <ul>
                                        <li>Javascript and Typescript</li>
                                    </ul>
                                </Text>
                            </div>
                            <div className="column is-one-quarter">
                                <Text h3 b>
                                    <ul>
                                        <li>SQL, NoSQL, MongoDB, MySQL</li>
                                    </ul>
                                    <ul>
                                        <li>Realtime Databases</li>
                                    </ul>
                                    <ul>
                                        <li>Microcontainers</li>
                                    </ul>
                                    <ul>
                                        <li>Container Orchestration</li>
                                    </ul>
                                </Text>
                            </div>
                            <div className="column is-one-quarter">
                                <Text h3 b>
                                    <ul>
                                        <li>Web Vitals Analytics</li>
                                    </ul>
                                    <ul>
                                        <li>User Tracking &amp; Analysis</li>
                                    </ul>
                                    <ul>
                                        <li>Data Visualization</li>
                                    </ul>
                                    <ul>
                                        <li>REST APIs</li>
                                    </ul>
                                    <ul>
                                        <li>Authentication &amp; Session Management</li>
                                    </ul>
                                </Text>
                            </div>
                        </div>
                    </Section>
                    <Spacer y={2} />
                    <Section style={{position: 'relative', zIndex: '2'}}>
                        <Text className="pre-bigHeader" b >
                            DevOps &amp; Project Management
                        </Text>
                        <HorzLine />
                        <Spacer y={1} />
                        <div className="columns">
                            <div className="column is-one-quarter">
                                <Text h3 b>
                                    <ul>
                                        <li>Jira and Confluence</li>
                                    </ul>
                                    <ul>
                                        <li>Agile Methodologies</li>
                                    </ul>
                                    <ul>
                                        <li>SCRUM, Kanban, XP</li>
                                    </ul>
                                    <ul>
                                        <li>Team Management</li>
                                    </ul>
                                </Text>
                            </div>
                            <div className="column is-one-quarter">
                                <Text h3 b>
                                    <ul>
                                        <li>AWS Tools</li>
                                    </ul>
                                    <ul>
                                        <li>Cloudflare</li>
                                    </ul>
                                    <ul>
                                        <li>Google Analytics</li>
                                    </ul>
                                    <ul>
                                        <li>Optimizely and A|B Testing</li>
                                    </ul>
                                </Text>
                            </div>
                            <div className="column is-one-quarter">
                                <Text h3 b>
                                    <ul>
                                        <li>Git</li>
                                    </ul>
                                    <ul>
                                        <li>Auth0</li>
                                    </ul>
                                    <ul>
                                        <li>DevSecOps</li>
                                    </ul>
                                    <ul>
                                        <li>CI/CD/CE Pipelines</li>
                                    </ul>
                                </Text>
                            </div>
                            <div className="column is-one-quarter">
                                <Text h3 b>
                                    <ul>
                                        <li>Ansible</li>
                                    </ul>
                                    <ul>
                                        <li>Prometheus</li>
                                    </ul>
                                </Text>
                            </div>
                        </div>
                    </Section>
                    <Spacer y={2} />
                    <Section style={{position: 'relative', zIndex: '2'}}>
                        <Text className="pre-bigHeader" b >
                            Systems Engineering
                        </Text>
                        <HorzLine />
                        <Spacer y={1} />
                        <div className="columns">
                            <div className="column is-one-quarter">
                                <Text h3 b>
                                    <ul>
                                        <li>Embedded Systems</li>
                                    </ul>
                                    <ul>
                                        <li>Remote Systems</li>
                                    </ul>
                                    <ul>
                                        <li>Dependency-Free (Standalone) Systems</li>
                                    </ul>
                                </Text>
                            </div>
                            <div className="column is-one-quarter">
                                <Text h3 b>
                                    <ul>
                                        <li>CI/CD</li>
                                    </ul>
                                    <ul>
                                        <li>Solar-Powered Systems</li>
                                    </ul>
                                    <ul>
                                        <li>Feedback Looping</li>
                                    </ul>
                                </Text>
                            </div>
                            <div className="column is-one-quarter">
                                <Text h3 b>
                                    <ul>
                                        <li>PCB/Electronic Systems</li>
                                    </ul>
                                    <ul>
                                        <li>Low-Level Software</li>
                                    </ul>
                                </Text>
                            </div>
                            <div className="column is-one-quarter">
                                <Text h3 b>
                                    <ul>
                                        <li>Design and Fabrication</li>
                                    </ul>
                                    <ul>
                                        <li>Manufacturing</li>
                                    </ul>
                                </Text>
                            </div>
                        </div>
                        <Spacer y={2} />
                    </Section>
                    <Lines style={{zIndex: '0'}}/>
                </Container>
                <PreFoot message="Shoot me a message" redir="/contact" button="Contact Me" />
            </div>
        )
    }
}

export default Portfolio;
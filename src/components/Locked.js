import React from 'react';

import { Container, Section } from 'reactbulma';
import { Text, Spacer, Button, Grid } from '@geist-ui/react';
import Lock from '../img/lock.svg'

class Locked extends React.Component {
    render() {
        // eslint-disable-next-line
        return (
            <div>
                <Container style={{alignContent: 'center', justifyContent: 'center', textAlign: 'center'}}>
                    <Section style={{textAlign: 'center', maxWidth: '500px', alignSelf: 'center', justifySelf: 'center', display: 'inline-block'}}>
                        <Spacer y={5} className="is-hidden-mobile" />
                        <img src={Lock} alt="No Access" style={{maxWidth: '350px', marginBottom: '25px'}} />
                        <Text h3 b>
                            This page is restricted to account holders only
                        </Text>
                        <Text p>
                            To view this page, you must have a valid account and be logged in. If you're logged in and 
                            still having trouble, contact Ryan Wans ASAP.
                        </Text>
                        <Spacer y={1.5} />
                        <Grid.Container gap={1.5} justify="center">
                            <Grid>
                                <Button style={{fontWeight: '600'}} auto>Log In</Button>
                            </Grid>
                            <Grid>
                                <Button style={{fontWeight: '600'}} type="success" auto>Contact &rarr;</Button>
                            </Grid>
                        </Grid.Container>
                        <Spacer y={6} className="is-hidden-mobile" />
                    </Section>
                </Container>
            </div>
        )
    }
}

export default Locked;
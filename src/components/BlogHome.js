import React from 'react';
import { Section, Container } from 'reactbulma';
import { Text, Spacer, Grid, Button, Input } from '@geist-ui/react';
import { Search, ChevronDown } from '@geist-ui/react-icons';
import HorzLine from './HorzLine';
import PostPreview from './PostPreview';

class BlogHome extends React.Component {
    render() {
        return (
            <div>
                <Spacer y={5} />
                <Container>
                    <div className="columns">
                        <div className="column is-half">
                            <Text h1 b>Ryan Wans Blog</Text>
                        </div>
                        <div className="column is-half has-text-right">
                            <Grid.Container gap={1} justify="flex-end">
                                <Grid>
                                    <Input icon={<Search />} placeholder="Search Posts..." />
                                </Grid>
                                <Grid>
                                    <Button iconRight={<ChevronDown />} auto type="default">Sort By</Button>
                                </Grid>
                                <Grid>
                                    <Button disabled auto type="default">Create Post</Button>
                                </Grid>
                            </Grid.Container>
                        </div>
                    </div>
                </Container>
                <Spacer y={0.5} />
                <HorzLine />
                <Section>
                    <Container>
                        <PostPreview tags={["technology", "cloud", "updates"]} title="Example Blog Post" description="An example blog post to highlight the usage of cards, shadows, and various other components throughout the Geist UI and Bulma components/design libraries" />
                    </Container>
                </Section>
            </div>
        )
    }
}

export default BlogHome;
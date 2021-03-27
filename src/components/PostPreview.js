import React from 'react';
import { Card, Divider, Text, Spacer } from '@geist-ui/react';
import { Badge } from 'evergreen-ui'

class PostPreview extends React.Component {
    TagColors = {
        "technology": "blue",
        "design": "yellow",
        "personal": "neutral",
        "other": "green",
        "cloud": "orange",
        "updates": "red"
    }

    render() {
        return (
            <Card className="pre-blogcard" shadow>
                <Text h1 b>{this.props.title}</Text>
                <Divider/>
                <Text p>{this.props.description}</Text>
                <Spacer y={1} />
                <Badge isSolid color={this.TagColors[this.props.tags[0]] || "neutral"}>{this.props.tags[0] || "none"}</Badge>&nbsp;
                <Badge isSolid color={this.TagColors[this.props.tags[1]] || "neutral"}>{this.props.tags[1] || "none"}</Badge>
                <Spacer y={0.5} />
                <Text small>Published: {Date.now()}</Text>
            </Card>
        )
    }
}

export default PostPreview;
import { Component } from "react";
import './Paragraph.css';

/**
 * Paragraph Component for AmberBuild Docs
 */
class Paragraph extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    render() {
        return (
            <p className="paragraph__docs" {...this.props}>
                {this.props.text}
                {this.props.children}
            </p>
        );
    }
}

export default Paragraph;
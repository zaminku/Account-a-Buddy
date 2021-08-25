import React from 'react';
import "./milestone.css";

class Milestone extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            milestone: '',
        }
        
        this.update = this.update.bind(this);
    }

    update(field) {
        return e => this.setState({[field]: e.currentTarget.value})
    }

    render(){
        return (
            <div>
                <input 
                    placeholder="Milestone"
                    onChange={this.update('milestone')}
                />

            </div>
        )
    }
}

export default Milestone;
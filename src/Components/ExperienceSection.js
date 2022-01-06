import React, { Component } from 'react'
import downPointer from '../Images/downPointer.png';
import '../Styles/ExperienceSection.scss';

export default class ExperienceSection extends Component {

    constructor(props) {
        super(props)
        this.state = {
            open: false,
            arrowUp: false,
        };
        this.openSection = this.openSection.bind(this);
        this.points = this.props.description.split('<br>')
    }

    openSection(e) {
        this.setState({
            open: !this.state.open,
            arrowUp: !this.state.arrowUp,
        });
    }

    render() {
        return (
            <div className="ExperienceSection">
                <div className="ExperienceSection__header" onClick={this.openSection}>
                    <p className="ExperienceSection__header__text">{this.props.organization}</p>
                    <img className="ExperienceSection__header__downPointer" src={downPointer} style={{transform: 'rotate(' + ((this.state.open) ? 180 : 0)  + 'deg)'}} alt="downPointer" />
                </div>
                {this.state.open && 
                    <div className="ExperienceSection__description">
                        {this.points.map((point) => (
                            <p className='ExperienceSection__description__point'>{point}</p>
                        ))}
                    </div>
                }
            </div>
        )
    }
}

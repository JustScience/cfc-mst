import React, {Component} from 'react';
import styled from 'styled-components';

import color from './color';

const ButtonBase = styled.a`
	background: ${props => 
		props.Accent ? color.accent.base :
		props.Dark ? 'rgba(0,0,0,0.12)' :
		props.Light ? 'rgba(255,255,255,0.12)' :
		props.Primary ? color.primary.base :
		props.Secondary ? color.secondary.base 
		: 'transparent'};
	border: 3px solid #bada55;
	border-radius: 10px;
	box-shadow: ${props => 
		props.Raised ? '0 4px 6px -4px rgba(0,0,0,0.75)' 
		: undefined};
	box-sizing: border-box;
	color: ${props =>
		props.Dark ? color.dkGrey :
		props.Light ? color.offWhite
		: 'cyan'
	};
	cursor: pointer;
	display: ${props =>
		props.Inline ? 'inline-block'
		: 'block'};
    font-size: 1.2em;
	margin: ${props =>
		props.Space ? '12px'
		: '0 auto'};
	outline: none;
	padding: 12px 24px;
	transition: all 360ms ease-in-out;

	&:hover {
		background: ${props => 
			props.Accent ? color.accent.base :
			props.Dark ? 'rgba(0,0,0,0.18)' :
 			props.Light ? 'rgba(255,255,255,0.24)' :
			props.Primary ? color.primary.light :
			props.Secondary ? color.secondary.light 
			: 'rgba(255,255,255,0.0)'};
        border-color: magenta;
		border-radius: 10px;
		box-shadow: ${props => 
			props.Raised ? '0 6px 12px -6px rgba(0,0,0,0.75)' 
			: undefined};
		color: ${props =>
			props.Dark ? color.black :
			props.Light ? color.white
			: '#bada55'
		};
	}
	// ALLOW FOR CUSTOM STYLE OVERRIDES
	/* ${props => props.styles}; */
`;


// COMPONENT TEMPLATING HERE
class Button extends Component {

	constructor (props) {
		super(props)
		this.handleClick = this.handleClick.bind(this)
		// this.state = {
		// 		// STATE HERE
		// }
	}

	handleClick (event) {
		// this.setState({value: !this.state.value })
		// console.log('Action logged' + this.state.value)
	}

	render (props) {
		return (
			
			<ButtonBase {...this.props}>{this.props.label}</ButtonBase>
			
		)
	}
};
export default Button;
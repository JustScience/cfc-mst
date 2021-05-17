import React, {Component} from 'react';
import styled from 'styled-components';

const ButtonBase = styled.a`
	background: transparent;
	border: 3px solid #bada55;
	border-radius: 10px;
	box-sizing: border-box;
	color: cyan;
	cursor: pointer;
	display: block;
    font-size: 1.2em;
	margin: 0 auto;
	outline: none;
	padding: 12px 24px;
	transition: all 360ms ease-in-out;

	&:hover {
		background: rgba(255,255,255,0.0);
        border-color: magenta;
		border-radius: 10px;
		color: #bada55;
	}
`;


// COMPONENT TEMPLATING HERE
class Button extends Component {

	render (children) {
		return (
			
			<ButtonBase>{children}</ButtonBase>
			
		)
	}
};
export default Button;
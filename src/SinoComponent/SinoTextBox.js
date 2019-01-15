"use strict";

import React from "react";
import PropTypes from "prop-types";

const SinoTextBox = ({title, hint, text, onTextChange}) => (
	<div>
		{((title==="")?"":(<small className="form-text text-muted">{title}</small>))}
		<input         
			className="form-control"
			type='text'
			onChange={onTextChange}
			placeholder={hint}
			value={text}
		/>
	</div>    
);

SinoTextBox.propTypes = {
	title:  PropTypes.string.isRequired,
	hint:  PropTypes.string.isRequired,
	text:   PropTypes.string.isRequired,
	onTextChange: PropTypes.func.isRequired,
};

export default SinoTextBox;

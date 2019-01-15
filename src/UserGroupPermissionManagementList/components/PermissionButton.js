"use strict";

import React from "react";
import PropTypes from "prop-types";

import "../style.css";

export const AddPermissionButton = ({
	text,
	title,
	onClick,
}) => (
	<button type="submit" className="btn btn-outline-secondary permission-button" onClick={onClick} >
		{((title!=="")?(<small className="form-text text-muted">{title}</small>):"")}
		{text}
	</button>
);

AddPermissionButton.propTypes = {    
	text: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired
};


export const DeletePermissionButton = ({
	text,
	title,
	onClick,
}) => (
	<button type="submit" className="btn btn-outline-danger permission-button" onClick={onClick}>
		{((title!=="")?(<small className="form-text text-muted">{title}</small>):"")}
		{text}
	</button>
);

DeletePermissionButton.propTypes = {    
	text: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired
};

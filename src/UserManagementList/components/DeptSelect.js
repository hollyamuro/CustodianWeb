import React from "react";
import PropTypes from "prop-types";
import Select from "react-select";

const DeptSelect = ({ hint, selected, options, onItemSelected }) => (
	<Select
		placeholder={hint}
		options={options}
		onChange={onItemSelected}
		value={(selected.value === "" && selected.label === "") ? "" : selected}
	/>
);

DeptSelect.propTypes = {
	hint: PropTypes.string.isRequired,
	selected: PropTypes.object.isRequired,
	options: PropTypes.arrayOf(
		PropTypes.shape({
			value: PropTypes.string.isRequired,
			lable: PropTypes.string.isRequired,
		}).isRequired,
	).isRequired,
	onItemSelected: PropTypes.func.isRequired,
};

DeptSelect.defaultProps = {
	hint: "",
	selected: "",
	options: [
	],
	onItemSelected: () => {
	}
};

export default DeptSelect;
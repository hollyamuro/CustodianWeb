"use strict";

import { connect } from "react-redux";
import  SinoSelect from "../../SinoComponent/SinoSelect";
import { setProductFilter } from "../actions";
import { ProductFilters } from "../constants";

const mapStateToProps = state => ({
	title: "依產品篩選",
	hint: "",
	options: ProductFilters,
	selectedOption: state.productFilter,
});

const mapDispatchToProps = dispatch => ({
	onOptionChange: (event)=>{ dispatch(setProductFilter(event.target.value));}
});

export default connect(mapStateToProps, mapDispatchToProps)(SinoSelect);

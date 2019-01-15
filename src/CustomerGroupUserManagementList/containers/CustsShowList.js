"use strict";

import { connect } from "react-redux";
import AddCustsList from "../components/AddCustsList";
import { addCustToGroup } from "../actions";

const getcustFilterList = (custs, custFilter) => {
	return (!custFilter.trim()) ? (custs) : (custs.filter(c => {
		return (c.c_account_no.includes(custFilter)) ||
			(c.c_sino_account.includes(custFilter)) ||
			(c.c_account_name.includes(custFilter));;

	}));
};

const getNotInGroupCustList = (custs, groupCusts) => {
	return custs.filter((c) => {
		return !((groupCusts.map(gc => {
			return (c.c_account_no === gc.cgu_account_no && c.c_sino_account === gc.cgu_sino_account);
		})).includes(true));
	});
};

const mapStateToProps = state => ({
	custs: getcustFilterList(getNotInGroupCustList(state.custs, state.groupCusts), state.custFilter),
	selectedGroup: state.selectedGroup,
});

const mapDispatchToProps = dispatch => ({
	onDispatchItemEvent: (selectedGroup, account_no, sino_account) => {
		dispatch(addCustToGroup(selectedGroup, account_no, sino_account));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(AddCustsList);

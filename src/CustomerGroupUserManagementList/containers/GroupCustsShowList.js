"use strict";

import { connect } from "react-redux";
import DeleteCustsList from "../components/DeleteCustsList";
import { deleteCustToGroup } from "../actions";

const getInGroupCustList = (custs, groupCusts) => {
	return custs.filter((c) => {
		return ((groupCusts.map(gc => {
			return (c.c_account_no === gc.cgu_account_no && c.c_sino_account === gc.cgu_sino_account);
		})).includes(true));
	});
};

const getgroupCustFilterList = (custs, groupCustFilter) => {
	return (!groupCustFilter.trim()) ? (custs) : (custs.filter(c => {
		return (c.c_account_no.includes(groupCustFilter)) ||
			(c.c_sino_account.includes(groupCustFilter)) ||
			(c.c_account_name.includes(groupCustFilter));
	}));
};

const mapStateToProps = state => ({
	custs: getgroupCustFilterList(getInGroupCustList(state.custs, state.groupCusts), state.groupCustFilter),
	selectedGroup: state.selectedGroup,
});

const mapDispatchToProps = dispatch => ({
	onDispatchItemEvent: (selectedGroup, account_no, sino_account) => {
		dispatch(deleteCustToGroup(selectedGroup, account_no, sino_account));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(DeleteCustsList);

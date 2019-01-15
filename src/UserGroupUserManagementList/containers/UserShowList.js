"use strict";

import { connect } from "react-redux";
import AddUsersList from "../components/AddUsersList";
import { addUserToGroup } from "../actions";

const getUserFilterList = (users, userFilter) => {
	return (!userFilter.trim()) ? (users) : (users.filter(u => {
		return (
			(u.employee_id.includes(userFilter)) ||
			(u.employee_name.includes(userFilter)) ||
			(u.dept_id.includes(userFilter)) ||
			(u.dept_name.includes(userFilter))
		);
	}));
};

const getNotInGroupUserList = (users, groupUsers) => {
	return users.filter((u) => {
		return !((groupUsers.map(gu => {
			return (u.id === gu.id);
		})).includes(true));
	});
};

const mapStateToProps = state => ({
	users: getUserFilterList(getNotInGroupUserList(state.users, state.groupUsers), state.userFilter),
	selectedGroup: state.selectedGroup,
});

const mapDispatchToProps = dispatch => ({
	onDispatchItemEvent: (selectedGroup, user_id) => {
		dispatch(addUserToGroup(selectedGroup, user_id));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(AddUsersList);

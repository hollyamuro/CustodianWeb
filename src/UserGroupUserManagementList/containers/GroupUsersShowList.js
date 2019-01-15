"use strict";

import { connect } from "react-redux";
import DeleteUsersList from "../components/DeleteUsersList";
import { deleteUserToGroup } from "../actions";

const getgroupUserFilterList = (users, userFilter) => {
	return (!userFilter.trim()) ? (users) : (users.filter(u => {
		return (
			(u.employee_id.includes(userFilter)) ||
			(u.employee_name.includes(userFilter)) ||
			(u.dept_id.includes(userFilter)) ||
			(u.dept_name.includes(userFilter))
		);
	}));
};

const getInGroupUserList = (users, groupUsers) => {
	return users.filter((u) => {
		return ((groupUsers.map(gu => {
			return (u.id === gu.id);
		})).includes(true));
	});
};

const mapStateToProps = state => ({
	users: getgroupUserFilterList(getInGroupUserList(state.users, state.groupUsers), state.groupUserFilter),
	selectedGroup: state.selectedGroup,
});

const mapDispatchToProps = dispatch => ({
	onDispatchItemEvent: (selectedGroup, user_id) => {
		dispatch(deleteUserToGroup(selectedGroup, user_id));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(DeleteUsersList);

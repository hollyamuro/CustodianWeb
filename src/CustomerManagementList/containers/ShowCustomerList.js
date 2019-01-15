"use strict";

import { connect } from "react-redux";
import { sendInviteMail, sendPasswordMail } from "../actions";
import CustomerList from "../components/CustomerList";

const getIdFilterCustomerList = (customers, idFilter) => {
	return (!idFilter.trim())?(customers):(customers.filter(c=>{
		return (c.c_account_no.includes(idFilter)) || (c.c_account_name.includes(idFilter));
	}));
};

const getActiveCustomerList = ( customers, activeFilter) => {
	switch(activeFilter){
	case "SHOW_ALL":
		return customers;
	case "SHOW_ACTIVE":
		return customers.filter(c=>{ return ( c.c_acc_status === "1" ); });
	case "SHOW_CANCEL":
		return customers.filter(c=>{ return ( c.c_acc_status === "2" ); });
	case "SHOW_FREEZE":
		return customers.filter(c=>{ return ( c.c_acc_status === "3" ); });
	}
	return customers;
};

const getStatusCustomerList = ( customers, statusFilter) => {
	switch(statusFilter){
	case "SHOW_ALL":
		return customers;
	case "SHOW_U":
		return customers.filter(c=>{ return ( c.ca_status === "U" ); });
	case "SHOW_N":
		return customers.filter(c=>{ return ( c.ca_status === "N" ); });
	case "SHOW_A":
		return customers.filter(c=>{ return ( c.ca_status === "A" ); });
	case "SHOW_L":
		return customers.filter(c=>{ return ( c.ca_status === "L" ); });
	case "SHOW_V":
		return customers.filter(c=>{ return ( c.ca_status === "V" ); });
	}
	return customers;
};

const mapStateToProps = state => ({
	customers:  getStatusCustomerList(
		getActiveCustomerList(
			getIdFilterCustomerList(state.customers, state.idFilter),
			state.activeFilter),
		state.statusFilter),
});

const mapDispatchToProps = dispatch => ({
	clickInviteMail: (c_account_no, c_sino_account) => { dispatch(sendInviteMail(c_account_no, c_sino_account)); },
	clickPasswordMail: (c_account_no, c_email) => { 
		console.log(c_account_no)
		console.log(c_email)
		dispatch(sendPasswordMail(c_account_no, c_email)); 
	}
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CustomerList);


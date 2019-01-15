import {
	SET_CREATE_GROUP_NAME,
	SET_CREATE_GROUP_DESCRIPTION,
	SET_CREATE_GROUP_ROLE,
	SET_CREATE_GROUP_PRODUCT
} from "../actions";

const createdGroup = (
	state={
		cg_id: "",
		cg_name: "",
		cg_description: "",
		cg_role: "",
		cg_product: "",
	}, 
	action) => { 

	switch(action.type){
	case SET_CREATE_GROUP_NAME:
		return {...state, cg_name: action.cg_name };

	case SET_CREATE_GROUP_DESCRIPTION:
		return {...state, cg_description: action.cg_description };

	case SET_CREATE_GROUP_ROLE:
		return {...state, cg_role: action.cg_role };

	case SET_CREATE_GROUP_PRODUCT:
		return {...state, cg_product: action.cg_product };
        
	default:
		return state;
	}
};

export default createdGroup;
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	userList: [],
	count: 0
};

const user = createSlice({
	name: "userList",
	initialState,
	reducers: {
		addUser: (state, action) => {
			const isAvailable = state.userList.find(
				(item) => item?.userName === action?.payload.userName
			);

			if (!isAvailable) {
				return {
					...state,
					count: state.count + 1,
					userList: [...state.userList, action.payload],
				};
			}
			return state;
		},

		deleteUser: (state, action) => {
			return {
				...state,
				count: state.count - 1,
				userList: state.userList.filter(
					(item) => item.id !== action.payload.id
				),
			}
		},

		editUser: (state, action) => {
			return {
				...state,
				userList: state.userList.map((item) => {
					if (item.id === action.payload.id) {
						return { ...item, userName: action.payload.userName };
					}
					return item;
				}),
			};
		}
	},
});

export default user.reducer;

export const { addUser, deleteUser, editUser } = user.actions;
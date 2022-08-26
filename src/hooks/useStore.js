import create from 'zustand';

import {db} from '../db';

const useStore = create(set => ({
	routine: [],
	exercises: [...db],

	addRoutine: newRoutine => {
		set(state => {
			return {routine: [...state.routine, newRoutine]};
		});
	},
	deleteRoutine: id => {
		set(state => {
			return {routine: state.routine.filter(routine => routine.id !== id)};
		});
	},
}));

export default useStore;

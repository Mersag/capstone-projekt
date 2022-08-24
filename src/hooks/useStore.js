import create from 'zustand';

const useStore = create(set => ({
	routine: [],

	addRoutine: newRoutine => {
		set(state => {
			return {routine: [...state.routine, newRoutine]};
		});
	},
}));
export default useStore;

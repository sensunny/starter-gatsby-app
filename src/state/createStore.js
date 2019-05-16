import { createStore as reduxCreateStore } from "redux"

const reducer = (state, action) => {
	console.info("--------------------")
	console.info("\x1b[36m", "prev state -> ", state)
	console.info("\x1b[36m", "action", action)
	if (action.type === `CATEGORY_CLICKED`) {
		state = Object.assign({}, state, {
			categoryTitle: action.info
		})
		// return state
	}
	if (action.type === `SECTION_REVEALED`) {
		state = Object.assign({}, state, {
			revealSection: state.count + action.index,
		})
		// return state
	}
	console.info("\x1b[36m", "next state -> ", state)
	console.info("--------------------")
	// state = { ...stateObj }
	return state
}

const initialState = { categoryTitle: null, revealSection:null }

const createStore = () => reduxCreateStore(reducer, initialState)
export default createStore

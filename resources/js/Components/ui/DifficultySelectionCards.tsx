/**
 * DIFFICULTY SELECTION CARDS COMPONENT
 * 
 * Component intended to display difficulty level selection cards.
 * Allows users to choose between EASY, MEDIUM, HARD, and PITCH_PERFECT difficulty levels.
 * 
 * NOTE: This component has issues:
 * 1. References 'difficultyLevels' which is not imported or defined
 * 2. Should import DIFFICULTY_LEVELS from Constants/DifficultyLevels
 * 3. Should handle click events to update difficulty level state
 * 4. Component name is DifficultySelectionCard (singular) but file/export is plural
 * 5. Currently not functional - needs to be connected to parent component state
 */

import React, {Component} from 'react'


class DifficultySelectionCard extends Component{
	/**
	 * Renders difficulty level selection cards
	 * 
	 * Maps over difficulty levels to create clickable cards for each difficulty.
	 * Each card displays the difficulty label and description.
	 * 
	 * NOTE: This will throw an error because 'difficultyLevels' is not defined.
	 * Should import DIFFICULTY_LEVELS and convert object to array, or pass as prop.
	 * 
	 * @returns {JSX.Element} Array of difficulty selection cards
	 */
	render(){
		return (
			// ERROR: difficultyLevels is not defined - should import DIFFICULTY_LEVELS
			difficultyLevels.map((m) =>{
				return(
					 <div> 
						{/* Difficulty level button - should update difficultyLevel state on click */}
						<button className ="btn-primary"> {m.label} </button>
						{/* Difficulty description */}
						<div> {m.description}</div>
					 </div>
				)
			})
		)
	}
}	

export default DifficultySelectionCard
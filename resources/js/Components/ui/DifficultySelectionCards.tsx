/**
 * DIFFICULTY SELECTION CARDS COMPONENT
 * 
 * Displays difficulty level selection cards (EASY, MEDIUM, HARD, PITCH_PERFECT).
 * Uses Object.entries(DIFFICULTY_LEVELS) to iterate over the difficulty config.
 * 
 * NOTE: Display only - not yet functional. To make it work:
 * - Add onClick handlers to update parent state (difficultyLevel)
 * - Pass setDifficultyLevel from Note.tsx as a prop
 * - Add visual feedback for the currently selected difficulty
 */

import React, {Component} from 'react'
import {DIFFICULTY_LEVELS} from './../../Constants/DifficultyLevels'

class DifficultySelectionCard extends Component{
	/**
	 * Renders difficulty level selection cards
	 * 
	 * Maps over DIFFICULTY_LEVELS (via Object.entries) to create a card for each
	 * difficulty. Each card displays the label and description.
	 * 
	 * @returns {JSX.Element} Array of difficulty selection card elements
	 */
	render(){
		return (
			Object.entries(DIFFICULTY_LEVELS).map(([key, value]) => {
				return (
					<div> 
						<button className ="btn-primary"> {value.label} </button>
						<div> {value.description}</div>
					 </div>
					)
			}
		)
		)
	}
}	

export default DifficultySelectionCard
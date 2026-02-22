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
interface DifficultySelectionCardProps{
	currentLevel: string
}
class DifficultySelectionCard extends Component<DifficultySelectionCardProps>{
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
			<div className='grid grid-cols-4 border'>
			{Object.entries(DIFFICULTY_LEVELS).map(([key, value]) => {
				return (
					<div key={key} className = {` group relative bg-white p-4 rounded-lg shadow-md cursor-pointer hover:shadow-lg 
													${key ===this.props.currentLevel ? 'border-purple-500 border-2' : ''}`}> 
						<h3 className ="btn-primary" > {value.label} </h3>
						<div className='absolute hidden group-hover:block bg-gray-800 text-white text-sm rounded p-2 top-full left-0 mt-1 w-80 z-10'>
							{value.description}
						</div>
					 </div>
					)
			})}
			</div>
		)
	}
}	

export default DifficultySelectionCard
/**
 * SELECT BUTTON COMPONENT
 * 
 * A reusable button component for note selection in the training exercise.
 * Used to display all available note choices that the user can click
 * to make their guess.
 * 
 * Props:
 * - noteLabel: The text displayed on the button (e.g., "C", "D#", "A")
 * - onSelect: Callback function called when button is clicked
 */

import React, {Component} from 'react'
interface SelectButtonProps{
	onSelect: ()=> string;
	noteLabel: string
}

class SelectButton extends Component<SelectButtonProps>{
	/**
	 * Renders a selectable button for note guessing
	 * 
	 * When clicked, calls the onSelect callback function with the note information.
	 * This allows the parent component (Note.tsx) to handle the guess logic.
	 * 
	 * @returns {JSX.Element} A button element with the note label
	 */
	render(){
		return (<button 
			className="btn-select"
			onClick={this.props.onSelect}
			>
				{this.props.noteLabel}
			</button>)
	}
}

export default SelectButton


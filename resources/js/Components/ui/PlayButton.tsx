/**
 * PLAY BUTTON COMPONENT
 * 
 * A button component that plays a musical note when clicked.
 * Used in the training page to play reference notes and target notes.
 * 
 * Props:
 * - noteName: The display text on the button (e.g., "C" or "?")
 * - noteType: Either "reference" or "target" - determines the label text
 * - noteNameNum: The full note identifier (e.g., "C4") used to look up frequency
 */

import React, { Component } from 'react'
import {playNote} from './../../Utils/AudioService'

interface PlayButtonProps{
	noteName: string;
	noteType: string;
	noteNameNum: string;
}
class PlayButton extends Component<PlayButtonProps> {
	/**
	 * Renders a play button with descriptive label
	 * 
	 * The button displays the note name and plays the note's frequency
	 * when clicked using the Web Audio API via the AudioService.
	 * 
	 * @returns {JSX.Element} A div containing a label and play button
	 */
	render() {
		// Determine the description text based on note type
		const noteType = this.props.noteType;
		let noteDesc = '';

		if (noteType === 'reference') {
			// Reference note - the note user can use as a pitch reference
			noteDesc = 'Reference Note';
		} else if (noteType === 'target') {
			// Target note - the note user needs to identify
			noteDesc = 'Target Note';
		} else {
			// Fallback for unknown types
			noteDesc = 'unknown';
		}
		console.log(this.props)

		return (
			<div>
				{/* Descriptive label indicating what type of note this is */}
				<span> {noteDesc}</span>
				{/* Play button - displays note name and plays note on click */}
				<button 
					className="btn-play" 
					onClick={()=> playNote(this.props.noteNameNum)}
				>{this.props.noteName}</button>
			</div>)
	}
}

export default PlayButton


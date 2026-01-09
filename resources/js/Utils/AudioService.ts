/**
 * AUDIO SERVICE
 * 
 * Utility service for playing musical notes using the Web Audio API.
 * Provides a simple interface to play notes by their name (e.g., "C4", "D#4").
 * 
 * This service:
 * 1. Looks up the frequency for a given note name
 * 2. Creates an AudioContext (Web Audio API interface)
 * 3. Creates an oscillator (sound generator)
 * 4. Sets the frequency and plays the note for 0.5 seconds
 */

import {NOTE_FREQUENCIES} from './../Constants/NoteFrequencies'

/**
 * Plays a musical note using the Web Audio API
 * 
 * Takes a note name (e.g., "C4", "D#4") and plays it as a pure tone
 * for 0.5 seconds. The frequency is looked up from the NOTE_FREQUENCIES constant.
 * 
 * @param {string} noteName - The note identifier (e.g., "C4", "A4", "F#3")
 * 
 * Example usage:
 * playNote('C4')  // Plays middle C (261.63 Hz) for 0.5 seconds
 * playNote('A4')  // Plays A4 (440.00 Hz) for 0.5 seconds
 */
export function playNote(noteName){
	// Look up the frequency (in Hz) for the given note name
	// Returns undefined if noteName doesn't exist in NOTE_FREQUENCIES
	const frequency = NOTE_FREQUENCIES[noteName];
	
	// Create a new AudioContext - the main interface for Web Audio API
	// This manages all audio operations and creates the audio processing graph
	const audioContext = new AudioContext();
	
	// Create an oscillator node - generates a periodic waveform (sound wave)
	// By default, it creates a sine wave (pure tone)
	const oscillator = audioContext.createOscillator();
	
	// Set the frequency of the oscillator to the note's frequency
	// This determines the pitch of the sound
	oscillator.frequency.value = frequency;
	
	// Connect the oscillator to the audio destination (speakers/headphones)
	// This routes the audio signal to the output
	oscillator.connect(audioContext.destination)
	
	// Start playing the note immediately
    oscillator.start()
    
    // Stop playing the note after 0.5 seconds
    // audioContext.currentTime is the current time in seconds since context creation
    // Adding 0.5 means "stop 0.5 seconds from now"
    oscillator.stop(audioContext.currentTime + 0.5)  // plays for 0.5 seconds

}
/**
 * NOTE TRAINING PAGE COMPONENT
 * 
 * This is the main training page where users practice identifying musical notes.
 * The page implements an ear training exercise where:
 * 1. A reference note (C4) is played
 * 2. A target note (random) is played
 * 3. User selects which note they think the target note is
 * 4. Feedback is provided (correct/incorrect)
 * 5. User can proceed to the next question
 * 
 * The difficulty level determines which notes are available for selection
 * and how many notes are in the pool.
 */

import React, { useState } from 'react'
import PlayButton from './../../Components/ui/PlayButton'
import SelectButton from './../../Components/ui/SelectButton'
import DifficultySelectionCards from './../../Components/ui/DifficultySelectionCards'
import {DIFFICULTY_LEVELS} from './../../Constants/DifficultyLevels'
// import {MUSICAL_ALPHABETS} from './../../Constants/MusicalAlphabets'
import {NOTES_EASY} from './../../Constants/NoteDifficultyEasy'
import {NOTES_MEDIUM} from './../../Constants/NoteDifficultyMedium'
import {NOTES_HARD} from './../../Constants/NoteDifficultyHard'



/**
 * Note training component
 * 
 * Manages the state and logic for the note identification training exercise
 */
function Note() {
  // Temporary variable to store number of notes for current difficulty
  // NOTE: This is problematic - it's recalculated on every render but used in useState initialization
  let numberOfNotes = 0;
  
  /**
   * STATE MANAGEMENT
   * 
   * difficultyLevel: Current selected difficulty (EASY, MEDIUM, HARD, PITCH_PERFECT)
   * selectionNotesForDifficulty: Array of note objects available for user to select from
   * targetNotesForDifficulty: Currently unused - might be for future feature
   */
  const [difficultyLevel, setDifficultyLevel] = useState('EASY');
  const [selectionNotesForDifficulty, setSelectionNotesForDifficulty] = useState(NOTES_EASY);
  const [targetNotesForDifficulty, setTargetNoteForDifficulty] = useState(null);
  
  /**
   * Sets the available notes based on the current difficulty level
   * 
   * This function:
   * - Determines how many notes should be in the selection pool
   * - Sets the appropriate note array (NOTES_EASY, NOTES_MEDIUM, or NOTES_HARD)
   * - Updates numberOfNotes variable for use in random note generation
   * 
   * NOTE: This function is called on every render, which is inefficient.
   * Should be moved to useEffect or called only when difficultyLevel changes.
   */
  function SetNotesForDifficultyLevel(){
    if(difficultyLevel === 'EASY'){
      // Easy: 7 natural notes in one octave (C4-B4)
      numberOfNotes = DIFFICULTY_LEVELS['EASY']['numberOfNotes'];
      console.log(NOTES_EASY);
      setSelectionNotesForDifficulty(NOTES_EASY);
      console.log(selectionNotesForDifficulty)
    }else if(difficultyLevel === 'MEDIUM'){
      // Medium: 12 notes in one octave (includes sharps/flats)
      numberOfNotes = DIFFICULTY_LEVELS['MEDIUM']['numberOfNotes'];
      setSelectionNotesForDifficulty(NOTES_MEDIUM);
    }else if(difficultyLevel === 'HARD'){
      // Hard: 36 notes across three octaves (C3-B5)
      numberOfNotes = DIFFICULTY_LEVELS['HARD']['numberOfNotes'];
      setSelectionNotesForDifficulty(NOTES_HARD);
    }else if(difficultyLevel === 'PITCH_PERFECT'){
      // Pitch Perfect: Same note pool as HARD but with random reference note
      numberOfNotes = DIFFICULTY_LEVELS['PITCH_PERFECT']['numberOfNotes'];
      setSelectionNotesForDifficulty(NOTES_HARD);
    }
  }

  /**
   * TRAINING STATE
   * 
   * targetNote: The randomly selected note that user needs to identify
   * result: Feedback state - 'correct', 'incorrect', or null (no answer yet)
   */
  //useStates
  const [targetNote, setTargetNote] = useState(getRandomNote(numberOfNotes));
  const [result, setResult] = useState(null);
  
  /**
   * Generates a random integer between min and max (inclusive)
   * 
   * @param {number} min - Minimum value (inclusive)
   * @param {number} max - Maximum value (inclusive)
   * @returns {number} Random integer in the range [min, max]
   */
  function getRandomIntegerInclusive(min: number, max: number) : number{
    return Math.floor(Math.random() * (max-min+1)) + min;
  }

  /**
   * Generates a random note from the available musical alphabets
   * 
   * @param {number} nums_alphabets - Number of notes in the pool (0-indexed, so max index)
   * @returns {string} The id of a randomly selected note (e.g., "C4", "D#4")
   * 
   * NOTE: This function references MUSICAL_ALPHABETS which is not imported.
   * This will cause a runtime error. Should import MUSICAL_ALPHABETS or use
   * selectionNotesForDifficulty array instead.
   */
  function getRandomNote(nums_alphabets: number){
    const targetNoteNum = getRandomIntegerInclusive(0,nums_alphabets);
    console.log("tar" + targetNoteNum)
    console.log(selectionNotesForDifficulty);

    return selectionNotesForDifficulty[targetNoteNum]['id'];
  }

  /**
   * Handles when user makes a guess by clicking a note selection button
   * 
   * Compares the guessed note with the target note and updates the result state
   * to provide feedback to the user.
   * 
   * @param {string} guessedNote - The note id that the user selected
   */
  function handleGuess(guessedNote : string) : void{
    console.log(guessedNote);
    if(targetNote === guessedNote){
      setResult('correct');
    }else{
      setResult('incorrect')
    }
  }

  /**
   * Handles the "Next" button click
   * 
   * Generates a new random target note and resets the result feedback
   * so the user can proceed to the next question.
   * 
   * NOTE: There's a bug here - getRandomNote is passed as a function reference
   * instead of being called. Should be: getRandomNote(numberOfNotes)
   */
  function handleNext(){
    console.log("num" + numberOfNotes);
    setTargetNote(getRandomNote);
    setResult(null);
  }

  /**
   * RENDER
   * 
   * The UI consists of:
   * - Page heading
   * - Difficulty selection cards (currently not functional)
   * - Reference note play button (always C4)
   * - Target note play button (random note, displayed as "?")
   * - Selection buttons for all available notes based on difficulty
   * - Feedback message (correct/incorrect)
   * - Next button to proceed to next question
   */
  return (
    <div className="page-container">

      <div>
        <h1 className="page-heading">Note Training</h1>
        <div>
          <p>Select a Difficulty Level</p>
         <DifficultySelectionCards/> 
        </div>
        {/* Reference note - always C4, helps user establish pitch reference */}
        <PlayButton noteName = 'C' noteType = 'reference' noteNameNum = 'C4' />
        {/* Target note - random note user needs to identify, shown as "?" */}
        <PlayButton noteName = '?' noteType = 'target' noteNameNum = {targetNote} />
        {/* Selection buttons - dynamically generated from selectionNotesForDifficulty array */}
        <div className="btn-select-parent note-select-buttons"> 
          {
            selectionNotesForDifficulty.map((m) => {
              return (
                <SelectButton
                  key = {m.id}
                  noteLabel = {m.label}
                  onSelect={()=>handleGuess(m.id)}
                  />
              )
            })
          }
          
        </div>
        {/* Feedback messages - conditionally rendered based on result state */}
        <div>{result === 'correct' && <p>Correct!</p>}</div>
        <div>{result === 'incorrect' && <p>Incorrect!</p>}</div>
        {/* Next button - proceeds to next question */}
        <div> <button className='btn-primary' onClick = {() => handleNext()} > NEXT </button></div>  
      </div>
      
    </div>
  )
}

export default Note
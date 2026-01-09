/**
 * NOTES FOR HARD DIFFICULTY
 * 
 * Defines the array of notes available for selection in HARD difficulty mode.
 * 
 * HARD mode includes:
 * - Three octaves: C3 to B5
 * - All notes including sharps (full chromatic scale in each octave)
 * - 36 notes total (12 notes × 3 octaves)
 * 
 * Structure:
 * - id: Full note identifier with octave and sharp (e.g., "C#3") - used for frequency lookup
 * - label: Display text for the button (e.g., "C#") - shown to user
 * 
 * This array is used to:
 * 1. Generate the selection buttons in the Note training page
 * 2. Determine which notes can be randomly selected as target notes
 * 
 * The notes are organized by octave:
 * - C3 octave: C3 through B3 (12 notes)
 * - C4 octave: C4 through B4 (12 notes) - middle octave
 * - C5 octave: C5 through B5 (12 notes)
 * 
 * NOTE: Also used for PITCH_PERFECT difficulty (same note pool, different reference strategy)
 */
export const NOTES_HARD: {
  id: string;
  label: string;
}[] = [
  // C3 octave - lower octave (12 notes)
  {id: "C3", label: "C"},
  {id: "C#3", label: "C#"},
  {id: "D3", label: "D"},
  {id: "D#3", label: "D#"},
  {id: "E3", label: "E"},
  {id: "F3", label: "F"},
  {id: "F#3", label: "F#"},
  {id: "G3", label: "G"},
  {id: "G#3", label: "G#"},
  {id: "A3", label: "A"},
  {id: "A#3", label: "A#"},
  {id: "B3", label: "B"},
  // C4 octave - middle octave (12 notes) - this is where middle C (C4) is located
  {id: "C4", label: "C"},
  {id: "C#4", label: "C#"},
  {id: "D4", label: "D"},
  {id: "D#4", label: "D#"},
  {id: "E4", label: "E"},
  {id: "F4", label: "F"},
  {id: "F#4", label: "F#"},
  {id: "G4", label: "G"},
  {id: "G#4", label: "G#"},
  {id: "A4", label: "A"},
  {id: "A#4", label: "A#"},
  {id: "B4", label: "B"},
  // C5 octave - higher octave (12 notes)
  {id: "C5", label: "C"},
  {id: "C#5", label: "C#"},
  {id: "D5", label: "D"},
  {id: "D#5", label: "D#"},
  {id: "E5", label: "E"},
  {id: "F5", label: "F"},
  {id: "F#5", label: "F#"},
  {id: "G5", label: "G"},
  {id: "G#5", label: "G#"},
  {id: "A5", label: "A"},
  {id: "A#5", label: "A#"},
  {id: "B5", label: "B"}
];
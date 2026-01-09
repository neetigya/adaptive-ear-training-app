/**
 * NOTES FOR MEDIUM DIFFICULTY
 * 
 * Defines the array of notes available for selection in MEDIUM difficulty mode.
 * 
 * MEDIUM mode includes:
 * - One octave only (C4 to B4)
 * - All notes including sharps (full chromatic scale)
 * - 12 notes total: C, C#, D, D#, E, F, F#, G, G#, A, A#, B
 * 
 * Structure:
 * - id: Full note identifier with octave and sharp (e.g., "C#4") - used for frequency lookup
 * - label: Display text for the button (e.g., "C#") - shown to user
 * 
 * This array is used to:
 * 1. Generate the selection buttons in the Note training page
 * 2. Determine which notes can be randomly selected as target notes
 * 
 * NOTE: Uses sharps (#) notation. Could also use flats (b) - e.g., "Db" instead of "C#"
 */
export const NOTES_MEDIUM: {
  id: string;
  label: string;
}[] = [
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
  ]
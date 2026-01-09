/**
 * NOTES FOR EASY DIFFICULTY
 * 
 * Defines the array of notes available for selection in EASY difficulty mode.
 * 
 * EASY mode includes:
 * - One octave only (C4 to B4)
 * - Only natural notes (no sharps or flats)
 * - 7 notes total: C, D, E, F, G, A, B
 * 
 * Structure:
 * - id: Full note identifier with octave (e.g., "C4") - used for frequency lookup
 * - label: Display text for the button (e.g., "C") - shown to user
 * 
 * This array is used to:
 * 1. Generate the selection buttons in the Note training page
 * 2. Determine which notes can be randomly selected as target notes
 */
export const NOTES_EASY: {
  id: string;
  label: string;
}[] = [
    {id: "C4", label: "C"},
    {id: "D4", label: "D"},
    {id: "E4", label: "E"},
    {id: "F4", label: "F"},
    {id: "G4", label: "G"},
    {id: "A4", label: "A"},
    {id: "B4", label: "B"},
  ]
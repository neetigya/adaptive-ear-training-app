/**
 * MUSICAL ALPHABETS CONSTANT
 * 
 * Defines the basic musical note names (C, D, E, F, G, A, B) in a structured format.
 * Represents the natural notes (no sharps or flats) in one octave (C4-B4).
 * 
 * Structure:
 * - id: Full note identifier with octave (e.g., "C4") - used for frequency lookup
 * - label: Display text for the note (e.g., "C") - shown to user
 * 
 * NOTE: Currently unused. Note.tsx uses NOTES_EASY, NOTES_MEDIUM, NOTES_HARD
 * for random note generation based on difficulty. This constant could be used
 * for shared logic or as a fallback if needed.
 */
export const MUSICAL_ALPHABETS: {
  id: string;
  label: string;
}[] = [
    {
      id: "C4",
      label: "C",
    },
    {
      id: "D4",
      label: "D",
    },
    {
      id: "E4",
      label: "E",
    },
    {
      id: "F4",
      label: "F",
    },
    {
      id: "G4",
      label: "G",
    },
    {
      id: "A4",
      label: "A",
    },
    {
      id: "B4",
      label: "B",
    }
  ]
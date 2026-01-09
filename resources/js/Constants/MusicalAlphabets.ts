/**
 * MUSICAL ALPHABETS CONSTANT
 * 
 * Defines the basic musical note names (C, D, E, F, G, A, B) in a structured format.
 * This represents the natural notes (no sharps or flats) in one octave.
 * 
 * Structure:
 * - id: Full note identifier with octave (e.g., "C4") - used for frequency lookup
 * - label: Display text for the note (e.g., "C") - shown to user
 * 
 * NOTE: This constant appears to be used for generating random target notes,
 * but it's currently hardcoded to C4-B4. The getRandomNote function in Note.tsx
 * references this, but it should probably use the difficulty-specific note arrays
 * (NOTES_EASY, NOTES_MEDIUM, NOTES_HARD) instead to respect the selected difficulty.
 * 
 * This array is structured as an array of objects (rather than a simple object)
 * to allow for easy iteration and mapping in React components.
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
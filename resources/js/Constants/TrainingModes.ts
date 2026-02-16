/**
 * TRAINING MODES TYPE DEFINITION
 * 
 * TypeScript type union that defines all valid training mode identifiers.
 * This provides type safety - you can only use these specific string values
 * when referencing training modes throughout the application.
 * 
 * Benefits:
 * - Autocomplete in IDEs
 * - Compile-time error checking
 * - Prevents typos in mode names
 * 
 * NOTE: The actual TRAINING_MODES array below uses different IDs than this type.
 * Consider aligning them or using this type to constrain the array.
 */
export type TrainingMode =
"referenceNoteEarTraining"
| "intervals"
| "twoNotes"
| "triads"
| "chords"
| "keyboardEarTraining"
| "scaleEarTraining";


/**
 * TRAINING MODES CONSTANT
 * 
 * Defines all available training modes/exercises in the ear training application.
 * Each mode represents a different type of ear training exercise that users can practice.
 * 
 * This array is used by the ModuleCard component to display clickable cards
 * on the home page, allowing users to navigate to different training exercises.
 * 
 * Structure:
 * - id: Unique identifier for the training mode (used for routing/navigation)
 * - label: Display name shown on the card (e.g., "Reference Note")
 * - description: Brief explanation of what the training mode teaches
 * 
 * Each mode has a route property used by ModuleCard for navigation.
 * Note: Only /training/note has a corresponding page; other routes need to be implemented.
 */
export const TRAINING_MODES: {
id: string;
label: string;
description: string
route: string
}[] = [
  /**
   * Reference Note Training
   * User hears a reference note (usually C4) and a target note,
   * then identifies the target note by comparing it to the reference.
   */
  {
    id: "referenceNote",
    label: "Reference Note",
    description: "Use reference note to find the target note.",
    route:"note"
  },
  /**
   * Interval Training
   * User hears two notes and identifies the interval (distance) between them.
   * Examples: major third, perfect fifth, minor second, etc.
   */
  {
    id: "intervals",
    label: "Identify the interval between two notes",
    description: "Train your ear to recognize intervals and their sizes.",
     route:"interval"
  },
  /**
   * Scale Training
   * User hears a scale and identifies which scale it is.
   * Examples: major scale, minor scale, pentatonic scale, etc.
   */
  {
    id: "scale",
    label: "Identify the Scale",
    description: "Train your ear to recognize scale.",
    route:"scale"
  },
  /**
   * Chord Training
   * User hears a chord and identifies which chord it is.
   * Examples: C major, A minor, F# diminished, etc.
   */
  {
    id: "chord",
    label: "Identify the Chord",
    description: "Train your ear to recognize the chord.",
    route:"chord"
  },
  /**
   * Triad Training
   * User hears a triad (three-note chord) and identifies it.
   * Focuses specifically on triads (major, minor, diminished, augmented).
   */
  {
    id: "triads",
    label: "Triads",
    description: "Train your ear to recognize triads and their chords.",
    route:"triad"
  }
  
]
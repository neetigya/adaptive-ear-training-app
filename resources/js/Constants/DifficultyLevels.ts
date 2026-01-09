/**
 * DIFFICULTY LEVELS CONSTANT
 * 
 * Defines the configuration for different difficulty levels in the ear training app.
 * Each difficulty level specifies:
 * - The range of notes available
 * - The number of notes in the selection pool
 * - The reference note strategy
 * 
 * This is used to determine which notes are available for selection
 * and how many notes should be in the random target note pool.
 */

export const DIFFICULTY_LEVELS: {
  [key: string ] : {
      id: string
      lable: string  // NOTE: Typo - should be "label" (also see label property below)
      description: string
      numberOfNotes: number
    }
  } = {
        /**
         * EASY DIFFICULTY
         * - One octave: C4 to B4
         * - Only natural notes (no sharps/flats): C, D, E, F, G, A, B
         * - Fixed reference note: C4
         * - 7 notes total
         */
        'EASY' : 
        {
          id: 'EASY',
          label: 'Easy',
          description: 'One Octave (C4-B4), All Natural Notes, C4 as reference',
          numberOfNotes: 7 
        },
        /**
         * MEDIUM DIFFICULTY
         * - One octave: C4 to B4
         * - All notes including sharps/flats: C, C#, D, D#, E, F, F#, G, G#, A, A#, B
         * - Fixed reference note: C4
         * - 12 notes total (full chromatic scale in one octave)
         */
        'MEDIUM' : 
        {
          id: 'MEDIUM',
          label: 'Medium',
          description: 'One Octave (C4-B4), All Notes within the Octave, C4 as reference', 
          numberOfNotes: 12 
        },
        /**
         * HARD DIFFICULTY
         * - Three octaves: C3 to B5
         * - All notes including sharps/flats across all three octaves
         * - Fixed reference note: C4
         * - 36 notes total (12 notes × 3 octaves)
         */
        'HARD': 
        {
          id: 'HARD',
          label: 'Hard',
          description: 'Three Octave (C3-B5), All Notes between C3-B5, C4 as reference', 
          numberOfNotes: 36
        },
        /**
         * PITCH PERFECT DIFFICULTY
         * - Three octaves: C3 to B5
         * - All notes including sharps/flats across all three octaves
         * - Random reference note (not always C4) - makes it harder
         * - 36 notes total (same pool as HARD, but different reference strategy)
         */
        'PITCH_PERFECT': 
        {
          id: 'PITCH_PERFECT',
          label: 'Pitch Perfect',
          description: 'Three Octave (C3-B5), All Notes between C3-B5, Random reference',
          numberOfNotes: 36 
        }
      }
/**
 * NOTE FREQUENCIES CONSTANT
 * 
 * A lookup table mapping note names to their frequencies in Hertz (Hz).
 * Used by the AudioService to play notes using the Web Audio API.
 * 
 * Structure:
 * - Key: Note identifier string (e.g., "C4", "D#4", "A5")
 * - Value: Frequency in Hz (e.g., 261.63 for C4, 440.00 for A4)
 * 
 * This uses an object/map structure for O(1) direct lookup performance.
 * When you need to play "C4", you can instantly get 261.63 Hz without searching.
 * 
 * NOTE: Currently only includes C4-B4 (one octave) for EASY mode.
 * The commented section below shows the full range (C2-G7) that would be
 * needed for HARD mode. Uncomment and use that version when implementing
 * full multi-octave support.
 */
export const NOTE_FREQUENCIES: {
    [key: string]: number;
} = {
    // C4 octave - currently active (for EASY mode)
    // These frequencies are in Hertz (Hz) - cycles per second
    'C4': 261.63,   // Middle C
    'D4': 293.66,
    'E4': 329.63,
    'F4': 349.23,
    'G4': 392.00,
    'A4': 440.00,   // Standard tuning reference (A above middle C)
    'B4': 493.88
}



/**
 * FULL NOTE FREQUENCIES (COMMENTED OUT)
 * 
 * This is the complete frequency table covering multiple octaves (C2 to G7).
 * Uncomment this and replace the active NOTE_FREQUENCIES above when you need
 * to support HARD difficulty mode which uses notes from C3 to B5.
 * 
 * The frequencies are calculated using equal temperament tuning (A4 = 440 Hz).
 * Each semitone is 2^(1/12) times the previous note's frequency.
 * 
 * Octaves included:
 * - C2-B2: Lower octave (bass range)
 * - C3-B3: Lower-middle octave
 * - C4-B4: Middle octave (currently active)
 * - C5-B5: Upper-middle octave
 * - C6-B6: Higher octave
 * - C7-G7: Highest octave
 */
/*export const NOTE_FREQUENCIES: {
    [key: string]: number;
} = {
    'C2': 65.41,
    'D2': 73.42,
    'E2': 82.41,
    'F2': 87.31,
    'G2': 98.00,
    'A2': 110.00,
    'B2': 123.47,
    'C3': 130.81,
    'D3': 146.83,
    'E3': 164.81,
    'F3': 174.61,
    'G3': 196.00,
    'A3': 220.00,
    'B3': 246.94,
    'C4': 261.63,
    'D4': 293.66,
    'E4': 329.63,
    'F4': 349.23,
    'G4': 392.00,
    'A4': 440.00,
    'B4': 493.88,
    'C5': 523.25,
    'D5': 587.33,
    'E5': 659.26,
    'F5': 698.46,
    'G5': 784.00,
    'A5': 880.00,
    'B5': 987.77,
    'C6': 1046.50,
    'D6': 1174.66,
    'E6': 1318.51,
    'F6': 1396.91,
    'G6': 1568.00,
    'A6': 1760.00,
    'B6': 1975.53,
    'C7': 2093.00,
    'D7': 2349.32,
    'E7': 2637.02,
    'F7': 2793.83,
    'G7': 3136.00
}
*/
/**
 * MODULE CARD COMPONENT
 * 
 * Displays a grid of training mode cards on the home page.
 * Each card represents a different type of ear training exercise.
 * Users can click on a card to navigate to that training mode.
 * 
 * Each card links to its route from TRAINING_MODES (e.g. /training/note,
 * /training/interval). Routes are defined per mode in the constants.
 */

import React, { Component } from 'react'
import Title from './Title'
import { TRAINING_MODES } from './../Constants/TrainingModes'
import { Link } from '@inertiajs/react'

class ModuleCard extends Component {
  /**
   * Renders a grid of training mode cards
   * 
   * Maps over the TRAINING_MODES constant array to create a clickable card
   * for each training mode. Each card displays:
   * - The training mode label (as a heading)
   * - The training mode description
   * 
   * Cards are wrapped in Inertia Link components for navigation.
   * 
   * @returns {JSX.Element} A grid container with training mode cards
   */
  
  render() {
    return (
    <div className="card-grid">
    	{/* Map over all training modes and create a card for each */}
    	{TRAINING_MODES.map((m) => {
        console.log(m.route);
        return (
          
          <Link href={`/training/${m.route}`}  key={m.id}>
	          <div
          className="card group cursor-pointer border-2 border-transparent hover:border-primary-500"
          >
	    			{/* Dynamic title component - renders as h2 with training mode label */}
	    			<Title
          titleSize = 'h2'
          title= {m.label}
          className='section-title text-primary-700'
          />
	        		{/* Training mode description text */}
	        		<p className="text-gray-600"> {m.description}</p>
	    		</div>
			</Link>
        )
		})
      }			
	</div>

    )
  }
}

export default ModuleCard


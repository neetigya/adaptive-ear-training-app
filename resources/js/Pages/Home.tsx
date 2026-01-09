/**
 * HOME PAGE COMPONENT
 * 
 * This is the main landing page of the ear training application.
 * It displays the application title and renders a grid of training mode cards
 * that users can click to navigate to different training exercises.
 */

import React, {Component} from 'react'
import ModuleCard from '../Components/ModuleCard'

/**
 * Home page functional component
 * 
 * Renders the main landing page with:
 * - Application title/heading
 * - ModuleCard component that displays all available training modes
 * 
 * @returns {JSX.Element} The home page UI
 */
export default function Home() {
    return (
      <div className="page-container">
          <h1 className="page-heading"> Adaptive Ear Training</h1>
        <ModuleCard/>
      </div>  
    )
  }
  
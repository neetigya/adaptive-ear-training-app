/**
 * MAIN APPLICATION ENTRY POINT
 * 
 * This file initializes the React application using Inertia.js, which allows
 * server-side routing with React components. It sets up the app structure
 * and handles dynamic page loading.
 */

import React from 'react'
import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'
import './bootstrap';
import '../css/app.css'

/**
 * Creates and configures the Inertia.js application
 * 
 * Inertia allows you to build single-page apps using classic server-side routing.
 * Instead of building an API, you use server-side routes that return Inertia responses.
 */
createInertiaApp({
  /**
   * Page resolver function
   * Dynamically imports page components from the Pages directory
   * Uses Vite's import.meta.glob to eagerly load all .tsx files in Pages folder
   * 
   * @param {string} name - The page name (e.g., "Home" or "Training/Note")
   * @returns {object} - The imported page component module
   */
  resolve: name => {
    const pages = import.meta.glob('./Pages/**/*.tsx', { eager: true })
    return pages[`./Pages/${name}.tsx`]
  },
  /**
   * Setup function - renders the React app into the DOM
   * 
   * @param {object} params
   * @param {HTMLElement} params.el - The DOM element to mount React to
   * @param {Component} params.App - The root Inertia App component
   * @param {object} params.props - Props passed from the server
   */
  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />)
  },
})

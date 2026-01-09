/**
 * TITLE COMPONENT
 * 
 * A reusable component that renders a heading element with dynamic tag type.
 * Allows you to specify which HTML heading tag to use (h1, h2, h3, etc.)
 * while maintaining consistent styling through className prop.
 * 
 * Example usage:
 * <Title titleSize="h2" title="My Title" className="section-title" />
 * Renders: <h2 className="section-title">My Title</h2>
 */

import React, {Component} from 'react'

class Title extends Component{
	/**
	 * Renders a heading element with dynamic tag type
	 * 
	 * Uses the titleSize prop to determine which HTML tag to render.
	 * This allows semantic HTML (h1 for main titles, h2 for sections, etc.)
	 * while keeping the component flexible.
	 * 
	 * @returns {JSX.Element} A heading element with the specified tag type
	 */
	render(){
		// Dynamically assign the HTML tag based on titleSize prop
		// e.g., if titleSize="h2", Tag will be "h2"
		const Tag = this.props.titleSize 
		return (<Tag className={this.props.className} >
					{this.props.title}
				</Tag>
				)
	}
}

export default Title


import PropTypes from 'prop-types';
import Slugify from 'slugify';
import React from 'react';


/**
 * The Category header component
 */

const Categoryheader = ( page ) => {
	return (

<div className="au-body container">
	<div className="row guides-category-header">
			<div className="col-xs-12">
				<h1 className="au-display-xxxl guides-category-header-main-heading">
					{ page.title }
				</h1>

				<p className="guides-category-header-description">
					{ page.description }
				</p>
			</div>
		</div>
</div>
	);
}

Categoryheader.propTypes = {
	/**
	 * title: User research
	 */
	title: PropTypes.string,

	/**
	 * description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
	 */
	description: PropTypes.string,
};


Categoryheader.defaultProps = {};


export default Categoryheader;

import PropTypes from 'prop-types';
import Slugify from 'slugify';
import React from 'react';


/**
 * The section component
 */
const CategorySection = ( page ) => {

	const Heading = `h${ page.level }`;

	return (
		<div className="au-body au-grid category-section">
			<div className="container">
				<div className="row">
					<div className="col-xs-12" id={ Slugify( page.section ).toLowerCase() }>
						<span className="section__section category-section__section">{ page.section }</span>
						<div><Heading className="category-section__headline display-3">{ page.title }</Heading></div>
						<p/>
					</div>
				</div>
			</div>
		</div>
	);
};


CategorySection.propTypes = {
	/**
	 * section: Guides
	 */
	section: PropTypes.string.isRequired,

	/**
	 * title: Examples and case studies
	 */
	title: PropTypes.string.isRequired,

	/**
	 * level: 4
	 */
	level: PropTypes.number,
};


CategorySection.defaultProps = {
	level: 4,
};


export default CategorySection;

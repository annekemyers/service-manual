import PropTypes from 'prop-types';
import React from 'react';

// LOCAL
import Navigation from '../nav/nav';


/**
 * sitemap layout
 *
 */
const Page404 = ( page ) => (
	<div className="au-body au-grid sitemap">
		<div className="container">
			<div className="row">
				<div className="col-xs-12">
					<div className="textwrapper">
						<div className="sitemap__text">{ page._body }</div>
							<div className="sitemapnav__wrapper">
								<Navigation nav={ page._nav } pages={ page._pages } ID={ page._ID } relativeURL={ page._relativeURL } />
							</div>
					</div>
				</div>
			</div>
		</div>
	</div>
);


Page404.propTypes = {
	/**
	 * _body: (text)(1)
	 */
	_body: PropTypes.node.isRequired,
};


Page404.defaultProps = {};


export default Page404;

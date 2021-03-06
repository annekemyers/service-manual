import PropTypes from 'prop-types';
import React from 'react';


/**
 * The card component
 *
 * @disable-docs
 */
const Card = ({ link, background, image, headline, text, cta, preheadline, noCta }) => {

	if( image ) {
		image = image.startsWith('http') ? image : `/assets/img/${ image }`;
	}

	function renderCta() {
		if (noCta) {
			return;
		} else if (cta) {
			return <div className='card__cta au-cta-link'>{ cta }</div>;
		} else {
			return <div className='card__cta card__cta__carat'></div>;
		}
	}

	return (
	<a className="guides-card" href={ link }>
		<div className="card__imagewrap">
			{ image && <img className='card__image' src={ image } alt="" /> }
		</div>
		<div className='card__wrapper'>
			{ preheadline && <div className='card__preheadline__wrapper'>
				<span className='card__preheadline'>{ preheadline }</span>
			</div> }
			<div className='card__headline__wrapper'>
				<strong className='card__headline'>{ headline }</strong>
			</div>
				<div className='card__text'>{ text }</div>
				{ renderCta() }
		</div>
	</a>
)};


Card.propTypes = {
	/**
	 * link: #
	 */
	link: PropTypes.string.isRequired,

	/**
	 * background: #1b7991
	 */
	background: PropTypes.string,

	/**
	 * image: http://via.placeholder.com/350x150
	 */
	image: PropTypes.string,

	/**
	 * preheadline: 1. this is preheadline
	 */
	preheadline: PropTypes.string,

	/**
	 * headline: Agile delivery
	 */
	headline: PropTypes.string.isRequired,

	/**
	 * text: (text)(2)
	 */
	text: PropTypes.string.isRequired,

	/**
	 * cta:
	 */
	cta: PropTypes.string,
};


Card.defaultProps = {
	background: '#fff',
	link: 'http://dta.gov.au',
	headline: 'A Card',
	text: 'Lorem ipsum dolor sit'
};


export default Card;

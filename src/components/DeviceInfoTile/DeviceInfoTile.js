import React from 'react';
import PropTypes from 'prop-types'
import appleGrey from '../../assets/images/apple_grey.svg'
import './DeviceInfoTile.css';

function DeviceInfoTile({ children, title, text, subtitle, priceText, componentBesidePrice }) {
	return (
		<div className="deviceinfo_container">
			<div className="deviceinfo_info_with_gallery">
				<div className="deviceinfo_info">
					<div className="deviceinfo_info_header_text">{text}</div>
					<div className="deviceinfo_info_header_title">{title}</div>
					<div className="deviceinfo_info_header_subtitle">
						{subtitle}
					</div>
					<img className="deviceinfo_info_apple_logo" src={appleGrey} alt="apple logo"/>
				</div>
				<div className="deviceinfo_info_price_gallery">
					<div className="deviceinfo_info_price">
						<div className="deviceinfo_info_price_text">{priceText}</div>
						<div className="deviceinfo_info_price_subtext"> Buy Now ></div>
					</div>
					{componentBesidePrice}
				</div>
			</div>
			{children}
		</div>
	)
}

DeviceInfoTile.propType = {
	children: PropTypes.element,
	title: PropTypes.string,
	text: PropTypes.string,
	subtitle: PropTypes.string,
	priceText: PropTypes.string,
	componentBesidePrice: PropTypes.element,
}

export default DeviceInfoTile;

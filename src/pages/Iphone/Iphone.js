import React, { useState } from 'react';
import iphoneBackWhite from '../../assets/images/apple-iphonexs-max-gold-back-2@2x.png'
import iphoneFrontWhite from '../../assets/images/apple-iphonexs-max-gold@2x.png'
import appleGrey from '../../assets/images/apple_grey.svg'
import './Iphone.css';

export default function Iphone() {
	const [slider, setSlider] = useState(0);
	const onInputChange = (e) => {
		setSlider(e.currentTarget.value)
	}

	return (
		<div className="iphone_container">
			<div className="iphone_info_with_gallery">
				<div className="iphone_info">
					<div className="iphone_info_header_text">iPhone</div>
					<div className="iphone_info_header_title">The ultimate <br/>iPhone</div>
					<div className="iphone_info_header_subtitle">
						The future is here. Join the iPhone Upgrade<br/>
						Program to get the latest iPhone - NOW!
					</div>
					<img className="iphone_info_apple_logo" src={appleGrey} alt="apple logo"/>
				</div>
				<div className="iphone_info_price_gallery">
					<div className="iphone_info_price">
						<div className="iphone_info_price_text">From $699</div>
						<div className="iphone_info_price_subtext"> Buy Now ></div>
					</div>
					<div className="iphone_small_gallery">
						<div className="iphone_small_gallery_animation">
							<img
								style={{
									opacity: 1 - (slider / 100) > 0.2 ? 1 - (slider / 100) : 0.2
								}}
								className="iphone_small_gallery_image"
								src={iphoneFrontWhite}
								alt="iphone gallery"
							/>
							<img
								style={{
									opacity: (slider / 100) > 0.2 ? (slider / 100) : 0.2
								}}
								className="iphone_small_gallery_image"
								src={iphoneBackWhite}
								alt="iphone gallery"
							/>
						</div>
						<input value={slider} onChange={onInputChange} type="range" className="customRange" min="0" max="100"/>
					</div>
				</div>
			</div>
			<div className="iphone_large_gallery">
				{/* large gallery */}
				<img
					style={{
						opacity: 1 - (slider / 100),
						right: 10 - (slider/2) + '%',
					}}
					className="iphone_large_gallery_image"
					src={iphoneFrontWhite}
					alt="iphone gallery"
				/>
				<img
					style={{
						opacity: (slider / 100),
						right: (slider /3 ) - 25 + '%',
					}}
					className="iphone_large_gallery_image"
					src={iphoneBackWhite}
					alt="iphone gallery"
				/>
			</div>
		</div>
	)
}

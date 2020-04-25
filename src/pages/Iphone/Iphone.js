import React, { useState } from 'react';
import DeviceInfoTile from '../../components/DeviceInfoTile/DeviceInfoTile';
import iphoneBackWhite from '../../assets/images/apple-iphonexs-max-gold-back-2@2x.png'
import iphoneFrontWhite from '../../assets/images/apple-iphonexs-max-gold@2x.png'
import './Iphone.css';

export default function Iphone() {
	const [slider, setSlider] = useState(0);
	const onInputChange = (e) => {
		setSlider(e.currentTarget.value)
	}

	const iphoneCarousel = () => (
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
	)

	return (
		<DeviceInfoTile
			text="iPhone"
			title="The ultimate iPhone"
			subtitle="
				The future is here. Join the iPhone Upgrade 
				Program to get the latest iPhone - NOW!
			"
			priceText="From $699"
			componentBesidePrice={iphoneCarousel()}
		>
			<div className="iphone_large_gallery">
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
		</DeviceInfoTile>
	)
}

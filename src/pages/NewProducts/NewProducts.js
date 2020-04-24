import React, { useState } from 'react';
import classnames from 'classnames';
import { useCountUp } from 'react-countup';
import whiteAppleLogo from '../../assets/images/apple_white.svg'
import './NewProducts.css';
import { ROUTES } from '../routes';

export default function NewProducts(props) {
	const [show, setShow] = useState(0);
	const { countUp } = useCountUp({ end: 2019, start: 900, delay: 0.2, duration: 1 });

	setTimeout(() => {
		setShow(true);
	}, 50);

	const goToWelcomeScreen = () => {
		props.history.push(ROUTES.WELCOME)
	}

	return (
		<div className="newProducts_container" onClick={goToWelcomeScreen}>
			<div className={classnames('newProducts_background', { animate: show })}>
				<span className={classnames('newProducts_text', { animate: show })}>
					New Products Coming this Summer
				</span>
				<img
					className={classnames('newProducts_image', { animate: show })}
					src={whiteAppleLogo}
					alt="apple logo"
				/>
				<div className="newProducts_counter">
					{countUp}
				</div>
			</div>
		</div>
	)
}

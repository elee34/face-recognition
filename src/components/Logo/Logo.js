import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import brain from './brain.png';

const Logo = () => {
	return(
		<div className='ma5 mt0'>
			<Tilt className="Tilt br-100 shadow-2" options={{ max : 65 }} style={{ height: 190, width: 190 }} >
 				<div className="Tilt-inner pa2"><img alt='logo' src={brain}/> </div>
			</Tilt>
		</div>
	);
}
export default Logo;
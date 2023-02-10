import React from 'react'

function Hero() {
 	const [width, setWidth] = React.useState(window.innerWidth);
	const updateDimensions = () => {
		setWidth(window.innerWidth);
	};
	React.useEffect(() => {
		window.addEventListener("resize", updateDimensions);
		return () => window.removeEventListener("resize", updateDimensions);
	}, []);

	return <img src="./colorBanner.png" width={width} alt="" />;
}

export default Hero
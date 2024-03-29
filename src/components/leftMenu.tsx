import React, { useState, useEffect, useMemo } from 'react';
// @ts-ignore
import CircularSlider from './circularSlider';
// @ts-ignore
import Slider from 'rc-slider/lib/Slider';
import { useProvider } from '../utils/contextProvider';
import { ConnectButton } from '@rainbow-me/rainbowkit';

const styles: any = {
	railStyle: {
		position: 'absolute',
		width: '100%',
		backgroundColor: '#f1f3f4',
		height: '8px',
		borderRadius: '6px',
	},
	trackStyle: {
		position: 'absolute',
		left: 0,
		height: '8px',
		borderRadius: '6px',
		backgroundColor: '#FCCE5A',
	},
	dotStyle: {
		position: 'absolute',
		bottom: '-7px',
		marginLeft: '-8px',
		width: '14px',
		height: '14px',
		border: '2px solid #e9e9e9',
		backgroundColor: '#fff',
		cursor: 'pointer',
		borderRadius: '50%',
		verticalAlign: 'middle',
	},
	activeDotStyle: {
		position: 'absolute',
		width: '18px',
		height: '18px',
		cursor: 'pointer',
		marginTop: '-5px',
		borderRadius: '50%',
		border: 'solid 2px #000',
		backgroundColor: '#000',
		touchAction: 'pan-x',
		bottom: '-8px',
		marginLeft: '-9px',
		zIndex: 2,
	},
};

const LeftMenu = () => {
	const { state, dispatch } = useProvider();
	const {
		flipDirection,
		pressedKey,
		rotationDegree,
		scaleVector,
		svgTransform,
		wheelActive,
		wheelDirection,
	} = state;
	const [leftMenuVisibility, setLeftMenuVisibility] = useState<boolean>(true);

	useEffect(() => {
		// removes the ripple animation of circular slider
		(document.querySelector(
			'.rotateWrapper > div > div > div > svg > circle'
		) as HTMLElement)?.remove();

		// removes the stripes from the circular slide knob
		document
			.querySelectorAll('.rotateWrapper > div > div > div > svg > rect')
			.forEach((rect) => rect?.remove());
		if (window?.innerWidth > 1440) {
			dispatch({
				type: 'SET_SCALE_VECTOR',
				payload: 1.25,
			});
		}
		if (window?.innerWidth > 1900) {
			dispatch({
				type: 'SET_SCALE_VECTOR',
				payload: 1.5,
			});
		}
	}, []);

	const updateRotationDegree = (wheelEvent?: WheelEvent) => {
		let degree = rotationDegree;
		//@ts-ignore
		if (wheelDirection === 'up' || wheelEvent?.deltaY < 0) {
			degree = degree + 10 > 360 ? 10 : degree + 10;
		} else {
			degree = degree - 10 < 0 ? 350 : degree - 10;
		}
		dispatch({
			type: 'SET_ROTATION_DEGREE',
			payload: degree,
		});
	};

	const updateFlipDirection = () => {
		if (wheelDirection === 'up') {
			flipDirection === 1 &&
				dispatch({
					type: 'SET_FLIP_DIRECTION',
					payload: -1,
				});
		} else {
			flipDirection === -1 &&
				dispatch({
					type: 'SET_FLIP_DIRECTION',
					payload: 1,
				});
		}
	};

	const updateScaleVector = (wheelEvent?: WheelEvent) => {
		let vector = scaleVector;
		//@ts-ignore
		if (wheelDirection === 'up' || wheelEvent?.deltaY < 0) {
			vector = vector <= 0.5 ? 0.5 : vector - 0.25;
		} else {
			vector = vector >= 1.5 ? 1.5 : vector + 0.25;
		}
		dispatch({
			type: 'SET_SCALE_VECTOR',
			payload: vector,
		});
	};

	useEffect(() => {
		dispatch({
			type: 'SET_SVG_TRANSFORM',
			payload: {
				...svgTransform,
				rotate: `${rotationDegree}`,
			},
		});
	}, [rotationDegree]);

	useEffect(() => {
		dispatch({
			type: 'SET_SVG_TRANSFORM',
			payload: {
				...svgTransform,
				flip: `scale(${flipDirection}, 1)`,
			},
		});
	}, [flipDirection]);

	useEffect(() => {
		if (!(pressedKey && wheelDirection && wheelActive)) {
			return;
		}

		switch (pressedKey) {
			case 'r':
				updateRotationDegree();
				break;
			case 'f':
				updateFlipDirection();
				break;
			case 's':
				updateScaleVector();
				break;

			default:
				break;
		}
	}, [pressedKey, wheelDirection, wheelActive]);

	const handleScaleChange = (vector: number) => {
		dispatch({
			type: 'SET_SCALE_VECTOR',
			payload: vector,
		});
	};

	const handleScaleMouseWheel = ({ nativeEvent }: React.WheelEvent) => {
		updateRotationDegree(nativeEvent);
	};

	const handleRotateDegreeChange = (degree: number) => {
		dispatch({
			type: 'SET_ROTATION_DEGREE',
			payload: degree,
		});
	};

	const handleFlipButtonClick = () => {
		dispatch({
			type: 'SET_FLIP_DIRECTION',
			payload: -flipDirection,
		});
	};

	const handleDrawerButtonClick = () => {
		setLeftMenuVisibility(!leftMenuVisibility);
	};

	const renderScaleMeter = useMemo(() => {
		return (
			<div
				className='scaleWrapper'
				onWheel={({ nativeEvent }) => {
					updateScaleVector(nativeEvent);
				}}>
				<span className='scaleTitle'>Scale</span>
				{
					//@ts-ignore
					<Slider
						value={scaleVector}
						min={0.5}
						max={1.5}
						defaultValue={1}
						onChange={handleScaleChange}
						marks={{ 0.5: 0.5, 0.75: 0.75, 1.0: 1.0, 1.25: 1.25, 1.5: 1.5 }}
						step={null}
						railStyle={styles.railStyle}
						trackStyle={styles.trackStyle}
						dotStyle={styles.dotStyle}
						activeDotStyle={styles.activeDotStyle}
					/>
				}
				<div className='scaleShortcutWrapper'>
					<span>or</span>
					<span className='boldText'>press s</span>
					<span>+</span>
					<span className='boldText'>scroll on illustration</span>
				</div>
			</div>
		);
	}, [scaleVector]);

	const renderRotateMeter = useMemo(() => {
		return (
			<div className='rotateWrapper' onWheel={handleScaleMouseWheel}>
				<span className='rotateTitle'>Rotate</span>
				<div className='rotateRow'>
					{
						//@ts-ignore
						<CircularSlider
							width={100}
							min={0}
							max={360}
							direction={-1}
							knobPosition='right'
							knobColor='#000000'
							trackColor='#f1f3f4'
							progressColorFrom='#FDE7AB'
							progressColorTo='#FCCE5A'
							appendToValue='°'
							valueFontSize='15px'
							onChange={handleRotateDegreeChange}
							label='Degree'
							dataIndex={rotationDegree}
						/>
					}
					<span>or</span>
					<div className='rotateShortcutWrapper'>
						<span className='boldText'>press r</span>
						<span>+</span>
						<span className='boldText'>scroll on</span>
						<span className='boldText'>illustration</span>
					</div>
				</div>
			</div>
		);
	}, [rotationDegree]);

	const renderFlipper = useMemo(() => {
		return (
			<div className='flipWrapper'>
				<div className='flipButton' onClick={handleFlipButtonClick}>
					<span style={{ textAlign: 'center' }}>Flip</span>
				</div>
				<span>or</span>
				<div className='rotateShortcutWrapper'>
					<span className='boldText'>press f</span>
					<span>+</span>
					<span className='boldText'>scroll on illustration</span>
				</div>
			</div>
		);
	}, [flipDirection]);

	return useMemo(() => {
		return (
			<>
				<div className={`leftMenu ${leftMenuVisibility ? '' : 'drawerClosed'}`} style={{marginTop:'50vh'}}>
					<div className='leftMenuWrapper'>
						<div className='leftMenuContentWrapper'>
							{renderScaleMeter}

							{renderRotateMeter}

							{renderFlipper}
						</div>
						<div
							className='leftMenuDrawerButton'
							onClick={handleDrawerButtonClick}>
							{leftMenuVisibility ? 'Close' : 'Open'}
						</div>
					</div>
				</div>
			</>

		);
	}, [leftMenuVisibility, scaleVector, rotationDegree, flipDirection]);
};

export default LeftMenu;

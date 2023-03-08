import {
	SittingPose,
	SittingPoseType,
	StandingPoseType,
	StandingPose,
	BustPose,
	BustPoseType,
} from 'dailyworkspace';

export const isSittingPose = (pose: any): pose is SittingPoseType =>
	Object.keys(SittingPose).includes(pose);

export const isStandingPose = (pose: any): pose is StandingPoseType =>
	Object.keys(StandingPose).includes(pose);

export const isBustPose = (pose: any): pose is BustPoseType =>
	Object.keys(BustPose).includes(pose);

export const adjustPeepsViewbox = (bodyPiece: string) => {
	let x = '-350',
		y = '-150',
		width = '1500',
		height = '1500';
	if (isSittingPose(bodyPiece)) {
		x = '-800';
		y = '-300';
		width = '2600';
		height = '2600';
		if (bodyPiece === 'Mid1V2' || bodyPiece === 'Mid2V2') {
			x = '-1000';
		}
		if (bodyPiece === 'Onelegup1V2' || bodyPiece === 'Onelegup2V2') {
			x = '-900';
		}
		if (bodyPiece === 'CrossedlegsV2') {
			x = '-850';
			width = '2800';
			height = '2800';
		}
		if (bodyPiece === 'WheelchairV2') {
			x = '-700';
			y = '-150';
			width = '2700';
			height = '2700';
		}
		if (bodyPiece === 'BikeV2') {
			x = '-1450';
			y = '-450';
			width = '4200';
			height = '4200';
		}
	} else if (isStandingPose(bodyPiece)) {
		x = '-1300';
		y = '-200';
		width = '3350';
		height = '3350';
	} else {
		// if (bodyPiece === 'PocketShirt') {
		// 	x = '-395';
		// }
		if (bodyPiece === 'MacbookV2') {
			x = '-305';
		}
		if (bodyPiece === 'DeviceV2') {
			y = '-160';
		}
	}
	return { x, y, width, height };
};

export const distinguishBodyViewbox = (bodyPiece: string) => {
	if (isStandingPose(bodyPiece)) {
		return '-300 350 2500 2500';
	} else if (isSittingPose(bodyPiece)) {
		if (bodyPiece === 'BikeV2') {
			return '-500 300 3000 3000';
		}
		if (
			bodyPiece === 'Mid1V2' ||
			bodyPiece === 'Mid2V2' ||
			bodyPiece === 'Onelegup1V2' ||
			bodyPiece === 'Onelegup2V2' ||
			bodyPiece === 'WheelchairV2'
		) {
			return '-300 250 2000 2000';
		}
		return '0 300 2000 2000';
	} else {
		return '0 150 1200 1200';
	}
};

interface IArm {
	id: number;
	description: string;
}

interface ILeg {
	id: number;
	description: string;
}

interface IHead {
	id: number;
	description: string;
	hair: string;
	brain?: {} // <- make this optional: this property might not be there!
}

interface IHuman {
	head: IHead;
	leftArm: IArm;
	rightArm: IArm;
	leftLeg: ILeg;
	rightLeg: ILeg;
}

var alessandro = <IHuman>{};
alessandro.head = <IHead>{};
alessandro.leftArm = <IArm>{};
alessandro.rightArm = <IArm>{};
alessandro.leftLeg = <ILeg>{};
alessandro.rightLeg = <ILeg>{};

// WARNING let's mess up with the human body! (Structural Typing - Duck Typing)
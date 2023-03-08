import * as FileSaver from 'file-saver';
import {ethers} from 'ethers';
import abi from '../constants/abi.json';

import ipfs from '../utils/ipfs';
import { useAccount } from 'wagmi';
declare var window:any;
export const saveSvg = (svgEl: HTMLElement, name: string,
	walletaddr:any) => {
	svgEl.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
	const svgData = svgEl.outerHTML;
	const preface = '<?xml version="1.0" standalone="no"?>\r\n';
	const svgBlob = new Blob([preface, svgData], {
		type: 'image/svg+xml',
	});
	downloadResource(svgBlob, name,walletaddr);
};

export const savePng = (
	svgEl: HTMLElement,
	name: string,
	scaleVector: number,
	walletaddr:any
) => {

	console.log('--------222--------')

	const canvas = document.createElement('canvas');
	canvas.width = svgEl.getBoundingClientRect().height * scaleVector;
	canvas.height = svgEl.getBoundingClientRect().height * scaleVector;
	/**
	 *  The css width/height being ignored by the safari browser
	 *  thus distorts the svg while drawing it
	 *  - @#%! wasted too much time to figure out that
	 */
	svgEl.setAttribute('width', `${canvas.width}`);
	svgEl.setAttribute('height', `${canvas.height}`);

	svgEl.setAttribute('xmlns', 'http://www.w3.org/2000/svg');

	const svgData = svgEl.outerHTML;
	const preface = '<?xml version="1.0" standalone="no"?>\r\n';
	console.log('--------333--------')

	const canvasContext = canvas.getContext('2d');

	const DOMURL = window.self.URL || window.self.webkitURL || window.self;
	const image = new Image();
	const svgBlob = new Blob([preface, svgData], {
		type: 'image/svg+xml',
	});
	const url = DOMURL.createObjectURL(svgBlob);
	console.log('--------444--------')

	canvas.style.display = 'none';
	document.body.appendChild(canvas);

	image.onload = () => {
		if (!canvasContext) {
			return;
		}
		console.log('--------555--------',url)

		canvasContext.drawImage(image, 0, 0, canvas.width, canvas.height);

		DOMURL.revokeObjectURL(url);
		canvas.toBlob((pngBlob) => {
			pngBlob && downloadResource(pngBlob, name,walletaddr);
			document.body.removeChild(canvas);
		});
	};

	image.src = url;
};

const downloadResource = async (resource: Blob, name: string,walletaddr:string) => {
	let contractAddress ="0xF5310297745ED5DB3D0ff4018C382eC979DD02e0";
	let contractABI =abi;
	let URL :any= ''
	// const arrayBuffer = await resource.arrayBuffer();
	// const buffer = Buffer.from(arrayBuffer);

	let reader =new window.FileReader();
	// reader.readAsDataURL(resource);

	// reader.onload = function() {
	// 	URL=reader.result;
		// console.log('-----------downloadResource------------',reader.result)
	// }
	reader.readAsArrayBuffer(resource);
	reader.onload = function() {
		URL=reader.result;
		console.log('-----------downloadResource------------',reader.result)
	}
	let path = await ipfs.add(URL)
		console.log('-----------err------------',path)
		console.log('-----------ipfsHash------------',path)
//----------------------------------------JSON Upload
let obj ={
	name:'testname',
	description:'testDescription',
	image :path
};
let str = JSON.stringify(obj)
//-------------------------------------------ENd JSOn upload
		if (window.ethereum) {
			const provider = new ethers.providers.Web3Provider(window.ethereum);

			const signer = provider.getSigner();
			const waveContract = new ethers.Contract(
			  contractAddress,
			  contractABI,
			  signer
			);


			const txn = await waveContract.safeMint(
				walletaddr,1,
				str
			  );
			  console.log("-----------signer----",signer);
			  console.log("-----------waveContract----",waveContract);
			  console.log("-----------provider----",walletaddr);

			  await txn.wait();

		}


	// FileSaver.saveAs(resource, name);
};

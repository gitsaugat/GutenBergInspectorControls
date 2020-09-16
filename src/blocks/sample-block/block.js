import './editor.scss';
import './style.scss';
const { __ } = wp.i18n;
import  EditBlock from './components/Edit.jsx'
import Saveblock  from './components/Save.jsx'
import { registerBlockType } from '@wordpress/blocks'

registerBlockType( 'blockart/sample-block', {

	title: 'Sample Block',
	icon: 'art',
	category: 'common',
	keywords: [ 'Sample Block', 'Example Block' ],
	supports: {
		align: true,
	},

	attributes: {
		title: {
			type: 'string',
		},

		titleSize: {
			default: 38,
		},

		titleColor: {
			type: 'string',
			default: '#000000',
		},
		titleWeight : {
			default:900
		},
		//end of title
		content: {

			type: 'string',
		},

		contentSize: {
			default: 22,
		},

		contentColor: {
			type: 'string',
			default: '#000000',
		},
		contentWeight : {
		    default:400
		},
		//end of content
		backgroundColor :{
			type : "string" , 
			default : "#ffff"
		},
		imgUrl  :{
			default : "https://earthsky.org/upl/2018/12/comet-wirtanen-Jack-Fusco-dec-2018-Anza-Borrego-desert-CA-e1544613895713.jpg" , 
			type : "string"
		}



	},

	edit: EditBlock,
	save: Saveblock,
} );

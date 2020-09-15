import './editor.scss';
import './style.scss';
const { __ } = wp.i18n;
import  EditBlock from './components/Edit.jsx'
import Saveblock  from './components/Save.jsx'
import { registerBlockType } from "@wordpress/blocks"




registerBlockType( 'blockart/sample-block', {
	
	title: 'Sample Block',
	icon: 'art',
	category: 'common',
	keywords: [ 'Sample Block', 'Example Block' ],
	supports : {
		align:true,
	},

	attributes: {
		
		title : {
			source:'html',
			type : 'string'
		},

		titleSize: {
			default:13,
		},

		titleColor: {
			type :'string',
			default:'#fff'
		},
		//end of title 
		content : {
			source:'html',
			type : 'string'
		},

		contentSize: {
			default:12,
		},

		contentColor: {
			type :'string',
			default:'#fff'
		}
		//end of content


		
	},

	edit: EditBlock,
	save:Saveblock
} );

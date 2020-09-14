import './editor.scss';
import './style.scss';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText } = wp.editor;

// Banner-like block.
registerBlockType( 'blockart/sample-block', {
	title: 'Sample Block',
	icon: 'art',
	category: 'common',
	keywords: [ 'Sample Block', 'Example Block' ],

	attributes: {
		text: {
			type: 'string',
			selector: '.blkrt-sample-block',
			default: 'Hi! This is a sample block from the <strong>BlockArt</strong> plugin.<br/>Nice to meet ya 😉',
		},
	},

	edit: ( { className, attributes, setAttributes } ) => {
		const { text } = attributes;

		const onTextChange = newText => {
			setAttributes( { text: newText } );
		};

		return (
			<RichText
				className={ `${ className } blkrt-sample-block` }
				tagName="div"
				value={ text }
				onChange={ onTextChange }
				placeholder={ __( 'Enter some text here...', 'blockart' ) }
			/>
		);
	},

	save: ( { className, attributes } ) => {
		const { text } = attributes;

		return (
			<RichText.Content
				className={ `${ className } blkrt-sample-block` }
				tagName="div"
				value={ text }
				placeholder={ __( 'Enter some text here...', 'blockart' ) }
			/>
		);
	},
} );

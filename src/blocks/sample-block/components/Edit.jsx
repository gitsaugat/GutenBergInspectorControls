import { Component, Fragment } from '@wordpress/element';
import { RichText, MediaUploadCheck, MediaUpload, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, Button, PanelRow, TextControl, SelectControl, ToggleControl, ColorPicker } from '@wordpress/components';

class EditBlock extends Component {
	constructor( props ) {
		super( props );

		this.state = {

			toggled: false,
			isColorPickerToggledForContent: false,
			isColorPickerToggledForTitle: false,
			isBackgroundColorAtivated: false,

		};

		this.OnTitleChangeHandler = this.OnTitleChangeHandler.bind( this );
		this.onContentChangeHandler = this.onContentChangeHandler.bind( this );
		this.onToggleStateChangeHandler = this.onToggleStateChangeHandler.bind( this );
		this.onActivateColorPickerForTitle = this.onActivateColorPickerForTitle.bind( this );
		this.onActivateColorPickerForContent = this.onActivateColorPickerForContent.bind( this );
		this.titleSizeChangeHandler = this.titleSizeChangeHandler.bind( this );
		this.contentSizeChangeHandler = this.contentSizeChangeHandler.bind( this );
		this.onColorChangeForTitle = this.onColorChangeForTitle.bind( this );
		this.onColorChangeForContent = this.onColorChangeForContent.bind( this );
		this.backgroundColorTogglerHandler = this.backgroundColorTogglerHandler.bind( this );
		this.onBackgroundColorChangeHandler = this.onBackgroundColorChangeHandler.bind( this );
		this.imageSelectHandler = this.imageSelectHandler.bind( this );
		//all the relatable bindings
	}

	OnTitleChangeHandler( newVal ) {
		const { setAttributes } = this.props;

		setAttributes( {
			title: newVal,
		} );
	}
	//above function for title change hander

	onContentChangeHandler( newVal ) {
		const { setAttributes } = this.props;

		setAttributes( {
			content: newVal,
		} );
	}
	//above function for title change hander

	onToggleStateChangeHandler( newVal ) {
		this.setState( {
			toggled: newVal,
		} );
	}

	//above function for title change hander
	onActivateColorPickerForTitle( isTrueOrFalse ) {
		this.setState( {
			isColorPickerToggledForTitle: isTrueOrFalse,
		} );
	}

	//activation for color picker for title

	onActivateColorPickerForContent( isTrueOrFalse ) {
		this.setState( {
			isColorPickerToggledForContent: isTrueOrFalse,
		} );
	}

	//activation for color picker for content

	onColorChangeForTitle( value ) {
		const { setAttributes } = this.props;

		setAttributes( {
			titleColor: value.hex,
		} );
	}

	//color picker for title
	onColorChangeForContent( value ) {
		const { setAttributes } = this.props;

		setAttributes( {
			contentColor: value.hex,
		} );
	}
	//color picker for content

	titleSizeChangeHandler( fontsize ) {
		const { setAttributes } = this.props;

		setAttributes( {
			titleSize: parseInt( fontsize ),
		} );
		// eslint-disable-next-line no-console
		console.log( fontsize );
	}

	//title Font Size Change Handler

	contentSizeChangeHandler( fontsize ) {
		const { setAttributes } = this.props;

		setAttributes( {
			contentSize: parseInt( fontsize ),
		} );
	}

	//content font size change handler

	backgroundColorTogglerHandler( isActivatedOrNot ) {
		this.setState( {
			isBackgroundColorAtivated: isActivatedOrNot,
		} );
	}

	//background color activator

	onBackgroundColorChangeHandler( color ) {
		const { setAttributes } = this.props;

		setAttributes( {
			backgroundColor: color.hex,
		} );
	}

	//background color change handler

	contentWeightChangeHandler( newVal ) {
		const { setAttributes } = this.props;

		setAttributes( {
			contentWeight: parseInt( newVal ),
		} );
	}

	//handle content font weight change

	titleWeightChangeHandler( newVal ) {
		const { setAttributes } = this.props;

		setAttributes( {
			titleWeight: parseInt( newVal ),
		} );
	}

	//handle title font weight chage

	imageSelectHandler( newImg ) {
		const { setAttributes } = this.props;

		setAttributes( {
			imgUrl: newImg.sizes.full.url,
		} );
	}

	render() {
		const { attributes } = this.props;
		const ALLOWED_MEDIA_TYPES = [ 'audio' ];

		return (

			<Fragment >

				<InspectorControls>
					<PanelBody>

						<MediaUploadCheck>
							<MediaUpload
								onSelect={ this.imageSelectHandler }
								allowedTypes={ ALLOWED_MEDIA_TYPES }
								render={ ( { open } ) => (
									<Button
										style={ {
											backgroundColor: 'blue',
										} }
										onClick={ open }>
										Open Media Library
									</Button>
								) }
							/>
						</MediaUploadCheck>

						<PanelRow>
							<ToggleControl
								checked={ this.state.toggled }
								onChange={ this.onToggleStateChangeHandler }
								label=" Activate Text Controls"
							/>
						</PanelRow>
						{ this.state.toggled ? (
							<PanelRow>
								<p>
									For Title
									<br />
									<strong>Font Size</strong>
									<TextControl
										type="number"
										value={ attributes.titleSize }
										onChange={ this.titleSizeChangeHandler }
									/>
									<SelectControl
										label="Font Weight"
										value={ attributes.titleWeight }
										options={ [
											{ label: 'Larger', value: '900' },
											{ label: 'Big', value: '800' },
											{ label: 'Medium', value: '600' },
											{ label: 'Small', value: '100' },
										] }

										onChange={ this.titleWeightChangeHandler }
									/>
									<ToggleControl
										checked={ this.state.isColorPickerToggledForTitle }
										onChange={ this.onActivateColorPickerForTitle }
										label=" Activate Title Color Picker"
									/>
									{ this.state.isColorPickerToggledForTitle ? (
										<ColorPicker
											color={ attributes.titleColor }
											onChangeComplete={ this.onColorChangeForTitle }
										/>
									)										:
										(
											<p></p>
										) }

									For Content
									<br />
									<strong>Font Size</strong>
									<TextControl
										type="number"
										value={ attributes.contentSize }
										onChange={ this.contentSizeChangeHandler }
									/>
									<SelectControl
										label="Font Weight"
										value={ attributes.contentWeight }
										options={ [
											{ label: 'Larger', value: '900' },
											{ label: 'Big', value: '800' },
											{ label: 'Medium', value: '600' },
											{ label: 'Small', value: '100' },
										] }
										onChange={ this.contentWeightChangeHandler }
									/>
									<ToggleControl
										checked={ this.state.isColorPickerToggledForContent }
										onChange={ this.onActivateColorPickerForContent }
										label=" Activate Content Color Picker"
									/>
									{ this.state.isColorPickerToggledForContent ? (
										<ColorPicker
											color={ attributes.contentColor }
											onChangeComplete={ this.onColorChangeForContent }
										/>
									) : (
										<p></p>
									) }
								</p>
							</PanelRow>
						) : ( <div> Toggle Menu to activate this</div> ) }

						<PanelRow>
							<ToggleControl
								label="activate Background Color Effect"
								checked={ this.state.isBackgroundColorAtivated }
								onChange={ this.backgroundColorTogglerHandler }
							/>
						</PanelRow>
						{ this.state.isBackgroundColorAtivated ? (
							<PanelRow>
								{ /* Activated */ }
								<ColorPicker
									color={ attributes.backgroundColor }
									onChangeComplete={ this.onBackgroundColorChangeHandler }
								/>
							</PanelRow>
						) : <p>Toggle To Activate Effects</p> }

					</PanelBody>
				</InspectorControls>
				{ /*end of inspector controls*/ }
				<div className="sample-card" style={ {
					backgroundColor: attributes.backgroundColor,
					border: '2px solid' + attributes.backgroundColor,
					borderRadius: '5px',
					boxShadow: '2px 2px 5px ',

				} }>
					<img alt="card-img" style={ {
						width: '100%',
						height: '300px',
					} }src={ attributes.imgUrl } />
					<div style={ {
						fontSize: parseInt( attributes.titleSize ),
						color: attributes.titleColor,
						paddingLeft: '5px',
						paddingRight: '5px',
						fontWeight: attributes.titleWeight,

					} }>
						<RichText
							placeholder="Title"
							value={ attributes.title }
							onChange={ this.OnTitleChangeHandler }
						/>
					</div>
					<div style={ {
						fontSize: attributes.contentSize,
						color: attributes.contentColor,
						paddingLeft: '8px',
						paddingRight: '8px',
						fontWeight: attributes.contentWeight,

					} }>
						<RichText
							placeholder="content"
							value={ attributes.content }
							onChange={ this.onContentChangeHandler }
						/>
					</div>
				</div>
			</Fragment>
		);
	}
}
export default EditBlock;

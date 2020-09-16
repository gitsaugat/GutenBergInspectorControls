import { Component, Fragment } from '@wordpress/element';
import { RichText, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, PanelRow, TextControl, ToggleControl, ColorPicker } from '@wordpress/components';

class EditBlock extends Component {
    constructor(props){

        super(props)

        this.state= {

          toggled : true ,
          isColorPickerToggledForContent :false ,
          isColorPickerToggledForTitle :false ,

        }

        this.OnTitleChangeHandler = this.OnTitleChangeHandler.bind(this);
        this.onContentChangeHandler = this.onContentChangeHandler.bind(this);
        this.onToggleStateChangeHandler = this.onToggleStateChangeHandler.bind(this);
        this.onActivateColorPickerForTitle  = this.onActivateColorPickerForTitle.bind(this);
        this.onActivateColorPickerForContent = this.onActivateColorPickerForContent.bind(this);
        this.titleSizeChangeHandler = this.titleSizeChangeHandler.bind(this);
        this.contentSizeChangeHandler = this.contentSizeChangeHandler.bind(this);
        this.onColorChangeForTitle = this.onColorChangeForTitle.bind(this)
        this.onColorChangeForContent  = this.onColorChangeForContent.bind(this)
        //all the relatable bindings

    }

    OnTitleChangeHandler(newVal) { 
        const {attributes  , setAttributes} = this.props
        
        setAttributes({
            title : newVal
        })
    }
    //above function for title change hander
   
    onContentChangeHandler(newVal) {
        const {attributes  , setAttributes} = this.props
   
        setAttributes({
            content: newVal
        })
    }
    //above function for title change hander
   
    onToggleStateChangeHandler(newVal) {
     
        this.setState({
            toggled:newVal
        })
    }
    
    //above function for title change hander
    onActivateColorPickerForTitle(isTrueOrFalse){
    
        this.setState({
            isColorPickerToggledForTitle:isTrueOrFalse
        })
    }
    
    //activation for color picker for title
    
    onActivateColorPickerForContent(isTrueOrFalse) {
     
        this.setState({
            isColorPickerToggledForContent:isTrueOrFalse
        })
    }
    
    //activation for color picker for content
    
    onColorChangeForTitle(value) {
      
        const {attributes  , setAttributes} = this.props
       
        setAttributes({
            titleColor : value.hex 
        })
    }
    
    //color picker for title
    onColorChangeForContent(value) {
       
        const {attributes  , setAttributes} = this.props
       
        setAttributes({
            contentColor : value.hex
        })

    }
    //color picker for content
    
    titleSizeChangeHandler(fontsize) {
       
        const {attributes  , setAttributes} = this.props
        
        setAttributes({
            titleSize:parseInt ( fontsize )
        })
        console.log(fontsize)
    }
   
    //title Font Size Change Handler
    
    contentSizeChangeHandler(fontsize){
      
        const {attributes  , setAttributes} = this.props
      
        setAttributes({
            contentSize : parseInt( fontsize )
        }) }

    //content font size change handler 
   
    render() {
        const { attributes, setAttributes } = this.props;
       
        
        return (

            <Fragment>

                <InspectorControls>
                    <PanelBody>
                        <PanelRow>
                            <ToggleControl
                                checked = {this.state.toggled}
                                onChange = {this.onToggleStateChangeHandler}
                                label = " Activate Text Controls"
                            />
                        </PanelRow>
                        { this.state.toggled ? (
                            <PanelRow>
                                <p>
                                    For Title
                                    <br />
                                    <strong>Font Size</strong>
                                    <TextControl
                                        value = {attributes.titleSize}
                                        onChange = {(newVal) => setAttributes({titleSize : newVal})}
                                    />
                                    <strong>Font Weight</strong>
                                    <TextControl />
                                    <ToggleControl
                                        checked = {this.state.isColorPickerToggledForTitle}
                                        onChange = {this.onActivateColorPickerForTitle}
                                        label = " Activate Title Color Picker"
                                    />
                                        {this.state.isColorPickerToggledForTitle ? (
                                        <ColorPicker
                                            color = {attributes.titleColor}
                                            onChangeComplete = {this.onColorChangeForTitle}
                                        />
                                    )
                                    :
                                    (
                                        <p></p>
                                    )}

                                    For Content
                                    <br />
                                    <strong>Font Size</strong>
                                    <TextControl
                                        value = {attributes.contentSize}
                                        onChange = {this.contentSizeChangeHandler}
                                    />
                                    <strong>Font Weight</strong>
                                    <TextControl />
                                    <ToggleControl
                                        checked = {this.state.isColorPickerToggledForContent}
                                        onChange = {this.onActivateColorPickerForContent}
                                        label = " Activate Content Color Picker"
                                    />
                                    {this.state.isColorPickerToggledForContent ? (
                                        <ColorPicker
                                            color = {attributes.contentColor}
                                            onChangeComplete = {this.onColorChangeForContent}
                                        />
                                    ):(
                                        <p></p>
                                    )}
                                </p>
                            </PanelRow>
                        ) : (<div> Toggle Menu to activate this</div>)}
                    </PanelBody>
                </InspectorControls>
                {/*end of inspector controls*/}
                <div style = {{
                    fontSize:parseInt(attributes.titleSize),
                    backgroundColor:attributes.titleColor
                }}>
                    <RichText
                        placeholder = "Title"
                        value = {attributes.title}
                        onChange = {this.OnTitleChangeHandler }
                    />
                </div>
                <div style = {{
                    fontSize:attributes.contentSize
                }}>
                <RichText
                    placeholder = "content"
                    value = {attributes.content}
                    onChange = {this.onContentChangeHandler}
                />
                </div>
            </Fragment>
        )
    }
}
export default EditBlock;
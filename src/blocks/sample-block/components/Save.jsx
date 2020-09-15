import {Component} from "@wordpress/element"
import { RichText } from "@wordpress/block-editor";
class Saveblock extends Component {

    constructor(props){

        super(props)
    }

    render () {

        const {attributes , setAttributes} = this.props;

        return (
              <div>

               <RichText.Content 
                        value = {attributes.title}
                    />

              </div>
        )
    }
}

export default Saveblock;
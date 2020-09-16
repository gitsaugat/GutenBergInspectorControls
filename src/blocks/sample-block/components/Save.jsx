import { Component } from '@wordpress/element';
import { RichText } from '@wordpress/block-editor';

class Saveblock extends Component {
	render() {
		const { attributes } = this.props;

		return (

			<div className="sample-card" style={ {
				backgroundColor: attributes.backgroundColor,
				border: '2px solid' + attributes.backgroundColor,
				borderRadius: '5px',
				boxShadow: '2px 2px 5px ',

			} }>
				<img alt="card-img" style={ {
					width: '100%',
					height: '300px',
				} } src={ attributes.imgUrl } />
				<div style={ {
					fontSize: parseInt( attributes.titleSize ),
					color: attributes.titleColor,
					paddingLeft: '5px',
					paddingRight: '5px',
					fontWeight: attributes.titleWeight,

				} }>
					<RichText.Content
						placeholder="Title"
						value={ attributes.title }
						// onChange = {this.OnTitleChangeHandler }
					/>
				</div>
				<div style={ {
					fontSize: attributes.contentSize,
					color: attributes.contentColor,
					paddingLeft: '8px',
					paddingRight: '8px',
					fontWeight: attributes.contentWeight,

				} }>
					<RichText.Content
						placeholder="content"
						value={ attributes.content }
						// onChange = {this.onContentChangeHandler}
					/>
				</div>
			</div>

		);
	}
}

export default Saveblock;

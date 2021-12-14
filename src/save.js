import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { Rating } from 'react-simple-star-rating';


export default function save({ attributes, setAttributes }) {

	if (attributes.mediaUrl) {
		return (
			<div {...useBlockProps.save()} className="block-container">
				<div className="content-container">
					<h2 style={{ fontSize: attributes.titleSize + "em", color: attributes.titleColor }}>{attributes.title}</h2>
					<Rating
						transition
						onClick={(val) => setAttributes({ ratingValue: val })}
						ratingValue={attributes.ratingValue}
						fillColor={attributes.ratingColor}
					/>
				</div>
				<img src={attributes.mediaUrl} className="image-preview" style={{ opacity: attributes.bgOpacity }} />
			</div>
		)
	}

	if (attributes.bgColor) {
		return (
			<div {...useBlockProps.save()} className="block-container">
				<div className="content-container">
					<h2 style={{ fontSize: attributes.titleSize + "em", color: attributes.titleColor }}>{attributes.title}</h2>
					<Rating
						transition
						onClick={(val) => setAttributes({ ratingValue: val })}
						ratingValue={attributes.ratingValue}
						fillColor={attributes.ratingColor}
					/>
				</div>
				<div className="color-container" style={{ backgroundColor: attributes.bgColor, opacity: attributes.bgOpacity }}></div>
			</div>
		)
	}
}

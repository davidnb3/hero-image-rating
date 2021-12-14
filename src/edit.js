
import { __ } from '@wordpress/i18n';
import { useBlockProps, MediaUploadCheck, MediaUpload, RichText, InspectorControls } from '@wordpress/block-editor';
import { ColorPalette, Placeholder, Button, PanelBody, RangeControl } from '@wordpress/components';
import { useState } from '@wordpress/element';
import { Rating } from 'react-simple-star-rating';
import './editor.scss';


//____PANELSETTINGS____//
function SetBackgroundSettings({ attributes, setAttributes }) {
	return (
		<PanelBody title={'Background Settings'}>
			<p><strong>Select a Background Opacity:</strong></p>
			<RangeControl
				value={attributes.bgOpacity}
				onChange={(val) => setAttributes({ bgOpacity: val })}
				min={0}
				max={1}
				step={0.05}
			/>
		</PanelBody>
	)
}

function SetTitleSettings({ attributes, setAttributes, colors }) {
	return (
		<PanelBody title={'Title Settings'}>
			<p><strong>Select a Title Size:</strong></p>
			<RangeControl
				value={attributes.titleSize}
				onChange={(val) => setAttributes({ titleSize: val })}
				min={1}
				max={5}
				step={0.1}
			/>
			<p><strong>Select a Title Color:</strong></p>
			<ColorPalette
				colors={colors}
				value={attributes.titleColor}
				onChange={(color) => setAttributes({ titleColor: color })}
			/>
		</PanelBody>
	)
}

function SetRatingSettings({ attributes, setAttributes, colors }) {
	return (
		<PanelBody title={'Rating Settings'}>
			<p><strong>Select a Rating Color:</strong></p>
			<ColorPalette
				colors={colors}
				value={attributes.ratingColor}
				onChange={(color) => setAttributes({ ratingColor: color })}
			/>
		</PanelBody>
	)
}


//___BLOCKCOMPONENTS___//
function MediaSelection({ attributes, setAttributes, colors }) {
	// This is the placeholder you see before selecting a background image/color
	return (
		<Placeholder
			label="Hero Image Block"
			instructions="Add a title, an image or a color and give it a rating"
		>
			<MediaUploadCheck>
				<MediaUpload
					onSelect={(media) => setAttributes({ mediaUrl: media.url })}
					type='image'
					render={({ open }) => {
						return <Button className="btn-media-select" onClick={open}>Media Library</Button>
					}}
				/>
				<ColorPalette
					colors={colors}
					value={attributes.color}
					onChange={(color) => setAttributes({ bgColor: color })}
				/>
			</MediaUploadCheck>
		</Placeholder>
	)
}

function TitleInput({ attributes, setAttributes }) {
	return (
		<RichText
			className="title-input"
			tagName="h2"
			value={attributes.title}
			placeholder="Add a title..."
			onChange={(val) => setAttributes({ title: val })}
			// changing style dynamically
			style={{ fontSize: attributes.titleSize + "em", color: attributes.titleColor }}
		/>
	)
}

function StarRating({ attributes }) {
	// useState to preview the rating inside the block
	const [ratingValue, setRatingValue] = useState(100)
	return (
		<div className='rating-container'>
			<Rating
				transition
				onClick={(val) => setRatingValue(val)}
				ratingValue={ratingValue}
				initalValue={100}
				fillColor={attributes.ratingColor}
			/>
		</div>
	)
}




//___EDIT FUNCTION___//
export default function Edit({ attributes, setAttributes }) {
	// pre-selected colors for colorpalette
	const colors = [
		{ name: 'Verdigris', color: '#05A8AA' },
		{ name: 'Turquoise Green', color: '#B8D5B8' },
		{ name: 'Desert Sand', color: '#D7B49E' },
		{ name: 'Flame', color: '#DC602E' },
		{ name: 'International Orange', color: '#BC412B' },
	];

	// If there's no mediaUrl or bgColor saved yet, show MediaSelection placeholder
	if (!attributes.mediaUrl && !attributes.bgColor) {
		return <MediaSelection attributes={attributes} setAttributes={setAttributes} colors={colors} />
	};

	// If there's a mediaUrl or bgColor, show preview with panelsettings
	if (attributes.mediaUrl || attributes.bgColor) {
		return ([
			<InspectorControls>
				<SetBackgroundSettings attributes={attributes} setAttributes={setAttributes} />
				<SetTitleSettings attributes={attributes} setAttributes={setAttributes} colors={colors} />
				<SetRatingSettings attributes={attributes} setAttributes={setAttributes} colors={colors} />
			</InspectorControls>,
			<div className="block-container">
				<div className="content-container">
					<TitleInput attributes={attributes} setAttributes={setAttributes} />
					<StarRating attributes={attributes} setAttributes={setAttributes} />
				</div>
				{/* If mediaUrl, show image */}
				{attributes.mediaUrl && <img src={attributes.mediaUrl} className="image-preview" style={{ opacity: attributes.bgOpacity }} />}
				{/* If bgColor, show color */}
				{attributes.bgColor && <div className="color-container" style={{ backgroundColor: attributes.bgColor, opacity: attributes.bgOpacity }}></div>}
			</div>
		]);
	};
}

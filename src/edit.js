
import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { MediaPlaceholder, MediaUploadCheck, MediaUpload } from '@wordpress/block-editor';
import { TextControl, ColorPalette, Placeholder, Button, Panel, PanelBody, PanelRow } from '@wordpress/components';
import { useState } from '@wordpress/element';

import './editor.scss';

function ColorSelection({ attributes, setAttributes }) {
	console.log(attributes.color)
	const colors = [
		{ name: 'Verdigris', color: '#05A8AA' },
		{ name: 'Turquoise Green', color: '#B8D5B8' },
		{ name: 'Desert Sand', color: '#D7B49E' },
		{ name: 'Flame', color: '#DC602E' },
		{ name: 'International Orange', color: '#BC412B' },
	];
	return (
		<ColorPalette
			colors={colors}
			disableCustomColors={true}
			value={attributes.color}
			onChange={(color) => setAttributes({ color: color })}
		/>
	)
}


function MediaSelection({ attributes, setAttributes }) {
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
				<ColorSelection attributes={attributes} setAttributes={setAttributes} />
			</MediaUploadCheck>
		</Placeholder>
	)
}



function TitleInput({ attributes, setAttributes }) {
	console.log(attributes)
	return (
		<TextControl
			className="title-input"
			type="text"
			value={attributes.title}
			onChange={(val) => setAttributes({ title: val })}
		/>
	)
}



export default function Edit({ attributes, setAttributes }) {
	if (!attributes.mediaUrl && !attributes.color) {
		return <MediaSelection attributes={attributes} setAttributes={setAttributes} />
	}
	if (attributes.mediaUrl) {
		return (
			<div className="image-container">
				<TitleInput attributes={attributes} setAttributes={setAttributes} />
				<img src={attributes.mediaUrl} className="image-preview" />
			</div>
		)
	}
	if (attributes.color) {
		return (
			<div className="color-container" style={{ backgroundColor: attributes.color }}>
				<TitleInput attributes={attributes} setAttributes={setAttributes} />
			</div>
		)
	}


	// return (
	// 	<div
	// 		className="block-container">
	// 		<Placeholder
	// 			label="Hero Image Block"
	// 			instructions="Add a title, an image or a color and give it a rating"
	// 		>
	// 			<TitleInput attributes={attributes} setAttributes={setAttributes} />
	// 			{/* <ColorSelection attributes={attributes} setAttributes={setAttributes} /> */}

	// 		</Placeholder>
	// 	</div>
	// );
}

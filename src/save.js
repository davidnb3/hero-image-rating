import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
	return (
		<div {...useBlockProps.save({ className: "block-container" })}>
			<div className="content-container">
				<h2
					style={{
						fontSize: attributes.titleSize + "em",
						color: attributes.titleColor,
					}}
				>
					{attributes.title}
				</h2>
				{[...Array(5)].map((star, index) => {
					const ratingValue = index + 1;
					return (
						<label>
							<input
								key={ratingValue}
								type="radio"
								className="star-input"
								name="rating"
								value={attributes.rating}
							/>
							<span
								className="star"
								style={{
									color:
										ratingValue <= attributes.rating
											? attributes.ratingColor
											: "white",
									fontSize: attributes.ratingSize + "em",
								}}
							>
								&#9733;
							</span>
						</label>
					);
				})}
			</div>
			{attributes.mediaUrl && (
				<img
					src={attributes.mediaUrl}
					className="image-preview"
					style={{
						opacity: attributes.bgOpacity,
						width: attributes.bgWidth + "%",
						height: attributes.bgHeight + "vh",
					}}
				/>
			)}
			{attributes.bgColor && (
				<div
					className="color-container"
					style={{
						backgroundColor: attributes.bgColor,
						opacity: attributes.bgOpacity,
						width: attributes.bgWidth + "%",
						height: attributes.bgHeight + "vh",
					}}
				></div>
			)}
		</div>
	);
}

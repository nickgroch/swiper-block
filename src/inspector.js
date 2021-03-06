import { __ } from "@wordpress/i18n";
import { InspectorControls } from "@wordpress/block-editor";
import {
	PanelBody,
	ToggleControl,
	RangeControl,
	SelectControl,
} from "@wordpress/components";

export default function Inspector({ attributes, setAttributes }) {
	const {
		slidesPerView,
		spaceBetween,
		speed,
		vertical,
		effect,
		freeMode,
		loop,
		navigation,
		pagination,
		bulletClickable,
		scrollbar,
		scrollbarHide,
		scrollbarDraggable,
		autoplay,
		autoplayDelay,
		parallax,
	} = attributes;
	return (
		<InspectorControls key="controls">
			<PanelBody>
				<p style={{ textAlign: "right" }}>
					<em>*</em> Visible only on frontend
				</p>

				<ToggleControl
					label={__("Autoplay *")}
					checked={autoplay}
					onChange={() => setAttributes({ autoplay: !autoplay })}
				/>

				{autoplay && (
					<RangeControl
						label={__("Autoplay Delay")}
						value={autoplayDelay}
						min={1}
						max={5000}
						onChange={(autoplayDelay) => setAttributes({ autoplayDelay })}
					/>
				)}

				<ToggleControl
					label={__("Loop")}
					checked={loop}
					onChange={() => setAttributes({ loop: !loop })}
				/>

				<ToggleControl
					label={__("Free Mode *")}
					checked={freeMode}
					onChange={() => setAttributes({ freeMode: !freeMode })}
				/>

				<ToggleControl
					label={__("Vertical Slide *")}
					checked={vertical}
					onChange={() => setAttributes({ vertical: !vertical })}
				/>

				<ToggleControl
					label={__("Navigation *")}
					checked={navigation}
					onChange={() => setAttributes({ navigation: !navigation })}
				/>

				<ToggleControl
					label={__("Pagination *")}
					checked={pagination}
					onChange={() => setAttributes({ pagination: !pagination })}
				/>

				{pagination && (
					<ToggleControl
						label={__("Bullet Clickable")}
						checked={bulletClickable}
						onChange={() =>
							setAttributes({ bulletClickable: !bulletClickable })
						}
					/>
				)}

				<ToggleControl
					label={__("Scrollbar *")}
					checked={scrollbar}
					onChange={() => setAttributes({ scrollbar: !scrollbar })}
				/>

				{scrollbar && (
					<ToggleControl
						label={__("Scrollbar Hide")}
						help={__("Hide scrollbar automatically after user interaction")}
						checked={scrollbarHide}
						onChange={() => setAttributes({ scrollbarHide: !scrollbarHide })}
					/>
				)}

				{scrollbar && (
					<ToggleControl
						label={__("Scrollbar Draggable")}
						help={__(
							"Make scrollbar draggable that allows you to control slider position"
						)}
						checked={scrollbarDraggable}
						onChange={() =>
							setAttributes({ scrollbarDraggable: !scrollbarDraggable })
						}
					/>
				)}

				<RangeControl
					label={__("Slider Per View")}
					value={slidesPerView}
					min={1}
					max={10}
					onChange={(slidesPerView) => setAttributes({ slidesPerView })}
				/>

				<RangeControl
					label={__("Space Between Images")}
					value={spaceBetween}
					min={1}
					max={100}
					onChange={(spaceBetween) => setAttributes({ spaceBetween })}
				/>

				<RangeControl
					label={__("Speed")}
					value={speed}
					min={1}
					max={1000}
					onChange={(speed) => setAttributes({ speed })}
				/>
			</PanelBody>
		</InspectorControls>
	);
}

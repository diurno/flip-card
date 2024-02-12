/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function save({ attributes }) {
	const { frontTextColor, frontText, backText, backTextColor, cardLink,
		frontBgColor, backBgColor, cardBorderRadius, bgImageFront, bgImageBack, 
	    focalPointFrontSide, focalPointBackSide, fontSizeFront, fontSizeBack,flipDirection} = attributes;

	return (
		<div { ...useBlockProps.save() }>
			<div className={`flip-card ${flipDirection}`}>
				<div className="flip-card-inner" style={{borderRadius: cardBorderRadius}}>
					<div className="flip-card-front" 
							style={{
							backgroundColor: frontBgColor, 
							borderRadius: cardBorderRadius,  
							backgroundImage: (bgImageFront) ? 'url('+bgImageFront+')' : 'none',
							backgroundPosition: `${ focalPointFrontSide.x * 100 }% ${ focalPointFrontSide.y * 100 }%` 
							}}>
						<div className="inner-text" style={{color: frontTextColor, fontSize: fontSizeFront}}>
							{frontText}
						</div>
					</div>
					<div className="flip-card-back" 
							style={{
							backgroundColor: backBgColor, 
							borderRadius: cardBorderRadius,
							backgroundImage: (bgImageBack) ? 'url('+bgImageBack+')' : 'none',
							backgroundPosition: `${ focalPointBackSide.x * 100 }% ${ focalPointBackSide.y * 100 }%`}}>
						{ cardLink && <a className="flip-card-link" href={cardLink}></a> }
						<div className="inner-text" style={{color: backTextColor, fontSize: fontSizeBack}}>
							{backText}
						</div>
					</div>
				</div>
			</div>  
		</div>
	);
}

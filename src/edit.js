/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';

import StylesPanel from './components/StylesPanel';
import ContentPanel from './components/ContentPanel';


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit( {attributes, setAttributes}) {

	const { frontTextColor, frontText, backText, backTextColor, 
			frontBgColor, backBgColor, cardBorderRadius, bgImageFront, bgImageBack, 
			mediaFrontObject, mediaBackObject, focalPointFrontSide, focalPointBackSide,
			fontSizeFront, fontSizeBack, cardLink, flipDirection} = attributes;

	return (
		<>                
			 <InspectorControls key="flip-card-inspector">
				<ContentPanel attributes={attributes} setAttributes={setAttributes} />
                <StylesPanel attributes={attributes} setAttributes={setAttributes} />
            </InspectorControls>
            <div { ...useBlockProps() }>
			
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
			
        </>
	);
}

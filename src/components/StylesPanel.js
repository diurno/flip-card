import { RangeControl, PanelBody, PanelRow, PanelHeader, TextControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import FrontCardPanel from './FrontCardPanel';
import RearCardPanel from './RearCardPanel';

function StylesPanel({attributes, setAttributes}) {

    const { cardBorderRadius, cardLink } = attributes;
    
    return (
        <PanelBody 
            title="Style"
            initialOpen={ false } >
            <FrontCardPanel attributes={attributes} setAttributes={setAttributes} /> 
            <RearCardPanel attributes={attributes} setAttributes={setAttributes} />    
           
            <PanelHeader className="components-base-control">
                Border Radius
            </PanelHeader>                
            <PanelRow>
                <RangeControl
                    label="Border Radius"
                    value={ cardBorderRadius }
                    onChange={ ( value ) => setAttributes({ cardBorderRadius: value }) }
                    min={ 0 }
                    max={ 50 }
                />
            </PanelRow>
            <PanelHeader className="components-base-control">
                Call To Action
            </PanelHeader>                
            <PanelRow>
                <TextControl
                    label="Link"
                    value={ cardLink }
                    onChange={ ( value ) => setAttributes({ cardLink: value }) }
                />
            </PanelRow>

        </PanelBody>
    );
  }
  
export default StylesPanel;
import {PanelBody, PanelRow, TextareaControl, SelectControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

function ContentPanel({attributes, setAttributes}) {

    const { frontText, backText, flipDirection } = attributes;
    
    const colors = [
        { name: 'red', color: '#f00' },
        { name: 'white', color: '#fff' },
        { name: 'blue', color: '#00f' },
    ];

    return (
        <PanelBody 
            title="Content Settings"
            className="flip-card-content"
            initialOpen={ true } >

            <SelectControl
                label="Flip Direction"
                value={ flipDirection }
                options={ [
                    { label: 'Flip Left to Right', value: 'left-to-right' },
                    { label: 'Flip Right to Left', value: 'right-to-left' },
                    { label: 'Flip Bottom to Top', value: 'bottom-to-top' },
                    { label: 'Flip Top to Bottom', value: 'top-to-bottom' },
                ] }
                onChange={ ( newSize ) => setAttributes({ flipDirection: newSize }) }
            />    
            <PanelRow>
                <TextareaControl
                    label="Frontside Content"
                    help="Enter some text"
                    value={ frontText }
                    onChange={ ( value ) => setAttributes({ frontText: value }) }
                />
            </PanelRow>     
            <PanelRow>
                <TextareaControl
                    label="Rearside Content"
                    help="Enter some text"
                    value={ backText }
                    onChange={ ( value ) => setAttributes({ backText: value }) }
                />
            </PanelRow>    

        </PanelBody>
    );
  }
  
export default ContentPanel;
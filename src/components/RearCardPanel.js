import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { Button, PanelRow, ColorPalette, PanelHeader, FocalPointPicker, FontSizePicker } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

function RearCardPanel({attributes, setAttributes}) {

    const { backTextColor, backBgColor, mediaBackObject, focalPointBackSide, bgImageBack, fontSizeBack } = attributes;
    
    const colors = [
        { name: 'red', color: '#f00' },
        { name: 'white', color: '#fff' },
        { name: 'blue', color: '#00f' },
    ];

    const fontSizes = [
        {
            name: __( 'Small' ),
            slug: 'small',
            size: 12,
        },
        {
            name: __( 'Big' ),
            slug: 'big',
            size: 26,
        },
    ];

    return (
        <>
          <PanelHeader className="components-base-control">
                Rear Font Color
            </PanelHeader>                
            <PanelRow>
                <ColorPalette 
                    colors={ colors }
                    value={ backTextColor }
                    onChange={ ( color ) => setAttributes({ backTextColor: color }) } />
            </PanelRow>
            <PanelHeader className="components-base-control">
                Rear Font Size
            </PanelHeader>
            <PanelRow>               
                <FontSizePicker
                    fontSizes={ fontSizes }
                    value={ fontSizeBack }
                    withSlider= {true}
                    fallbackFontSize={ 12 }
                    onChange={ ( newFontSize ) => {
                        setAttributes({ fontSizeBack: newFontSize })
                    } }
                />
            </PanelRow>
            <PanelHeader className="components-base-control">
                Rear Background Color
            </PanelHeader>                
            <PanelRow>
                <ColorPalette 
                    colors={ colors }
                    value={ backBgColor }
                    onChange={ ( color ) => setAttributes({ backBgColor: color }) } />
            </PanelRow>
            <PanelHeader className="components-base-control">
                Rear Background Image
            </PanelHeader>                
            <PanelRow className="has-flex-wrap">
                <MediaUploadCheck>
                    <MediaUpload
                        onSelect={ ( media ) =>
                            //console.log( 'selected ' + media.length );
                            setAttributes({ bgImageBack: media.url, mediaBackObject: media })
                        }
                        allowedTypes='image'
                        //value={ mediaId }
                        render={ ( { open } ) => (
                            <>
                                { !mediaBackObject &&<Button variant="primary" onClick={ open }>Open Media Library</Button> }
                                { mediaBackObject && <Button variant="secondary" onClick={ () => setAttributes({ bgImageBack: undefined,mediaBackObject: undefined }) }>Remove Image</Button> }
                                { mediaBackObject && <FocalPointPicker
                                                url={ (mediaBackObject) ? mediaBackObject.url : "" }
                                                value={ focalPointBackSide }
                                                onChange={ ( newPosition ) =>
                                                    setAttributes({ focalPointBackSide: newPosition })
                                                }
                                            />
                                }
                            </>
                        ) }
                    />
                </MediaUploadCheck>
            </PanelRow>


        </>
    );
  }
  
export default RearCardPanel;
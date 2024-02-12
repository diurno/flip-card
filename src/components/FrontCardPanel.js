import { MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import { Button, PanelRow, ColorPalette, PanelHeader, FocalPointPicker, FontSizePicker } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

function FrontCardPanel({attributes, setAttributes}) {

    const { frontTextColor, frontBgColor, mediaFrontObject, focalPointFrontSide, 
            bgImageFront, fontSizeFront } = attributes;
    
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
                Front Font Color
            </PanelHeader>
            <PanelRow>               
                <ColorPalette 
                    colors={ colors }
                    value={ frontTextColor }
                    onChange={ ( color ) => setAttributes({ frontTextColor: color }) } />
            </PanelRow>

            <PanelHeader className="components-base-control">
                Front Font Size
            </PanelHeader>
            <PanelRow>               
                <FontSizePicker
                    fontSizes={ fontSizes }
                    value={ fontSizeFront }
                    withSlider= {true}
                    fallbackFontSize={ 12 }
                    onChange={ ( newFontSize ) => {
                        setAttributes({ fontSizeFront: newFontSize })
                    } }
                />
            </PanelRow>
           
            <PanelHeader className="components-base-control">
                Front Background Color
            </PanelHeader>                
            <PanelRow>
                <ColorPalette 
                    colors={ colors }
                    value={ frontBgColor }
                    onChange={ ( color ) => setAttributes({ frontBgColor: color }) } />
            </PanelRow>
            <PanelHeader className="components-base-control">
                Front Background Image
            </PanelHeader>                
            <PanelRow className="has-flex-wrap">
                <MediaUploadCheck>
                    <MediaUpload
                        onSelect={ ( media ) =>
                            //console.log( 'selected ' + media.length );
                            setAttributes({ bgImageFront: media.url, mediaFrontObject: media })
                        }
                        allowedTypes='image'
                        //value={ mediaId }
                        render={ ( { open } ) => (
                            <>
                                { !mediaFrontObject &&<Button variant="primary" onClick={ open }>Open Media Library</Button> }
                                { mediaFrontObject && <Button variant="secondary" onClick={ () => setAttributes({ bgImageFront: undefined,mediaFrontObject: undefined }) }>Remove Image</Button> }
                                { mediaFrontObject && <FocalPointPicker
                                                url={ (mediaFrontObject) ? mediaFrontObject.url : "" }
                                                value={ focalPointFrontSide }
                                                onChange={ ( newPosition ) =>
                                                    setAttributes({ focalPointFrontSide: newPosition })
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
  
export default FrontCardPanel;
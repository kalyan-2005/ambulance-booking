export default function GoogleMap({coordinates}) {
    // const temp = `https://maps.google.com/maps?q=bachupally&t=&z=13&ie=UTF8&iwloc=&output=embed`

    const temp = `https://maps.google.com/maps?q=${coordinates.latitude+0.12266},${coordinates.longitude-0.0671971}&t=&z=15&ie=UTF8&iwloc=&output=embed`

    // const temp = `https://www.google.com/maps/dir/17.5388522,78.3957789/17.5570754,78.3933672`
    // const start_latitude="17.5388522";
    // const start_longitude="78.3957789";
    // const destination_latitude="17.5570754";
    // const destination_longitude="78.3933672";
    // const temp = `https://www.bing.com/maps?rtp=adr.${start_latitude}_${start_longitude}~adr.${destination_latitude}_${destination_longitude}`
    return (
        <div className="p-3 min-h-dvh my-3 rounded-lg border">
            <div className="mapouter">
                <div className="gmap_canvas">
                    <iframe
                        // title="Google Map"
                        src={temp}
                        // frameBorder="0"
                        // scrolling="no"
                        className="w-full h-[600px]"
                    ></iframe>
                    <style>
                        {`
                            .mapouter {
                                position: relative;
                                height: 100%;
                                width: 100%;
                                background: #fff;
                            }
                            .maprouter a {
                                color: #fff !important;
                                position: absolute !important;
                                top: 0 !important;
                                z-index: 0 !important;
                            }
                            .gmap_canvas {
                                overflow: hidden;
                                height: 100%;
                                width: 100%;
                            }
                            .gmap_canvas iframe {
                                position: relative;
                                z-index: 2;
                            }
                        `}
                    </style>
                </div>
            </div>
        </div >
    )
}
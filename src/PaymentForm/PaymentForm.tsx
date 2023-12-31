import './PaymentForm.css';
import { useEffect, useState } from 'react';

const windowObj = window as any;

function PaymentForm() {
    const [loaded, setLoaded] = useState(false);
    const [heartLand, setHeartLand] = useState<any>();

    const apiKey = 'api_key';
    const paymentUrl = 'https://api2.heartlandportico.com/SecureSubmit.v1/token/2.1/securesubmit.js';


    useEffect(() => {
        const existingScript = document.getElementById("webPayment");
        if (existingScript) setLoaded(true);
        else {
            const script = document.createElement("script");
            script.src = paymentUrl;
            script.id = "webPayment";
            document.body.appendChild(script);
            script.onload = () => {
                setLoaded(true);
                setHeartLand(windowObj.Heartland.HPS({
                    publicKey: apiKey,
                    type: 'iframe',
                    // Configure the iframe fields to tell the library where
                    // the iframe should be inserted into the DOM and some
                    // basic options
                    fields: {
                        cardNumber: {
                            target: 'iframesCardNumber',
                            placeholder: '•••• •••• •••• ••••'
                        },
                        cardExpiration: {
                            target: 'iframesCardExpiration',
                            placeholder: 'MM / YY'
                        },
                        cardCvv: {
                            target: 'iframesCardCvv',
                            placeholder: 'CVC'
                        },
                        submit: {
                            value: 'Pay $10.00',
                            target: 'iframesSubmit'
                        }
                    },
                    // Collection of CSS to inject into the iframes.
                    // These properties can match the site's styles
                    // to create a seamless experience.
                    style: {
                        'input': {
                            'background': '#fff',
                            'border': '1px solid',
                            'border-color': '#bbb3b9 #c7c1c6 #c7c1c6',
                            'box-sizing': 'border-box',
                            'font-family': 'serif',
                            'font-size': '16px',
                            'line-height': '1',
                            'margin': '0 .5em 0 0',
                            'max-width': '100%',
                            'outline': '0',
                            'padding': '0.5278em',
                            'vertical-align': 'baseline',
                            'height': '50px',
                            'width': '100% !important',
                            'letter-spacing': '4px'
                        },
                        '#heartland-field': {
                            'font-family': 'sans-serif',
                            'box-sizing': 'border-box',
                            'display': 'block',
                            'height': '50px',
                            'padding': '6px 12px',
                            'font-size': '14px',
                            'line-height': '1.42857143',
                            'color': '#555',
                            'background-color': '#fff',
                            // 'border': '1px solid #000',
                            'border-radius': '0px',
                            '-webkit-box-shadow': 'inset 0 1px 1px rgba(0,0,0,.075)',
                            'box-shadow': 'inset 0 1px 1px rgba(0,0,0,.075)',
                            '-webkit-transition': 'border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s',
                            '-o-transition': 'border-color ease-in-out .15s,box-shadow ease-in-out .15s',
                            'transition': 'border-color ease-in-out .15s,box-shadow ease-in-out .15s',
                            'width': '100%'
                        },
                        '#heartland-field[name=submit]': {
                            'background-color': '#36b46e',
                            'font-family': 'sans-serif',
                            'text-transform': 'uppercase',
                            'color': '#ffffff',
                            'border': '0px solid transparent'
                        },
                        '#heartland-field[name=submit]:focus': {
                            'color': '#ffffff',
                            'background-color': '#258851',
                            'outline': 'none'
                        },
                        '#heartland-field[name=submit]:hover': {
                            'background-color': '#258851'
                        },
                        '#heartland-field-wrapper #heartland-field:focus': {
                            'border': '1px solid #3989e3',
                            'outline': 'none',
                            'box-shadow': 'none',
                            'height': '50px'
                        },
                        'heartland-field-wrapper #heartland-field': {
                            'height': '50px'
                        },
                        'input[type=submit]': {
                            'box-sizing': 'border-box',
                            'display': 'inline-block',
                            'padding': '6px 12px',
                            'margin-bottom': '0',
                            'font-size': '14px',
                            'font-weight': '400',
                            'line-height': '1.42857143',
                            'text-align': 'center',
                            'white-space': 'nowrap',
                            'vertical-align': 'middle',
                            '-ms-touch-action': 'manipulation',
                            'touch-action': 'manipulation',
                            'cursor': 'pointer',
                            '-webkit-user-select': 'none',
                            '-moz-user-select': 'none',
                            '-ms-user-select': 'none',
                            'user-select': 'none',
                            'background-image': 'none',
                            'border': '1px solid transparent',
                            'border-radius': '4px',
                            'color': '#fff',
                            'background-color': '#337ab7',
                            'border-color': '#2e6da4'
                        },
                        '#heartland-field[placeholder]': {
                            'letter-spacing': '4px'
                        },
                        '#heartland-field[name=cardExpiration]': {
                            'border-right': '2px solid #000',
                            'border-top': '2px solid #000'
                        },
                        '#heartland-field[name=cardCvv]': {
                            'background-size': '63px 40px',
                            'border-top': '2px solid #000'
                        },
                        'input#heartland-field[name=cardNumber]': {
                            'background-size': '55px 35px'
                        },
                        '#heartland-field.invalid.card-type-visa': {
                            'background': 'transparent url(https://github.com/hps/heartland-php/blob/master/examples/end-to-end/assets/images/ss-saved-visa@2x.png?raw=true) no-repeat right',
                            'background-size': '83px 88px',
                            'background-position-y': '-44px'
                        },
                        '#heartland-field.valid.card-type-visa': {
                            'background': 'transparent url(https://github.com/hps/heartland-php/blob/master/examples/end-to-end/assets/images/ss-saved-visa@2x.png?raw=true) no-repeat right top',
                            'background-size': '82px 86px'
                        },
                        '#heartland-field.invalid.card-type-discover': {
                            'background': 'transparent url(https://github.com/hps/heartland-php/blob/master/examples/end-to-end/assets/images/ss-saved-discover@2x.png?raw=true) no-repeat right',
                            'background-size': '85px 90px',
                            'background-position-y': '-44px'
                        },
                        '#heartland-field.valid.card-type-discover': {
                            'background': 'transparent url(https://github.com/hps/heartland-php/blob/master/examples/end-to-end/assets/images/ss-saved-discover@2x.png?raw=true) no-repeat right',
                            'background-size': '85px 90px',
                            'background-position-y': '1px'
                        },
                        '#heartland-field.invalid.card-type-amex': {
                            'background': 'transparent url(https://github.com/hps/heartland-php/blob/master/examples/end-to-end/assets/images/ss-savedcards-amex@2x.png?raw=true) no-repeat right',
                            'background-size': '50px 90px',
                            'background-position-y': '-44px'
                        },
                        '#heartland-field.valid.card-type-amex': {
                            'background': 'transparent url(https://github.com/hps/heartland-php/blob/master/examples/end-to-end/assets/images/ss-savedcards-amex@2x.png?raw=true) no-repeat right top',
                            'background-size': '50px 90px'
                        },
                        '#heartland-field.invalid.card-type-mastercard': {
                            'background': 'transparent url(https://github.com/hps/heartland-php/blob/master/examples/end-to-end/assets/images/ss-saved-mastercard.png?raw=true) no-repeat right',
                            'background-size': '62px 105px',
                            'background-position-y': '-52px'
                        },
                        '#heartland-field.valid.card-type-mastercard': {
                            'background': 'transparent url(https://github.com/hps/heartland-php/blob/master/examples/end-to-end/assets/images/ss-saved-mastercard.png?raw=true) no-repeat right',
                            'background-size': '62px 105px',
                            'background-position-y': '-1px'
                        },
                        '#heartland-field.invalid.card-type-jcb': {
                            'background': 'transparent url(https://github.com/hps/heartland-php/blob/master/examples/end-to-end/assets/images/ss-saved-jcb@2x.png?raw=true) no-repeat right',
                            'background-size': '55px 94px',
                            'background-position-y': '-44px'
                        },
                        '#heartland-field.valid.card-type-jcb': {
                            'background': 'transparent url(https://github.com/hps/heartland-php/blob/master/examples/end-to-end/assets/images/ss-saved-jcb@2x.png?raw=true) no-repeat right top',
                            'background-size': '55px 94px',
                            'background-position-y': '2px'
                        },
                        'input#heartland-field[name=cardNumber]::-ms-clear': {
                            'display': 'none'
                        }
                    },
                    // Callback when a token is received from the service
                    onTokenSuccess: function (resp: any) {
                        alert('Here is a single-use token: ' + resp.token_value);
                    },
                    // Callback when an error is received from the service
                    onTokenError: function (resp: any) {
                        alert('There was an error: ' + resp.error.message);
                    },
                    // Callback when an event is fired within an iFrame
                    onEvent: function (ev: any) {
                        console.log(ev);
                    }
                }));
            };
        }
    }, []);

    return (
        <>
            <div>Card Information</div>
            <div className="form-wrapper">
                <form id="iframes" action="" method="GET">
                    <div className="form-row">
                        <div className="card-wrapper">
                            <div id="iframesCardNumber" className="card-number-frame iframe-wrapper" />
                            <div className="expiry-cvv-container">
                                <div id="iframesCardExpiration" className="card-expiration-frame iframe-wrapper" />
                                <div id="iframesCardCvv" className="card-cvv-frame iframe-wrapper" />
                            </div>
                        </div>
                    </div>
                    <br />
                    <div id="iframesSubmit" />
                </form>
            </div>
        </>

    )
}

export default PaymentForm
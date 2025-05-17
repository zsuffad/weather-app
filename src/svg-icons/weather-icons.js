import {html} from 'lit-html';

/**
 * Convert from kebab-case or snake_case to camelCase for consistency
 * @param {string} str
 */
function toCamelCase(str) {
    return str.replace(/[-_]([a-z])/g, (g) => g[1].toUpperCase());
}

/**
 * Get an icon by name
 * @param {string} iconName
 */
export function getIcon(iconName) {
    const camelCaseName = toCamelCase(iconName);
    return weatherIcons[camelCaseName] || null;
}

/**
 * Get multiple icons as an object
 * @param {Array} iconNames
 */
export function getIcons(iconNames) {
    const result = {};
    iconNames.forEach((name) => {
        const camelCaseName = toCamelCase(name);
        if (weatherIcons[camelCaseName]) {
            result[camelCaseName] = weatherIcons[camelCaseName];
        }
    });
    return result;
}

/**
 * Get all icons
 */
export function getAllIcons() {
    return {...weatherIcons};
}

//@TODO add class="clear-day-icon" to all icons
export const weatherIcons = {
    clearDay: html`
        <svg viewBox="0 0 55 48" class="clear-day-icon" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <filter id="blur" x="-.34167" y="-.34167" width="1.6833" height="1.85">
                    <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
                    <feOffset dx="0" dy="4" result="offsetblur" />
                    <feComponentTransfer>
                        <feFuncA slope="0.05" type="linear" />
                    </feComponentTransfer>
                    <feMerge>
                        <feMergeNode />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
                <style type="text/css">
                        <![CDATA[
                        /*
                    ** SUN
                    */
                        @keyframes am-weather-sun {
                          0% {
                            -webkit-transform: rotate(0deg);
                            -moz-transform: rotate(0deg);
                            -ms-transform: rotate(0deg);
                            transform: rotate(0deg);
                          }

                          100% {
                            -webkit-transform: rotate(360deg);
                            -moz-transform: rotate(360deg);
                            -ms-transform: rotate(360deg);
                            transform: rotate(360deg);
                          }
                        }

                        .am-weather-sun {
                          -webkit-animation-name: am-weather-sun;
                          -moz-animation-name: am-weather-sun;
                          -ms-animation-name: am-weather-sun;
                          animation-name: am-weather-sun;
                          -webkit-animation-duration: 9s;
                          -moz-animation-duration: 9s;
                          -ms-animation-duration: 9s;
                          animation-duration: 9s;
                          -webkit-animation-timing-function: linear;
                          -moz-animation-timing-function: linear;
                          -ms-animation-timing-function: linear;
                          animation-timing-function: linear;
                          -webkit-animation-iteration-count: infinite;
                          -moz-animation-iteration-count: infinite;
                          -ms-animation-iteration-count: infinite;
                          animation-iteration-count: infinite;
                        }

                        @keyframes am-weather-sun-shiny {
                          0% {
                            stroke-dasharray: 3px 10px;
                            stroke-dashoffset: 0px;
                          }

                          50% {
                            stroke-dasharray: 0.1px 10px;
                            stroke-dashoffset: -1px;
                          }

                          100% {
                            stroke-dasharray: 3px 10px;
                            stroke-dashoffset: 0px;
                          }
                        }

                        .am-weather-sun-shiny line {
                          -webkit-animation-name: am-weather-sun-shiny;
                          -moz-animation-name: am-weather-sun-shiny;
                          -ms-animation-name: am-weather-sun-shiny;
                          animation-name: am-weather-sun-shiny;
                          -webkit-animation-duration: 2s;
                          -moz-animation-duration: 2s;
                          -ms-animation-duration: 2s;
                          animation-duration: 2s;
                          -webkit-animation-timing-function: linear;
                          -moz-animation-timing-function: linear;
                          -ms-animation-timing-function: linear;
                          animation-timing-function: linear;
                          -webkit-animation-iteration-count: infinite;
                          -moz-animation-iteration-count: infinite;
                          -ms-animation-iteration-count: infinite;
                          animation-iteration-count: infinite;
                        }
                        ]]>
                </style>
            </defs>
            <g transform="translate(16,-2)" filter="url(#blur)">
                <g transform="translate(0,16)">
                    <g
                        class="am-weather-sun"
                        style="-moz-animation-duration:9s;-moz-animation-iteration-count:infinite;-moz-animation-name:am-weather-sun;-moz-animation-timing-function:linear;-ms-animation-duration:9s;-ms-animation-iteration-count:infinite;-ms-animation-name:am-weather-sun;-ms-animation-timing-function:linear;-webkit-animation-duration:9s;-webkit-animation-iteration-count:infinite;-webkit-animation-name:am-weather-sun;-webkit-animation-timing-function:linear">
                        <line
                            transform="translate(0,9)"
                            y2="3"
                            fill="none"
                            stroke="#ffa500"
                            stroke-linecap="round"
                            stroke-width="2" />
                        <g transform="rotate(45)">
                            <line
                                transform="translate(0,9)"
                                y2="3"
                                fill="none"
                                stroke="#ffa500"
                                stroke-linecap="round"
                                stroke-width="2" />
                        </g>
                        <g transform="rotate(90)">
                            <line
                                transform="translate(0,9)"
                                y2="3"
                                fill="none"
                                stroke="#ffa500"
                                stroke-linecap="round"
                                stroke-width="2" />
                        </g>
                        <g transform="rotate(135)">
                            <line
                                transform="translate(0,9)"
                                y2="3"
                                fill="none"
                                stroke="#ffa500"
                                stroke-linecap="round"
                                stroke-width="2" />
                        </g>
                        <g transform="scale(-1)">
                            <line
                                transform="translate(0,9)"
                                y2="3"
                                fill="none"
                                stroke="#ffa500"
                                stroke-linecap="round"
                                stroke-width="2" />
                        </g>
                        <g transform="rotate(225)">
                            <line
                                transform="translate(0,9)"
                                y2="3"
                                fill="none"
                                stroke="#ffa500"
                                stroke-linecap="round"
                                stroke-width="2" />
                        </g>
                        <g transform="rotate(-90)">
                            <line
                                transform="translate(0,9)"
                                y2="3"
                                fill="none"
                                stroke="#ffa500"
                                stroke-linecap="round"
                                stroke-width="2" />
                        </g>
                        <g transform="rotate(-45)">
                            <line
                                transform="translate(0,9)"
                                y2="3"
                                fill="none"
                                stroke="#ffa500"
                                stroke-linecap="round"
                                stroke-width="2" />
                        </g>
                        <circle r="5" fill="#ffa500" stroke="#ffa500" stroke-width="2" />
                    </g>
                </g>
            </g>
        </svg>
    `,
    clearNight: html`
        <svg viewBox="0 0 56 48" class="clear-night-icon" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <filter id="blur" x="-.3038" y="-.3318" width="1.6076" height="1.894">
                    <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
                    <feOffset dx="0" dy="4" result="offsetblur" />
                    <feComponentTransfer>
                        <feFuncA slope="0.05" type="linear" />
                    </feComponentTransfer>
                    <feMerge>
                        <feMergeNode />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
                <style type="text/css">
                          <![CDATA[
                          /*
                    ** MOON
                    */
                          @keyframes am-weather-moon {
                            0% {
                              -webkit-transform: rotate(0deg);
                              -moz-transform: rotate(0deg);
                              -ms-transform: rotate(0deg);
                              transform: rotate(0deg);
                            }

                            50% {
                              -webkit-transform: rotate(15deg);
                              -moz-transform: rotate(15deg);
                              -ms-transform: rotate(15deg);
                              transform: rotate(15deg);
                            }

                            100% {
                              -webkit-transform: rotate(0deg);
                              -moz-transform: rotate(0deg);
                              -ms-transform: rotate(0deg);
                              transform: rotate(0deg);
                            }
                          }

                          .am-weather-moon {
                            -webkit-animation-name: am-weather-moon;
                            -moz-animation-name: am-weather-moon;
                            -ms-animation-name: am-weather-moon;
                            animation-name: am-weather-moon;
                            -webkit-animation-duration: 6s;
                            -moz-animation-duration: 6s;
                            -ms-animation-duration: 6s;
                            animation-duration: 6s;
                            -webkit-animation-timing-function: linear;
                            -moz-animation-timing-function: linear;
                            -ms-animation-timing-function: linear;
                            animation-timing-function: linear;
                            -webkit-animation-iteration-count: infinite;
                            -moz-animation-iteration-count: infinite;
                            -ms-animation-iteration-count: infinite;
                            animation-iteration-count: infinite;
                            -webkit-transform-origin: 12.5px 15.15px 0;
                            /* TODO FF CENTER ISSUE */
                            -moz-transform-origin: 12.5px 15.15px 0;
                            /* TODO FF CENTER ISSUE */
                            -ms-transform-origin: 12.5px 15.15px 0;
                            /* TODO FF CENTER ISSUE */
                            transform-origin: 12.5px 15.15px 0;
                            /* TODO FF CENTER ISSUE */
                          }

                          @keyframes am-weather-moon-star-1 {
                            0% {
                              opacity: 0;
                            }

                            100% {
                              opacity: 1;
                            }
                          }

                          .am-weather-moon-star-1 {
                            -webkit-animation-name: am-weather-moon-star-1;
                            -moz-animation-name: am-weather-moon-star-1;
                            -ms-animation-name: am-weather-moon-star-1;
                            animation-name: am-weather-moon-star-1;
                            -webkit-animation-delay: 3s;
                            -moz-animation-delay: 3s;
                            -ms-animation-delay: 3s;
                            animation-delay: 3s;
                            -webkit-animation-duration: 5s;
                            -moz-animation-duration: 5s;
                            -ms-animation-duration: 5s;
                            animation-duration: 5s;
                            -webkit-animation-timing-function: linear;
                            -moz-animation-timing-function: linear;
                            -ms-animation-timing-function: linear;
                            animation-timing-function: linear;
                            -webkit-animation-iteration-count: 1;
                            -moz-animation-iteration-count: 1;
                            -ms-animation-iteration-count: 1;
                            animation-iteration-count: 1;
                          }

                          @keyframes am-weather-moon-star-2 {
                            0% {
                              opacity: 0;
                            }

                            100% {
                              opacity: 1;
                            }
                          }

                          .am-weather-moon-star-2 {
                            -webkit-animation-name: am-weather-moon-star-2;
                            -moz-animation-name: am-weather-moon-star-2;
                            -ms-animation-name: am-weather-moon-star-2;
                            animation-name: am-weather-moon-star-2;
                            -webkit-animation-delay: 5s;
                            -moz-animation-delay: 5s;
                            -ms-animation-delay: 5s;
                            animation-delay: 5s;
                            -webkit-animation-duration: 4s;
                            -moz-animation-duration: 4s;
                            -ms-animation-duration: 4s;
                            animation-duration: 4s;
                            -webkit-animation-timing-function: linear;
                            -moz-animation-timing-function: linear;
                            -ms-animation-timing-function: linear;
                            animation-timing-function: linear;
                            -webkit-animation-iteration-count: 1;
                            -moz-animation-iteration-count: 1;
                            -ms-animation-iteration-count: 1;
                            animation-iteration-count: 1;
                          }
                          ]]>
                </style>
            </defs>
            <g id="night" transform="translate(-4,-18)" filter="url(#blur)">
                <g transform="matrix(.8 0 0 .78534 36 20.022)" stroke-width="1.2616">
                    <g
                        class="am-weather-moon-star-1"
                        style="-moz-animation-delay:3s;-moz-animation-duration:5s;-moz-animation-iteration-count:1;-moz-animation-name:am-weather-moon-star-1;-moz-animation-timing-function:linear;-ms-animation-delay:3s;-ms-animation-duration:5s;-ms-animation-iteration-count:1;-ms-animation-name:am-weather-moon-star-1;-ms-animation-timing-function:linear;-webkit-animation-delay:3s;-webkit-animation-duration:5s;-webkit-animation-iteration-count:1;-webkit-animation-name:am-weather-moon-star-1;-webkit-animation-timing-function:linear">
                        <polygon
                            points="4 2.7 5.2 3.3 4 4 3.3 5.2 2.7 4 1.5 3.3 2.7 2.7 3.3 1.5"
                            fill="#ffa500"
                            stroke-miterlimit="10"
                            stroke-width="1.4105" />
                    </g>
                    <g
                        class="am-weather-moon-star-2"
                        style="-moz-animation-delay:5s;-moz-animation-duration:4s;-moz-animation-iteration-count:1;-moz-animation-name:am-weather-moon-star-2;-moz-animation-timing-function:linear;-ms-animation-delay:5s;-ms-animation-duration:4s;-ms-animation-iteration-count:1;-ms-animation-name:am-weather-moon-star-2;-ms-animation-timing-function:linear;-webkit-animation-delay:5s;-webkit-animation-duration:4s;-webkit-animation-iteration-count:1;-webkit-animation-name:am-weather-moon-star-2;-webkit-animation-timing-function:linear">
                        <polygon
                            transform="translate(20,10)"
                            points="4 2.7 5.2 3.3 4 4 3.3 5.2 2.7 4 1.5 3.3 2.7 2.7 3.3 1.5"
                            fill="#ffa500"
                            stroke-miterlimit="10"
                            stroke-width="1.4105" />
                    </g>
                    <g
                        class="am-weather-moon"
                        style="-moz-animation-duration:6s;-moz-animation-iteration-count:infinite;-moz-animation-name:am-weather-moon;-moz-animation-timing-function:linear;-moz-transform-origin:12.5px 15.15px 0;-ms-animation-duration:6s;-ms-animation-iteration-count:infinite;-ms-animation-name:am-weather-moon;-ms-animation-timing-function:linear;-ms-transform-origin:12.5px 15.15px 0;-webkit-animation-duration:6s;-webkit-animation-iteration-count:infinite;-webkit-animation-name:am-weather-moon;-webkit-animation-timing-function:linear;-webkit-transform-origin:12.5px 15.15px 0">
                        <path
                            d="m14.5 13.2c0-3.7 2-6.9 5-8.7-1.5-0.9-3.2-1.3-5-1.3-5.5 0-10 4.5-10 10s4.5 10 10 10c1.8 0 3.5-0.5 5-1.3-3-1.7-5-5-5-8.7z"
                            fill="#ffa500"
                            stroke="#ffa500"
                            stroke-linejoin="round"
                            stroke-width="2.5232" />
                    </g>
                </g>
            </g>
        </svg>
    `,
    cloudy1Day: html`
        <svg viewBox="0 0 55 48" class="cloudy1-day-icon" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <filter id="blur" x="-.20655" y="-.28472" width="1.403" height="1.6944">
                    <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
                    <feOffset dx="0" dy="4" result="offsetblur" />
                    <feComponentTransfer>
                        <feFuncA slope="0.05" type="linear" />
                    </feComponentTransfer>
                    <feMerge>
                        <feMergeNode />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
                <style type="text/css">
                          <![CDATA[
                          /*
                    ** CLOUDS
                    */
                          @keyframes am-weather-cloud-2 {
                            0% {
                              -webkit-transform: translate(0px, 0px);
                              -moz-transform: translate(0px, 0px);
                              -ms-transform: translate(0px, 0px);
                              transform: translate(0px, 0px);
                            }

                            50% {
                              -webkit-transform: translate(2px, 0px);
                              -moz-transform: translate(2px, 0px);
                              -ms-transform: translate(2px, 0px);
                              transform: translate(2px, 0px);
                            }

                            100% {
                              -webkit-transform: translate(0px, 0px);
                              -moz-transform: translate(0px, 0px);
                              -ms-transform: translate(0px, 0px);
                              transform: translate(0px, 0px);
                            }
                          }

                          .am-weather-cloud-2 {
                            -webkit-animation-name: am-weather-cloud-2;
                            -moz-animation-name: am-weather-cloud-2;
                            animation-name: am-weather-cloud-2;
                            -webkit-animation-duration: 3s;
                            -moz-animation-duration: 3s;
                            animation-duration: 3s;
                            -webkit-animation-timing-function: linear;
                            -moz-animation-timing-function: linear;
                            animation-timing-function: linear;
                            -webkit-animation-iteration-count: infinite;
                            -moz-animation-iteration-count: infinite;
                            animation-iteration-count: infinite;
                          }

                          /*
                    ** SUN
                    */
                          @keyframes am-weather-sun {
                            0% {
                              -webkit-transform: rotate(0deg);
                              -moz-transform: rotate(0deg);
                              -ms-transform: rotate(0deg);
                              transform: rotate(0deg);
                            }

                            100% {
                              -webkit-transform: rotate(360deg);
                              -moz-transform: rotate(360deg);
                              -ms-transform: rotate(360deg);
                              transform: rotate(360deg);
                            }
                          }

                          .am-weather-sun {
                            -webkit-animation-name: am-weather-sun;
                            -moz-animation-name: am-weather-sun;
                            -ms-animation-name: am-weather-sun;
                            animation-name: am-weather-sun;
                            -webkit-animation-duration: 9s;
                            -moz-animation-duration: 9s;
                            -ms-animation-duration: 9s;
                            animation-duration: 9s;
                            -webkit-animation-timing-function: linear;
                            -moz-animation-timing-function: linear;
                            -ms-animation-timing-function: linear;
                            animation-timing-function: linear;
                            -webkit-animation-iteration-count: infinite;
                            -moz-animation-iteration-count: infinite;
                            -ms-animation-iteration-count: infinite;
                            animation-iteration-count: infinite;
                          }

                          @keyframes am-weather-sun-shiny {
                            0% {
                              stroke-dasharray: 3px 10px;
                              stroke-dashoffset: 0px;
                            }

                            50% {
                              stroke-dasharray: 0.1px 10px;
                              stroke-dashoffset: -1px;
                            }

                            100% {
                              stroke-dasharray: 3px 10px;
                              stroke-dashoffset: 0px;
                            }
                          }

                          .am-weather-sun-shiny line {
                            -webkit-animation-name: am-weather-sun-shiny;
                            -moz-animation-name: am-weather-sun-shiny;
                            -ms-animation-name: am-weather-sun-shiny;
                            animation-name: am-weather-sun-shiny;
                            -webkit-animation-duration: 2s;
                            -moz-animation-duration: 2s;
                            -ms-animation-duration: 2s;
                            animation-duration: 2s;
                            -webkit-animation-timing-function: linear;
                            -moz-animation-timing-function: linear;
                            -ms-animation-timing-function: linear;
                            animation-timing-function: linear;
                            -webkit-animation-iteration-count: infinite;
                            -moz-animation-iteration-count: infinite;
                            -ms-animation-iteration-count: infinite;
                            animation-iteration-count: infinite;
                          }
                          ]]>
                </style>
            </defs>
            <g transform="translate(16,-2)" filter="url(#blur)">
                <g transform="translate(0,16)">
                    <g
                        class="am-weather-sun"
                        style="-moz-animation-duration:9s;-moz-animation-iteration-count:infinite;-moz-animation-name:am-weather-sun;-moz-animation-timing-function:linear;-ms-animation-duration:9s;-ms-animation-iteration-count:infinite;-ms-animation-name:am-weather-sun;-ms-animation-timing-function:linear;-webkit-animation-duration:9s;-webkit-animation-iteration-count:infinite;-webkit-animation-name:am-weather-sun;-webkit-animation-timing-function:linear">
                        <line
                            transform="translate(0,9)"
                            y2="3"
                            fill="none"
                            stroke="#ffa500"
                            stroke-linecap="round"
                            stroke-width="2" />
                        <g transform="rotate(45)">
                            <line
                                transform="translate(0,9)"
                                y2="3"
                                fill="none"
                                stroke="#ffa500"
                                stroke-linecap="round"
                                stroke-width="2" />
                        </g>
                        <g transform="rotate(90)">
                            <line
                                transform="translate(0,9)"
                                y2="3"
                                fill="none"
                                stroke="#ffa500"
                                stroke-linecap="round"
                                stroke-width="2" />
                        </g>
                        <g transform="rotate(135)">
                            <line
                                transform="translate(0,9)"
                                y2="3"
                                fill="none"
                                stroke="#ffa500"
                                stroke-linecap="round"
                                stroke-width="2" />
                        </g>
                        <g transform="scale(-1)">
                            <line
                                transform="translate(0,9)"
                                y2="3"
                                fill="none"
                                stroke="#ffa500"
                                stroke-linecap="round"
                                stroke-width="2" />
                        </g>
                        <g transform="rotate(225)">
                            <line
                                transform="translate(0,9)"
                                y2="3"
                                fill="none"
                                stroke="#ffa500"
                                stroke-linecap="round"
                                stroke-width="2" />
                        </g>
                        <g transform="rotate(-90)">
                            <line
                                transform="translate(0,9)"
                                y2="3"
                                fill="none"
                                stroke="#ffa500"
                                stroke-linecap="round"
                                stroke-width="2" />
                        </g>
                        <g transform="rotate(-45)">
                            <line
                                transform="translate(0,9)"
                                y2="3"
                                fill="none"
                                stroke="#ffa500"
                                stroke-linecap="round"
                                stroke-width="2" />
                        </g>
                        <circle r="5" fill="#ffa500" stroke="#ffa500" stroke-width="2" />
                    </g>
                </g>
                <g
                    class="am-weather-cloud-2"
                    style="-moz-animation-duration:3s;-moz-animation-iteration-count:infinite;-moz-animation-name:am-weather-cloud-2;-moz-animation-timing-function:linear;-webkit-animation-duration:3s;-webkit-animation-iteration-count:infinite;-webkit-animation-name:am-weather-cloud-2;-webkit-animation-timing-function:linear">
                    <path
                        transform="translate(-20,-11)"
                        d="m47.7 35.4c0-4.6-3.7-8.2-8.2-8.2-1 0-1.9 0.2-2.8 0.5-0.3-3.4-3.1-6.2-6.6-6.2-3.7 0-6.7 3-6.7 6.7 0 0.8 0.2 1.6 0.4 2.3-0.3-0.1-0.7-0.1-1-0.1-3.7 0-6.7 3-6.7 6.7 0 3.6 2.9 6.6 6.5 6.7h17.2c4.4-0.5 7.9-4 7.9-8.4z"
                        fill="#c6deff"
                        stroke="#fff"
                        stroke-linejoin="round"
                        stroke-width="1.2" />
                </g>
            </g>
        </svg>
    `,
    cloudy1Night: html`
        <svg viewBox="0 0 55 48" class="cloudy1-night-icon" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <filter id="blur" x="-.19471" y="-.26087" width="1.3744" height="1.6884">
                    <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
                    <feOffset dx="0" dy="4" result="offsetblur" />
                    <feComponentTransfer>
                        <feFuncA slope="0.05" type="linear" />
                    </feComponentTransfer>
                    <feMerge>
                        <feMergeNode />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
                <style type="text/css">
                          <![CDATA[
                          /*
                    ** CLOUDS
                    */
                          @keyframes am-weather-cloud-2 {
                            0% {
                              -webkit-transform: translate(0px, 0px);
                              -moz-transform: translate(0px, 0px);
                              -ms-transform: translate(0px, 0px);
                              transform: translate(0px, 0px);
                            }

                            50% {
                              -webkit-transform: translate(2px, 0px);
                              -moz-transform: translate(2px, 0px);
                              -ms-transform: translate(2px, 0px);
                              transform: translate(2px, 0px);
                            }

                            100% {
                              -webkit-transform: translate(0px, 0px);
                              -moz-transform: translate(0px, 0px);
                              -ms-transform: translate(0px, 0px);
                              transform: translate(0px, 0px);
                            }
                          }

                          .am-weather-cloud-2 {
                            -webkit-animation-name: am-weather-cloud-2;
                            -moz-animation-name: am-weather-cloud-2;
                            animation-name: am-weather-cloud-2;
                            -webkit-animation-duration: 3s;
                            -moz-animation-duration: 3s;
                            animation-duration: 3s;
                            -webkit-animation-timing-function: linear;
                            -moz-animation-timing-function: linear;
                            animation-timing-function: linear;
                            -webkit-animation-iteration-count: infinite;
                            -moz-animation-iteration-count: infinite;
                            animation-iteration-count: infinite;
                          }

                          /*
                    ** MOON
                    */
                          @keyframes am-weather-moon {
                            0% {
                              -webkit-transform: rotate(0deg);
                              -moz-transform: rotate(0deg);
                              -ms-transform: rotate(0deg);
                              transform: rotate(0deg);
                            }

                            50% {
                              -webkit-transform: rotate(15deg);
                              -moz-transform: rotate(15deg);
                              -ms-transform: rotate(15deg);
                              transform: rotate(15deg);
                            }

                            100% {
                              -webkit-transform: rotate(0deg);
                              -moz-transform: rotate(0deg);
                              -ms-transform: rotate(0deg);
                              transform: rotate(0deg);
                            }
                          }

                          .am-weather-moon {
                            -webkit-animation-name: am-weather-moon;
                            -moz-animation-name: am-weather-moon;
                            -ms-animation-name: am-weather-moon;
                            animation-name: am-weather-moon;
                            -webkit-animation-duration: 6s;
                            -moz-animation-duration: 6s;
                            -ms-animation-duration: 6s;
                            animation-duration: 6s;
                            -webkit-animation-timing-function: linear;
                            -moz-animation-timing-function: linear;
                            -ms-animation-timing-function: linear;
                            animation-timing-function: linear;
                            -webkit-animation-iteration-count: infinite;
                            -moz-animation-iteration-count: infinite;
                            -ms-animation-iteration-count: infinite;
                            animation-iteration-count: infinite;
                            -webkit-transform-origin: 12.5px 15.15px 0;
                            /* TODO FF CENTER ISSUE */
                            -moz-transform-origin: 12.5px 15.15px 0;
                            /* TODO FF CENTER ISSUE */
                            -ms-transform-origin: 12.5px 15.15px 0;
                            /* TODO FF CENTER ISSUE */
                            transform-origin: 12.5px 15.15px 0;
                            /* TODO FF CENTER ISSUE */
                          }

                          @keyframes am-weather-moon-star-1 {
                            0% {
                              opacity: 0;
                            }

                            100% {
                              opacity: 1;
                            }
                          }

                          .am-weather-moon-star-1 {
                            -webkit-animation-name: am-weather-moon-star-1;
                            -moz-animation-name: am-weather-moon-star-1;
                            -ms-animation-name: am-weather-moon-star-1;
                            animation-name: am-weather-moon-star-1;
                            -webkit-animation-delay: 3s;
                            -moz-animation-delay: 3s;
                            -ms-animation-delay: 3s;
                            animation-delay: 3s;
                            -webkit-animation-duration: 5s;
                            -moz-animation-duration: 5s;
                            -ms-animation-duration: 5s;
                            animation-duration: 5s;
                            -webkit-animation-timing-function: linear;
                            -moz-animation-timing-function: linear;
                            -ms-animation-timing-function: linear;
                            animation-timing-function: linear;
                            -webkit-animation-iteration-count: 1;
                            -moz-animation-iteration-count: 1;
                            -ms-animation-iteration-count: 1;
                            animation-iteration-count: 1;
                          }

                          @keyframes am-weather-moon-star-2 {
                            0% {
                              opacity: 0;
                            }

                            100% {
                              opacity: 1;
                            }
                          }

                          .am-weather-moon-star-2 {
                            -webkit-animation-name: am-weather-moon-star-2;
                            -moz-animation-name: am-weather-moon-star-2;
                            -ms-animation-name: am-weather-moon-star-2;
                            animation-name: am-weather-moon-star-2;
                            -webkit-animation-delay: 5s;
                            -moz-animation-delay: 5s;
                            -ms-animation-delay: 5s;
                            animation-delay: 5s;
                            -webkit-animation-duration: 4s;
                            -moz-animation-duration: 4s;
                            -ms-animation-duration: 4s;
                            animation-duration: 4s;
                            -webkit-animation-timing-function: linear;
                            -moz-animation-timing-function: linear;
                            -ms-animation-timing-function: linear;
                            animation-timing-function: linear;
                            -webkit-animation-iteration-count: 1;
                            -moz-animation-iteration-count: 1;
                            -ms-animation-iteration-count: 1;
                            animation-iteration-count: 1;
                          }
                          ]]>
                </style>
            </defs>
            <g transform="translate(16,-2)" filter="url(#blur)">
                <g transform="matrix(.8 0 0 .8 16 4)">
                    <g
                        class="am-weather-moon-star-1"
                        style="-moz-animation-delay:3s;-moz-animation-duration:5s;-moz-animation-iteration-count:1;-moz-animation-name:am-weather-moon-star-1;-moz-animation-timing-function:linear;-ms-animation-delay:3s;-ms-animation-duration:5s;-ms-animation-iteration-count:1;-ms-animation-name:am-weather-moon-star-1;-ms-animation-timing-function:linear;-webkit-animation-delay:3s;-webkit-animation-duration:5s;-webkit-animation-iteration-count:1;-webkit-animation-name:am-weather-moon-star-1;-webkit-animation-timing-function:linear">
                        <polygon
                            points="1.5 3.3 2.7 2.7 3.3 1.5 4 2.7 5.2 3.3 4 4 3.3 5.2 2.7 4"
                            fill="#ffa500"
                            stroke-miterlimit="10" />
                    </g>
                    <g
                        class="am-weather-moon-star-2"
                        style="-moz-animation-delay:5s;-moz-animation-duration:4s;-moz-animation-iteration-count:1;-moz-animation-name:am-weather-moon-star-2;-moz-animation-timing-function:linear;-ms-animation-delay:5s;-ms-animation-duration:4s;-ms-animation-iteration-count:1;-ms-animation-name:am-weather-moon-star-2;-ms-animation-timing-function:linear;-webkit-animation-delay:5s;-webkit-animation-duration:4s;-webkit-animation-iteration-count:1;-webkit-animation-name:am-weather-moon-star-2;-webkit-animation-timing-function:linear">
                        <polygon
                            transform="translate(20,10)"
                            points="1.5 3.3 2.7 2.7 3.3 1.5 4 2.7 5.2 3.3 4 4 3.3 5.2 2.7 4"
                            fill="#ffa500"
                            stroke-miterlimit="10" />
                    </g>
                    <g
                        class="am-weather-moon"
                        style="-moz-animation-duration:6s;-moz-animation-iteration-count:infinite;-moz-animation-name:am-weather-moon;-moz-animation-timing-function:linear;-moz-transform-origin:12.5px 15.15px 0;-ms-animation-duration:6s;-ms-animation-iteration-count:infinite;-ms-animation-name:am-weather-moon;-ms-animation-timing-function:linear;-ms-transform-origin:12.5px 15.15px 0;-webkit-animation-duration:6s;-webkit-animation-iteration-count:infinite;-webkit-animation-name:am-weather-moon;-webkit-animation-timing-function:linear;-webkit-transform-origin:12.5px 15.15px 0">
                        <path
                            d="m14.5 13.2c0-3.7 2-6.9 5-8.7-1.5-0.9-3.2-1.3-5-1.3-5.5 0-10 4.5-10 10s4.5 10 10 10c1.8 0 3.5-0.5 5-1.3-3-1.7-5-5-5-8.7z"
                            fill="#ffa500"
                            stroke="#ffa500"
                            stroke-linejoin="round"
                            stroke-width="2" />
                    </g>
                </g>
                <g
                    class="am-weather-cloud-2"
                    style="-moz-animation-duration:3s;-moz-animation-iteration-count:infinite;-moz-animation-name:am-weather-cloud-2;-moz-animation-timing-function:linear;-webkit-animation-duration:3s;-webkit-animation-iteration-count:infinite;-webkit-animation-name:am-weather-cloud-2;-webkit-animation-timing-function:linear">
                    <path
                        transform="translate(-20,-11)"
                        d="m47.7 35.4c0-4.6-3.7-8.2-8.2-8.2-1 0-1.9 0.2-2.8 0.5-0.3-3.4-3.1-6.2-6.6-6.2-3.7 0-6.7 3-6.7 6.7 0 0.8 0.2 1.6 0.4 2.3-0.3-0.1-0.7-0.1-1-0.1-3.7 0-6.7 3-6.7 6.7 0 3.6 2.9 6.6 6.5 6.7h17.2c4.4-0.5 7.9-4 7.9-8.4z"
                        fill="#c6deff"
                        stroke="#fff"
                        stroke-linejoin="round"
                        stroke-width="1.2" />
                </g>
            </g>
        </svg>
    `,
    cloudy2Day: html`
        <svg viewBox="0 0 55 48" class="cloudy2-day-icon" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <filter id="blur" x="-.20655" y="-.28472" width="1.403" height="1.6944">
                    <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
                    <feOffset dx="0" dy="4" result="offsetblur" />
                    <feComponentTransfer>
                        <feFuncA slope="0.05" type="linear" />
                    </feComponentTransfer>
                    <feMerge>
                        <feMergeNode />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
                <style type="text/css">
                          <![CDATA[
                          /*
                    ** CLOUDS
                    */
                          @keyframes am-weather-cloud-2 {
                            0% {
                              -webkit-transform: translate(0px, 0px);
                              -moz-transform: translate(0px, 0px);
                              -ms-transform: translate(0px, 0px);
                              transform: translate(0px, 0px);
                            }

                            50% {
                              -webkit-transform: translate(2px, 0px);
                              -moz-transform: translate(2px, 0px);
                              -ms-transform: translate(2px, 0px);
                              transform: translate(2px, 0px);
                            }

                            100% {
                              -webkit-transform: translate(0px, 0px);
                              -moz-transform: translate(0px, 0px);
                              -ms-transform: translate(0px, 0px);
                              transform: translate(0px, 0px);
                            }
                          }

                          .am-weather-cloud-2 {
                            -webkit-animation-name: am-weather-cloud-2;
                            -moz-animation-name: am-weather-cloud-2;
                            animation-name: am-weather-cloud-2;
                            -webkit-animation-duration: 3s;
                            -moz-animation-duration: 3s;
                            animation-duration: 3s;
                            -webkit-animation-timing-function: linear;
                            -moz-animation-timing-function: linear;
                            animation-timing-function: linear;
                            -webkit-animation-iteration-count: infinite;
                            -moz-animation-iteration-count: infinite;
                            animation-iteration-count: infinite;
                          }

                          /*
                    ** SUN
                    */
                          @keyframes am-weather-sun {
                            0% {
                              -webkit-transform: rotate(0deg);
                              -moz-transform: rotate(0deg);
                              -ms-transform: rotate(0deg);
                              transform: rotate(0deg);
                            }

                            100% {
                              -webkit-transform: rotate(360deg);
                              -moz-transform: rotate(360deg);
                              -ms-transform: rotate(360deg);
                              transform: rotate(360deg);
                            }
                          }

                          .am-weather-sun {
                            -webkit-animation-name: am-weather-sun;
                            -moz-animation-name: am-weather-sun;
                            -ms-animation-name: am-weather-sun;
                            animation-name: am-weather-sun;
                            -webkit-animation-duration: 9s;
                            -moz-animation-duration: 9s;
                            -ms-animation-duration: 9s;
                            animation-duration: 9s;
                            -webkit-animation-timing-function: linear;
                            -moz-animation-timing-function: linear;
                            -ms-animation-timing-function: linear;
                            animation-timing-function: linear;
                            -webkit-animation-iteration-count: infinite;
                            -moz-animation-iteration-count: infinite;
                            -ms-animation-iteration-count: infinite;
                            animation-iteration-count: infinite;
                          }

                          @keyframes am-weather-sun-shiny {
                            0% {
                              stroke-dasharray: 3px 10px;
                              stroke-dashoffset: 0px;
                            }

                            50% {
                              stroke-dasharray: 0.1px 10px;
                              stroke-dashoffset: -1px;
                            }

                            100% {
                              stroke-dasharray: 3px 10px;
                              stroke-dashoffset: 0px;
                            }
                          }

                          .am-weather-sun-shiny line {
                            -webkit-animation-name: am-weather-sun-shiny;
                            -moz-animation-name: am-weather-sun-shiny;
                            -ms-animation-name: am-weather-sun-shiny;
                            animation-name: am-weather-sun-shiny;
                            -webkit-animation-duration: 2s;
                            -moz-animation-duration: 2s;
                            -ms-animation-duration: 2s;
                            animation-duration: 2s;
                            -webkit-animation-timing-function: linear;
                            -moz-animation-timing-function: linear;
                            -ms-animation-timing-function: linear;
                            animation-timing-function: linear;
                            -webkit-animation-iteration-count: infinite;
                            -moz-animation-iteration-count: infinite;
                            -ms-animation-iteration-count: infinite;
                            animation-iteration-count: infinite;
                          }
                          ]]>
                </style>
            </defs>
            <g transform="translate(16 -2)" filter="url(#blur)">
                <g transform="translate(0,16)">
                    <g
                        class="am-weather-sun"
                        style="-moz-animation-duration:9s;-moz-animation-iteration-count:infinite;-moz-animation-name:am-weather-sun;-moz-animation-timing-function:linear;-ms-animation-duration:9s;-ms-animation-iteration-count:infinite;-ms-animation-name:am-weather-sun;-ms-animation-timing-function:linear;-webkit-animation-duration:9s;-webkit-animation-iteration-count:infinite;-webkit-animation-name:am-weather-sun;-webkit-animation-timing-function:linear">
                        <line
                            transform="translate(0,9)"
                            y2="3"
                            fill="none"
                            stroke="#ffa500"
                            stroke-linecap="round"
                            stroke-width="2" />
                        <g transform="rotate(45)">
                            <line
                                transform="translate(0,9)"
                                y2="3"
                                fill="none"
                                stroke="#ffa500"
                                stroke-linecap="round"
                                stroke-width="2" />
                        </g>
                        <g transform="rotate(90)">
                            <line
                                transform="translate(0,9)"
                                y2="3"
                                fill="none"
                                stroke="#ffa500"
                                stroke-linecap="round"
                                stroke-width="2" />
                        </g>
                        <g transform="rotate(135)">
                            <line
                                transform="translate(0,9)"
                                y2="3"
                                fill="none"
                                stroke="#ffa500"
                                stroke-linecap="round"
                                stroke-width="2" />
                        </g>
                        <g transform="scale(-1)">
                            <line
                                transform="translate(0,9)"
                                y2="3"
                                fill="none"
                                stroke="#ffa500"
                                stroke-linecap="round"
                                stroke-width="2" />
                        </g>
                        <g transform="rotate(225)">
                            <line
                                transform="translate(0,9)"
                                y2="3"
                                fill="none"
                                stroke="#ffa500"
                                stroke-linecap="round"
                                stroke-width="2" />
                        </g>
                        <g transform="rotate(-90)">
                            <line
                                transform="translate(0,9)"
                                y2="3"
                                fill="none"
                                stroke="#ffa500"
                                stroke-linecap="round"
                                stroke-width="2" />
                        </g>
                        <g transform="rotate(-45)">
                            <line
                                transform="translate(0,9)"
                                y2="3"
                                fill="none"
                                stroke="#ffa500"
                                stroke-linecap="round"
                                stroke-width="2" />
                        </g>
                    </g>
                    <circle r="5" fill="#ffa500" stroke="#ffa500" stroke-width="2" />
                </g>
                <g
                    class="am-weather-cloud-2"
                    style="-moz-animation-duration:3s;-moz-animation-iteration-count:infinite;-moz-animation-name:am-weather-cloud-2;-moz-animation-timing-function:linear;-webkit-animation-duration:3s;-webkit-animation-iteration-count:infinite;-webkit-animation-name:am-weather-cloud-2;-webkit-animation-timing-function:linear">
                    <path
                        transform="translate(-20,-11)"
                        d="m47.7 35.4c0-4.6-3.7-8.2-8.2-8.2-1 0-1.9 0.2-2.8 0.5-0.3-3.4-3.1-6.2-6.6-6.2-3.7 0-6.7 3-6.7 6.7 0 0.8 0.2 1.6 0.4 2.3-0.3-0.1-0.7-0.1-1-0.1-3.7 0-6.7 3-6.7 6.7 0 3.6 2.9 6.6 6.5 6.7h17.2c4.4-0.5 7.9-4 7.9-8.4z"
                        fill="#91c0f8"
                        stroke="#fff"
                        stroke-linejoin="round"
                        stroke-width="1.2" />
                </g>
            </g>
        </svg>
    `,
    cloudy2Night: html`
        <svg viewBox="0 0 55 55" class="cloudy2-night-icon" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <filter id="blur" x="-.19471" y="-.26087" width="1.3744" height="1.6884">
                    <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
                    <feOffset dx="0" dy="4" result="offsetblur" />
                    <feComponentTransfer>
                        <feFuncA slope="0.05" type="linear" />
                    </feComponentTransfer>
                    <feMerge>
                        <feMergeNode />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
                <style type="text/css">
                          <![CDATA[
                          /*
                    ** CLOUDS
                    */
                          @keyframes am-weather-cloud-2 {
                            0% {
                              -webkit-transform: translate(0px, 0px);
                              -moz-transform: translate(0px, 0px);
                              -ms-transform: translate(0px, 0px);
                              transform: translate(0px, 0px);
                            }

                            50% {
                              -webkit-transform: translate(2px, 0px);
                              -moz-transform: translate(2px, 0px);
                              -ms-transform: translate(2px, 0px);
                              transform: translate(2px, 0px);
                            }

                            100% {
                              -webkit-transform: translate(0px, 0px);
                              -moz-transform: translate(0px, 0px);
                              -ms-transform: translate(0px, 0px);
                              transform: translate(0px, 0px);
                            }
                          }

                          .am-weather-cloud-2 {
                            -webkit-animation-name: am-weather-cloud-2;
                            -moz-animation-name: am-weather-cloud-2;
                            animation-name: am-weather-cloud-2;
                            -webkit-animation-duration: 3s;
                            -moz-animation-duration: 3s;
                            animation-duration: 3s;
                            -webkit-animation-timing-function: linear;
                            -moz-animation-timing-function: linear;
                            animation-timing-function: linear;
                            -webkit-animation-iteration-count: infinite;
                            -moz-animation-iteration-count: infinite;
                            animation-iteration-count: infinite;
                          }

                          /*
                    ** MOON
                    */
                          @keyframes am-weather-moon {
                            0% {
                              -webkit-transform: rotate(0deg);
                              -moz-transform: rotate(0deg);
                              -ms-transform: rotate(0deg);
                              transform: rotate(0deg);
                            }

                            50% {
                              -webkit-transform: rotate(15deg);
                              -moz-transform: rotate(15deg);
                              -ms-transform: rotate(15deg);
                              transform: rotate(15deg);
                            }

                            100% {
                              -webkit-transform: rotate(0deg);
                              -moz-transform: rotate(0deg);
                              -ms-transform: rotate(0deg);
                              transform: rotate(0deg);
                            }
                          }

                          .am-weather-moon {
                            -webkit-animation-name: am-weather-moon;
                            -moz-animation-name: am-weather-moon;
                            -ms-animation-name: am-weather-moon;
                            animation-name: am-weather-moon;
                            -webkit-animation-duration: 6s;
                            -moz-animation-duration: 6s;
                            -ms-animation-duration: 6s;
                            animation-duration: 6s;
                            -webkit-animation-timing-function: linear;
                            -moz-animation-timing-function: linear;
                            -ms-animation-timing-function: linear;
                            animation-timing-function: linear;
                            -webkit-animation-iteration-count: infinite;
                            -moz-animation-iteration-count: infinite;
                            -ms-animation-iteration-count: infinite;
                            animation-iteration-count: infinite;
                            -webkit-transform-origin: 12.5px 15.15px 0;
                            /* TODO FF CENTER ISSUE */
                            -moz-transform-origin: 12.5px 15.15px 0;
                            /* TODO FF CENTER ISSUE */
                            -ms-transform-origin: 12.5px 15.15px 0;
                            /* TODO FF CENTER ISSUE */
                            transform-origin: 12.5px 15.15px 0;
                            /* TODO FF CENTER ISSUE */
                          }

                          @keyframes am-weather-moon-star-1 {
                            0% {
                              opacity: 0;
                            }

                            100% {
                              opacity: 1;
                            }
                          }

                          .am-weather-moon-star-1 {
                            -webkit-animation-name: am-weather-moon-star-1;
                            -moz-animation-name: am-weather-moon-star-1;
                            -ms-animation-name: am-weather-moon-star-1;
                            animation-name: am-weather-moon-star-1;
                            -webkit-animation-delay: 3s;
                            -moz-animation-delay: 3s;
                            -ms-animation-delay: 3s;
                            animation-delay: 3s;
                            -webkit-animation-duration: 5s;
                            -moz-animation-duration: 5s;
                            -ms-animation-duration: 5s;
                            animation-duration: 5s;
                            -webkit-animation-timing-function: linear;
                            -moz-animation-timing-function: linear;
                            -ms-animation-timing-function: linear;
                            animation-timing-function: linear;
                            -webkit-animation-iteration-count: 1;
                            -moz-animation-iteration-count: 1;
                            -ms-animation-iteration-count: 1;
                            animation-iteration-count: 1;
                          }

                          @keyframes am-weather-moon-star-2 {
                            0% {
                              opacity: 0;
                            }

                            100% {
                              opacity: 1;
                            }
                          }

                          .am-weather-moon-star-2 {
                            -webkit-animation-name: am-weather-moon-star-2;
                            -moz-animation-name: am-weather-moon-star-2;
                            -ms-animation-name: am-weather-moon-star-2;
                            animation-name: am-weather-moon-star-2;
                            -webkit-animation-delay: 5s;
                            -moz-animation-delay: 5s;
                            -ms-animation-delay: 5s;
                            animation-delay: 5s;
                            -webkit-animation-duration: 4s;
                            -moz-animation-duration: 4s;
                            -ms-animation-duration: 4s;
                            animation-duration: 4s;
                            -webkit-animation-timing-function: linear;
                            -moz-animation-timing-function: linear;
                            -ms-animation-timing-function: linear;
                            animation-timing-function: linear;
                            -webkit-animation-iteration-count: 1;
                            -moz-animation-iteration-count: 1;
                            -ms-animation-iteration-count: 1;
                            animation-iteration-count: 1;
                          }
                          ]]>
                </style>
            </defs>
            <g transform="translate(16,-2)" filter="url(#blur)">
                <g transform="matrix(.8 0 0 .8 16 4)">
                    <g
                        class="am-weather-moon-star-1"
                        style="-moz-animation-delay:3s;-moz-animation-duration:5s;-moz-animation-iteration-count:1;-moz-animation-name:am-weather-moon-star-1;-moz-animation-timing-function:linear;-ms-animation-delay:3s;-ms-animation-duration:5s;-ms-animation-iteration-count:1;-ms-animation-name:am-weather-moon-star-1;-ms-animation-timing-function:linear;-webkit-animation-delay:3s;-webkit-animation-duration:5s;-webkit-animation-iteration-count:1;-webkit-animation-name:am-weather-moon-star-1;-webkit-animation-timing-function:linear">
                        <polygon
                            points="4 4 3.3 5.2 2.7 4 1.5 3.3 2.7 2.7 3.3 1.5 4 2.7 5.2 3.3"
                            fill="#ffa500"
                            stroke-miterlimit="10" />
                    </g>
                    <g
                        class="am-weather-moon-star-2"
                        style="-moz-animation-delay:5s;-moz-animation-duration:4s;-moz-animation-iteration-count:1;-moz-animation-name:am-weather-moon-star-2;-moz-animation-timing-function:linear;-ms-animation-delay:5s;-ms-animation-duration:4s;-ms-animation-iteration-count:1;-ms-animation-name:am-weather-moon-star-2;-ms-animation-timing-function:linear;-webkit-animation-delay:5s;-webkit-animation-duration:4s;-webkit-animation-iteration-count:1;-webkit-animation-name:am-weather-moon-star-2;-webkit-animation-timing-function:linear">
                        <polygon
                            transform="translate(20,10)"
                            points="4 4 3.3 5.2 2.7 4 1.5 3.3 2.7 2.7 3.3 1.5 4 2.7 5.2 3.3"
                            fill="#ffa500"
                            stroke-miterlimit="10" />
                    </g>
                    <g
                        class="am-weather-moon"
                        style="-moz-animation-duration:6s;-moz-animation-iteration-count:infinite;-moz-animation-name:am-weather-moon;-moz-animation-timing-function:linear;-moz-transform-origin:12.5px 15.15px 0;-ms-animation-duration:6s;-ms-animation-iteration-count:infinite;-ms-animation-name:am-weather-moon;-ms-animation-timing-function:linear;-ms-transform-origin:12.5px 15.15px 0;-webkit-animation-duration:6s;-webkit-animation-iteration-count:infinite;-webkit-animation-name:am-weather-moon;-webkit-animation-timing-function:linear;-webkit-transform-origin:12.5px 15.15px 0">
                        <path
                            d="m14.5 13.2c0-3.7 2-6.9 5-8.7-1.5-0.9-3.2-1.3-5-1.3-5.5 0-10 4.5-10 10s4.5 10 10 10c1.8 0 3.5-0.5 5-1.3-3-1.7-5-5-5-8.7z"
                            fill="#ffa500"
                            stroke="#ffa500"
                            stroke-linejoin="round"
                            stroke-width="2" />
                    </g>
                </g>
                <g
                    class="am-weather-cloud-2"
                    style="-moz-animation-duration:3s;-moz-animation-iteration-count:infinite;-moz-animation-name:am-weather-cloud-2;-moz-animation-timing-function:linear;-webkit-animation-duration:3s;-webkit-animation-iteration-count:infinite;-webkit-animation-name:am-weather-cloud-2;-webkit-animation-timing-function:linear">
                    <path
                        transform="translate(-20,-11)"
                        d="m47.7 35.4c0-4.6-3.7-8.2-8.2-8.2-1 0-1.9 0.2-2.8 0.5-0.3-3.4-3.1-6.2-6.6-6.2-3.7 0-6.7 3-6.7 6.7 0 0.8 0.2 1.6 0.4 2.3-0.3-0.1-0.7-0.1-1-0.1-3.7 0-6.7 3-6.7 6.7 0 3.6 2.9 6.6 6.5 6.7h17.2c4.4-0.5 7.9-4 7.9-8.4z"
                        fill="#91c0f8"
                        stroke="#fff"
                        stroke-linejoin="round"
                        stroke-width="1.2" />
                </g>
            </g>
        </svg>
    `,
    cloudy3Day: html`
        <svg viewBox="0 0 55 48" class="cloudy3-day-icon" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <filter id="blur" x="-.20655" y="-.28472" width="1.403" height="1.6944">
                    <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
                    <feOffset dx="0" dy="4" result="offsetblur" />
                    <feComponentTransfer>
                        <feFuncA slope="0.05" type="linear" />
                    </feComponentTransfer>
                    <feMerge>
                        <feMergeNode />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
                <style type="text/css">
                          <![CDATA[
                          /*
                    ** CLOUDS
                    */
                          @keyframes am-weather-cloud-2 {
                            0% {
                              -webkit-transform: translate(0px, 0px);
                              -moz-transform: translate(0px, 0px);
                              -ms-transform: translate(0px, 0px);
                              transform: translate(0px, 0px);
                            }

                            50% {
                              -webkit-transform: translate(2px, 0px);
                              -moz-transform: translate(2px, 0px);
                              -ms-transform: translate(2px, 0px);
                              transform: translate(2px, 0px);
                            }

                            100% {
                              -webkit-transform: translate(0px, 0px);
                              -moz-transform: translate(0px, 0px);
                              -ms-transform: translate(0px, 0px);
                              transform: translate(0px, 0px);
                            }
                          }

                          .am-weather-cloud-2 {
                            -webkit-animation-name: am-weather-cloud-2;
                            -moz-animation-name: am-weather-cloud-2;
                            animation-name: am-weather-cloud-2;
                            -webkit-animation-duration: 3s;
                            -moz-animation-duration: 3s;
                            animation-duration: 3s;
                            -webkit-animation-timing-function: linear;
                            -moz-animation-timing-function: linear;
                            animation-timing-function: linear;
                            -webkit-animation-iteration-count: infinite;
                            -moz-animation-iteration-count: infinite;
                            animation-iteration-count: infinite;
                          }

                          /*
                    ** SUN
                    */
                          @keyframes am-weather-sun {
                            0% {
                              -webkit-transform: rotate(0deg);
                              -moz-transform: rotate(0deg);
                              -ms-transform: rotate(0deg);
                              transform: rotate(0deg);
                            }

                            100% {
                              -webkit-transform: rotate(360deg);
                              -moz-transform: rotate(360deg);
                              -ms-transform: rotate(360deg);
                              transform: rotate(360deg);
                            }
                          }

                          .am-weather-sun {
                            -webkit-animation-name: am-weather-sun;
                            -moz-animation-name: am-weather-sun;
                            -ms-animation-name: am-weather-sun;
                            animation-name: am-weather-sun;
                            -webkit-animation-duration: 9s;
                            -moz-animation-duration: 9s;
                            -ms-animation-duration: 9s;
                            animation-duration: 9s;
                            -webkit-animation-timing-function: linear;
                            -moz-animation-timing-function: linear;
                            -ms-animation-timing-function: linear;
                            animation-timing-function: linear;
                            -webkit-animation-iteration-count: infinite;
                            -moz-animation-iteration-count: infinite;
                            -ms-animation-iteration-count: infinite;
                            animation-iteration-count: infinite;
                          }

                          @keyframes am-weather-sun-shiny {
                            0% {
                              stroke-dasharray: 3px 10px;
                              stroke-dashoffset: 0px;
                            }

                            50% {
                              stroke-dasharray: 0.1px 10px;
                              stroke-dashoffset: -1px;
                            }

                            100% {
                              stroke-dasharray: 3px 10px;
                              stroke-dashoffset: 0px;
                            }
                          }

                          .am-weather-sun-shiny line {
                            -webkit-animation-name: am-weather-sun-shiny;
                            -moz-animation-name: am-weather-sun-shiny;
                            -ms-animation-name: am-weather-sun-shiny;
                            animation-name: am-weather-sun-shiny;
                            -webkit-animation-duration: 2s;
                            -moz-animation-duration: 2s;
                            -ms-animation-duration: 2s;
                            animation-duration: 2s;
                            -webkit-animation-timing-function: linear;
                            -moz-animation-timing-function: linear;
                            -ms-animation-timing-function: linear;
                            animation-timing-function: linear;
                            -webkit-animation-iteration-count: infinite;
                            -moz-animation-iteration-count: infinite;
                            -ms-animation-iteration-count: infinite;
                            animation-iteration-count: infinite;
                          }
                          ]]>
                </style>
            </defs>
            <g transform="translate(16,-2)" filter="url(#blur)">
                <g transform="translate(0,16)">
                    <g
                        class="am-weather-sun"
                        style="-moz-animation-duration:9s;-moz-animation-iteration-count:infinite;-moz-animation-name:am-weather-sun;-moz-animation-timing-function:linear;-ms-animation-duration:9s;-ms-animation-iteration-count:infinite;-ms-animation-name:am-weather-sun;-ms-animation-timing-function:linear;-webkit-animation-duration:9s;-webkit-animation-iteration-count:infinite;-webkit-animation-name:am-weather-sun;-webkit-animation-timing-function:linear">
                        <line
                            transform="translate(0,9)"
                            y2="3"
                            fill="none"
                            stroke="#ffa500"
                            stroke-linecap="round"
                            stroke-width="2" />
                        <g transform="rotate(45)">
                            <line
                                transform="translate(0,9)"
                                y2="3"
                                fill="none"
                                stroke="#ffa500"
                                stroke-linecap="round"
                                stroke-width="2" />
                        </g>
                        <g transform="rotate(90)">
                            <line
                                transform="translate(0,9)"
                                y2="3"
                                fill="none"
                                stroke="#ffa500"
                                stroke-linecap="round"
                                stroke-width="2" />
                        </g>
                        <g transform="rotate(135)">
                            <line
                                transform="translate(0,9)"
                                y2="3"
                                fill="none"
                                stroke="#ffa500"
                                stroke-linecap="round"
                                stroke-width="2" />
                        </g>
                        <g transform="scale(-1)">
                            <line
                                transform="translate(0,9)"
                                y2="3"
                                fill="none"
                                stroke="#ffa500"
                                stroke-linecap="round"
                                stroke-width="2" />
                        </g>
                        <g transform="rotate(225)">
                            <line
                                transform="translate(0,9)"
                                y2="3"
                                fill="none"
                                stroke="#ffa500"
                                stroke-linecap="round"
                                stroke-width="2" />
                        </g>
                        <g transform="rotate(-90)">
                            <line
                                transform="translate(0,9)"
                                y2="3"
                                fill="none"
                                stroke="#ffa500"
                                stroke-linecap="round"
                                stroke-width="2" />
                        </g>
                        <g transform="rotate(-45)">
                            <line
                                transform="translate(0,9)"
                                y2="3"
                                fill="none"
                                stroke="#ffa500"
                                stroke-linecap="round"
                                stroke-width="2" />
                        </g>
                    </g>
                    <circle r="5" fill="#ffa500" stroke="#ffa500" stroke-width="2" />
                </g>
                <g
                    class="am-weather-cloud-3"
                    style="-moz-animation-duration:3s;-moz-animation-iteration-count:infinite;-moz-animation-name:am-weather-cloud-2;-moz-animation-timing-function:linear;-webkit-animation-duration:3s;-webkit-animation-iteration-count:infinite;-webkit-animation-name:am-weather-cloud-2;-webkit-animation-timing-function:linear">
                    <path
                        transform="translate(-20,-11)"
                        d="m47.7 35.4c0-4.6-3.7-8.2-8.2-8.2-1 0-1.9 0.2-2.8 0.5-0.3-3.4-3.1-6.2-6.6-6.2-3.7 0-6.7 3-6.7 6.7 0 0.8 0.2 1.6 0.4 2.3-0.3-0.1-0.7-0.1-1-0.1-3.7 0-6.7 3-6.7 6.7 0 3.6 2.9 6.6 6.5 6.7h17.2c4.4-0.5 7.9-4 7.9-8.4z"
                        fill="#57a0ee"
                        stroke="#fff"
                        stroke-linejoin="round"
                        stroke-width="1.2" />
                </g>
            </g>
        </svg>
    `,
    cloudy3Night: html`
        <svg viewBox="0 0 55 48" class="cloudy3-night-icon" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <filter id="blur" x="-.19471" y="-.26087" width="1.3744" height="1.6884">
                    <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
                    <feOffset dx="0" dy="4" result="offsetblur" />
                    <feComponentTransfer>
                        <feFuncA slope="0.05" type="linear" />
                    </feComponentTransfer>
                    <feMerge>
                        <feMergeNode />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
                <style type="text/css">
                          <![CDATA[
                          /*
                    ** CLOUDS
                    */
                          @keyframes am-weather-cloud {
                            0% {
                              -webkit-transform: translate(0px, 0px);
                              -moz-transform: translate(0px, 0px);
                              -ms-transform: translate(0px, 0px);
                              transform: translate(0px, 0px);
                            }

                            50% {
                              -webkit-transform: translate(2px, 0px);
                              -moz-transform: translate(2px, 0px);
                              -ms-transform: translate(2px, 0px);
                              transform: translate(2px, 0px);
                            }

                            100% {
                              -webkit-transform: translate(0px, 0px);
                              -moz-transform: translate(0px, 0px);
                              -ms-transform: translate(0px, 0px);
                              transform: translate(0px, 0px);
                            }
                          }

                          .am-weather-cloud {
                            -webkit-animation-name: am-weather-cloud;
                            -moz-animation-name: am-weather-cloud;
                            animation-name: am-weather-cloud;
                            -webkit-animation-duration: 3s;
                            -moz-animation-duration: 3s;
                            animation-duration: 3s;
                            -webkit-animation-timing-function: linear;
                            -moz-animation-timing-function: linear;
                            animation-timing-function: linear;
                            -webkit-animation-iteration-count: infinite;
                            -moz-animation-iteration-count: infinite;
                            animation-iteration-count: infinite;
                          }

                          /*
                    ** MOON
                    */
                          @keyframes am-weather-moon {
                            0% {
                              -webkit-transform: rotate(0deg);
                              -moz-transform: rotate(0deg);
                              -ms-transform: rotate(0deg);
                              transform: rotate(0deg);
                            }

                            50% {
                              -webkit-transform: rotate(15deg);
                              -moz-transform: rotate(15deg);
                              -ms-transform: rotate(15deg);
                              transform: rotate(15deg);
                            }

                            100% {
                              -webkit-transform: rotate(0deg);
                              -moz-transform: rotate(0deg);
                              -ms-transform: rotate(0deg);
                              transform: rotate(0deg);
                            }
                          }

                          .am-weather-moon {
                            -webkit-animation-name: am-weather-moon;
                            -moz-animation-name: am-weather-moon;
                            -ms-animation-name: am-weather-moon;
                            animation-name: am-weather-moon;
                            -webkit-animation-duration: 6s;
                            -moz-animation-duration: 6s;
                            -ms-animation-duration: 6s;
                            animation-duration: 6s;
                            -webkit-animation-timing-function: linear;
                            -moz-animation-timing-function: linear;
                            -ms-animation-timing-function: linear;
                            animation-timing-function: linear;
                            -webkit-animation-iteration-count: infinite;
                            -moz-animation-iteration-count: infinite;
                            -ms-animation-iteration-count: infinite;
                            animation-iteration-count: infinite;
                            -webkit-transform-origin: 12.5px 15.15px 0;
                            /* TODO FF CENTER ISSUE */
                            -moz-transform-origin: 12.5px 15.15px 0;
                            /* TODO FF CENTER ISSUE */
                            -ms-transform-origin: 12.5px 15.15px 0;
                            /* TODO FF CENTER ISSUE */
                            transform-origin: 12.5px 15.15px 0;
                            /* TODO FF CENTER ISSUE */
                          }

                          @keyframes am-weather-moon-star-1 {
                            0% {
                              opacity: 0;
                            }

                            100% {
                              opacity: 1;
                            }
                          }

                          .am-weather-moon-star-1 {
                            -webkit-animation-name: am-weather-moon-star-1;
                            -moz-animation-name: am-weather-moon-star-1;
                            -ms-animation-name: am-weather-moon-star-1;
                            animation-name: am-weather-moon-star-1;
                            -webkit-animation-delay: 3s;
                            -moz-animation-delay: 3s;
                            -ms-animation-delay: 3s;
                            animation-delay: 3s;
                            -webkit-animation-duration: 5s;
                            -moz-animation-duration: 5s;
                            -ms-animation-duration: 5s;
                            animation-duration: 5s;
                            -webkit-animation-timing-function: linear;
                            -moz-animation-timing-function: linear;
                            -ms-animation-timing-function: linear;
                            animation-timing-function: linear;
                            -webkit-animation-iteration-count: 1;
                            -moz-animation-iteration-count: 1;
                            -ms-animation-iteration-count: 1;
                            animation-iteration-count: 1;
                          }

                          @keyframes am-weather-moon-star-2 {
                            0% {
                              opacity: 0;
                            }

                            100% {
                              opacity: 1;
                            }
                          }

                          .am-weather-moon-star-2 {
                            -webkit-animation-name: am-weather-moon-star-2;
                            -moz-animation-name: am-weather-moon-star-2;
                            -ms-animation-name: am-weather-moon-star-2;
                            animation-name: am-weather-moon-star-2;
                            -webkit-animation-delay: 5s;
                            -moz-animation-delay: 5s;
                            -ms-animation-delay: 5s;
                            animation-delay: 5s;
                            -webkit-animation-duration: 4s;
                            -moz-animation-duration: 4s;
                            -ms-animation-duration: 4s;
                            animation-duration: 4s;
                            -webkit-animation-timing-function: linear;
                            -moz-animation-timing-function: linear;
                            -ms-animation-timing-function: linear;
                            animation-timing-function: linear;
                            -webkit-animation-iteration-count: 1;
                            -moz-animation-iteration-count: 1;
                            -ms-animation-iteration-count: 1;
                            animation-iteration-count: 1;
                          }
                          ]]>
                </style>
            </defs>
            <g transform="translate(16,-2)" filter="url(#blur)">
                <g transform="matrix(.8 0 0 .8 16 4)">
                    <g
                        class="am-weather-moon-star-1"
                        style="-moz-animation-delay:3s;-moz-animation-duration:5s;-moz-animation-iteration-count:1;-moz-animation-name:am-weather-moon-star-1;-moz-animation-timing-function:linear;-ms-animation-delay:3s;-ms-animation-duration:5s;-ms-animation-iteration-count:1;-ms-animation-name:am-weather-moon-star-1;-ms-animation-timing-function:linear;-webkit-animation-delay:3s;-webkit-animation-duration:5s;-webkit-animation-iteration-count:1;-webkit-animation-name:am-weather-moon-star-1;-webkit-animation-timing-function:linear">
                        <polygon
                            points="3.3 1.5 4 2.7 5.2 3.3 4 4 3.3 5.2 2.7 4 1.5 3.3 2.7 2.7"
                            fill="#ffa500"
                            stroke-miterlimit="10" />
                    </g>
                    <g
                        class="am-weather-moon-star-2"
                        style="-moz-animation-delay:5s;-moz-animation-duration:4s;-moz-animation-iteration-count:1;-moz-animation-name:am-weather-moon-star-2;-moz-animation-timing-function:linear;-ms-animation-delay:5s;-ms-animation-duration:4s;-ms-animation-iteration-count:1;-ms-animation-name:am-weather-moon-star-2;-ms-animation-timing-function:linear;-webkit-animation-delay:5s;-webkit-animation-duration:4s;-webkit-animation-iteration-count:1;-webkit-animation-name:am-weather-moon-star-2;-webkit-animation-timing-function:linear">
                        <polygon
                            transform="translate(20,10)"
                            points="3.3 1.5 4 2.7 5.2 3.3 4 4 3.3 5.2 2.7 4 1.5 3.3 2.7 2.7"
                            fill="#ffa500"
                            stroke-miterlimit="10" />
                    </g>
                    <g
                        class="am-weather-moon"
                        style="-moz-animation-duration:6s;-moz-animation-iteration-count:infinite;-moz-animation-name:am-weather-moon;-moz-animation-timing-function:linear;-moz-transform-origin:12.5px 15.15px 0;-ms-animation-duration:6s;-ms-animation-iteration-count:infinite;-ms-animation-name:am-weather-moon;-ms-animation-timing-function:linear;-ms-transform-origin:12.5px 15.15px 0;-webkit-animation-duration:6s;-webkit-animation-iteration-count:infinite;-webkit-animation-name:am-weather-moon;-webkit-animation-timing-function:linear;-webkit-transform-origin:12.5px 15.15px 0">
                        <path
                            d="m14.5 13.2c0-3.7 2-6.9 5-8.7-1.5-0.9-3.2-1.3-5-1.3-5.5 0-10 4.5-10 10s4.5 10 10 10c1.8 0 3.5-0.5 5-1.3-3-1.7-5-5-5-8.7z"
                            fill="#ffa500"
                            stroke="#ffa500"
                            stroke-linejoin="round"
                            stroke-width="2" />
                    </g>
                </g>
                <g
                    class="am-weather-cloud"
                    style="-moz-animation-duration:3s;-moz-animation-iteration-count:infinite;-moz-animation-name:am-weather-cloud;-moz-animation-timing-function:linear;-webkit-animation-duration:3s;-webkit-animation-iteration-count:infinite;-webkit-animation-name:am-weather-cloud;-webkit-animation-timing-function:linear">
                    <path
                        transform="translate(-20,-11)"
                        d="m47.7 35.4c0-4.6-3.7-8.2-8.2-8.2-1 0-1.9 0.2-2.8 0.5-0.3-3.4-3.1-6.2-6.6-6.2-3.7 0-6.7 3-6.7 6.7 0 0.8 0.2 1.6 0.4 2.3-0.3-0.1-0.7-0.1-1-0.1-3.7 0-6.7 3-6.7 6.7 0 3.6 2.9 6.6 6.5 6.7h17.2c4.4-0.5 7.9-4 7.9-8.4z"
                        fill="#57a0ee"
                        stroke="#fff"
                        stroke-linejoin="round"
                        stroke-width="1.2" />
                </g>
            </g>
        </svg>
    `,
    cloudy: html`
        <svg viewBox="0 0 55 48" class="cloudy-icon" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <filter id="blur" x="-.24684" y="-.27097" width="1.4937" height="1.6939">
                    <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
                    <feOffset dx="0" dy="4" result="offsetblur" />
                    <feComponentTransfer>
                        <feFuncA slope="0.05" type="linear" />
                    </feComponentTransfer>
                    <feMerge>
                        <feMergeNode />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
                <style type="text/css">
                          <![CDATA[
                          /*
                    ** CLOUDS
                    */
                          @keyframes am-weather-cloud-1 {
                            0% {
                              -webkit-transform: translate(-5px, 0px);
                              -moz-transform: translate(-5px, 0px);
                              -ms-transform: translate(-5px, 0px);
                              transform: translate(-5px, 0px);
                            }

                            50% {
                              -webkit-transform: translate(10px, 0px);
                              -moz-transform: translate(10px, 0px);
                              -ms-transform: translate(10px, 0px);
                              transform: translate(10px, 0px);
                            }

                            100% {
                              -webkit-transform: translate(-5px, 0px);
                              -moz-transform: translate(-5px, 0px);
                              -ms-transform: translate(-5px, 0px);
                              transform: translate(-5px, 0px);
                            }
                          }

                          .am-weather-cloud-1 {
                            -webkit-animation-name: am-weather-cloud-1;
                            -moz-animation-name: am-weather-cloud-1;
                            animation-name: am-weather-cloud-1;
                            -webkit-animation-duration: 7s;
                            -moz-animation-duration: 7s;
                            animation-duration: 7s;
                            -webkit-animation-timing-function: linear;
                            -moz-animation-timing-function: linear;
                            animation-timing-function: linear;
                            -webkit-animation-iteration-count: infinite;
                            -moz-animation-iteration-count: infinite;
                            animation-iteration-count: infinite;
                          }

                          @keyframes am-weather-cloud-2 {
                            0% {
                              -webkit-transform: translate(0px, 0px);
                              -moz-transform: translate(0px, 0px);
                              -ms-transform: translate(0px, 0px);
                              transform: translate(0px, 0px);
                            }

                            50% {
                              -webkit-transform: translate(2px, 0px);
                              -moz-transform: translate(2px, 0px);
                              -ms-transform: translate(2px, 0px);
                              transform: translate(2px, 0px);
                            }

                            100% {
                              -webkit-transform: translate(0px, 0px);
                              -moz-transform: translate(0px, 0px);
                              -ms-transform: translate(0px, 0px);
                              transform: translate(0px, 0px);
                            }
                          }

                          .am-weather-cloud-2 {
                            -webkit-animation-name: am-weather-cloud-2;
                            -moz-animation-name: am-weather-cloud-2;
                            animation-name: am-weather-cloud-2;
                            -webkit-animation-duration: 3s;
                            -moz-animation-duration: 3s;
                            animation-duration: 3s;
                            -webkit-animation-timing-function: linear;
                            -moz-animation-timing-function: linear;
                            animation-timing-function: linear;
                            -webkit-animation-iteration-count: infinite;
                            -moz-animation-iteration-count: infinite;
                            animation-iteration-count: infinite;
                          }
                          ]]>
                </style>
            </defs>
            <g id="cloudy" transform="translate(16,-2)" filter="url(#blur)">
                <g
                    class="am-weather-cloud-1"
                    style="-moz-animation-duration:7s;-moz-animation-iteration-count:infinite;-moz-animation-name:am-weather-cloud-1;-moz-animation-timing-function:linear;-webkit-animation-duration:7s;-webkit-animation-iteration-count:infinite;-webkit-animation-name:am-weather-cloud-1;-webkit-animation-timing-function:linear">
                    <path
                        transform="matrix(.6 0 0 .6 -10 -8)"
                        d="m47.7 35.4c0-4.6-3.7-8.2-8.2-8.2-1 0-1.9 0.2-2.8 0.5-0.3-3.4-3.1-6.2-6.6-6.2-3.7 0-6.7 3-6.7 6.7 0 0.8 0.2 1.6 0.4 2.3-0.3-0.1-0.7-0.1-1-0.1-3.7 0-6.7 3-6.7 6.7 0 3.6 2.9 6.6 6.5 6.7h17.2c4.4-0.5 7.9-4 7.9-8.4z"
                        fill="#91c0f8"
                        stroke="#fff"
                        stroke-linejoin="round"
                        stroke-width="1.2" />
                </g>
                <g
                    class="am-weather-cloud-2"
                    style="-moz-animation-duration:3s;-moz-animation-iteration-count:infinite;-moz-animation-name:am-weather-cloud-2;-moz-animation-timing-function:linear;-webkit-animation-duration:3s;-webkit-animation-iteration-count:infinite;-webkit-animation-name:am-weather-cloud-2;-webkit-animation-timing-function:linear">
                    <path
                        transform="translate(-20,-11)"
                        d="m47.7 35.4c0-4.6-3.7-8.2-8.2-8.2-1 0-1.9 0.2-2.8 0.5-0.3-3.4-3.1-6.2-6.6-6.2-3.7 0-6.7 3-6.7 6.7 0 0.8 0.2 1.6 0.4 2.3-0.3-0.1-0.7-0.1-1-0.1-3.7 0-6.7 3-6.7 6.7 0 3.6 2.9 6.6 6.5 6.7h17.2c4.4-0.5 7.9-4 7.9-8.4z"
                        fill="#57a0ee"
                        stroke="#fff"
                        stroke-linejoin="round"
                        stroke-width="1.2" />
                </g>
            </g>
        </svg>
    `,
    dust: html`
        <svg viewBox="0 0 55 48" class="dust-icon" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <filter id="blur" x="-.24684" y="-.27097" width="1.4937" height="1.6939">
                    <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
                    <feOffset dx="0" dy="4" result="offsetblur" />
                    <feComponentTransfer>
                        <feFuncA slope="0.05" type="linear" />
                    </feComponentTransfer>
                    <feMerge>
                        <feMergeNode />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>
            <g transform="translate(16 -2)" filter="url(#blur)">
                <g
                    class="am-weather-wind"
                    transform="translate(-16,10)"
                    fill="none"
                    stroke="#cd9e73"
                    stroke-linecap="round"
                    stroke-width="2">
                    <path stroke-dasharray="150 10" d="M25.5 5A4 4 0 1 1 29 11H10">
                        <animate
                            attributeName="stroke-dashoffset"
                            dur="3s"
                            repeatCount="indefinite"
                            values="0; 160"
                            begin="0s" />
                    </path>
                    <path stroke-dasharray="144 16" d="M39.5 11A4 4 0 1 1 43 17H6">
                        <animate
                            attributeName="stroke-dashoffset"
                            dur="3s"
                            repeatCount="indefinite"
                            values="0; 160"
                            begin="0.5s" />
                    </path>
                    <path stroke-dasharray="150 10" d="M28.5 29A4 4 0 1 0 32 23H15">
                        <animate
                            attributeName="stroke-dashoffset"
                            dur="3s"
                            repeatCount="indefinite"
                            values="0; 160"
                            begin="0.25s" />
                    </path>
                </g>
            </g>
        </svg>
    `,
    fogDay: html`
        <svg viewBox="0 0 55 48" class="fog-day-icon" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <filter id="blur" x="-.20655" y="-.21122" width="1.403" height="1.4997">
                    <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
                    <feOffset dx="0" dy="4" result="offsetblur" />
                    <feComponentTransfer>
                        <feFuncA slope="0.05" type="linear" />
                    </feComponentTransfer>
                    <feMerge>
                        <feMergeNode />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
                <style type="text/css">
                          <![CDATA[
                          /*
                    ** SUN
                    */
                          @keyframes am-weather-sun {
                            0% {
                              -webkit-transform: rotate(0deg);
                              -moz-transform: rotate(0deg);
                              -ms-transform: rotate(0deg);
                              transform: rotate(0deg);
                            }

                            100% {
                              -webkit-transform: rotate(360deg);
                              -moz-transform: rotate(360deg);
                              -ms-transform: rotate(360deg);
                              transform: rotate(360deg);
                            }
                          }

                          .am-weather-sun {
                            -webkit-animation-name: am-weather-sun;
                            -moz-animation-name: am-weather-sun;
                            -ms-animation-name: am-weather-sun;
                            animation-name: am-weather-sun;
                            -webkit-animation-duration: 9s;
                            -moz-animation-duration: 9s;
                            -ms-animation-duration: 9s;
                            animation-duration: 9s;
                            -webkit-animation-timing-function: linear;
                            -moz-animation-timing-function: linear;
                            -ms-animation-timing-function: linear;
                            animation-timing-function: linear;
                            -webkit-animation-iteration-count: infinite;
                            -moz-animation-iteration-count: infinite;
                            -ms-animation-iteration-count: infinite;
                            animation-iteration-count: infinite;
                          }

                          /*
                    ** FOG
                    */
                          @keyframes am-weather-fog-1 {
                            0% {
                              transform: translate(0px, 0px)
                            }

                            50% {
                              transform: translate(7px, 0px)
                            }

                            100% {
                              transform: translate(0px, 0px)
                            }
                          }

                          .am-weather-fog-1 {
                            -webkit-animation-name: am-weather-fog-1;
                            -moz-animation-name: am-weather-fog-1;
                            -ms-animation-name: am-weather-fog-1;
                            animation-name: am-weather-fog-1;
                            -webkit-animation-duration: 8s;
                            -moz-animation-duration: 8s;
                            -ms-animation-duration: 8s;
                            animation-duration: 8s;
                            -webkit-animation-timing-function: linear;
                            -moz-animation-timing-function: linear;
                            -ms-animation-timing-function: linear;
                            animation-timing-function: linear;
                            -webkit-animation-iteration-count: infinite;
                            -moz-animation-iteration-count: infinite;
                            -ms-animation-iteration-count: infinite;
                            animation-iteration-count: infinite;
                          }

                          @keyframes am-weather-fog-2 {
                            0% {
                              transform: translate(0px, 0px)
                            }

                            21.05% {
                              transform: translate(-6px, 0px)
                            }

                            78.95% {
                              transform: translate(9px, 0px)
                            }

                            100% {
                              transform: translate(0px, 0px)
                            }
                          }

                          .am-weather-fog-2 {
                            -webkit-animation-name: am-weather-fog-2;
                            -moz-animation-name: am-weather-fog-2;
                            -ms-animation-name: am-weather-fog-2;
                            animation-name: am-weather-fog-2;
                            -webkit-animation-duration: 20s;
                            -moz-animation-duration: 20s;
                            -ms-animation-duration: 20s;
                            animation-duration: 20s;
                            -webkit-animation-timing-function: linear;
                            -moz-animation-timing-function: linear;
                            -ms-animation-timing-function: linear;
                            animation-timing-function: linear;
                            -webkit-animation-iteration-count: infinite;
                            -moz-animation-iteration-count: infinite;
                            -ms-animation-iteration-count: infinite;
                            animation-iteration-count: infinite;
                          }

                          @keyframes am-weather-fog-3 {
                            0% {
                              transform: translate(0px, 0px)
                            }

                            25% {
                              transform: translate(4px, 0px)
                            }

                            75% {
                              transform: translate(-4px, 0px)
                            }

                            100% {
                              transform: translate(0px, 0px)
                            }
                          }

                          .am-weather-fog-3 {
                            -webkit-animation-name: am-weather-fog-3;
                            -moz-animation-name: am-weather-fog-3;
                            -ms-animation-name: am-weather-fog-3;
                            animation-name: am-weather-fog-3;
                            -webkit-animation-duration: 6s;
                            -moz-animation-duration: 6s;
                            -ms-animation-duration: 6s;
                            animation-duration: 6s;
                            -webkit-animation-timing-function: linear;
                            -moz-animation-timing-function: linear;
                            -ms-animation-timing-function: linear;
                            animation-timing-function: linear;
                            -webkit-animation-iteration-count: infinite;
                            -moz-animation-iteration-count: infinite;
                            -ms-animation-iteration-count: infinite;
                            animation-iteration-count: infinite;
                          }

                          @keyframes am-weather-fog-4 {
                            0% {
                              transform: translate(0px, 0px)
                            }

                            50% {
                              transform: translate(-4px, 0px)
                            }

                            100% {
                              transform: translate(0px, 0px)
                            }
                          }

                          .am-weather-fog-4 {
                            -webkit-animation-name: am-weather-fog-4;
                            -moz-animation-name: am-weather-fog-4;
                            -ms-animation-name: am-weather-fog-4;
                            animation-name: am-weather-fog-4;
                            -webkit-animation-duration: 6s;
                            -moz-animation-duration: 6s;
                            -ms-animation-duration: 6s;
                            animation-duration: 6s;
                            -webkit-animation-timing-function: linear;
                            -moz-animation-timing-function: linear;
                            -ms-animation-timing-function: linear;
                            animation-timing-function: linear;
                            -webkit-animation-iteration-count: infinite;
                            -moz-animation-iteration-count: infinite;
                            -ms-animation-iteration-count: infinite;
                            animation-iteration-count: infinite;
                          }
                          ]]>
                </style>
            </defs>
            <g transform="translate(16,-2)" filter="url(#blur)">
                <g transform="translate(0,16)">
                    <g class="am-weather-sun" transform="translate(0,16)">
                        <line
                            transform="translate(0,9)"
                            y2="3"
                            fill="none"
                            stroke="#ffc04a"
                            stroke-linecap="round"
                            stroke-width="2" />
                        <g transform="rotate(45)">
                            <line
                                transform="translate(0,9)"
                                y2="3"
                                fill="none"
                                stroke="#ffc04a"
                                stroke-linecap="round"
                                stroke-width="2" />
                        </g>
                        <g transform="rotate(90)">
                            <line
                                transform="translate(0,9)"
                                y2="3"
                                fill="none"
                                stroke="#ffc04a"
                                stroke-linecap="round"
                                stroke-width="2" />
                        </g>
                        <g transform="rotate(135)">
                            <line
                                transform="translate(0,9)"
                                y2="3"
                                fill="none"
                                stroke="#ffc04a"
                                stroke-linecap="round"
                                stroke-width="2" />
                        </g>
                        <g transform="scale(-1)">
                            <line
                                transform="translate(0,9)"
                                y2="3"
                                fill="none"
                                stroke="#ffc04a"
                                stroke-linecap="round"
                                stroke-width="2" />
                            F
                        </g>
                        <g transform="rotate(225)">
                            <line
                                transform="translate(0,9)"
                                y2="3"
                                fill="none"
                                stroke="#ffc04a"
                                stroke-linecap="round"
                                stroke-width="2" />
                        </g>
                        <g transform="rotate(-90)">
                            <line
                                transform="translate(0,9)"
                                y2="3"
                                fill="none"
                                stroke="#ffc04a"
                                stroke-linecap="round"
                                stroke-width="2" />
                        </g>
                        <g transform="rotate(-45)">
                            <line
                                transform="translate(0,9)"
                                y2="3"
                                fill="none"
                                stroke="#ffc04a"
                                stroke-linecap="round"
                                stroke-width="2" />
                        </g>
                        <circle r="5" fill="#ffc04a" stroke="#ffc04a" stroke-width="2" />
                    </g>
                </g>
                <g
                    class="am-weather-fog"
                    transform="translate(-10,20)"
                    fill="none"
                    stroke="#c6deff"
                    stroke-linecap="round"
                    stroke-width="2">
                    <line class="am-weather-fog-1" y1="0" y2="0" x1="1" x2="37" stroke-dasharray="3, 5, 17, 5, 7" />
                    <line class="am-weather-fog-2" y1="5" y2="5" x1="9" x2="33" stroke-dasharray="11, 7, 15" />
                    <line class="am-weather-fog-3" y1="10" y2="10" x1="5" x2="40" stroke-dasharray="11, 7, 3, 5, 9" />
                    <line class="am-weather-fog-4" y1="15" y2="15" x1="7" x2="42" stroke-dasharray="13, 5, 9, 5, 3" />
                </g>
            </g>
        </svg>
    `,
    fogNight: html`
        <svg viewBox="0 0 55 48" class="fog-night-icon" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <filter id="blur" x="-.20655" y="-.21122" width="1.403" height="1.4997">
                    <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
                    <feOffset dx="0" dy="4" result="offsetblur" />
                    <feComponentTransfer>
                        <feFuncA slope="0.05" type="linear" />
                    </feComponentTransfer>
                    <feMerge>
                        <feMergeNode />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
                <style type="text/css">
                          <![CDATA[
                          /*
                    ** MOON
                    */
                          @keyframes am-weather-moon {
                            0% {
                              -webkit-transform: rotate(0deg);
                              -moz-transform: rotate(0deg);
                              -ms-transform: rotate(0deg);
                              transform: rotate(0deg);
                            }

                            50% {
                              -webkit-transform: rotate(15deg);
                              -moz-transform: rotate(15deg);
                              -ms-transform: rotate(15deg);
                              transform: rotate(15deg);
                            }

                            100% {
                              -webkit-transform: rotate(0deg);
                              -moz-transform: rotate(0deg);
                              -ms-transform: rotate(0deg);
                              transform: rotate(0deg);
                            }
                          }

                          .am-weather-moon {
                            -webkit-animation-name: am-weather-moon;
                            -moz-animation-name: am-weather-moon;
                            -ms-animation-name: am-weather-moon;
                            animation-name: am-weather-moon;
                            -webkit-animation-duration: 6s;
                            -moz-animation-duration: 6s;
                            -ms-animation-duration: 6s;
                            animation-duration: 6s;
                            -webkit-animation-timing-function: linear;
                            -moz-animation-timing-function: linear;
                            -ms-animation-timing-function: linear;
                            animation-timing-function: linear;
                            -webkit-animation-iteration-count: infinite;
                            -moz-animation-iteration-count: infinite;
                            -ms-animation-iteration-count: infinite;
                            animation-iteration-count: infinite;
                            -webkit-transform-origin: 12.5px 15.15px 0;
                            /* TODO FF CENTER ISSUE */
                            -moz-transform-origin: 12.5px 15.15px 0;
                            /* TODO FF CENTER ISSUE */
                            -ms-transform-origin: 12.5px 15.15px 0;
                            /* TODO FF CENTER ISSUE */
                            transform-origin: 12.5px 15.15px 0;
                            /* TODO FF CENTER ISSUE */
                          }

                          @keyframes am-weather-moon-star-1 {
                            0% {
                              opacity: 0;
                            }

                            100% {
                              opacity: 1;
                            }
                          }

                          .am-weather-moon-star-1 {
                            -webkit-animation-name: am-weather-moon-star-1;
                            -moz-animation-name: am-weather-moon-star-1;
                            -ms-animation-name: am-weather-moon-star-1;
                            animation-name: am-weather-moon-star-1;
                            -webkit-animation-delay: 3s;
                            -moz-animation-delay: 3s;
                            -ms-animation-delay: 3s;
                            animation-delay: 3s;
                            -webkit-animation-duration: 5s;
                            -moz-animation-duration: 5s;
                            -ms-animation-duration: 5s;
                            animation-duration: 5s;
                            -webkit-animation-timing-function: linear;
                            -moz-animation-timing-function: linear;
                            -ms-animation-timing-function: linear;
                            animation-timing-function: linear;
                            -webkit-animation-iteration-count: 1;
                            -moz-animation-iteration-count: 1;
                            -ms-animation-iteration-count: 1;
                            animation-iteration-count: 1;
                          }

                          @keyframes am-weather-moon-star-2 {
                            0% {
                              opacity: 0;
                            }

                            100% {
                              opacity: 1;
                            }
                          }

                          .am-weather-moon-star-2 {
                            -webkit-animation-name: am-weather-moon-star-2;
                            -moz-animation-name: am-weather-moon-star-2;
                            -ms-animation-name: am-weather-moon-star-2;
                            animation-name: am-weather-moon-star-2;
                            -webkit-animation-delay: 5s;
                            -moz-animation-delay: 5s;
                            -ms-animation-delay: 5s;
                            animation-delay: 5s;
                            -webkit-animation-duration: 4s;
                            -moz-animation-duration: 4s;
                            -ms-animation-duration: 4s;
                            animation-duration: 4s;
                            -webkit-animation-timing-function: linear;
                            -moz-animation-timing-function: linear;
                            -ms-animation-timing-function: linear;
                            animation-timing-function: linear;
                            -webkit-animation-iteration-count: 1;
                            -moz-animation-iteration-count: 1;
                            -ms-animation-iteration-count: 1;
                            animation-iteration-count: 1;
                          }

                          /*
                    ** FOG
                    */
                          @keyframes am-weather-fog-1 {
                            0% {
                              transform: translate(0px, 0px)
                            }

                            50% {
                              transform: translate(7px, 0px)
                            }

                            100% {
                              transform: translate(0px, 0px)
                            }
                          }

                          .am-weather-fog-1 {
                            -webkit-animation-name: am-weather-fog-1;
                            -moz-animation-name: am-weather-fog-1;
                            -ms-animation-name: am-weather-fog-1;
                            animation-name: am-weather-fog-1;
                            -webkit-animation-duration: 8s;
                            -moz-animation-duration: 8s;
                            -ms-animation-duration: 8s;
                            animation-duration: 8s;
                            -webkit-animation-timing-function: linear;
                            -moz-animation-timing-function: linear;
                            -ms-animation-timing-function: linear;
                            animation-timing-function: linear;
                            -webkit-animation-iteration-count: infinite;
                            -moz-animation-iteration-count: infinite;
                            -ms-animation-iteration-count: infinite;
                            animation-iteration-count: infinite;
                          }

                          @keyframes am-weather-fog-2 {
                            0% {
                              transform: translate(0px, 0px)
                            }

                            21.05% {
                              transform: translate(-6px, 0px)
                            }

                            78.95% {
                              transform: translate(9px, 0px)
                            }

                            100% {
                              transform: translate(0px, 0px)
                            }
                          }

                          .am-weather-fog-2 {
                            -webkit-animation-name: am-weather-fog-2;
                            -moz-animation-name: am-weather-fog-2;
                            -ms-animation-name: am-weather-fog-2;
                            animation-name: am-weather-fog-2;
                            -webkit-animation-duration: 20s;
                            -moz-animation-duration: 20s;
                            -ms-animation-duration: 20s;
                            animation-duration: 20s;
                            -webkit-animation-timing-function: linear;
                            -moz-animation-timing-function: linear;
                            -ms-animation-timing-function: linear;
                            animation-timing-function: linear;
                            -webkit-animation-iteration-count: infinite;
                            -moz-animation-iteration-count: infinite;
                            -ms-animation-iteration-count: infinite;
                            animation-iteration-count: infinite;
                          }

                          @keyframes am-weather-fog-3 {
                            0% {
                              transform: translate(0px, 0px)
                            }

                            25% {
                              transform: translate(4px, 0px)
                            }

                            75% {
                              transform: translate(-4px, 0px)
                            }

                            100% {
                              transform: translate(0px, 0px)
                            }
                          }

                          .am-weather-fog-3 {
                            -webkit-animation-name: am-weather-fog-3;
                            -moz-animation-name: am-weather-fog-3;
                            -ms-animation-name: am-weather-fog-3;
                            animation-name: am-weather-fog-3;
                            -webkit-animation-duration: 6s;
                            -moz-animation-duration: 6s;
                            -ms-animation-duration: 6s;
                            animation-duration: 6s;
                            -webkit-animation-timing-function: linear;
                            -moz-animation-timing-function: linear;
                            -ms-animation-timing-function: linear;
                            animation-timing-function: linear;
                            -webkit-animation-iteration-count: infinite;
                            -moz-animation-iteration-count: infinite;
                            -ms-animation-iteration-count: infinite;
                            animation-iteration-count: infinite;
                          }

                          @keyframes am-weather-fog-4 {
                            0% {
                              transform: translate(0px, 0px)
                            }

                            50% {
                              transform: translate(-4px, 0px)
                            }

                            100% {
                              transform: translate(0px, 0px)
                            }
                          }

                          .am-weather-fog-4 {
                            -webkit-animation-name: am-weather-fog-4;
                            -moz-animation-name: am-weather-fog-4;
                            -ms-animation-name: am-weather-fog-4;
                            animation-name: am-weather-fog-4;
                            -webkit-animation-duration: 6s;
                            -moz-animation-duration: 6s;
                            -ms-animation-duration: 6s;
                            animation-duration: 6s;
                            -webkit-animation-timing-function: linear;
                            -moz-animation-timing-function: linear;
                            -ms-animation-timing-function: linear;
                            animation-timing-function: linear;
                            -webkit-animation-iteration-count: infinite;
                            -moz-animation-iteration-count: infinite;
                            -ms-animation-iteration-count: infinite;
                            animation-iteration-count: infinite;
                          }
                          ]]>
                </style>
            </defs>
            <g transform="translate(16,-2)" filter="url(#blur)">
                <g transform="matrix(.8 0 0 .8 16 4)">
                    <g
                        class="am-weather-moon-star-1"
                        style="-moz-animation-delay:3s;-moz-animation-duration:5s;-moz-animation-iteration-count:1;-moz-animation-name:am-weather-moon-star-1;-moz-animation-timing-function:linear;-ms-animation-delay:3s;-ms-animation-duration:5s;-ms-animation-iteration-count:1;-ms-animation-name:am-weather-moon-star-1;-ms-animation-timing-function:linear;-webkit-animation-delay:3s;-webkit-animation-duration:5s;-webkit-animation-iteration-count:1;-webkit-animation-name:am-weather-moon-star-1;-webkit-animation-timing-function:linear">
                        <polygon
                            points="4 4 3.3 5.2 2.7 4 1.5 3.3 2.7 2.7 3.3 1.5 4 2.7 5.2 3.3"
                            fill="#ffc04a"
                            stroke-miterlimit="10" />
                    </g>
                    <g
                        class="am-weather-moon-star-2"
                        style="-moz-animation-delay:5s;-moz-animation-duration:4s;-moz-animation-iteration-count:1;-moz-animation-name:am-weather-moon-star-2;-moz-animation-timing-function:linear;-ms-animation-delay:5s;-ms-animation-duration:4s;-ms-animation-iteration-count:1;-ms-animation-name:am-weather-moon-star-2;-ms-animation-timing-function:linear;-webkit-animation-delay:5s;-webkit-animation-duration:4s;-webkit-animation-iteration-count:1;-webkit-animation-name:am-weather-moon-star-2;-webkit-animation-timing-function:linear">
                        <polygon
                            transform="translate(20,10)"
                            points="4 4 3.3 5.2 2.7 4 1.5 3.3 2.7 2.7 3.3 1.5 4 2.7 5.2 3.3"
                            fill="#ffc04a"
                            stroke-miterlimit="10" />
                    </g>
                    <g
                        class="am-weather-moon"
                        style="-moz-animation-duration:6s;-moz-animation-iteration-count:infinite;-moz-animation-name:am-weather-moon;-moz-animation-timing-function:linear;-moz-transform-origin:12.5px 15.15px 0;-ms-animation-duration:6s;-ms-animation-iteration-count:infinite;-ms-animation-name:am-weather-moon;-ms-animation-timing-function:linear;-ms-transform-origin:12.5px 15.15px 0;-webkit-animation-duration:6s;-webkit-animation-iteration-count:infinite;-webkit-animation-name:am-weather-moon;-webkit-animation-timing-function:linear;-webkit-transform-origin:12.5px 15.15px 0">
                        <path
                            d="m14.5 13.2c0-3.7 2-6.9 5-8.7-1.5-0.9-3.2-1.3-5-1.3-5.5 0-10 4.5-10 10s4.5 10 10 10c1.8 0 3.5-0.5 5-1.3-3-1.7-5-5-5-8.7z"
                            fill="#ffc04a"
                            stroke="#ffc04a"
                            stroke-linejoin="round"
                            stroke-width="2" />
                    </g>
                </g>
                <g
                    class="am-weather-fog"
                    transform="translate(-10,20)"
                    fill="none"
                    stroke="#c6deff"
                    stroke-linecap="round"
                    stroke-width="2">
                    <line class="am-weather-fog-1" y1="0" y2="0" x1="1" x2="37" stroke-dasharray="3, 5, 17, 5, 7" />
                    <line class="am-weather-fog-2" y1="5" y2="5" x1="9" x2="33" stroke-dasharray="11, 7, 15" />
                    <line class="am-weather-fog-3" y1="10" y2="10" x1="5" x2="40" stroke-dasharray="11, 7, 3, 5, 9" />
                    <line class="am-weather-fog-4" y1="15" y2="15" x1="7" x2="42" stroke-dasharray="13, 5, 9, 5, 3" />
                </g>
            </g>
        </svg>
    `,
    fog: html`
        <svg viewBox="0 0 55 48" class="fog-icon" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <filter id="blur" x="-.20655" y="-.21122" width="1.403" height="1.4997">
                    <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
                    <feOffset dx="0" dy="4" result="offsetblur" />
                    <feComponentTransfer>
                        <feFuncA slope="0.05" type="linear" />
                    </feComponentTransfer>
                    <feMerge>
                        <feMergeNode />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
                <style type="text/css">
                          <![CDATA[
                          /*
                    ** FOG
                    */
                          @keyframes am-weather-fog-1 {
                            0% {
                              transform: translate(0px, 0px)
                            }

                            50% {
                              transform: translate(7px, 0px)
                            }

                            100% {
                              transform: translate(0px, 0px)
                            }
                          }

                          .am-weather-fog-1 {
                            -webkit-animation-name: am-weather-fog-1;
                            -moz-animation-name: am-weather-fog-1;
                            -ms-animation-name: am-weather-fog-1;
                            animation-name: am-weather-fog-1;
                            -webkit-animation-duration: 8s;
                            -moz-animation-duration: 8s;
                            -ms-animation-duration: 8s;
                            animation-duration: 8s;
                            -webkit-animation-timing-function: linear;
                            -moz-animation-timing-function: linear;
                            -ms-animation-timing-function: linear;
                            animation-timing-function: linear;
                            -webkit-animation-iteration-count: infinite;
                            -moz-animation-iteration-count: infinite;
                            -ms-animation-iteration-count: infinite;
                            animation-iteration-count: infinite;
                          }

                          @keyframes am-weather-fog-2 {
                            0% {
                              transform: translate(0px, 0px)
                            }

                            21.05% {
                              transform: translate(-6px, 0px)
                            }

                            78.95% {
                              transform: translate(9px, 0px)
                            }

                            100% {
                              transform: translate(0px, 0px)
                            }
                          }

                          .am-weather-fog-2 {
                            -webkit-animation-name: am-weather-fog-2;
                            -moz-animation-name: am-weather-fog-2;
                            -ms-animation-name: am-weather-fog-2;
                            animation-name: am-weather-fog-2;
                            -webkit-animation-duration: 20s;
                            -moz-animation-duration: 20s;
                            -ms-animation-duration: 20s;
                            animation-duration: 20s;
                            -webkit-animation-timing-function: linear;
                            -moz-animation-timing-function: linear;
                            -ms-animation-timing-function: linear;
                            animation-timing-function: linear;
                            -webkit-animation-iteration-count: infinite;
                            -moz-animation-iteration-count: infinite;
                            -ms-animation-iteration-count: infinite;
                            animation-iteration-count: infinite;
                          }

                          @keyframes am-weather-fog-3 {
                            0% {
                              transform: translate(0px, 0px)
                            }

                            25% {
                              transform: translate(4px, 0px)
                            }

                            75% {
                              transform: translate(-4px, 0px)
                            }

                            100% {
                              transform: translate(0px, 0px)
                            }
                          }

                          .am-weather-fog-3 {
                            -webkit-animation-name: am-weather-fog-3;
                            -moz-animation-name: am-weather-fog-3;
                            -ms-animation-name: am-weather-fog-3;
                            animation-name: am-weather-fog-3;
                            -webkit-animation-duration: 6s;
                            -moz-animation-duration: 6s;
                            -ms-animation-duration: 6s;
                            animation-duration: 6s;
                            -webkit-animation-timing-function: linear;
                            -moz-animation-timing-function: linear;
                            -ms-animation-timing-function: linear;
                            animation-timing-function: linear;
                            -webkit-animation-iteration-count: infinite;
                            -moz-animation-iteration-count: infinite;
                            -ms-animation-iteration-count: infinite;
                            animation-iteration-count: infinite;
                          }

                          @keyframes am-weather-fog-4 {
                            0% {
                              transform: translate(0px, 0px)
                            }

                            50% {
                              transform: translate(-4px, 0px)
                            }

                            100% {
                              transform: translate(0px, 0px)
                            }
                          }

                          .am-weather-fog-4 {
                            -webkit-animation-name: am-weather-fog-4;
                            -moz-animation-name: am-weather-fog-4;
                            -ms-animation-name: am-weather-fog-4;
                            animation-name: am-weather-fog-4;
                            -webkit-animation-duration: 6s;
                            -moz-animation-duration: 6s;
                            -ms-animation-duration: 6s;
                            animation-duration: 6s;
                            -webkit-animation-timing-function: linear;
                            -moz-animation-timing-function: linear;
                            -ms-animation-timing-function: linear;
                            animation-timing-function: linear;
                            -webkit-animation-iteration-count: infinite;
                            -moz-animation-iteration-count: infinite;
                            -ms-animation-iteration-count: infinite;
                            animation-iteration-count: infinite;
                          }
                          ]]>
                </style>
            </defs>
            <g transform="translate(16,-2)" filter="url(#blur)">
                <g
                    class="am-weather-fog"
                    transform="translate(-10,20)"
                    fill="none"
                    stroke="#c6deff"
                    stroke-linecap="round"
                    stroke-width="2">
                    <line class="am-weather-fog-1" y1="0" y2="0" x1="1" x2="37" stroke-dasharray="3, 5, 17, 5, 7" />
                    <line class="am-weather-fog-2" y1="5" y2="5" x1="9" x2="33" stroke-dasharray="11, 7, 15" />
                    <line class="am-weather-fog-3" y1="10" y2="10" x1="5" x2="40" stroke-dasharray="11, 7, 3, 5, 9" />
                    <line class="am-weather-fog-4" y1="15" y2="15" x1="7" x2="42" stroke-dasharray="13, 5, 9, 5, 3" />
                </g>
            </g>
        </svg>
    `,
    frostDay: html`
        <svg viewBox="0 0 55 48" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <filter id="blur" x="-.20655" y="-.21122" width="1.403" height="1.4997">
                    <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
                    <feOffset dx="0" dy="4" result="offsetblur" />
                    <feComponentTransfer>
                        <feFuncA slope="0.05" type="linear" />
                    </feComponentTransfer>
                    <feMerge>
                        <feMergeNode />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
                <style type="text/css">
                          <![CDATA[
                          /*
                    ** SUN
                    */
                          @keyframes am-weather-sun {
                            0% {
                              -webkit-transform: rotate(0deg);
                              -moz-transform: rotate(0deg);
                              -ms-transform: rotate(0deg);
                              transform: rotate(0deg);
                            }

                            100% {
                              -webkit-transform: rotate(360deg);
                              -moz-transform: rotate(360deg);
                              -ms-transform: rotate(360deg);
                              transform: rotate(360deg);
                            }
                          }

                          .am-weather-sun {
                            -webkit-animation-name: am-weather-sun;
                            -moz-animation-name: am-weather-sun;
                            -ms-animation-name: am-weather-sun;
                            animation-name: am-weather-sun;
                            -webkit-animation-duration: 9s;
                            -moz-animation-duration: 9s;
                            -ms-animation-duration: 9s;
                            animation-duration: 9s;
                            -webkit-animation-timing-function: linear;
                            -moz-animation-timing-function: linear;
                            -ms-animation-timing-function: linear;
                            animation-timing-function: linear;
                            -webkit-animation-iteration-count: infinite;
                            -moz-animation-iteration-count: infinite;
                            -ms-animation-iteration-count: infinite;
                            animation-iteration-count: infinite;
                          }

                          /*
                    ** FROST
                    */
                          @keyframes am-weather-frost {
                            0% {
                              -webkit-transform: translate(0.0px, 0.0px);
                              -moz-transform: translate(0.0px, 0.0px);
                              -ms-transform: translate(0.0px, 0.0px);
                              transform: translate(0.0px, 0.0px);
                            }

                            1% {
                              -webkit-transform: translate(0.3px, 0.0px);
                              -moz-transform: translate(0.3px, 0.0px);
                              -ms-transform: translate(0.3px, 0.0px);
                              transform: translate(0.3px, 0.0px);
                            }

                            3% {
                              -webkit-transform: translate(-0.3px, 0.0px);
                              -moz-transform: translate(-0.3px, 0.0px);
                              -ms-transform: translate(-0.3px, 0.0px);
                              transform: translate(-0.3px, 0.0px);
                            }

                            5% {
                              -webkit-transform: translate(0.3px, 0.0px);
                              -moz-transform: translate(0.3px, 0.0px);
                              -ms-transform: translate(0.3px, 0.0px);
                              transform: translate(0.3px, 0.0px);
                            }

                            7% {
                              -webkit-transform: translate(-0.3px, 0.0px);
                              -moz-transform: translate(-0.3px, 0.0px);
                              -ms-transform: translate(-0.3px, 0.0px);
                              transform: translate(-0.3px, 0.0px);
                            }

                            9% {
                              -webkit-transform: translate(0.3px, 0.0px);
                              -moz-transform: translate(0.3px, 0.0px);
                              -ms-transform: translate(0.3px, 0.0px);
                              transform: translate(0.3px, 0.0px);
                            }

                            11% {
                              -webkit-transform: translate(-0.3px, 0.0px);
                              -moz-transform: translate(-0.3px, 0.0px);
                              -ms-transform: translate(-0.3px, 0.0px);
                              transform: translate(-0.3px, 0.0px);
                            }

                            13% {
                              -webkit-transform: translate(0.3px, 0.0px);
                              -moz-transform: translate(0.3px, 0.0px);
                              -ms-transform: translate(0.3px, 0.0px);
                              transform: translate(0.3px, 0.0px);
                            }

                            15% {
                              -webkit-transform: translate(-0.3px, 0.0px);
                              -moz-transform: translate(-0.3px, 0.0px);
                              -ms-transform: translate(-0.3px, 0.0px);
                              transform: translate(-0.3px, 0.0px);
                            }

                            16% {
                              -webkit-transform: translate(0.0px, 0.0px);
                              -moz-transform: translate(0.0px, 0.0px);
                              -ms-transform: translate(0.0px, 0.0px);
                              transform: translate(0.0px, 0.0px);
                            }

                            100% {
                              -webkit-transform: translate(0.0px, 0.0px);
                              -moz-transform: translate(0.0px, 0.0px);
                              -ms-transform: translate(0.0px, 0.0px);
                              transform: translate(0.0px, 0.0px);
                            }
                          }

                          .am-weather-frost {
                            -webkit-animation-name: am-weather-frost;
                            -moz-animation-name: am-weather-frost;
                            animation-name: am-weather-frost;
                            -webkit-animation-duration: 1.11s;
                            -moz-animation-duration: 1.11s;
                            animation-duration: 1.11s;
                            -webkit-animation-timing-function: linear;
                            -moz-animation-timing-function: linear;
                            animation-timing-function: linear;
                            -webkit-animation-iteration-count: infinite;
                            -moz-animation-iteration-count: infinite;
                            animation-iteration-count: infinite;
                          }
                          ]]>
                </style>
            </defs>
            <g transform="translate(16,-2)" filter="url(#blur)">
                <g transform="translate(0,16)">
                    <g class="am-weather-sun" transform="translate(0,16)">
                        <line
                            transform="translate(0,9)"
                            y2="3"
                            fill="none"
                            stroke="#ffc04a"
                            stroke-linecap="round"
                            stroke-width="2" />
                        <g transform="rotate(45)">
                            <line
                                transform="translate(0,9)"
                                y2="3"
                                fill="none"
                                stroke="#ffc04a"
                                stroke-linecap="round"
                                stroke-width="2" />
                        </g>
                        <g transform="rotate(90)">
                            <line
                                transform="translate(0,9)"
                                y2="3"
                                fill="none"
                                stroke="#ffc04a"
                                stroke-linecap="round"
                                stroke-width="2" />
                        </g>
                        <g transform="rotate(135)">
                            <line
                                transform="translate(0,9)"
                                y2="3"
                                fill="none"
                                stroke="#ffc04a"
                                stroke-linecap="round"
                                stroke-width="2" />
                        </g>
                        <g transform="scale(-1)">
                            <line
                                transform="translate(0,9)"
                                y2="3"
                                fill="none"
                                stroke="#ffc04a"
                                stroke-linecap="round"
                                stroke-width="2" />
                            F
                        </g>
                        <g transform="rotate(225)">
                            <line
                                transform="translate(0,9)"
                                y2="3"
                                fill="none"
                                stroke="#ffc04a"
                                stroke-linecap="round"
                                stroke-width="2" />
                        </g>
                        <g transform="rotate(-90)">
                            <line
                                transform="translate(0,9)"
                                y2="3"
                                fill="none"
                                stroke="#ffc04a"
                                stroke-linecap="round"
                                stroke-width="2" />
                        </g>
                        <g transform="rotate(-45)">
                            <line
                                transform="translate(0,9)"
                                y2="3"
                                fill="none"
                                stroke="#ffc04a"
                                stroke-linecap="round"
                                stroke-width="2" />
                        </g>
                        <circle r="5" fill="#ffc04a" stroke="#ffc04a" stroke-width="2" />
                    </g>
                </g>
                <g transform="translate(-16,4)">
                    <g
                        class="am-weather-frost"
                        stroke="#57a0ee"
                        transform="translate(0,2)"
                        fill="none"
                        stroke-width="2"
                        stroke-linecap="round"
                        style="-moz-animation-duration:1.11s;-moz-animation-iteration-count:infinite;-moz-animation-name:am-weather-frost;-moz-animation-timing-function:linear;-webkit-animation-duration:1.11s;-webkit-animation-iteration-count:infinite;-webkit-animation-name:am-weather-frost;-webkit-animation-timing-function:linear">
                        <path d="M11,32H45" />
                        <path d="M15.5,37H40.5" />
                        <path d="M22.5,42H33.5" />
                    </g>
                    <g>
                        <path
                            stroke="#57a0ee"
                            transform="translate(0,0)"
                            fill="none"
                            stroke-width="2"
                            stroke-linecap="round"
                            d="M28,31V9M28,22l11,-3.67M34,20l2,-4M34,20l4,2M28,22l-11,-3.67M22,20l-2,-4M22,20l-4,2M28,14.27l3.01,-3.02M28,14.27l-3.01,-3.02" />
                    </g>
                </g>
            </g>
        </svg>
    `,
    frostNight: html`
        <svg viewBox="0 0 55 48" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <filter id="blur" x="-.20655" y="-.21122" width="1.403" height="1.4997">
                    <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
                    <feOffset dx="0" dy="4" result="offsetblur" />
                    <feComponentTransfer>
                        <feFuncA slope="0.05" type="linear" />
                    </feComponentTransfer>
                    <feMerge>
                        <feMergeNode />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
                <style type="text/css">
                          <![CDATA[
                          /*
                    ** MOON
                    */
                          @keyframes am-weather-moon {
                            0% {
                              -webkit-transform: rotate(0deg);
                              -moz-transform: rotate(0deg);
                              -ms-transform: rotate(0deg);
                              transform: rotate(0deg);
                            }

                            50% {
                              -webkit-transform: rotate(15deg);
                              -moz-transform: rotate(15deg);
                              -ms-transform: rotate(15deg);
                              transform: rotate(15deg);
                            }

                            100% {
                              -webkit-transform: rotate(0deg);
                              -moz-transform: rotate(0deg);
                              -ms-transform: rotate(0deg);
                              transform: rotate(0deg);
                            }
                          }

                          .am-weather-moon {
                            -webkit-animation-name: am-weather-moon;
                            -moz-animation-name: am-weather-moon;
                            -ms-animation-name: am-weather-moon;
                            animation-name: am-weather-moon;
                            -webkit-animation-duration: 6s;
                            -moz-animation-duration: 6s;
                            -ms-animation-duration: 6s;
                            animation-duration: 6s;
                            -webkit-animation-timing-function: linear;
                            -moz-animation-timing-function: linear;
                            -ms-animation-timing-function: linear;
                            animation-timing-function: linear;
                            -webkit-animation-iteration-count: infinite;
                            -moz-animation-iteration-count: infinite;
                            -ms-animation-iteration-count: infinite;
                            animation-iteration-count: infinite;
                            -webkit-transform-origin: 12.5px 15.15px 0;
                            /* TODO FF CENTER ISSUE */
                            -moz-transform-origin: 12.5px 15.15px 0;
                            /* TODO FF CENTER ISSUE */
                            -ms-transform-origin: 12.5px 15.15px 0;
                            /* TODO FF CENTER ISSUE */
                            transform-origin: 12.5px 15.15px 0;
                            /* TODO FF CENTER ISSUE */
                          }

                          @keyframes am-weather-moon-star-1 {
                            0% {
                              opacity: 0;
                            }

                            100% {
                              opacity: 1;
                            }
                          }

                          .am-weather-moon-star-1 {
                            -webkit-animation-name: am-weather-moon-star-1;
                            -moz-animation-name: am-weather-moon-star-1;
                            -ms-animation-name: am-weather-moon-star-1;
                            animation-name: am-weather-moon-star-1;
                            -webkit-animation-delay: 3s;
                            -moz-animation-delay: 3s;
                            -ms-animation-delay: 3s;
                            animation-delay: 3s;
                            -webkit-animation-duration: 5s;
                            -moz-animation-duration: 5s;
                            -ms-animation-duration: 5s;
                            animation-duration: 5s;
                            -webkit-animation-timing-function: linear;
                            -moz-animation-timing-function: linear;
                            -ms-animation-timing-function: linear;
                            animation-timing-function: linear;
                            -webkit-animation-iteration-count: 1;
                            -moz-animation-iteration-count: 1;
                            -ms-animation-iteration-count: 1;
                            animation-iteration-count: 1;
                          }

                          @keyframes am-weather-moon-star-2 {
                            0% {
                              opacity: 0;
                            }

                            100% {
                              opacity: 1;
                            }
                          }

                          .am-weather-moon-star-2 {
                            -webkit-animation-name: am-weather-moon-star-2;
                            -moz-animation-name: am-weather-moon-star-2;
                            -ms-animation-name: am-weather-moon-star-2;
                            animation-name: am-weather-moon-star-2;
                            -webkit-animation-delay: 5s;
                            -moz-animation-delay: 5s;
                            -ms-animation-delay: 5s;
                            animation-delay: 5s;
                            -webkit-animation-duration: 4s;
                            -moz-animation-duration: 4s;
                            -ms-animation-duration: 4s;
                            animation-duration: 4s;
                            -webkit-animation-timing-function: linear;
                            -moz-animation-timing-function: linear;
                            -ms-animation-timing-function: linear;
                            animation-timing-function: linear;
                            -webkit-animation-iteration-count: 1;
                            -moz-animation-iteration-count: 1;
                            -ms-animation-iteration-count: 1;
                            animation-iteration-count: 1;
                          }

                          /*
                    ** FROST
                    */
                          @keyframes am-weather-frost {
                            0% {
                              -webkit-transform: translate(0.0px, 0.0px);
                              -moz-transform: translate(0.0px, 0.0px);
                              -ms-transform: translate(0.0px, 0.0px);
                              transform: translate(0.0px, 0.0px);
                            }

                            1% {
                              -webkit-transform: translate(0.3px, 0.0px);
                              -moz-transform: translate(0.3px, 0.0px);
                              -ms-transform: translate(0.3px, 0.0px);
                              transform: translate(0.3px, 0.0px);
                            }

                            3% {
                              -webkit-transform: translate(-0.3px, 0.0px);
                              -moz-transform: translate(-0.3px, 0.0px);
                              -ms-transform: translate(-0.3px, 0.0px);
                              transform: translate(-0.3px, 0.0px);
                            }

                            5% {
                              -webkit-transform: translate(0.3px, 0.0px);
                              -moz-transform: translate(0.3px, 0.0px);
                              -ms-transform: translate(0.3px, 0.0px);
                              transform: translate(0.3px, 0.0px);
                            }

                            7% {
                              -webkit-transform: translate(-0.3px, 0.0px);
                              -moz-transform: translate(-0.3px, 0.0px);
                              -ms-transform: translate(-0.3px, 0.0px);
                              transform: translate(-0.3px, 0.0px);
                            }

                            9% {
                              -webkit-transform: translate(0.3px, 0.0px);
                              -moz-transform: translate(0.3px, 0.0px);
                              -ms-transform: translate(0.3px, 0.0px);
                              transform: translate(0.3px, 0.0px);
                            }

                            11% {
                              -webkit-transform: translate(-0.3px, 0.0px);
                              -moz-transform: translate(-0.3px, 0.0px);
                              -ms-transform: translate(-0.3px, 0.0px);
                              transform: translate(-0.3px, 0.0px);
                            }

                            13% {
                              -webkit-transform: translate(0.3px, 0.0px);
                              -moz-transform: translate(0.3px, 0.0px);
                              -ms-transform: translate(0.3px, 0.0px);
                              transform: translate(0.3px, 0.0px);
                            }

                            15% {
                              -webkit-transform: translate(-0.3px, 0.0px);
                              -moz-transform: translate(-0.3px, 0.0px);
                              -ms-transform: translate(-0.3px, 0.0px);
                              transform: translate(-0.3px, 0.0px);
                            }

                            16% {
                              -webkit-transform: translate(0.0px, 0.0px);
                              -moz-transform: translate(0.0px, 0.0px);
                              -ms-transform: translate(0.0px, 0.0px);
                              transform: translate(0.0px, 0.0px);
                            }

                            100% {
                              -webkit-transform: translate(0.0px, 0.0px);
                              -moz-transform: translate(0.0px, 0.0px);
                              -ms-transform: translate(0.0px, 0.0px);
                              transform: translate(0.0px, 0.0px);
                            }
                          }

                          .am-weather-frost {
                            -webkit-animation-name: am-weather-frost;
                            -moz-animation-name: am-weather-frost;
                            animation-name: am-weather-frost;
                            -webkit-animation-duration: 1.11s;
                            -moz-animation-duration: 1.11s;
                            animation-duration: 1.11s;
                            -webkit-animation-timing-function: linear;
                            -moz-animation-timing-function: linear;
                            animation-timing-function: linear;
                            -webkit-animation-iteration-count: infinite;
                            -moz-animation-iteration-count: infinite;
                            animation-iteration-count: infinite;
                          }
                          ]]>
                </style>
            </defs>
            <g transform="translate(16,-2)" filter="url(#blur)">
                <g transform="matrix(.8 0 0 .8 16 4)">
                    <g
                        class="am-weather-moon-star-1"
                        style="-moz-animation-delay:3s;-moz-animation-duration:5s;-moz-animation-iteration-count:1;-moz-animation-name:am-weather-moon-star-1;-moz-animation-timing-function:linear;-ms-animation-delay:3s;-ms-animation-duration:5s;-ms-animation-iteration-count:1;-ms-animation-name:am-weather-moon-star-1;-ms-animation-timing-function:linear;-webkit-animation-delay:3s;-webkit-animation-duration:5s;-webkit-animation-iteration-count:1;-webkit-animation-name:am-weather-moon-star-1;-webkit-animation-timing-function:linear">
                        <polygon
                            points="4 4 3.3 5.2 2.7 4 1.5 3.3 2.7 2.7 3.3 1.5 4 2.7 5.2 3.3"
                            fill="#ffc04a"
                            stroke-miterlimit="10" />
                    </g>
                    <g
                        class="am-weather-moon-star-2"
                        style="-moz-animation-delay:5s;-moz-animation-duration:4s;-moz-animation-iteration-count:1;-moz-animation-name:am-weather-moon-star-2;-moz-animation-timing-function:linear;-ms-animation-delay:5s;-ms-animation-duration:4s;-ms-animation-iteration-count:1;-ms-animation-name:am-weather-moon-star-2;-ms-animation-timing-function:linear;-webkit-animation-delay:5s;-webkit-animation-duration:4s;-webkit-animation-iteration-count:1;-webkit-animation-name:am-weather-moon-star-2;-webkit-animation-timing-function:linear">
                        <polygon
                            transform="translate(20,10)"
                            points="4 4 3.3 5.2 2.7 4 1.5 3.3 2.7 2.7 3.3 1.5 4 2.7 5.2 3.3"
                            fill="#ffc04a"
                            stroke-miterlimit="10" />
                    </g>
                    <g
                        class="am-weather-moon"
                        style="-moz-animation-duration:6s;-moz-animation-iteration-count:infinite;-moz-animation-name:am-weather-moon;-moz-animation-timing-function:linear;-moz-transform-origin:12.5px 15.15px 0;-ms-animation-duration:6s;-ms-animation-iteration-count:infinite;-ms-animation-name:am-weather-moon;-ms-animation-timing-function:linear;-ms-transform-origin:12.5px 15.15px 0;-webkit-animation-duration:6s;-webkit-animation-iteration-count:infinite;-webkit-animation-name:am-weather-moon;-webkit-animation-timing-function:linear;-webkit-transform-origin:12.5px 15.15px 0">
                        <path
                            d="m14.5 13.2c0-3.7 2-6.9 5-8.7-1.5-0.9-3.2-1.3-5-1.3-5.5 0-10 4.5-10 10s4.5 10 10 10c1.8 0 3.5-0.5 5-1.3-3-1.7-5-5-5-8.7z"
                            fill="#ffc04a"
                            stroke="#ffc04a"
                            stroke-linejoin="round"
                            stroke-width="2" />
                    </g>
                </g>
                <g transform="translate(-16,4)">
                    <g
                        class="am-weather-frost"
                        stroke="#57a0ee"
                        transform="translate(0,2)"
                        fill="none"
                        stroke-width="2"
                        stroke-linecap="round"
                        style="-moz-animation-duration:1.11s;-moz-animation-iteration-count:infinite;-moz-animation-name:am-weather-frost;-moz-animation-timing-function:linear;-webkit-animation-duration:1.11s;-webkit-animation-iteration-count:infinite;-webkit-animation-name:am-weather-frost;-webkit-animation-timing-function:linear">
                        <path d="M11,32H45" />
                        <path d="M15.5,37H40.5" />
                        <path d="M22.5,42H33.5" />
                    </g>
                    <g>
                        <path
                            stroke="#57a0ee"
                            transform="translate(0,0)"
                            fill="none"
                            stroke-width="2"
                            stroke-linecap="round"
                            d="M28,31V9M28,22l11,-3.67M34,20l2,-4M34,20l4,2M28,22l-11,-3.67M22,20l-2,-4M22,20l-4,2M28,14.27l3.01,-3.02M28,14.27l-3.01,-3.02" />
                    </g>
                </g>
            </g>
        </svg>
    `,
    frost: html`
        <svg viewBox="0 0 55 48" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <filter id="blur" x="-.20655" y="-.21122" width="1.403" height="1.4997">
                    <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
                    <feOffset dx="0" dy="4" result="offsetblur" />
                    <feComponentTransfer>
                        <feFuncA slope="0.05" type="linear" />
                    </feComponentTransfer>
                    <feMerge>
                        <feMergeNode />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
                <style type="text/css">
                          <![CDATA[
                          /*
                    ** FROST
                    */
                          @keyframes am-weather-frost {
                            0% {
                              -webkit-transform: translate(0.0px, 0.0px);
                              -moz-transform: translate(0.0px, 0.0px);
                              -ms-transform: translate(0.0px, 0.0px);
                              transform: translate(0.0px, 0.0px);
                            }

                            1% {
                              -webkit-transform: translate(0.3px, 0.0px);
                              -moz-transform: translate(0.3px, 0.0px);
                              -ms-transform: translate(0.3px, 0.0px);
                              transform: translate(0.3px, 0.0px);
                            }

                            3% {
                              -webkit-transform: translate(-0.3px, 0.0px);
                              -moz-transform: translate(-0.3px, 0.0px);
                              -ms-transform: translate(-0.3px, 0.0px);
                              transform: translate(-0.3px, 0.0px);
                            }

                            5% {
                              -webkit-transform: translate(0.3px, 0.0px);
                              -moz-transform: translate(0.3px, 0.0px);
                              -ms-transform: translate(0.3px, 0.0px);
                              transform: translate(0.3px, 0.0px);
                            }

                            7% {
                              -webkit-transform: translate(-0.3px, 0.0px);
                              -moz-transform: translate(-0.3px, 0.0px);
                              -ms-transform: translate(-0.3px, 0.0px);
                              transform: translate(-0.3px, 0.0px);
                            }

                            9% {
                              -webkit-transform: translate(0.3px, 0.0px);
                              -moz-transform: translate(0.3px, 0.0px);
                              -ms-transform: translate(0.3px, 0.0px);
                              transform: translate(0.3px, 0.0px);
                            }

                            11% {
                              -webkit-transform: translate(-0.3px, 0.0px);
                              -moz-transform: translate(-0.3px, 0.0px);
                              -ms-transform: translate(-0.3px, 0.0px);
                              transform: translate(-0.3px, 0.0px);
                            }

                            13% {
                              -webkit-transform: translate(0.3px, 0.0px);
                              -moz-transform: translate(0.3px, 0.0px);
                              -ms-transform: translate(0.3px, 0.0px);
                              transform: translate(0.3px, 0.0px);
                            }

                            15% {
                              -webkit-transform: translate(-0.3px, 0.0px);
                              -moz-transform: translate(-0.3px, 0.0px);
                              -ms-transform: translate(-0.3px, 0.0px);
                              transform: translate(-0.3px, 0.0px);
                            }

                            16% {
                              -webkit-transform: translate(0.0px, 0.0px);
                              -moz-transform: translate(0.0px, 0.0px);
                              -ms-transform: translate(0.0px, 0.0px);
                              transform: translate(0.0px, 0.0px);
                            }

                            100% {
                              -webkit-transform: translate(0.0px, 0.0px);
                              -moz-transform: translate(0.0px, 0.0px);
                              -ms-transform: translate(0.0px, 0.0px);
                              transform: translate(0.0px, 0.0px);
                            }
                          }

                          .am-weather-frost {
                            -webkit-animation-name: am-weather-frost;
                            -moz-animation-name: am-weather-frost;
                            animation-name: am-weather-frost;
                            -webkit-animation-duration: 1.11s;
                            -moz-animation-duration: 1.11s;
                            animation-duration: 1.11s;
                            -webkit-animation-timing-function: linear;
                            -moz-animation-timing-function: linear;
                            animation-timing-function: linear;
                            -webkit-animation-iteration-count: infinite;
                            -moz-animation-iteration-count: infinite;
                            animation-iteration-count: infinite;
                          }
                          ]]>
                </style>
            </defs>
            <g transform="translate(0,2)" filter="url(#blur)">
                <g
                    class="am-weather-frost"
                    stroke="#57a0ee"
                    transform="translate(0,2)"
                    fill="none"
                    stroke-width="2"
                    stroke-linecap="round"
                    style="-moz-animation-duration:1.11s;-moz-animation-iteration-count:infinite;-moz-animation-name:am-weather-frost;-moz-animation-timing-function:linear;-webkit-animation-duration:1.11s;-webkit-animation-iteration-count:infinite;-webkit-animation-name:am-weather-frost;-webkit-animation-timing-function:linear">
                    <path d="M11,32H45" />
                    <path d="M15.5,37H40.5" />
                    <path d="M22.5,42H33.5" />
                </g>
                <g>
                    <path
                        stroke="#57a0ee"
                        transform="translate(0,0)"
                        fill="none"
                        stroke-width="2"
                        stroke-linecap="round"
                        d="M28,31V9M28,22l11,-3.67M34,20l2,-4M34,20l4,2M28,22l-11,-3.67M22,20l-2,-4M22,20l-4,2M28,14.27l3.01,-3.02M28,14.27l-3.01,-3.02" />
                </g>
            </g>
        </svg>
    `,
    hail: html`
        <svg viewBox="0 0 55 48" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <filter id="blur" x="-.24684" y="-.22776" width="1.4937" height="1.5756">
                    <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
                    <feOffset dx="0" dy="4" result="offsetblur" />
                    <feComponentTransfer>
                        <feFuncA slope="0.05" type="linear" />
                    </feComponentTransfer>
                    <feMerge>
                        <feMergeNode />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
                <style type="text/css">
                             <![CDATA[
                             /*
                          /*
                    ** CLOUDS
                    */
                          @keyframes am-weather-cloud {
                            0% {
                              -webkit-transform: translate(0px, 0px);
                              -moz-transform: translate(0px, 0px);
                              -ms-transform: translate(0px, 0px);
                              transform: translate(0px, 0px);
                            }

                            50% {
                              -webkit-transform: translate(2px, 0px);
                              -moz-transform: translate(2px, 0px);
                              -ms-transform: translate(2px, 0px);
                              transform: translate(2px, 0px);
                            }

                            100% {
                              -webkit-transform: translate(0px, 0px);
                              -moz-transform: translate(0px, 0px);
                              -ms-transform: translate(0px, 0px);
                              transform: translate(0px, 0px);
                            }
                          }

                          .am-weather-cloud {
                            -webkit-animation-name: am-weather-cloud;
                            -moz-animation-name: am-weather-cloud;
                            animation-name: am-weather-cloud;
                            -webkit-animation-duration: 3s;
                            -moz-animation-duration: 3s;
                            animation-duration: 3s;
                            -webkit-animation-timing-function: linear;
                            -moz-animation-timing-function: linear;
                            animation-timing-function: linear;
                            -webkit-animation-iteration-count: infinite;
                            -moz-animation-iteration-count: infinite;
                            animation-iteration-count: infinite;
                          }

                             /*
                    ** RAIN
                    */
                             @keyframes am-weather-rain {
                                0% {
                                   stroke-dashoffset: 0;
                                }

                                100% {
                                   stroke-dashoffset: -100;
                                }
                             }

                             .am-weather-rain-1 {
                                -webkit-animation-name: am-weather-rain;
                                -moz-animation-name: am-weather-rain;
                                -ms-animation-name: am-weather-rain;
                                animation-name: am-weather-rain;
                                -webkit-animation-duration: 8s;
                                -moz-animation-duration: 8s;
                                -ms-animation-duration: 8s;
                                animation-duration: 8s;
                                -webkit-animation-timing-function: linear;
                                -moz-animation-timing-function: linear;
                                -ms-animation-timing-function: linear;
                                animation-timing-function: linear;
                                -webkit-animation-iteration-count: infinite;
                                -moz-animation-iteration-count: infinite;
                                -ms-animation-iteration-count: infinite;
                                animation-iteration-count: infinite;
                             }

                             .am-weather-rain-2 {
                                -webkit-animation-name: am-weather-rain;
                                -moz-animation-name: am-weather-rain;
                                -ms-animation-name: am-weather-rain;
                                animation-name: am-weather-rain;
                                -webkit-animation-delay: 0.25s;
                                -moz-animation-delay: 0.25s;
                                -ms-animation-delay: 0.25s;
                                animation-delay: 0.25s;
                                -webkit-animation-duration: 8s;
                                -moz-animation-duration: 8s;
                                -ms-animation-duration: 8s;
                                animation-duration: 8s;
                                -webkit-animation-timing-function: linear;
                                -moz-animation-timing-function: linear;
                                -ms-animation-timing-function: linear;
                                animation-timing-function: linear;
                                -webkit-animation-iteration-count: infinite;
                                -moz-animation-iteration-count: infinite;
                                -ms-animation-iteration-count: infinite;
                                animation-iteration-count: infinite;
                             }
                             ]]>
                </style>
            </defs>
            <g transform="translate(16,-2)" filter="url(#blur)">
                <g
                    class="am-weather-cloud"
                    style="-moz-animation-duration:3s;-moz-animation-iteration-count:infinite;-moz-animation-name:am-weather-cloud;-moz-animation-timing-function:linear;-webkit-animation-duration:3s;-webkit-animation-iteration-count:infinite;-webkit-animation-name:am-weather-cloud;-webkit-animation-timing-function:linear">
                    <path
                        transform="translate(-20,-11)"
                        d="m47.7 35.4c0-4.6-3.7-8.2-8.2-8.2-1 0-1.9 0.2-2.8 0.5-0.3-3.4-3.1-6.2-6.6-6.2-3.7 0-6.7 3-6.7 6.7 0 0.8 0.2 1.6 0.4 2.3-0.3-0.1-0.7-0.1-1-0.1-3.7 0-6.7 3-6.7 6.7 0 3.6 2.9 6.6 6.5 6.7h17.2c4.4-0.5 7.9-4 7.9-8.4z"
                        fill="#57a0ee"
                        stroke="#fff"
                        stroke-linejoin="round"
                        stroke-width="1.2" />
                </g>
                <g
                    transform="rotate(10,-247.39,200.17) translate(-20,-6.5)"
                    fill="none"
                    stroke="#91c0f8"
                    stroke-dasharray="0.1, 7"
                    stroke-linecap="round"
                    stroke-width="3">
                    <line
                        class="am-weather-rain-1"
                        transform="translate(-5,1)"
                        y2="8"
                        style="-moz-animation-duration:8s;-moz-animation-iteration-count:infinite;-moz-animation-name:am-weather-rain;-moz-animation-timing-function:linear;-ms-animation-duration:8s;-ms-animation-iteration-count:infinite;-ms-animation-name:am-weather-rain;-ms-animation-timing-function:linear;-webkit-animation-duration:8s;-webkit-animation-iteration-count:infinite;-webkit-animation-name:am-weather-rain;-webkit-animation-timing-function:linear" />
                    <line
                        class="am-weather-rain-2"
                        transform="translate(0,-1)"
                        y2="8"
                        style="-moz-animation-delay:0.25s;-moz-animation-duration:8s;-moz-animation-iteration-count:infinite;-moz-animation-name:am-weather-rain;-moz-animation-timing-function:linear;-ms-animation-delay:0.25s;-ms-animation-duration:8s;-ms-animation-iteration-count:infinite;-ms-animation-name:am-weather-rain;-ms-animation-timing-function:linear;-webkit-animation-delay:0.25s;-webkit-animation-duration:8s;-webkit-animation-iteration-count:infinite;-webkit-animation-name:am-weather-rain;-webkit-animation-timing-function:linear" />
                    <line
                        class="am-weather-rain-1"
                        transform="translate(5)"
                        y2="8"
                        style="-moz-animation-duration:8s;-moz-animation-iteration-count:infinite;-moz-animation-name:am-weather-rain;-moz-animation-timing-function:linear;-ms-animation-duration:8s;-ms-animation-iteration-count:infinite;-ms-animation-name:am-weather-rain;-ms-animation-timing-function:linear;-webkit-animation-duration:8s;-webkit-animation-iteration-count:infinite;-webkit-animation-name:am-weather-rain;-webkit-animation-timing-function:linear" />
                </g>
            </g>
        </svg>
    `,
    hazeDay: html`
        <svg viewBox="0 0 55 48" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <filter id="blur" x="-.20655" y="-.21122" width="1.403" height="1.4997">
                    <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
                    <feOffset dx="0" dy="4" result="offsetblur" />
                    <feComponentTransfer>
                        <feFuncA slope="0.05" type="linear" />
                    </feComponentTransfer>
                    <feMerge>
                        <feMergeNode />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
                <style type="text/css">
                          <![CDATA[
                          /*
                    ** SUN
                    */
                          @keyframes am-weather-sun {
                            0% {
                              -webkit-transform: rotate(0deg);
                              -moz-transform: rotate(0deg);
                              -ms-transform: rotate(0deg);
                              transform: rotate(0deg);
                            }

                            100% {
                              -webkit-transform: rotate(360deg);
                              -moz-transform: rotate(360deg);
                              -ms-transform: rotate(360deg);
                              transform: rotate(360deg);
                            }
                          }

                          .am-weather-sun {
                            -webkit-animation-name: am-weather-sun;
                            -moz-animation-name: am-weather-sun;
                            -ms-animation-name: am-weather-sun;
                            animation-name: am-weather-sun;
                            -webkit-animation-duration: 9s;
                            -moz-animation-duration: 9s;
                            -ms-animation-duration: 9s;
                            animation-duration: 9s;
                            -webkit-animation-timing-function: linear;
                            -moz-animation-timing-function: linear;
                            -ms-animation-timing-function: linear;
                            animation-timing-function: linear;
                            -webkit-animation-iteration-count: infinite;
                            -moz-animation-iteration-count: infinite;
                            -ms-animation-iteration-count: infinite;
                            animation-iteration-count: infinite;
                          }

                          /*
                    ** haze
                    */
                          @keyframes am-weather-haze-1 {
                            0% {
                              transform: translate(0px, 0px)
                            }

                            50% {
                              transform: translate(7px, 0px)
                            }

                            100% {
                              transform: translate(0px, 0px)
                            }
                          }

                          .am-weather-haze-1 {
                            -webkit-animation-name: am-weather-haze-1;
                            -moz-animation-name: am-weather-haze-1;
                            -ms-animation-name: am-weather-haze-1;
                            animation-name: am-weather-haze-1;
                            -webkit-animation-duration: 8s;
                            -moz-animation-duration: 8s;
                            -ms-animation-duration: 8s;
                            animation-duration: 8s;
                            -webkit-animation-timing-function: linear;
                            -moz-animation-timing-function: linear;
                            -ms-animation-timing-function: linear;
                            animation-timing-function: linear;
                            -webkit-animation-iteration-count: infinite;
                            -moz-animation-iteration-count: infinite;
                            -ms-animation-iteration-count: infinite;
                            animation-iteration-count: infinite;
                          }

                          @keyframes am-weather-haze-2 {
                            0% {
                              transform: translate(0px, 0px)
                            }

                            21.05% {
                              transform: translate(-6px, 0px)
                            }

                            78.95% {
                              transform: translate(9px, 0px)
                            }

                            100% {
                              transform: translate(0px, 0px)
                            }
                          }

                          .am-weather-haze-2 {
                            -webkit-animation-name: am-weather-haze-2;
                            -moz-animation-name: am-weather-haze-2;
                            -ms-animation-name: am-weather-haze-2;
                            animation-name: am-weather-haze-2;
                            -webkit-animation-duration: 20s;
                            -moz-animation-duration: 20s;
                            -ms-animation-duration: 20s;
                            animation-duration: 20s;
                            -webkit-animation-timing-function: linear;
                            -moz-animation-timing-function: linear;
                            -ms-animation-timing-function: linear;
                            animation-timing-function: linear;
                            -webkit-animation-iteration-count: infinite;
                            -moz-animation-iteration-count: infinite;
                            -ms-animation-iteration-count: infinite;
                            animation-iteration-count: infinite;
                          }

                          @keyframes am-weather-haze-3 {
                            0% {
                              transform: translate(0px, 0px)
                            }

                            25% {
                              transform: translate(4px, 0px)
                            }

                            75% {
                              transform: translate(-4px, 0px)
                            }

                            100% {
                              transform: translate(0px, 0px)
                            }
                          }

                          .am-weather-haze-3 {
                            -webkit-animation-name: am-weather-haze-3;
                            -moz-animation-name: am-weather-haze-3;
                            -ms-animation-name: am-weather-haze-3;
                            animation-name: am-weather-haze-3;
                            -webkit-animation-duration: 6s;
                            -moz-animation-duration: 6s;
                            -ms-animation-duration: 6s;
                            animation-duration: 6s;
                            -webkit-animation-timing-function: linear;
                            -moz-animation-timing-function: linear;
                            -ms-animation-timing-function: linear;
                            animation-timing-function: linear;
                            -webkit-animation-iteration-count: infinite;
                            -moz-animation-iteration-count: infinite;
                            -ms-animation-iteration-count: infinite;
                            animation-iteration-count: infinite;
                          }

                          @keyframes am-weather-haze-4 {
                            0% {
                              transform: translate(0px, 0px)
                            }

                            50% {
                              transform: translate(-4px, 0px)
                            }

                            100% {
                              transform: translate(0px, 0px)
                            }
                          }

                          .am-weather-haze-4 {
                            -webkit-animation-name: am-weather-haze-4;
                            -moz-animation-name: am-weather-haze-4;
                            -ms-animation-name: am-weather-haze-4;
                            animation-name: am-weather-haze-4;
                            -webkit-animation-duration: 6s;
                            -moz-animation-duration: 6s;
                            -ms-animation-duration: 6s;
                            animation-duration: 6s;
                            -webkit-animation-timing-function: linear;
                            -moz-animation-timing-function: linear;
                            -ms-animation-timing-function: linear;
                            animation-timing-function: linear;
                            -webkit-animation-iteration-count: infinite;
                            -moz-animation-iteration-count: infinite;
                            -ms-animation-iteration-count: infinite;
                            animation-iteration-count: infinite;
                          }
                          ]]>
                </style>
            </defs>
            <g transform="translate(16,-2)" filter="url(#blur)">
                <g transform="translate(0,16)">
                    <g class="am-weather-sun" transform="translate(0,16)">
                        <line
                            transform="translate(0,9)"
                            y2="3"
                            fill="none"
                            stroke="#ffc04a"
                            stroke-linecap="round"
                            stroke-width="2" />
                        <g transform="rotate(45)">
                            <line
                                transform="translate(0,9)"
                                y2="3"
                                fill="none"
                                stroke="#ffc04a"
                                stroke-linecap="round"
                                stroke-width="2" />
                        </g>
                        <g transform="rotate(90)">
                            <line
                                transform="translate(0,9)"
                                y2="3"
                                fill="none"
                                stroke="#ffc04a"
                                stroke-linecap="round"
                                stroke-width="2" />
                        </g>
                        <g transform="rotate(135)">
                            <line
                                transform="translate(0,9)"
                                y2="3"
                                fill="none"
                                stroke="#ffc04a"
                                stroke-linecap="round"
                                stroke-width="2" />
                        </g>
                        <g transform="scale(-1)">
                            <line
                                transform="translate(0,9)"
                                y2="3"
                                fill="none"
                                stroke="#ffc04a"
                                stroke-linecap="round"
                                stroke-width="2" />
                        </g>
                        <g transform="rotate(225)">
                            <line
                                transform="translate(0,9)"
                                y2="3"
                                fill="none"
                                stroke="#ffc04a"
                                stroke-linecap="round"
                                stroke-width="2" />
                        </g>
                        <g transform="rotate(-90)">
                            <line
                                transform="translate(0,9)"
                                y2="3"
                                fill="none"
                                stroke="#ffc04a"
                                stroke-linecap="round"
                                stroke-width="2" />
                        </g>
                        <g transform="rotate(-45)">
                            <line
                                transform="translate(0,9)"
                                y2="3"
                                fill="none"
                                stroke="#ffc04a"
                                stroke-linecap="round"
                                stroke-width="2" />
                        </g>
                        <circle r="5" fill="#ffc04a" stroke="#ffc04a" stroke-width="2" />
                    </g>
                </g>
                <g
                    class="am-weather-haze"
                    transform="translate(-10,20)"
                    fill="none"
                    stroke="#cd9e73"
                    stroke-linecap="round"
                    stroke-width="2">
                    <line class="am-weather-haze-1" y1="0" y2="0" x1="1" x2="37" stroke-dasharray="3, 5, 17, 5, 7" />
                    <line class="am-weather-haze-2" y1="5" y2="5" x1="9" x2="33" stroke-dasharray="11, 7, 15" />
                    <line class="am-weather-haze-3" y1="10" y2="10" x1="5" x2="40" stroke-dasharray="11, 7, 3, 5, 9" />
                    <line class="am-weather-haze-4" y1="15" y2="15" x1="7" x2="42" stroke-dasharray="13, 5, 9, 5, 3" />
                </g>
            </g>
        </svg>
    `,
    hazeNight: html`
        <svg viewBox="0 0 55 48" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <filter id="blur" x="-.20655" y="-.21122" width="1.403" height="1.4997">
                    <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
                    <feOffset dx="0" dy="4" result="offsetblur" />
                    <feComponentTransfer>
                        <feFuncA slope="0.05" type="linear" />
                    </feComponentTransfer>
                    <feMerge>
                        <feMergeNode />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
                <style type="text/css">
                          <![CDATA[
                          /*
                    ** MOON
                    */
                          @keyframes am-weather-moon {
                            0% {
                              -webkit-transform: rotate(0deg);
                              -moz-transform: rotate(0deg);
                              -ms-transform: rotate(0deg);
                              transform: rotate(0deg);
                            }

                            50% {
                              -webkit-transform: rotate(15deg);
                              -moz-transform: rotate(15deg);
                              -ms-transform: rotate(15deg);
                              transform: rotate(15deg);
                            }

                            100% {
                              -webkit-transform: rotate(0deg);
                              -moz-transform: rotate(0deg);
                              -ms-transform: rotate(0deg);
                              transform: rotate(0deg);
                            }
                          }

                          .am-weather-moon {
                            -webkit-animation-name: am-weather-moon;
                            -moz-animation-name: am-weather-moon;
                            -ms-animation-name: am-weather-moon;
                            animation-name: am-weather-moon;
                            -webkit-animation-duration: 6s;
                            -moz-animation-duration: 6s;
                            -ms-animation-duration: 6s;
                            animation-duration: 6s;
                            -webkit-animation-timing-function: linear;
                            -moz-animation-timing-function: linear;
                            -ms-animation-timing-function: linear;
                            animation-timing-function: linear;
                            -webkit-animation-iteration-count: infinite;
                            -moz-animation-iteration-count: infinite;
                            -ms-animation-iteration-count: infinite;
                            animation-iteration-count: infinite;
                            -webkit-transform-origin: 12.5px 15.15px 0;
                            /* TODO FF CENTER ISSUE */
                            -moz-transform-origin: 12.5px 15.15px 0;
                            /* TODO FF CENTER ISSUE */
                            -ms-transform-origin: 12.5px 15.15px 0;
                            /* TODO FF CENTER ISSUE */
                            transform-origin: 12.5px 15.15px 0;
                            /* TODO FF CENTER ISSUE */
                          }

                          @keyframes am-weather-moon-star-1 {
                            0% {
                              opacity: 0;
                            }

                            100% {
                              opacity: 1;
                            }
                          }

                          .am-weather-moon-star-1 {
                            -webkit-animation-name: am-weather-moon-star-1;
                            -moz-animation-name: am-weather-moon-star-1;
                            -ms-animation-name: am-weather-moon-star-1;
                            animation-name: am-weather-moon-star-1;
                            -webkit-animation-delay: 3s;
                            -moz-animation-delay: 3s;
                            -ms-animation-delay: 3s;
                            animation-delay: 3s;
                            -webkit-animation-duration: 5s;
                            -moz-animation-duration: 5s;
                            -ms-animation-duration: 5s;
                            animation-duration: 5s;
                            -webkit-animation-timing-function: linear;
                            -moz-animation-timing-function: linear;
                            -ms-animation-timing-function: linear;
                            animation-timing-function: linear;
                            -webkit-animation-iteration-count: 1;
                            -moz-animation-iteration-count: 1;
                            -ms-animation-iteration-count: 1;
                            animation-iteration-count: 1;
                          }

                          @keyframes am-weather-moon-star-2 {
                            0% {
                              opacity: 0;
                            }

                            100% {
                              opacity: 1;
                            }
                          }

                          .am-weather-moon-star-2 {
                            -webkit-animation-name: am-weather-moon-star-2;
                            -moz-animation-name: am-weather-moon-star-2;
                            -ms-animation-name: am-weather-moon-star-2;
                            animation-name: am-weather-moon-star-2;
                            -webkit-animation-delay: 5s;
                            -moz-animation-delay: 5s;
                            -ms-animation-delay: 5s;
                            animation-delay: 5s;
                            -webkit-animation-duration: 4s;
                            -moz-animation-duration: 4s;
                            -ms-animation-duration: 4s;
                            animation-duration: 4s;
                            -webkit-animation-timing-function: linear;
                            -moz-animation-timing-function: linear;
                            -ms-animation-timing-function: linear;
                            animation-timing-function: linear;
                            -webkit-animation-iteration-count: 1;
                            -moz-animation-iteration-count: 1;
                            -ms-animation-iteration-count: 1;
                            animation-iteration-count: 1;
                          }

                          /*
                    ** haze
                    */
                          @keyframes am-weather-haze-1 {
                            0% {
                              transform: translate(0px, 0px)
                            }

                            50% {
                              transform: translate(7px, 0px)
                            }

                            100% {
                              transform: translate(0px, 0px)
                            }
                          }

                          .am-weather-haze-1 {
                            -webkit-animation-name: am-weather-haze-1;
                            -moz-animation-name: am-weather-haze-1;
                            -ms-animation-name: am-weather-haze-1;
                            animation-name: am-weather-haze-1;
                            -webkit-animation-duration: 8s;
                            -moz-animation-duration: 8s;
                            -ms-animation-duration: 8s;
                            animation-duration: 8s;
                            -webkit-animation-timing-function: linear;
                            -moz-animation-timing-function: linear;
                            -ms-animation-timing-function: linear;
                            animation-timing-function: linear;
                            -webkit-animation-iteration-count: infinite;
                            -moz-animation-iteration-count: infinite;
                            -ms-animation-iteration-count: infinite;
                            animation-iteration-count: infinite;
                          }

                          @keyframes am-weather-haze-2 {
                            0% {
                              transform: translate(0px, 0px)
                            }

                            21.05% {
                              transform: translate(-6px, 0px)
                            }

                            78.95% {
                              transform: translate(9px, 0px)
                            }

                            100% {
                              transform: translate(0px, 0px)
                            }
                          }

                          .am-weather-haze-2 {
                            -webkit-animation-name: am-weather-haze-2;
                            -moz-animation-name: am-weather-haze-2;
                            -ms-animation-name: am-weather-haze-2;
                            animation-name: am-weather-haze-2;
                            -webkit-animation-duration: 20s;
                            -moz-animation-duration: 20s;
                            -ms-animation-duration: 20s;
                            animation-duration: 20s;
                            -webkit-animation-timing-function: linear;
                            -moz-animation-timing-function: linear;
                            -ms-animation-timing-function: linear;
                            animation-timing-function: linear;
                            -webkit-animation-iteration-count: infinite;
                            -moz-animation-iteration-count: infinite;
                            -ms-animation-iteration-count: infinite;
                            animation-iteration-count: infinite;
                          }

                          @keyframes am-weather-haze-3 {
                            0% {
                              transform: translate(0px, 0px)
                            }

                            25% {
                              transform: translate(4px, 0px)
                            }

                            75% {
                              transform: translate(-4px, 0px)
                            }

                            100% {
                              transform: translate(0px, 0px)
                            }
                          }

                          .am-weather-haze-3 {
                            -webkit-animation-name: am-weather-haze-3;
                            -moz-animation-name: am-weather-haze-3;
                            -ms-animation-name: am-weather-haze-3;
                            animation-name: am-weather-haze-3;
                            -webkit-animation-duration: 6s;
                            -moz-animation-duration: 6s;
                            -ms-animation-duration: 6s;
                            animation-duration: 6s;
                            -webkit-animation-timing-function: linear;
                            -moz-animation-timing-function: linear;
                            -ms-animation-timing-function: linear;
                            animation-timing-function: linear;
                            -webkit-animation-iteration-count: infinite;
                            -moz-animation-iteration-count: infinite;
                            -ms-animation-iteration-count: infinite;
                            animation-iteration-count: infinite;
                          }

                          @keyframes am-weather-haze-4 {
                            0% {
                              transform: translate(0px, 0px)
                            }

                            50% {
                              transform: translate(-4px, 0px)
                            }

                            100% {
                              transform: translate(0px, 0px)
                            }
                          }

                          .am-weather-haze-4 {
                            -webkit-animation-name: am-weather-haze-4;
                            -moz-animation-name: am-weather-haze-4;
                            -ms-animation-name: am-weather-haze-4;
                            animation-name: am-weather-haze-4;
                            -webkit-animation-duration: 6s;
                            -moz-animation-duration: 6s;
                            -ms-animation-duration: 6s;
                            animation-duration: 6s;
                            -webkit-animation-timing-function: linear;
                            -moz-animation-timing-function: linear;
                            -ms-animation-timing-function: linear;
                            animation-timing-function: linear;
                            -webkit-animation-iteration-count: infinite;
                            -moz-animation-iteration-count: infinite;
                            -ms-animation-iteration-count: infinite;
                            animation-iteration-count: infinite;
                          }
                          ]]>
                </style>
            </defs>
            <g transform="translate(16,-2)" filter="url(#blur)">
                <g transform="matrix(.8 0 0 .8 16 4)">
                    <g
                        class="am-weather-moon-star-1"
                        style="-moz-animation-delay:3s;-moz-animation-duration:5s;-moz-animation-iteration-count:1;-moz-animation-name:am-weather-moon-star-1;-moz-animation-timing-function:linear;-ms-animation-delay:3s;-ms-animation-duration:5s;-ms-animation-iteration-count:1;-ms-animation-name:am-weather-moon-star-1;-ms-animation-timing-function:linear;-webkit-animation-delay:3s;-webkit-animation-duration:5s;-webkit-animation-iteration-count:1;-webkit-animation-name:am-weather-moon-star-1;-webkit-animation-timing-function:linear">
                        <polygon
                            points="4 4 3.3 5.2 2.7 4 1.5 3.3 2.7 2.7 3.3 1.5 4 2.7 5.2 3.3"
                            fill="#ffc04a"
                            stroke-miterlimit="10" />
                    </g>
                    <g
                        class="am-weather-moon-star-2"
                        style="-moz-animation-delay:5s;-moz-animation-duration:4s;-moz-animation-iteration-count:1;-moz-animation-name:am-weather-moon-star-2;-moz-animation-timing-function:linear;-ms-animation-delay:5s;-ms-animation-duration:4s;-ms-animation-iteration-count:1;-ms-animation-name:am-weather-moon-star-2;-ms-animation-timing-function:linear;-webkit-animation-delay:5s;-webkit-animation-duration:4s;-webkit-animation-iteration-count:1;-webkit-animation-name:am-weather-moon-star-2;-webkit-animation-timing-function:linear">
                        <polygon
                            transform="translate(20,10)"
                            points="4 4 3.3 5.2 2.7 4 1.5 3.3 2.7 2.7 3.3 1.5 4 2.7 5.2 3.3"
                            fill="#ffc04a"
                            stroke-miterlimit="10" />
                    </g>
                    <g
                        class="am-weather-moon"
                        style="-moz-animation-duration:6s;-moz-animation-iteration-count:infinite;-moz-animation-name:am-weather-moon;-moz-animation-timing-function:linear;-moz-transform-origin:12.5px 15.15px 0;-ms-animation-duration:6s;-ms-animation-iteration-count:infinite;-ms-animation-name:am-weather-moon;-ms-animation-timing-function:linear;-ms-transform-origin:12.5px 15.15px 0;-webkit-animation-duration:6s;-webkit-animation-iteration-count:infinite;-webkit-animation-name:am-weather-moon;-webkit-animation-timing-function:linear;-webkit-transform-origin:12.5px 15.15px 0">
                        <path
                            d="m14.5 13.2c0-3.7 2-6.9 5-8.7-1.5-0.9-3.2-1.3-5-1.3-5.5 0-10 4.5-10 10s4.5 10 10 10c1.8 0 3.5-0.5 5-1.3-3-1.7-5-5-5-8.7z"
                            fill="#ffc04a"
                            stroke="#ffc04a"
                            stroke-linejoin="round"
                            stroke-width="2" />
                    </g>
                </g>
                <g
                    class="am-weather-haze"
                    transform="translate(-10,20)"
                    fill="none"
                    stroke="#cd9e73"
                    stroke-linecap="round"
                    stroke-width="2">
                    <line class="am-weather-haze-1" y1="0" y2="0" x1="1" x2="37" stroke-dasharray="3, 5, 17, 5, 7" />
                    <line class="am-weather-haze-2" y1="5" y2="5" x1="9" x2="33" stroke-dasharray="11, 7, 15" />
                    <line class="am-weather-haze-3" y1="10" y2="10" x1="5" x2="40" stroke-dasharray="11, 7, 3, 5, 9" />
                    <line class="am-weather-haze-4" y1="15" y2="15" x1="7" x2="42" stroke-dasharray="13, 5, 9, 5, 3" />
                </g>
            </g>
        </svg>
    `,
    haze: html`
        <svg viewBox="0 0 55 48" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <filter id="blur" x="-.20655" y="-.21122" width="1.403" height="1.4997">
                    <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
                    <feOffset dx="0" dy="4" result="offsetblur" />
                    <feComponentTransfer>
                        <feFuncA slope="0.05" type="linear" />
                    </feComponentTransfer>
                    <feMerge>
                        <feMergeNode />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
                <style type="text/css">
                          <![CDATA[
                          /*
                    ** haze
                    */
                          @keyframes am-weather-haze-1 {
                            0% {
                              transform: translate(0px, 0px)
                            }

                            50% {
                              transform: translate(7px, 0px)
                            }

                            100% {
                              transform: translate(0px, 0px)
                            }
                          }

                          .am-weather-haze-1 {
                            -webkit-animation-name: am-weather-haze-1;
                            -moz-animation-name: am-weather-haze-1;
                            -ms-animation-name: am-weather-haze-1;
                            animation-name: am-weather-haze-1;
                            -webkit-animation-duration: 8s;
                            -moz-animation-duration: 8s;
                            -ms-animation-duration: 8s;
                            animation-duration: 8s;
                            -webkit-animation-timing-function: linear;
                            -moz-animation-timing-function: linear;
                            -ms-animation-timing-function: linear;
                            animation-timing-function: linear;
                            -webkit-animation-iteration-count: infinite;
                            -moz-animation-iteration-count: infinite;
                            -ms-animation-iteration-count: infinite;
                            animation-iteration-count: infinite;
                          }

                          @keyframes am-weather-haze-2 {
                            0% {
                              transform: translate(0px, 0px)
                            }

                            21.05% {
                              transform: translate(-6px, 0px)
                            }

                            78.95% {
                              transform: translate(9px, 0px)
                            }

                            100% {
                              transform: translate(0px, 0px)
                            }
                          }

                          .am-weather-haze-2 {
                            -webkit-animation-name: am-weather-haze-2;
                            -moz-animation-name: am-weather-haze-2;
                            -ms-animation-name: am-weather-haze-2;
                            animation-name: am-weather-haze-2;
                            -webkit-animation-duration: 20s;
                            -moz-animation-duration: 20s;
                            -ms-animation-duration: 20s;
                            animation-duration: 20s;
                            -webkit-animation-timing-function: linear;
                            -moz-animation-timing-function: linear;
                            -ms-animation-timing-function: linear;
                            animation-timing-function: linear;
                            -webkit-animation-iteration-count: infinite;
                            -moz-animation-iteration-count: infinite;
                            -ms-animation-iteration-count: infinite;
                            animation-iteration-count: infinite;
                          }

                          @keyframes am-weather-haze-3 {
                            0% {
                              transform: translate(0px, 0px)
                            }

                            25% {
                              transform: translate(4px, 0px)
                            }

                            75% {
                              transform: translate(-4px, 0px)
                            }

                            100% {
                              transform: translate(0px, 0px)
                            }
                          }

                          .am-weather-haze-3 {
                            -webkit-animation-name: am-weather-haze-3;
                            -moz-animation-name: am-weather-haze-3;
                            -ms-animation-name: am-weather-haze-3;
                            animation-name: am-weather-haze-3;
                            -webkit-animation-duration: 6s;
                            -moz-animation-duration: 6s;
                            -ms-animation-duration: 6s;
                            animation-duration: 6s;
                            -webkit-animation-timing-function: linear;
                            -moz-animation-timing-function: linear;
                            -ms-animation-timing-function: linear;
                            animation-timing-function: linear;
                            -webkit-animation-iteration-count: infinite;
                            -moz-animation-iteration-count: infinite;
                            -ms-animation-iteration-count: infinite;
                            animation-iteration-count: infinite;
                          }

                          @keyframes am-weather-haze-4 {
                            0% {
                              transform: translate(0px, 0px)
                            }

                            50% {
                              transform: translate(-4px, 0px)
                            }

                            100% {
                              transform: translate(0px, 0px)
                            }
                          }

                          .am-weather-haze-4 {
                            -webkit-animation-name: am-weather-haze-4;
                            -moz-animation-name: am-weather-haze-4;
                            -ms-animation-name: am-weather-haze-4;
                            animation-name: am-weather-haze-4;
                            -webkit-animation-duration: 6s;
                            -moz-animation-duration: 6s;
                            -ms-animation-duration: 6s;
                            animation-duration: 6s;
                            -webkit-animation-timing-function: linear;
                            -moz-animation-timing-function: linear;
                            -ms-animation-timing-function: linear;
                            animation-timing-function: linear;
                            -webkit-animation-iteration-count: infinite;
                            -moz-animation-iteration-count: infinite;
                            -ms-animation-iteration-count: infinite;
                            animation-iteration-count: infinite;
                          }
                          ]]>
                </style>
            </defs>
            <g transform="translate(16,-2)" filter="url(#blur)">
                <g
                    class="am-weather-haze"
                    transform="translate(-10,20)"
                    fill="none"
                    stroke="#cd9e73"
                    stroke-linecap="round"
                    stroke-width="2">
                    <line class="am-weather-haze-1" y1="0" y2="0" x1="1" x2="37" stroke-dasharray="3, 5, 17, 5, 7" />
                    <line class="am-weather-haze-2" y1="5" y2="5" x1="9" x2="33" stroke-dasharray="11, 7, 15" />
                    <line class="am-weather-haze-3" y1="10" y2="10" x1="5" x2="40" stroke-dasharray="11, 7, 3, 5, 9" />
                    <line class="am-weather-haze-4" y1="15" y2="15" x1="7" x2="42" stroke-dasharray="13, 5, 9, 5, 3" />
                </g>
            </g>
        </svg>
    `,
    hurricane: html`
        <svg viewBox="0 0 55 48" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <filter id="blur" x="-.16995" y="-.17864" width="1.3289" height="1.455">
                    <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
                    <feOffset dx="0" dy="4" result="offsetblur" />
                    <feComponentTransfer>
                        <feFuncA slope="0.05" type="linear" />
                    </feComponentTransfer>
                    <feMerge>
                        <feMergeNode />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
                <style>
                    <![CDATA[
                    @keyframes storm {
                        0% {
                            transform: rotate(0turn);
                        }

                        100% {
                            transform: rotate(-1turn);
                        }
                    }


                    #storm {
                        -webkit-animation-name: storm;
                        -moz-animation-name: storm;
                        animation-name: storm;
                        -webkit-animation-duration: 5s;
                        -moz-animation-duration: 5s;
                        animation-duration: 5s;
                        transform-origin: 50% 50%;
                        -webkit-animation-timing-function: linear;
                        -moz-animation-timing-function: linear;
                        animation-timing-function: linear;
                        -webkit-animation-iteration-count: infinite;
                        -moz-animation-iteration-count: infinite;
                        animation-iteration-count: infinite;
                    }

                    @keyframes error {
                        0% {
                            fill: #cc0000;
                        }

                        50% {
                            fill: #ff0000;
                        }

                        100% {
                            fill: #cc0000;
                        }
                    }

                    #Shape {
                        -webkit-animation-name: error;
                        -moz-animation-name: error;
                        animation-name: error;
                        -webkit-animation-duration: 1s;
                        -moz-animation-duration: 1s;
                        animation-duration: 1s;
                        -webkit-animation-timing-function: linear;
                        -moz-animation-timing-function: linear;
                        animation-timing-function: linear;
                        -webkit-animation-iteration-count: infinite;
                        -moz-animation-iteration-count: infinite;
                        animation-iteration-count: infinite;
                    }
                    ]]>
                </style>
            </defs>
            <g
                id="storm"
                transform="translate(16,-2)"
                fill="none"
                fill-rule="evenodd"
                style="-moz-animation-duration:5s;-moz-animation-iteration-count:infinite;-moz-animation-name:storm;-moz-animation-timing-function:linear;-webkit-animation-duration:5s;-webkit-animation-iteration-count:infinite;-webkit-animation-name:storm;-webkit-animation-timing-function:linear">
                <g transform="translate(15,20)" fill="#c00" fill-rule="nonzero">
                    <path
                        id=""
                        d="m18.478 0.091701c0.04503-0.0026866 0.44719-0.0026866 0.89312-0.0013433 0.81178 0.0039403 1.0316 0.013164 1.6236 0.066 0.71569 0.064746 1.4989 0.18233 2.2033 0.33152 0.32351 0.068687 0.76189 0.17167 0.77187 0.18224 0.0025 0.001343-0.10742 0.00797-0.24234 0.013254-1.6374 0.059463-3.2012 0.47409-4.3191 1.1438-0.89052 0.53221-1.5562 1.2428-1.9509 2.0802-0.18364 0.38696-0.25231 0.67487-0.2373 0.98919 0.01995 0.44901 0.19362 0.83731 0.72063 1.6127 0.30733 0.4517 0.52458 0.7911 0.67703 1.0565 0.60575 1.0553 0.91551 2.1053 1.0117 3.434 0.02247 0.31433 0.0187 1.1662-0.0076 1.5056-0.08611 1.1412-0.24854 2.0023-0.53825 2.866-0.77564 2.3139-2.3782 4.3241-4.6589 5.8443-1.2939 0.86382-2.8403 1.569-4.4715 2.0393-1.3089 0.37773-2.5905 0.59436-4.1155 0.69734-0.34849 0.02373-1.861 0.02373-2.2107 0-0.89187-0.05946-1.5563-0.13997-2.3357-0.28128-0.53079-0.09511-1.3039-0.27081-1.2914-0.29194 0.0036854-0.0053 0.098607-0.01057 0.21231-0.01057 0.55578 0 1.4564-0.11355 2.1021-0.26543 1.4526-0.34075 2.5604-0.91263 3.3573-1.7328 0.35721-0.36851 0.62328-0.74355 0.83434-1.1781 0.17366-0.35919 0.24234-0.59955 0.25231-0.88621 0.019955-0.5349-0.12863-0.88755-0.77942-1.8477-0.22733-0.33672-0.47209-0.71713-0.58202-0.906-0.61573-1.0553-0.93924-2.1237-1.0392-3.426-0.017438-0.23113-0.027416-0.84797-0.017438-1.1266 0.059955-1.7117 0.38589-3.1249 1.0354-4.4867 0.90427-1.8952 2.4443-3.5713 4.449-4.8418 2.0896-1.3247 4.6626-2.1938 7.3542-2.4817 0.42346-0.044866 0.68198-0.064746 1.299-0.097701z" />
                </g>
            </g>
            <g class="warning" transform="translate(36,28)">
                <path
                    d="m7.7791 2.906-5.9912 10.117c-0.56283 0.95042-0.24862 2.1772 0.7018 2.74 0.30853 0.18271 0.66051 0.27911 1.0191 0.27911h11.982c1.1046 0 2-0.89543 2-2 0-0.35857-0.0964-0.71056-0.27911-1.0191l-5.9912-10.117c-0.56283-0.95042-1.7896-1.2646-2.74-0.7018-0.28918 0.17125-0.53055 0.41262-0.7018 0.7018z"
                    fill="#c00" />
                <path d="m9.5 10.5v-5" stroke="#fff" stroke-linecap="round" stroke-width="1.5" />
                <circle cx="9.5" cy="13" r="1" fill="#fff" />
            </g>
        </svg>
    `,
    isolatedThunderstormsDay: html``,
    isolatedThunderstormsNight: html``,
    isolatedThunderstorms: html``,
    rainAndSleetMix: html``,
    rainAndSnowMix: html``,
    rainy1Day: html`
        <svg viewBox="0 0 55 48" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <filter id="blur" x="-.20655" y="-.21122" width="1.403" height="1.4997">
                    <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
                    <feOffset dx="0" dy="4" result="offsetblur" />
                    <feComponentTransfer>
                        <feFuncA slope="0.05" type="linear" />
                    </feComponentTransfer>
                    <feMerge>
                        <feMergeNode />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
                <style type="text/css">
                          <![CDATA[
                          /*
                    ** SUN
                    */
                          @keyframes am-weather-sun {
                            0% {
                              -webkit-transform: rotate(0deg);
                              -moz-transform: rotate(0deg);
                              -ms-transform: rotate(0deg);
                              transform: rotate(0deg);
                            }

                            100% {
                              -webkit-transform: rotate(360deg);
                              -moz-transform: rotate(360deg);
                              -ms-transform: rotate(360deg);
                              transform: rotate(360deg);
                            }
                          }

                          .am-weather-sun {
                            -webkit-animation-name: am-weather-sun;
                            -moz-animation-name: am-weather-sun;
                            -ms-animation-name: am-weather-sun;
                            animation-name: am-weather-sun;
                            -webkit-animation-duration: 9s;
                            -moz-animation-duration: 9s;
                            -ms-animation-duration: 9s;
                            animation-duration: 9s;
                            -webkit-animation-timing-function: linear;
                            -moz-animation-timing-function: linear;
                            -ms-animation-timing-function: linear;
                            animation-timing-function: linear;
                            -webkit-animation-iteration-count: infinite;
                            -moz-animation-iteration-count: infinite;
                            -ms-animation-iteration-count: infinite;
                            animation-iteration-count: infinite;
                          }

                          /*
                    ** CLOUDS
                    */
                          @keyframes am-weather-cloud-2 {
                            0% {
                              -webkit-transform: translate(0px, 0px);
                              -moz-transform: translate(0px, 0px);
                              -ms-transform: translate(0px, 0px);
                              transform: translate(0px, 0px);
                            }

                            50% {
                              -webkit-transform: translate(2px, 0px);
                              -moz-transform: translate(2px, 0px);
                              -ms-transform: translate(2px, 0px);
                              transform: translate(2px, 0px);
                            }

                            100% {
                              -webkit-transform: translate(0px, 0px);
                              -moz-transform: translate(0px, 0px);
                              -ms-transform: translate(0px, 0px);
                              transform: translate(0px, 0px);
                            }
                          }

                          .am-weather-cloud-2 {
                            -webkit-animation-name: am-weather-cloud-2;
                            -moz-animation-name: am-weather-cloud-2;
                            animation-name: am-weather-cloud-2;
                            -webkit-animation-duration: 3s;
                            -moz-animation-duration: 3s;
                            animation-duration: 3s;
                            -webkit-animation-timing-function: linear;
                            -moz-animation-timing-function: linear;
                            animation-timing-function: linear;
                            -webkit-animation-iteration-count: infinite;
                            -moz-animation-iteration-count: infinite;
                            animation-iteration-count: infinite;
                          }

                          /*
                    ** RAIN
                    */
                          @keyframes am-weather-rain {
                            0% {
                              stroke-dashoffset: 0;
                            }

                            100% {
                              stroke-dashoffset: -100;
                            }
                          }

                          .am-weather-rain-1 {
                            -webkit-animation-name: am-weather-rain;
                            -moz-animation-name: am-weather-rain;
                            -ms-animation-name: am-weather-rain;
                            animation-name: am-weather-rain;
                            -webkit-animation-duration: 8s;
                            -moz-animation-duration: 8s;
                            -ms-animation-duration: 8s;
                            animation-duration: 8s;
                            -webkit-animation-timing-function: linear;
                            -moz-animation-timing-function: linear;
                            -ms-animation-timing-function: linear;
                            animation-timing-function: linear;
                            -webkit-animation-iteration-count: infinite;
                            -moz-animation-iteration-count: infinite;
                            -ms-animation-iteration-count: infinite;
                            animation-iteration-count: infinite;
                          }
                          ]]>
                </style>
            </defs>
            <g transform="translate(16,-2)" filter="url(#blur)">
                <g transform="translate(0,16)">
                    <g
                        class="am-weather-sun"
                        style="-moz-animation-duration:9s;-moz-animation-iteration-count:infinite;-moz-animation-name:am-weather-sun;-moz-animation-timing-function:linear;-ms-animation-duration:9s;-ms-animation-iteration-count:infinite;-ms-animation-name:am-weather-sun;-ms-animation-timing-function:linear;-webkit-animation-duration:9s;-webkit-animation-iteration-count:infinite;-webkit-animation-name:am-weather-sun;-webkit-animation-timing-function:linear">
                        <line
                            transform="translate(0,9)"
                            y2="3"
                            fill="none"
                            stroke="#ffa500"
                            stroke-linecap="round"
                            stroke-width="2" />
                        <g transform="rotate(45)">
                            <line
                                transform="translate(0,9)"
                                y2="3"
                                fill="none"
                                stroke="#ffa500"
                                stroke-linecap="round"
                                stroke-width="2" />
                        </g>
                        <g transform="rotate(90)">
                            <line
                                transform="translate(0,9)"
                                y2="3"
                                fill="none"
                                stroke="#ffa500"
                                stroke-linecap="round"
                                stroke-width="2" />
                        </g>
                        <g transform="rotate(135)">
                            <line
                                transform="translate(0,9)"
                                y2="3"
                                fill="none"
                                stroke="#ffa500"
                                stroke-linecap="round"
                                stroke-width="2" />
                        </g>
                        <g transform="scale(-1)">
                            <line
                                transform="translate(0,9)"
                                y2="3"
                                fill="none"
                                stroke="#ffa500"
                                stroke-linecap="round"
                                stroke-width="2" />
                        </g>
                        <g transform="rotate(225)">
                            <line
                                transform="translate(0,9)"
                                y2="3"
                                fill="none"
                                stroke="#ffa500"
                                stroke-linecap="round"
                                stroke-width="2" />
                        </g>
                        <g transform="rotate(-90)">
                            <line
                                transform="translate(0,9)"
                                y2="3"
                                fill="none"
                                stroke="#ffa500"
                                stroke-linecap="round"
                                stroke-width="2" />
                        </g>
                        <g transform="rotate(-45)">
                            <line
                                transform="translate(0,9)"
                                y2="3"
                                fill="none"
                                stroke="#ffa500"
                                stroke-linecap="round"
                                stroke-width="2" />
                        </g>
                        <circle r="5" fill="#ffa500" stroke="#ffa500" stroke-width="2" />
                    </g>
                </g>
                <g
                    class="am-weather-cloud-3"
                    style="-moz-animation-duration:3s;-moz-animation-iteration-count:infinite;-moz-animation-name:am-weather-cloud-2;-moz-animation-timing-function:linear;-webkit-animation-duration:3s;-webkit-animation-iteration-count:infinite;-webkit-animation-name:am-weather-cloud-2;-webkit-animation-timing-function:linear">
                    <path
                        transform="translate(-20,-11)"
                        d="m47.7 35.4c0-4.6-3.7-8.2-8.2-8.2-1 0-1.9 0.2-2.8 0.5-0.3-3.4-3.1-6.2-6.6-6.2-3.7 0-6.7 3-6.7 6.7 0 0.8 0.2 1.6 0.4 2.3-0.3-0.1-0.7-0.1-1-0.1-3.7 0-6.7 3-6.7 6.7 0 3.6 2.9 6.6 6.5 6.7h17.2c4.4-0.5 7.9-4 7.9-8.4z"
                        fill="#57a0ee"
                        stroke="#fff"
                        stroke-linejoin="round"
                        stroke-width="1.2" />
                </g>
                <g class="am-weather-rain-1" transform="translate(-20,-10) rotate(10,-238.68,233.96)">
                    <line
                        class="am-weather-rain-1"
                        transform="translate(-6,1)"
                        y2="8"
                        fill="none"
                        stroke="#91c0f8"
                        stroke-dasharray="4, 7"
                        stroke-linecap="round"
                        stroke-width="2"
                        style="-moz-animation-duration:8s;-moz-animation-iteration-count:infinite;-moz-animation-name:am-weather-rain;-moz-animation-timing-function:linear;-ms-animation-duration:8s;-ms-animation-iteration-count:infinite;-ms-animation-name:am-weather-rain;-ms-animation-timing-function:linear;-webkit-animation-duration:8s;-webkit-animation-iteration-count:infinite;-webkit-animation-name:am-weather-rain;-webkit-animation-timing-function:linear" />
                </g>
            </g>
        </svg>
    `,
    rainy1Night: html`
        <svg viewBox="0 0 55 48" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <filter id="blur" x="-.20655" y="-.21122" width="1.403" height="1.4997">
                    <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
                    <feOffset dx="0" dy="4" result="offsetblur" />
                    <feComponentTransfer>
                        <feFuncA slope="0.05" type="linear" />
                    </feComponentTransfer>
                    <feMerge>
                        <feMergeNode />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
                <style type="text/css">
                          <![CDATA[
                          /*
                    ** MOON
                    */
                          @keyframes am-weather-moon {
                            0% {
                              -webkit-transform: rotate(0deg);
                              -moz-transform: rotate(0deg);
                              -ms-transform: rotate(0deg);
                              transform: rotate(0deg);
                            }

                            50% {
                              -webkit-transform: rotate(15deg);
                              -moz-transform: rotate(15deg);
                              -ms-transform: rotate(15deg);
                              transform: rotate(15deg);
                            }

                            100% {
                              -webkit-transform: rotate(0deg);
                              -moz-transform: rotate(0deg);
                              -ms-transform: rotate(0deg);
                              transform: rotate(0deg);
                            }
                          }

                          .am-weather-moon {
                            -webkit-animation-name: am-weather-moon;
                            -moz-animation-name: am-weather-moon;
                            -ms-animation-name: am-weather-moon;
                            animation-name: am-weather-moon;
                            -webkit-animation-duration: 6s;
                            -moz-animation-duration: 6s;
                            -ms-animation-duration: 6s;
                            animation-duration: 6s;
                            -webkit-animation-timing-function: linear;
                            -moz-animation-timing-function: linear;
                            -ms-animation-timing-function: linear;
                            animation-timing-function: linear;
                            -webkit-animation-iteration-count: infinite;
                            -moz-animation-iteration-count: infinite;
                            -ms-animation-iteration-count: infinite;
                            animation-iteration-count: infinite;
                            -webkit-transform-origin: 12.5px 15.15px 0;
                            /* TODO FF CENTER ISSUE */
                            -moz-transform-origin: 12.5px 15.15px 0;
                            /* TODO FF CENTER ISSUE */
                            -ms-transform-origin: 12.5px 15.15px 0;
                            /* TODO FF CENTER ISSUE */
                            transform-origin: 12.5px 15.15px 0;
                            /* TODO FF CENTER ISSUE */
                          }

                          @keyframes am-weather-moon-star-1 {
                            0% {
                              opacity: 0;
                            }

                            100% {
                              opacity: 1;
                            }
                          }

                          .am-weather-moon-star-1 {
                            -webkit-animation-name: am-weather-moon-star-1;
                            -moz-animation-name: am-weather-moon-star-1;
                            -ms-animation-name: am-weather-moon-star-1;
                            animation-name: am-weather-moon-star-1;
                            -webkit-animation-delay: 3s;
                            -moz-animation-delay: 3s;
                            -ms-animation-delay: 3s;
                            animation-delay: 3s;
                            -webkit-animation-duration: 5s;
                            -moz-animation-duration: 5s;
                            -ms-animation-duration: 5s;
                            animation-duration: 5s;
                            -webkit-animation-timing-function: linear;
                            -moz-animation-timing-function: linear;
                            -ms-animation-timing-function: linear;
                            animation-timing-function: linear;
                            -webkit-animation-iteration-count: 1;
                            -moz-animation-iteration-count: 1;
                            -ms-animation-iteration-count: 1;
                            animation-iteration-count: 1;
                          }

                          @keyframes am-weather-moon-star-2 {
                            0% {
                              opacity: 0;
                            }

                            100% {
                              opacity: 1;
                            }
                          }

                          .am-weather-moon-star-2 {
                            -webkit-animation-name: am-weather-moon-star-2;
                            -moz-animation-name: am-weather-moon-star-2;
                            -ms-animation-name: am-weather-moon-star-2;
                            animation-name: am-weather-moon-star-2;
                            -webkit-animation-delay: 5s;
                            -moz-animation-delay: 5s;
                            -ms-animation-delay: 5s;
                            animation-delay: 5s;
                            -webkit-animation-duration: 4s;
                            -moz-animation-duration: 4s;
                            -ms-animation-duration: 4s;
                            animation-duration: 4s;
                            -webkit-animation-timing-function: linear;
                            -moz-animation-timing-function: linear;
                            -ms-animation-timing-function: linear;
                            animation-timing-function: linear;
                            -webkit-animation-iteration-count: 1;
                            -moz-animation-iteration-count: 1;
                            -ms-animation-iteration-count: 1;
                            animation-iteration-count: 1;
                          }

                          /*
                    ** CLOUDS
                    */
                          @keyframes am-weather-cloud-2 {
                            0% {
                              -webkit-transform: translate(0px, 0px);
                              -moz-transform: translate(0px, 0px);
                              -ms-transform: translate(0px, 0px);
                              transform: translate(0px, 0px);
                            }

                            50% {
                              -webkit-transform: translate(2px, 0px);
                              -moz-transform: translate(2px, 0px);
                              -ms-transform: translate(2px, 0px);
                              transform: translate(2px, 0px);
                            }

                            100% {
                              -webkit-transform: translate(0px, 0px);
                              -moz-transform: translate(0px, 0px);
                              -ms-transform: translate(0px, 0px);
                              transform: translate(0px, 0px);
                            }
                          }

                          .am-weather-cloud-2 {
                            -webkit-animation-name: am-weather-cloud-2;
                            -moz-animation-name: am-weather-cloud-2;
                            animation-name: am-weather-cloud-2;
                            -webkit-animation-duration: 3s;
                            -moz-animation-duration: 3s;
                            animation-duration: 3s;
                            -webkit-animation-timing-function: linear;
                            -moz-animation-timing-function: linear;
                            animation-timing-function: linear;
                            -webkit-animation-iteration-count: infinite;
                            -moz-animation-iteration-count: infinite;
                            animation-iteration-count: infinite;
                          }

                          /*
                    ** RAIN
                    */
                          @keyframes am-weather-rain {
                            0% {
                              stroke-dashoffset: 0;
                            }

                            100% {
                              stroke-dashoffset: -100;
                            }
                          }

                          .am-weather-rain-1 {
                            -webkit-animation-name: am-weather-rain;
                            -moz-animation-name: am-weather-rain;
                            -ms-animation-name: am-weather-rain;
                            animation-name: am-weather-rain;
                            -webkit-animation-duration: 8s;
                            -moz-animation-duration: 8s;
                            -ms-animation-duration: 8s;
                            animation-duration: 8s;
                            -webkit-animation-timing-function: linear;
                            -moz-animation-timing-function: linear;
                            -ms-animation-timing-function: linear;
                            animation-timing-function: linear;
                            -webkit-animation-iteration-count: infinite;
                            -moz-animation-iteration-count: infinite;
                            -ms-animation-iteration-count: infinite;
                            animation-iteration-count: infinite;
                          }
                          ]]>
                </style>
            </defs>
            <g transform="translate(16,-2)" filter="url(#blur)">
                <g transform="matrix(.8 0 0 .8 16 4)">
                    <g
                        class="am-weather-moon-star-1"
                        style="-moz-animation-delay:3s;-moz-animation-duration:5s;-moz-animation-iteration-count:1;-moz-animation-name:am-weather-moon-star-1;-moz-animation-timing-function:linear;-ms-animation-delay:3s;-ms-animation-duration:5s;-ms-animation-iteration-count:1;-ms-animation-name:am-weather-moon-star-1;-ms-animation-timing-function:linear;-webkit-animation-delay:3s;-webkit-animation-duration:5s;-webkit-animation-iteration-count:1;-webkit-animation-name:am-weather-moon-star-1;-webkit-animation-timing-function:linear">
                        <polygon
                            points="4 4 3.3 5.2 2.7 4 1.5 3.3 2.7 2.7 3.3 1.5 4 2.7 5.2 3.3"
                            fill="#ffa500"
                            stroke-miterlimit="10" />
                    </g>
                    <g
                        class="am-weather-moon-star-2"
                        style="-moz-animation-delay:5s;-moz-animation-duration:4s;-moz-animation-iteration-count:1;-moz-animation-name:am-weather-moon-star-2;-moz-animation-timing-function:linear;-ms-animation-delay:5s;-ms-animation-duration:4s;-ms-animation-iteration-count:1;-ms-animation-name:am-weather-moon-star-2;-ms-animation-timing-function:linear;-webkit-animation-delay:5s;-webkit-animation-duration:4s;-webkit-animation-iteration-count:1;-webkit-animation-name:am-weather-moon-star-2;-webkit-animation-timing-function:linear">
                        <polygon
                            transform="translate(20,10)"
                            points="4 4 3.3 5.2 2.7 4 1.5 3.3 2.7 2.7 3.3 1.5 4 2.7 5.2 3.3"
                            fill="#ffa500"
                            stroke-miterlimit="10" />
                    </g>
                    <g
                        class="am-weather-moon"
                        style="-moz-animation-duration:6s;-moz-animation-iteration-count:infinite;-moz-animation-name:am-weather-moon;-moz-animation-timing-function:linear;-moz-transform-origin:12.5px 15.15px 0;-ms-animation-duration:6s;-ms-animation-iteration-count:infinite;-ms-animation-name:am-weather-moon;-ms-animation-timing-function:linear;-ms-transform-origin:12.5px 15.15px 0;-webkit-animation-duration:6s;-webkit-animation-iteration-count:infinite;-webkit-animation-name:am-weather-moon;-webkit-animation-timing-function:linear;-webkit-transform-origin:12.5px 15.15px 0">
                        <path
                            d="m14.5 13.2c0-3.7 2-6.9 5-8.7-1.5-0.9-3.2-1.3-5-1.3-5.5 0-10 4.5-10 10s4.5 10 10 10c1.8 0 3.5-0.5 5-1.3-3-1.7-5-5-5-8.7z"
                            fill="#ffa500"
                            stroke="#ffa500"
                            stroke-linejoin="round"
                            stroke-width="2" />
                    </g>
                </g>
                <g
                    class="am-weather-cloud-3"
                    style="-moz-animation-duration:3s;-moz-animation-iteration-count:infinite;-moz-animation-name:am-weather-cloud-2;-moz-animation-timing-function:linear;-webkit-animation-duration:3s;-webkit-animation-iteration-count:infinite;-webkit-animation-name:am-weather-cloud-2;-webkit-animation-timing-function:linear">
                    <path
                        transform="translate(-20,-11)"
                        d="m47.7 35.4c0-4.6-3.7-8.2-8.2-8.2-1 0-1.9 0.2-2.8 0.5-0.3-3.4-3.1-6.2-6.6-6.2-3.7 0-6.7 3-6.7 6.7 0 0.8 0.2 1.6 0.4 2.3-0.3-0.1-0.7-0.1-1-0.1-3.7 0-6.7 3-6.7 6.7 0 3.6 2.9 6.6 6.5 6.7h17.2c4.4-0.5 7.9-4 7.9-8.4z"
                        fill="#57a0ee"
                        stroke="#fff"
                        stroke-linejoin="round"
                        stroke-width="1.2" />
                </g>
                <g class="am-weaher-rain-1" transform="translate(-20,-10) rotate(10,-238.68,233.96)">
                    <line
                        class="am-weather-rain-1"
                        transform="translate(-6,1)"
                        y2="8"
                        fill="none"
                        stroke="#91c0f8"
                        stroke-dasharray="4, 7"
                        stroke-linecap="round"
                        stroke-width="2"
                        style="-moz-animation-duration:8s;-moz-animation-iteration-count:infinite;-moz-animation-name:am-weather-rain;-moz-animation-timing-function:linear;-ms-animation-duration:8s;-ms-animation-iteration-count:infinite;-ms-animation-name:am-weather-rain;-ms-animation-timing-function:linear;-webkit-animation-duration:8s;-webkit-animation-iteration-count:infinite;-webkit-animation-name:am-weather-rain;-webkit-animation-timing-function:linear" />
                </g>
            </g>
        </svg>
    `,
    rainy1: html`
        <svg viewBox="0 0 55 48" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <filter id="blur" x="-.24684" y="-.24132" width="1.4937" height="1.5878">
                    <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
                    <feOffset dx="0" dy="4" result="offsetblur" />
                    <feComponentTransfer>
                        <feFuncA slope="0.05" type="linear" />
                    </feComponentTransfer>
                    <feMerge>
                        <feMergeNode />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
                <style type="text/css">
                          <![CDATA[
                          /*
                    ** CLOUDS
                    */
                          @keyframes am-weather-cloud-2 {
                            0% {
                              -webkit-transform: translate(0px, 0px);
                              -moz-transform: translate(0px, 0px);
                              -ms-transform: translate(0px, 0px);
                              transform: translate(0px, 0px);
                            }

                            50% {
                              -webkit-transform: translate(2px, 0px);
                              -moz-transform: translate(2px, 0px);
                              -ms-transform: translate(2px, 0px);
                              transform: translate(2px, 0px);
                            }

                            100% {
                              -webkit-transform: translate(0px, 0px);
                              -moz-transform: translate(0px, 0px);
                              -ms-transform: translate(0px, 0px);
                              transform: translate(0px, 0px);
                            }
                          }

                          .am-weather-cloud-2 {
                            -webkit-animation-name: am-weather-cloud-2;
                            -moz-animation-name: am-weather-cloud-2;
                            animation-name: am-weather-cloud-2;
                            -webkit-animation-duration: 3s;
                            -moz-animation-duration: 3s;
                            animation-duration: 3s;
                            -webkit-animation-timing-function: linear;
                            -moz-animation-timing-function: linear;
                            animation-timing-function: linear;
                            -webkit-animation-iteration-count: infinite;
                            -moz-animation-iteration-count: infinite;
                            animation-iteration-count: infinite;
                          }

                          /*
                    ** RAIN
                    */
                          @keyframes am-weather-rain {
                            0% {
                              stroke-dashoffset: 0;
                            }

                            100% {
                              stroke-dashoffset: -100;
                            }
                          }

                          .am-weather-rain-1 {
                            -webkit-animation-name: am-weather-rain;
                            -moz-animation-name: am-weather-rain;
                            -ms-animation-name: am-weather-rain;
                            animation-name: am-weather-rain;
                            -webkit-animation-duration: 8s;
                            -moz-animation-duration: 8s;
                            -ms-animation-duration: 8s;
                            animation-duration: 8s;
                            -webkit-animation-timing-function: linear;
                            -moz-animation-timing-function: linear;
                            -ms-animation-timing-function: linear;
                            animation-timing-function: linear;
                            -webkit-animation-iteration-count: infinite;
                            -moz-animation-iteration-count: infinite;
                            -ms-animation-iteration-count: infinite;
                            animation-iteration-count: infinite;
                          }
                          ]]>
                </style>
            </defs>
            <g transform="translate(16,-2)" filter="url(#blur)">
                <g
                    class="am-weather-cloud-3"
                    style="-moz-animation-duration:3s;-moz-animation-iteration-count:infinite;-moz-animation-name:am-weather-cloud-2;-moz-animation-timing-function:linear;-webkit-animation-duration:3s;-webkit-animation-iteration-count:infinite;-webkit-animation-name:am-weather-cloud-2;-webkit-animation-timing-function:linear">
                    <path
                        transform="translate(-20,-11)"
                        d="m47.7 35.4c0-4.6-3.7-8.2-8.2-8.2-1 0-1.9 0.2-2.8 0.5-0.3-3.4-3.1-6.2-6.6-6.2-3.7 0-6.7 3-6.7 6.7 0 0.8 0.2 1.6 0.4 2.3-0.3-0.1-0.7-0.1-1-0.1-3.7 0-6.7 3-6.7 6.7 0 3.6 2.9 6.6 6.5 6.7h17.2c4.4-0.5 7.9-4 7.9-8.4z"
                        fill="#57a0ee"
                        stroke="#fff"
                        stroke-linejoin="round"
                        stroke-width="1.2" />
                </g>
                <g transform="translate(-20,-10) rotate(10,-238.68,233.96)">
                    <line
                        class="am-weather-rain-1"
                        transform="translate(-6,1)"
                        y2="8"
                        fill="none"
                        stroke="#91c0f8"
                        stroke-dasharray="4, 7"
                        stroke-linecap="round"
                        stroke-width="2"
                        style="-moz-animation-duration:8s;-moz-animation-iteration-count:infinite;-moz-animation-name:am-weather-rain;-moz-animation-timing-function:linear;-ms-animation-duration:8s;-ms-animation-iteration-count:infinite;-ms-animation-name:am-weather-rain;-ms-animation-timing-function:linear;-webkit-animation-duration:8s;-webkit-animation-iteration-count:infinite;-webkit-animation-name:am-weather-rain;-webkit-animation-timing-function:linear" />
                </g>
            </g>
        </svg>
    `,
    rainy2Day: html`
        <svg viewBox="0 0 55 48" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <filter id="blur" x="-.20655" y="-.20592" width="1.403" height="1.4872">
                    <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
                    <feOffset dx="0" dy="4" result="offsetblur" />
                    <feComponentTransfer>
                        <feFuncA slope="0.05" type="linear" />
                    </feComponentTransfer>
                    <feMerge>
                        <feMergeNode />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
                <style type="text/css">
                          <![CDATA[
                          /*
                    ** SUN
                    */
                          @keyframes am-weather-sun {
                            0% {
                              -webkit-transform: rotate(0deg);
                              -moz-transform: rotate(0deg);
                              -ms-transform: rotate(0deg);
                              transform: rotate(0deg);
                            }

                            100% {
                              -webkit-transform: rotate(360deg);
                              -moz-transform: rotate(360deg);
                              -ms-transform: rotate(360deg);
                              transform: rotate(360deg);
                            }
                          }

                          .am-weather-sun {
                            -webkit-animation-name: am-weather-sun;
                            -moz-animation-name: am-weather-sun;
                            -ms-animation-name: am-weather-sun;
                            animation-name: am-weather-sun;
                            -webkit-animation-duration: 9s;
                            -moz-animation-duration: 9s;
                            -ms-animation-duration: 9s;
                            animation-duration: 9s;
                            -webkit-animation-timing-function: linear;
                            -moz-animation-timing-function: linear;
                            -ms-animation-timing-function: linear;
                            animation-timing-function: linear;
                            -webkit-animation-iteration-count: infinite;
                            -moz-animation-iteration-count: infinite;
                            -ms-animation-iteration-count: infinite;
                            animation-iteration-count: infinite;
                          }

                          /*
                    ** CLOUDS
                    */
                          @keyframes am-weather-cloud-2 {
                            0% {
                              -webkit-transform: translate(0px, 0px);
                              -moz-transform: translate(0px, 0px);
                              -ms-transform: translate(0px, 0px);
                              transform: translate(0px, 0px);
                            }

                            50% {
                              -webkit-transform: translate(2px, 0px);
                              -moz-transform: translate(2px, 0px);
                              -ms-transform: translate(2px, 0px);
                              transform: translate(2px, 0px);
                            }

                            100% {
                              -webkit-transform: translate(0px, 0px);
                              -moz-transform: translate(0px, 0px);
                              -ms-transform: translate(0px, 0px);
                              transform: translate(0px, 0px);
                            }
                          }

                          .am-weather-cloud-2 {
                            -webkit-animation-name: am-weather-cloud-2;
                            -moz-animation-name: am-weather-cloud-2;
                            animation-name: am-weather-cloud-2;
                            -webkit-animation-duration: 3s;
                            -moz-animation-duration: 3s;
                            animation-duration: 3s;
                            -webkit-animation-timing-function: linear;
                            -moz-animation-timing-function: linear;
                            animation-timing-function: linear;
                            -webkit-animation-iteration-count: infinite;
                            -moz-animation-iteration-count: infinite;
                            animation-iteration-count: infinite;
                          }

                          /*
                    ** RAIN
                    */
                          @keyframes am-weather-rain {
                            0% {
                              stroke-dashoffset: 0;
                            }

                            100% {
                              stroke-dashoffset: -100;
                            }
                          }

                          .am-weather-rain-1 {
                            -webkit-animation-name: am-weather-rain;
                            -moz-animation-name: am-weather-rain;
                            -ms-animation-name: am-weather-rain;
                            animation-name: am-weather-rain;
                            -webkit-animation-duration: 8s;
                            -moz-animation-duration: 8s;
                            -ms-animation-duration: 8s;
                            animation-duration: 8s;
                            -webkit-animation-timing-function: linear;
                            -moz-animation-timing-function: linear;
                            -ms-animation-timing-function: linear;
                            animation-timing-function: linear;
                            -webkit-animation-iteration-count: infinite;
                            -moz-animation-iteration-count: infinite;
                            -ms-animation-iteration-count: infinite;
                            animation-iteration-count: infinite;
                          }

                          .am-weather-rain-2 {
                            -webkit-animation-name: am-weather-rain;
                            -moz-animation-name: am-weather-rain;
                            -ms-animation-name: am-weather-rain;
                            animation-name: am-weather-rain;
                            -webkit-animation-delay: 0.25s;
                            -moz-animation-delay: 0.25s;
                            -ms-animation-delay: 0.25s;
                            animation-delay: 0.25s;
                            -webkit-animation-duration: 8s;
                            -moz-animation-duration: 8s;
                            -ms-animation-duration: 8s;
                            animation-duration: 8s;
                            -webkit-animation-timing-function: linear;
                            -moz-animation-timing-function: linear;
                            -ms-animation-timing-function: linear;
                            animation-timing-function: linear;
                            -webkit-animation-iteration-count: infinite;
                            -moz-animation-iteration-count: infinite;
                            -ms-animation-iteration-count: infinite;
                            animation-iteration-count: infinite;
                          }
                          ]]>
                </style>
            </defs>
            <g transform="translate(16,-2)" filter="url(#blur)">
                <g transform="translate(0,16)">
                    <g
                        class="am-weather-sun"
                        style="-moz-animation-duration:9s;-moz-animation-iteration-count:infinite;-moz-animation-name:am-weather-sun;-moz-animation-timing-function:linear;-ms-animation-duration:9s;-ms-animation-iteration-count:infinite;-ms-animation-name:am-weather-sun;-ms-animation-timing-function:linear;-webkit-animation-duration:9s;-webkit-animation-iteration-count:infinite;-webkit-animation-name:am-weather-sun;-webkit-animation-timing-function:linear">
                        <line
                            transform="translate(0,9)"
                            y2="3"
                            stroke="#ffa500"
                            stroke-linecap="round"
                            stroke-width="2"
                            fifll="none" />
                        <g transform="rotate(45)">
                            <line
                                transform="translate(0,9)"
                                y2="3"
                                fill="none"
                                stroke="#ffa500"
                                stroke-linecap="round"
                                stroke-width="2" />
                        </g>
                        <g transform="rotate(90)">
                            <line
                                transform="translate(0,9)"
                                y2="3"
                                fill="none"
                                stroke="#ffa500"
                                stroke-linecap="round"
                                stroke-width="2" />
                        </g>
                        <g transform="rotate(135)">
                            <line
                                transform="translate(0,9)"
                                y2="3"
                                fill="none"
                                stroke="#ffa500"
                                stroke-linecap="round"
                                stroke-width="2" />
                        </g>
                        <g transform="scale(-1)">
                            <line
                                transform="translate(0,9)"
                                y2="3"
                                fill="none"
                                stroke="#ffa500"
                                stroke-linecap="round"
                                stroke-width="2" />
                        </g>
                        <g transform="rotate(225)">
                            <line
                                transform="translate(0,9)"
                                y2="3"
                                fill="none"
                                stroke="#ffa500"
                                stroke-linecap="round"
                                stroke-width="2" />
                        </g>
                        <g transform="rotate(-90)">
                            <line
                                transform="translate(0,9)"
                                y2="3"
                                fill="none"
                                stroke="#ffa500"
                                stroke-linecap="round"
                                stroke-width="2" />
                        </g>
                        <g transform="rotate(-45)">
                            <line
                                transform="translate(0,9)"
                                y2="3"
                                fill="none"
                                stroke="#ffa500"
                                stroke-linecap="round"
                                stroke-width="2" />
                        </g>
                        <circle r="5" fill="#ffa500" stroke="#ffa500" stroke-width="2" />
                    </g>
                </g>
                <g
                    class="am-weather-cloud-3"
                    style="-moz-animation-duration:3s;-moz-animation-iteration-count:infinite;-moz-animation-name:am-weather-cloud-2;-moz-animation-timing-function:linear;-webkit-animation-duration:3s;-webkit-animation-iteration-count:infinite;-webkit-animation-name:am-weather-cloud-2;-webkit-animation-timing-function:linear">
                    <path
                        transform="translate(-20,-11)"
                        d="m47.7 35.4c0-4.6-3.7-8.2-8.2-8.2-1 0-1.9 0.2-2.8 0.5-0.3-3.4-3.1-6.2-6.6-6.2-3.7 0-6.7 3-6.7 6.7 0 0.8 0.2 1.6 0.4 2.3-0.3-0.1-0.7-0.1-1-0.1-3.7 0-6.7 3-6.7 6.7 0 3.6 2.9 6.6 6.5 6.7h17.2c4.4-0.5 7.9-4 7.9-8.4z"
                        fill="#57a0ee"
                        stroke="#fff"
                        stroke-linejoin="round"
                        stroke-width="1.2" />
                </g>
                <g
                    transform="translate(-20,-10) rotate(10,-245.89,217.31)"
                    fill="none"
                    stroke="#91c0f8"
                    stroke-dasharray="4, 7"
                    stroke-linecap="round"
                    stroke-width="2">
                    <line
                        class="am-weather-rain-1"
                        transform="translate(-6,1)"
                        y2="8"
                        style="-moz-animation-duration:8s;-moz-animation-iteration-count:infinite;-moz-animation-name:am-weather-rain;-moz-animation-timing-function:linear;-ms-animation-duration:8s;-ms-animation-iteration-count:infinite;-ms-animation-name:am-weather-rain;-ms-animation-timing-function:linear;-webkit-animation-duration:8s;-webkit-animation-iteration-count:infinite;-webkit-animation-name:am-weather-rain;-webkit-animation-timing-function:linear" />
                    <line
                        class="am-weather-rain-2"
                        transform="translate(0,-1)"
                        y2="8"
                        style="-moz-animation-delay:0.25s;-moz-animation-duration:8s;-moz-animation-iteration-count:infinite;-moz-animation-name:am-weather-rain;-moz-animation-timing-function:linear;-ms-animation-delay:0.25s;-ms-animation-duration:8s;-ms-animation-iteration-count:infinite;-ms-animation-name:am-weather-rain;-ms-animation-timing-function:linear;-webkit-animation-delay:0.25s;-webkit-animation-duration:8s;-webkit-animation-iteration-count:infinite;-webkit-animation-name:am-weather-rain;-webkit-animation-timing-function:linear" />
                </g>
            </g>
        </svg>
    `,
    rainy2Night: html`
        <svg viewBox="0 0 55 48" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <style type="text/css">
                          <![CDATA[
                          /*
                    ** CLOUDS
                    */
                          @keyframes am-weather-cloud-2 {
                            0% {
                              -webkit-transform: translate(0px, 0px);
                              -moz-transform: translate(0px, 0px);
                              -ms-transform: translate(0px, 0px);
                              transform: translate(0px, 0px);
                            }

                            50% {
                              -webkit-transform: translate(2px, 0px);
                              -moz-transform: translate(2px, 0px);
                              -ms-transform: translate(2px, 0px);
                              transform: translate(2px, 0px);
                            }

                            100% {
                              -webkit-transform: translate(0px, 0px);
                              -moz-transform: translate(0px, 0px);
                              -ms-transform: translate(0px, 0px);
                              transform: translate(0px, 0px);
                            }
                          }

                          .am-weather-cloud-2 {
                            -webkit-animation-name: am-weather-cloud-2;
                            -moz-animation-name: am-weather-cloud-2;
                            animation-name: am-weather-cloud-2;
                            -webkit-animation-duration: 3s;
                            -moz-animation-duration: 3s;
                            animation-duration: 3s;
                            -webkit-animation-timing-function: linear;
                            -moz-animation-timing-function: linear;
                            animation-timing-function: linear;
                            -webkit-animation-iteration-count: infinite;
                            -moz-animation-iteration-count: infinite;
                            animation-iteration-count: infinite;
                          }

                          /*
                    ** MOON
                    */
                          @keyframes am-weather-moon {
                            0% {
                              -webkit-transform: rotate(0deg);
                              -moz-transform: rotate(0deg);
                              -ms-transform: rotate(0deg);
                              transform: rotate(0deg);
                            }

                            50% {
                              -webkit-transform: rotate(15deg);
                              -moz-transform: rotate(15deg);
                              -ms-transform: rotate(15deg);
                              transform: rotate(15deg);
                            }

                            100% {
                              -webkit-transform: rotate(0deg);
                              -moz-transform: rotate(0deg);
                              -ms-transform: rotate(0deg);
                              transform: rotate(0deg);
                            }
                          }

                          .am-weather-moon {
                            -webkit-animation-name: am-weather-moon;
                            -moz-animation-name: am-weather-moon;
                            -ms-animation-name: am-weather-moon;
                            animation-name: am-weather-moon;
                            -webkit-animation-duration: 6s;
                            -moz-animation-duration: 6s;
                            -ms-animation-duration: 6s;
                            animation-duration: 6s;
                            -webkit-animation-timing-function: linear;
                            -moz-animation-timing-function: linear;
                            -ms-animation-timing-function: linear;
                            animation-timing-function: linear;
                            -webkit-animation-iteration-count: infinite;
                            -moz-animation-iteration-count: infinite;
                            -ms-animation-iteration-count: infinite;
                            animation-iteration-count: infinite;
                            -webkit-transform-origin: 12.5px 15.15px 0;
                            /* TODO FF CENTER ISSUE */
                            -moz-transform-origin: 12.5px 15.15px 0;
                            /* TODO FF CENTER ISSUE */
                            -ms-transform-origin: 12.5px 15.15px 0;
                            /* TODO FF CENTER ISSUE */
                            transform-origin: 12.5px 15.15px 0;
                            /* TODO FF CENTER ISSUE */
                          }

                          @keyframes am-weather-moon-star-1 {
                            0% {
                              opacity: 0;
                            }

                            100% {
                              opacity: 1;
                            }
                          }

                          .am-weather-moon-star-1 {
                            -webkit-animation-name: am-weather-moon-star-1;
                            -moz-animation-name: am-weather-moon-star-1;
                            -ms-animation-name: am-weather-moon-star-1;
                            animation-name: am-weather-moon-star-1;
                            -webkit-animation-delay: 3s;
                            -moz-animation-delay: 3s;
                            -ms-animation-delay: 3s;
                            animation-delay: 3s;
                            -webkit-animation-duration: 5s;
                            -moz-animation-duration: 5s;
                            -ms-animation-duration: 5s;
                            animation-duration: 5s;
                            -webkit-animation-timing-function: linear;
                            -moz-animation-timing-function: linear;
                            -ms-animation-timing-function: linear;
                            animation-timing-function: linear;
                            -webkit-animation-iteration-count: 1;
                            -moz-animation-iteration-count: 1;
                            -ms-animation-iteration-count: 1;
                            animation-iteration-count: 1;
                          }

                          @keyframes am-weather-moon-star-2 {
                            0% {
                              opacity: 0;
                            }

                            100% {
                              opacity: 1;
                            }
                          }

                          .am-weather-moon-star-2 {
                            -webkit-animation-name: am-weather-moon-star-2;
                            -moz-animation-name: am-weather-moon-star-2;
                            -ms-animation-name: am-weather-moon-star-2;
                            animation-name: am-weather-moon-star-2;
                            -webkit-animation-delay: 5s;
                            -moz-animation-delay: 5s;
                            -ms-animation-delay: 5s;
                            animation-delay: 5s;
                            -webkit-animation-duration: 4s;
                            -moz-animation-duration: 4s;
                            -ms-animation-duration: 4s;
                            animation-duration: 4s;
                            -webkit-animation-timing-function: linear;
                            -moz-animation-timing-function: linear;
                            -ms-animation-timing-function: linear;
                            animation-timing-function: linear;
                            -webkit-animation-iteration-count: 1;
                            -moz-animation-iteration-count: 1;
                            -ms-animation-iteration-count: 1;
                            animation-iteration-count: 1;
                          }

                          /*
                    ** RAIN
                    */
                          @keyframes am-weather-rain {
                            0% {
                              stroke-dashoffset: 0;
                            }

                            100% {
                              stroke-dashoffset: -100;
                            }
                          }

                          .am-weather-rain-1 {
                            -webkit-animation-name: am-weather-rain;
                            -moz-animation-name: am-weather-rain;
                            -ms-animation-name: am-weather-rain;
                            animation-name: am-weather-rain;
                            -webkit-animation-duration: 8s;
                            -moz-animation-duration: 8s;
                            -ms-animation-duration: 8s;
                            animation-duration: 8s;
                            -webkit-animation-timing-function: linear;
                            -moz-animation-timing-function: linear;
                            -ms-animation-timing-function: linear;
                            animation-timing-function: linear;
                            -webkit-animation-iteration-count: infinite;
                            -moz-animation-iteration-count: infinite;
                            -ms-animation-iteration-count: infinite;
                            animation-iteration-count: infinite;
                          }

                          .am-weather-rain-2 {
                            -webkit-animation-name: am-weather-rain;
                            -moz-animation-name: am-weather-rain;
                            -ms-animation-name: am-weather-rain;
                            animation-name: am-weather-rain;
                            -webkit-animation-delay: 0.25s;
                            -moz-animation-delay: 0.25s;
                            -ms-animation-delay: 0.25s;
                            animation-delay: 0.25s;
                            -webkit-animation-duration: 8s;
                            -moz-animation-duration: 8s;
                            -ms-animation-duration: 8s;
                            animation-duration: 8s;
                            -webkit-animation-timing-function: linear;
                            -moz-animation-timing-function: linear;
                            -ms-animation-timing-function: linear;
                            animation-timing-function: linear;
                            -webkit-animation-iteration-count: infinite;
                            -moz-animation-iteration-count: infinite;
                            -ms-animation-iteration-count: infinite;
                            animation-iteration-count: infinite;
                          }
                          ]]>
                </style>
            </defs>
            <g class="layer" transform="translate(16,-2)">
                <g transform="matrix(.8 0 0 .8 16 4)">
                    <g
                        class="am-weather-moon-star-1"
                        style="-moz-animation-delay:3s;-moz-animation-duration:5s;-moz-animation-iteration-count:1;-moz-animation-name:am-weather-moon-star-1;-moz-animation-timing-function:linear;-ms-animation-delay:3s;-ms-animation-duration:5s;-ms-animation-iteration-count:1;-ms-animation-name:am-weather-moon-star-1;-ms-animation-timing-function:linear;-webkit-animation-delay:3s;-webkit-animation-duration:5s;-webkit-animation-iteration-count:1;-webkit-animation-name:am-weather-moon-star-1;-webkit-animation-timing-function:linear">
                        <polygon
                            points="4 4 3.3 5.2 2.7 4 1.5 3.3 2.7 2.7 3.3 1.5 4 2.7 5.2 3.3"
                            fill="#ffa500"
                            stroke-miterlimit="10" />
                    </g>
                    <g
                        class="am-weather-moon-star-2"
                        style="-moz-animation-delay:5s;-moz-animation-duration:4s;-moz-animation-iteration-count:1;-moz-animation-name:am-weather-moon-star-2;-moz-animation-timing-function:linear;-ms-animation-delay:5s;-ms-animation-duration:4s;-ms-animation-iteration-count:1;-ms-animation-name:am-weather-moon-star-2;-ms-animation-timing-function:linear;-webkit-animation-delay:5s;-webkit-animation-duration:4s;-webkit-animation-iteration-count:1;-webkit-animation-name:am-weather-moon-star-2;-webkit-animation-timing-function:linear">
                        <polygon
                            transform="translate(20,10)"
                            points="4 4 3.3 5.2 2.7 4 1.5 3.3 2.7 2.7 3.3 1.5 4 2.7 5.2 3.3"
                            fill="#ffa500"
                            stroke-miterlimit="10" />
                    </g>
                    <g
                        class="am-weather-moon"
                        style="-moz-animation-duration:6s;-moz-animation-iteration-count:infinite;-moz-animation-name:am-weather-moon;-moz-animation-timing-function:linear;-moz-transform-origin:12.5px 15.15px 0;-ms-animation-duration:6s;-ms-animation-iteration-count:infinite;-ms-animation-name:am-weather-moon;-ms-animation-timing-function:linear;-ms-transform-origin:12.5px 15.15px 0;-webkit-animation-duration:6s;-webkit-animation-iteration-count:infinite;-webkit-animation-name:am-weather-moon;-webkit-animation-timing-function:linear;-webkit-transform-origin:12.5px 15.15px 0">
                        <path
                            d="m14.5 13.2c0-3.7 2-6.9 5-8.7-1.5-0.9-3.2-1.3-5-1.3-5.5 0-10 4.5-10 10s4.5 10 10 10c1.8 0 3.5-0.5 5-1.3-3-1.7-5-5-5-8.7z"
                            fill="#ffa500"
                            stroke="#ffa500"
                            stroke-linejoin="round"
                            stroke-width="2" />
                    </g>
                </g>
                <g
                    class="am-weather-cloud-3"
                    style="-moz-animation-duration:3s;-moz-animation-iteration-count:infinite;-moz-animation-name:am-weather-cloud-2;-moz-animation-timing-function:linear;-webkit-animation-duration:3s;-webkit-animation-iteration-count:infinite;-webkit-animation-name:am-weather-cloud-2;-webkit-animation-timing-function:linear">
                    <path
                        transform="translate(-20,-11)"
                        d="m47.7 35.4c0-4.6-3.7-8.2-8.2-8.2-1 0-1.9 0.2-2.8 0.5-0.3-3.4-3.1-6.2-6.6-6.2-3.7 0-6.7 3-6.7 6.7 0 0.8 0.2 1.6 0.4 2.3-0.3-0.1-0.7-0.1-1-0.1-3.7 0-6.7 3-6.7 6.7 0 3.6 2.9 6.6 6.5 6.7h17.2c4.4-0.5 7.9-4 7.9-8.4z"
                        fill="#57a0ee"
                        stroke="#fff"
                        stroke-linejoin="round"
                        stroke-width="1.2" />
                </g>
                <g
                    class="am-weather-rain-2"
                    transform="translate(-20,-10) rotate(10,34,46)"
                    fill="none"
                    stroke="#91c0f8"
                    stroke-dasharray="4, 7"
                    stroke-linecap="round"
                    stroke-width="2">
                    <line
                        class="am-weather-rain-1"
                        transform="translate(-6,1)"
                        x1="34"
                        x2="34"
                        y1="46"
                        y2="54"
                        style="-moz-animation-duration:8s;-moz-animation-iteration-count:infinite;-moz-animation-name:am-weather-rain;-moz-animation-timing-function:linear;-ms-animation-duration:8s;-ms-animation-iteration-count:infinite;-ms-animation-name:am-weather-rain;-ms-animation-timing-function:linear;-webkit-animation-duration:8s;-webkit-animation-iteration-count:infinite;-webkit-animation-name:am-weather-rain;-webkit-animation-timing-function:linear" />
                    <line
                        class="am-weather-rain-2"
                        transform="translate(0,-1)"
                        x1="34"
                        x2="34"
                        y1="46"
                        y2="54"
                        style="-moz-animation-delay:0.25s;-moz-animation-duration:8s;-moz-animation-iteration-count:infinite;-moz-animation-name:am-weather-rain;-moz-animation-timing-function:linear;-ms-animation-delay:0.25s;-ms-animation-duration:8s;-ms-animation-iteration-count:infinite;-ms-animation-name:am-weather-rain;-ms-animation-timing-function:linear;-webkit-animation-delay:0.25s;-webkit-animation-duration:8s;-webkit-animation-iteration-count:infinite;-webkit-animation-name:am-weather-rain;-webkit-animation-timing-function:linear" />
                </g>
            </g>
        </svg>
    `,
    rainy2: html`
        <svg viewBox="0 0 55 55" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <filter id="blur" x="-.24684" y="-.23409" width="1.4937" height="1.5702">
                    <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
                    <feOffset dx="0" dy="4" result="offsetblur" />
                    <feComponentTransfer>
                        <feFuncA slope="0.05" type="linear" />
                    </feComponentTransfer>
                    <feMerge>
                        <feMergeNode />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
                <style type="text/css">
                          <![CDATA[
                          /*
                    ** RAIN
                    */
                          @keyframes am-weather-rain {
                            0% {
                              stroke-dashoffset: 0;
                            }

                            100% {
                              stroke-dashoffset: -100;
                            }
                          }

                          .am-weather-rain-1 {
                            -webkit-animation-name: am-weather-rain;
                            -moz-animation-name: am-weather-rain;
                            -ms-animation-name: am-weather-rain;
                            animation-name: am-weather-rain;
                            -webkit-animation-duration: 8s;
                            -moz-animation-duration: 8s;
                            -ms-animation-duration: 8s;
                            animation-duration: 8s;
                            -webkit-animation-timing-function: linear;
                            -moz-animation-timing-function: linear;
                            -ms-animation-timing-function: linear;
                            animation-timing-function: linear;
                            -webkit-animation-iteration-count: infinite;
                            -moz-animation-iteration-count: infinite;
                            -ms-animation-iteration-count: infinite;
                            animation-iteration-count: infinite;
                          }

                          .am-weather-rain-2 {
                            -webkit-animation-name: am-weather-rain;
                            -moz-animation-name: am-weather-rain;
                            -ms-animation-name: am-weather-rain;
                            animation-name: am-weather-rain;
                            -webkit-animation-delay: 0.25s;
                            -moz-animation-delay: 0.25s;
                            -ms-animation-delay: 0.25s;
                            animation-delay: 0.25s;
                            -webkit-animation-duration: 8s;
                            -moz-animation-duration: 8s;
                            -ms-animation-duration: 8s;
                            animation-duration: 8s;
                            -webkit-animation-timing-function: linear;
                            -moz-animation-timing-function: linear;
                            -ms-animation-timing-function: linear;
                            animation-timing-function: linear;
                            -webkit-animation-iteration-count: infinite;
                            -moz-animation-iteration-count: infinite;
                            -ms-animation-iteration-count: infinite;
                            animation-iteration-count: infinite;
                          }

                          /*
                    ** CLOUDS
                    */
                          @keyframes am-weather-cloud-2 {
                            0% {
                              -webkit-transform: translate(0px, 0px);
                              -moz-transform: translate(0px, 0px);
                              -ms-transform: translate(0px, 0px);
                              transform: translate(0px, 0px);
                            }

                            50% {
                              -webkit-transform: translate(2px, 0px);
                              -moz-transform: translate(2px, 0px);
                              -ms-transform: translate(2px, 0px);
                              transform: translate(2px, 0px);
                            }

                            100% {
                              -webkit-transform: translate(0px, 0px);
                              -moz-transform: translate(0px, 0px);
                              -ms-transform: translate(0px, 0px);
                              transform: translate(0px, 0px);
                            }
                          }

                          .am-weather-cloud-2 {
                            -webkit-animation-name: am-weather-cloud-2;
                            -moz-animation-name: am-weather-cloud-2;
                            animation-name: am-weather-cloud-2;
                            -webkit-animation-duration: 3s;
                            -moz-animation-duration: 3s;
                            animation-duration: 3s;
                            -webkit-animation-timing-function: linear;
                            -moz-animation-timing-function: linear;
                            animation-timing-function: linear;
                            -webkit-animation-iteration-count: infinite;
                            -moz-animation-iteration-count: infinite;
                            animation-iteration-count: infinite;
                          }
                          ]]>
                </style>
            </defs>
            <g transform="translate(16,-2)" filter="url(#blur)">
                <g
                    class="am-weather-cloud-3"
                    style="-moz-animation-duration:3s;-moz-animation-iteration-count:infinite;-moz-animation-name:am-weather-cloud-2;-moz-animation-timing-function:linear;-webkit-animation-duration:3s;-webkit-animation-iteration-count:infinite;-webkit-animation-name:am-weather-cloud-2;-webkit-animation-timing-function:linear">
                    <path
                        transform="translate(-20,-11)"
                        d="m47.7 35.4c0-4.6-3.7-8.2-8.2-8.2-1 0-1.9 0.2-2.8 0.5-0.3-3.4-3.1-6.2-6.6-6.2-3.7 0-6.7 3-6.7 6.7 0 0.8 0.2 1.6 0.4 2.3-0.3-0.1-0.7-0.1-1-0.1-3.7 0-6.7 3-6.7 6.7 0 3.6 2.9 6.6 6.5 6.7h17.2c4.4-0.5 7.9-4 7.9-8.4z"
                        fill="#57a0ee"
                        stroke="#fff"
                        stroke-linejoin="round"
                        stroke-width="1.2" />
                </g>
                <g
                    transform="translate(-20,-10) rotate(10,-245.89,217.31)"
                    fill="none"
                    stroke="#91c0f8"
                    stroke-dasharray="4, 7"
                    stroke-linecap="round"
                    stroke-width="2">
                    <line
                        class="am-weather-rain-1"
                        transform="translate(-6,1)"
                        y2="8"
                        style="-moz-animation-duration:8s;-moz-animation-iteration-count:infinite;-moz-animation-name:am-weather-rain;-moz-animation-timing-function:linear;-ms-animation-duration:8s;-ms-animation-iteration-count:infinite;-ms-animation-name:am-weather-rain;-ms-animation-timing-function:linear;-webkit-animation-duration:8s;-webkit-animation-iteration-count:infinite;-webkit-animation-name:am-weather-rain;-webkit-animation-timing-function:linear" />
                    <line
                        class="am-weather-rain-2"
                        transform="translate(0,-1)"
                        y2="8"
                        style="-moz-animation-delay:0.25s;-moz-animation-duration:8s;-moz-animation-iteration-count:infinite;-moz-animation-name:am-weather-rain;-moz-animation-timing-function:linear;-ms-animation-delay:0.25s;-ms-animation-duration:8s;-ms-animation-iteration-count:infinite;-ms-animation-name:am-weather-rain;-ms-animation-timing-function:linear;-webkit-animation-delay:0.25s;-webkit-animation-duration:8s;-webkit-animation-iteration-count:infinite;-webkit-animation-name:am-weather-rain;-webkit-animation-timing-function:linear" />
                </g>
            </g>
        </svg>
    `,
    rainy3Day: html`
        <svg viewBox="0 0 55 48" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <filter id="blur" x="-.24684" y="-.22892" width="1.4937" height="1.5576">
                    <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
                    <feOffset dx="0" dy="4" result="offsetblur" />
                    <feComponentTransfer>
                        <feFuncA slope="0.05" type="linear" />
                    </feComponentTransfer>
                    <feMerge>
                        <feMergeNode />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
                <style type="text/css">
                          <![CDATA[
                          /*
                    ** SUN
                    */
                          @keyframes am-weather-sun {
                            0% {
                              -webkit-transform: rotate(0deg);
                              -moz-transform: rotate(0deg);
                              -ms-transform: rotate(0deg);
                              transform: rotate(0deg);
                            }

                            100% {
                              -webkit-transform: rotate(360deg);
                              -moz-transform: rotate(360deg);
                              -ms-transform: rotate(360deg);
                              transform: rotate(360deg);
                            }
                          }

                          .am-weather-sun {
                            -webkit-animation-name: am-weather-sun;
                            -moz-animation-name: am-weather-sun;
                            -ms-animation-name: am-weather-sun;
                            animation-name: am-weather-sun;
                            -webkit-animation-duration: 9s;
                            -moz-animation-duration: 9s;
                            -ms-animation-duration: 9s;
                            animation-duration: 9s;
                            -webkit-animation-timing-function: linear;
                            -moz-animation-timing-function: linear;
                            -ms-animation-timing-function: linear;
                            animation-timing-function: linear;
                            -webkit-animation-iteration-count: infinite;
                            -moz-animation-iteration-count: infinite;
                            -ms-animation-iteration-count: infinite;
                            animation-iteration-count: infinite;
                          }

                          /*
                    ** RAIN
                    */
                          @keyframes am-weather-rain {
                            0% {
                              stroke-dashoffset: 0;
                            }

                            100% {
                              stroke-dashoffset: -100;
                            }
                          }

                          .am-weather-rain-1 {
                            -webkit-animation-name: am-weather-rain;
                            -moz-animation-name: am-weather-rain;
                            -ms-animation-name: am-weather-rain;
                            animation-name: am-weather-rain;
                            -webkit-animation-duration: 8s;
                            -moz-animation-duration: 8s;
                            -ms-animation-duration: 8s;
                            animation-duration: 8s;
                            -webkit-animation-timing-function: linear;
                            -moz-animation-timing-function: linear;
                            -ms-animation-timing-function: linear;
                            animation-timing-function: linear;
                            -webkit-animation-iteration-count: infinite;
                            -moz-animation-iteration-count: infinite;
                            -ms-animation-iteration-count: infinite;
                            animation-iteration-count: infinite;
                          }

                          .am-weather-rain-2 {
                            -webkit-animation-name: am-weather-rain;
                            -moz-animation-name: am-weather-rain;
                            -ms-animation-name: am-weather-rain;
                            animation-name: am-weather-rain;
                            -webkit-animation-delay: 0.25s;
                            -moz-animation-delay: 0.25s;
                            -ms-animation-delay: 0.25s;
                            animation-delay: 0.25s;
                            -webkit-animation-duration: 8s;
                            -moz-animation-duration: 8s;
                            -ms-animation-duration: 8s;
                            animation-duration: 8s;
                            -webkit-animation-timing-function: linear;
                            -moz-animation-timing-function: linear;
                            -ms-animation-timing-function: linear;
                            animation-timing-function: linear;
                            -webkit-animation-iteration-count: infinite;
                            -moz-animation-iteration-count: infinite;
                            -ms-animation-iteration-count: infinite;
                            animation-iteration-count: infinite;
                          }

                          /*
                    ** CLOUDS
                    */
                          @keyframes am-weather-cloud-2 {
                            0% {
                              -webkit-transform: translate(0px, 0px);
                              -moz-transform: translate(0px, 0px);
                              -ms-transform: translate(0px, 0px);
                              transform: translate(0px, 0px);
                            }

                            50% {
                              -webkit-transform: translate(2px, 0px);
                              -moz-transform: translate(2px, 0px);
                              -ms-transform: translate(2px, 0px);
                              transform: translate(2px, 0px);
                            }

                            100% {
                              -webkit-transform: translate(0px, 0px);
                              -moz-transform: translate(0px, 0px);
                              -ms-transform: translate(0px, 0px);
                              transform: translate(0px, 0px);
                            }
                          }

                          .am-weather-cloud-2 {
                            -webkit-animation-name: am-weather-cloud-2;
                            -moz-animation-name: am-weather-cloud-2;
                            animation-name: am-weather-cloud-2;
                            -webkit-animation-duration: 3s;
                            -moz-animation-duration: 3s;
                            animation-duration: 3s;
                            -webkit-animation-timing-function: linear;
                            -moz-animation-timing-function: linear;
                            animation-timing-function: linear;
                            -webkit-animation-iteration-count: infinite;
                            -moz-animation-iteration-count: infinite;
                            animation-iteration-count: infinite;
                          }
                          ]]>
                </style>
            </defs>
            <g transform="translate(16,-2)" filter="url(#blur)">
                <g transform="translate(0,16)">
                    <g
                        class="am-weather-sun"
                        style="-moz-animation-duration:9s;-moz-animation-iteration-count:infinite;-moz-animation-name:am-weather-sun;-moz-animation-timing-function:linear;-ms-animation-duration:9s;-ms-animation-iteration-count:infinite;-ms-animation-name:am-weather-sun;-ms-animation-timing-function:linear;-webkit-animation-duration:9s;-webkit-animation-iteration-count:infinite;-webkit-animation-name:am-weather-sun;-webkit-animation-timing-function:linear">
                        <line
                            transform="translate(0,9)"
                            y2="3"
                            stroke="#ffa500"
                            stroke-linecap="round"
                            stroke-width="2"
                            fifll="none" />
                        <g transform="rotate(45)">
                            <line
                                transform="translate(0,9)"
                                y2="3"
                                fill="none"
                                stroke="#ffa500"
                                stroke-linecap="round"
                                stroke-width="2" />
                        </g>
                        <g transform="rotate(90)">
                            <line
                                transform="translate(0,9)"
                                y2="3"
                                fill="none"
                                stroke="#ffa500"
                                stroke-linecap="round"
                                stroke-width="2" />
                        </g>
                        <g transform="rotate(135)">
                            <line
                                transform="translate(0,9)"
                                y2="3"
                                fill="none"
                                stroke="#ffa500"
                                stroke-linecap="round"
                                stroke-width="2" />
                        </g>
                        <g transform="scale(-1)">
                            <line
                                transform="translate(0,9)"
                                y2="3"
                                fill="none"
                                stroke="#ffa500"
                                stroke-linecap="round"
                                stroke-width="2" />
                        </g>
                        <g transform="rotate(225)">
                            <line
                                transform="translate(0,9)"
                                y2="3"
                                fill="none"
                                stroke="#ffa500"
                                stroke-linecap="round"
                                stroke-width="2" />
                        </g>
                        <g transform="rotate(-90)">
                            <line
                                transform="translate(0,9)"
                                y2="3"
                                fill="none"
                                stroke="#ffa500"
                                stroke-linecap="round"
                                stroke-width="2" />
                        </g>
                        <g transform="rotate(-45)">
                            <line
                                transform="translate(0,9)"
                                y2="3"
                                fill="none"
                                stroke="#ffa500"
                                stroke-linecap="round"
                                stroke-width="2" />
                        </g>
                        <circle r="5" fill="#ffa500" stroke="#ffa500" stroke-width="2" />
                    </g>
                </g>
                <g
                    class="am-weather-cloud-3"
                    style="-moz-animation-duration:3s;-moz-animation-iteration-count:infinite;-moz-animation-name:am-weather-cloud-2;-moz-animation-timing-function:linear;-webkit-animation-duration:3s;-webkit-animation-iteration-count:infinite;-webkit-animation-name:am-weather-cloud-2;-webkit-animation-timing-function:linear">
                    <path
                        transform="translate(-20,-11)"
                        d="m47.7 35.4c0-4.6-3.7-8.2-8.2-8.2-1 0-1.9 0.2-2.8 0.5-0.3-3.4-3.1-6.2-6.6-6.2-3.7 0-6.7 3-6.7 6.7 0 0.8 0.2 1.6 0.4 2.3-0.3-0.1-0.7-0.1-1-0.1-3.7 0-6.7 3-6.7 6.7 0 3.6 2.9 6.6 6.5 6.7h17.2c4.4-0.5 7.9-4 7.9-8.4z"
                        fill="#57a0ee"
                        stroke="#fff"
                        stroke-linejoin="round"
                        stroke-width="1.2" />
                </g>
                <g
                    transform="translate(-20,-10) rotate(10,-247.39,200.17)"
                    fill="none"
                    stroke="#91c0f8"
                    stroke-dasharray="4, 4"
                    stroke-linecap="round"
                    stroke-width="2">
                    <line
                        class="am-weather-rain-1"
                        transform="translate(-4,1)"
                        y2="8"
                        style="-moz-animation-duration:8s;-moz-animation-iteration-count:infinite;-moz-animation-name:am-weather-rain;-moz-animation-timing-function:linear;-ms-animation-duration:8s;-ms-animation-iteration-count:infinite;-ms-animation-name:am-weather-rain;-ms-animation-timing-function:linear;-webkit-animation-duration:8s;-webkit-animation-iteration-count:infinite;-webkit-animation-name:am-weather-rain;-webkit-animation-timing-function:linear" />
                    <line
                        class="am-weather-rain-2"
                        transform="translate(0,-1)"
                        y2="8"
                        style="-moz-animation-delay:0.25s;-moz-animation-duration:8s;-moz-animation-iteration-count:infinite;-moz-animation-name:am-weather-rain;-moz-animation-timing-function:linear;-ms-animation-delay:0.25s;-ms-animation-duration:8s;-ms-animation-iteration-count:infinite;-ms-animation-name:am-weather-rain;-ms-animation-timing-function:linear;-webkit-animation-delay:0.25s;-webkit-animation-duration:8s;-webkit-animation-iteration-count:infinite;-webkit-animation-name:am-weather-rain;-webkit-animation-timing-function:linear" />
                    <line
                        class="am-weather-rain-1"
                        transform="translate(4)"
                        y2="8"
                        style="-moz-animation-duration:8s;-moz-animation-iteration-count:infinite;-moz-animation-name:am-weather-rain;-moz-animation-timing-function:linear;-ms-animation-duration:8s;-ms-animation-iteration-count:infinite;-ms-animation-name:am-weather-rain;-ms-animation-timing-function:linear;-webkit-animation-duration:8s;-webkit-animation-iteration-count:infinite;-webkit-animation-name:am-weather-rain;-webkit-animation-timing-function:linear" />
                </g>
            </g>
        </svg>
    `,
    rainy3Night: html`
        <svg viewBox="0 0 55 48" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <filter id="blur" x="-.24684" y="-.22892" width="1.4937" height="1.5576">
                    <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
                    <feOffset dx="0" dy="4" result="offsetblur" />
                    <feComponentTransfer>
                        <feFuncA slope="0.05" type="linear" />
                    </feComponentTransfer>
                    <feMerge>
                        <feMergeNode />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
                <style type="text/css">
                          <![CDATA[
                          /*
                    ** RAIN
                    */
                          @keyframes am-weather-rain {
                            0% {
                              stroke-dashoffset: 0;
                            }

                            100% {
                              stroke-dashoffset: -100;
                            }
                          }

                          .am-weather-rain-1 {
                            -webkit-animation-name: am-weather-rain;
                            -moz-animation-name: am-weather-rain;
                            -ms-animation-name: am-weather-rain;
                            animation-name: am-weather-rain;
                            -webkit-animation-duration: 8s;
                            -moz-animation-duration: 8s;
                            -ms-animation-duration: 8s;
                            animation-duration: 8s;
                            -webkit-animation-timing-function: linear;
                            -moz-animation-timing-function: linear;
                            -ms-animation-timing-function: linear;
                            animation-timing-function: linear;
                            -webkit-animation-iteration-count: infinite;
                            -moz-animation-iteration-count: infinite;
                            -ms-animation-iteration-count: infinite;
                            animation-iteration-count: infinite;
                          }

                          .am-weather-rain-2 {
                            -webkit-animation-name: am-weather-rain;
                            -moz-animation-name: am-weather-rain;
                            -ms-animation-name: am-weather-rain;
                            animation-name: am-weather-rain;
                            -webkit-animation-delay: 0.25s;
                            -moz-animation-delay: 0.25s;
                            -ms-animation-delay: 0.25s;
                            animation-delay: 0.25s;
                            -webkit-animation-duration: 8s;
                            -moz-animation-duration: 8s;
                            -ms-animation-duration: 8s;
                            animation-duration: 8s;
                            -webkit-animation-timing-function: linear;
                            -moz-animation-timing-function: linear;
                            -ms-animation-timing-function: linear;
                            animation-timing-function: linear;
                            -webkit-animation-iteration-count: infinite;
                            -moz-animation-iteration-count: infinite;
                            -ms-animation-iteration-count: infinite;
                            animation-iteration-count: infinite;
                          }

                          /*
                    ** MOON
                    */
                          @keyframes am-weather-moon {
                            0% {
                              -webkit-transform: rotate(0deg);
                              -moz-transform: rotate(0deg);
                              -ms-transform: rotate(0deg);
                              transform: rotate(0deg);
                            }

                            50% {
                              -webkit-transform: rotate(15deg);
                              -moz-transform: rotate(15deg);
                              -ms-transform: rotate(15deg);
                              transform: rotate(15deg);
                            }

                            100% {
                              -webkit-transform: rotate(0deg);
                              -moz-transform: rotate(0deg);
                              -ms-transform: rotate(0deg);
                              transform: rotate(0deg);
                            }
                          }

                          .am-weather-moon {
                            -webkit-animation-name: am-weather-moon;
                            -moz-animation-name: am-weather-moon;
                            -ms-animation-name: am-weather-moon;
                            animation-name: am-weather-moon;
                            -webkit-animation-duration: 6s;
                            -moz-animation-duration: 6s;
                            -ms-animation-duration: 6s;
                            animation-duration: 6s;
                            -webkit-animation-timing-function: linear;
                            -moz-animation-timing-function: linear;
                            -ms-animation-timing-function: linear;
                            animation-timing-function: linear;
                            -webkit-animation-iteration-count: infinite;
                            -moz-animation-iteration-count: infinite;
                            -ms-animation-iteration-count: infinite;
                            animation-iteration-count: infinite;
                            -webkit-transform-origin: 12.5px 15.15px 0;
                            /* TODO FF CENTER ISSUE */
                            -moz-transform-origin: 12.5px 15.15px 0;
                            /* TODO FF CENTER ISSUE */
                            -ms-transform-origin: 12.5px 15.15px 0;
                            /* TODO FF CENTER ISSUE */
                            transform-origin: 12.5px 15.15px 0;
                            /* TODO FF CENTER ISSUE */
                          }

                          @keyframes am-weather-moon-star-1 {
                            0% {
                              opacity: 0;
                            }

                            100% {
                              opacity: 1;
                            }
                          }

                          .am-weather-moon-star-1 {
                            -webkit-animation-name: am-weather-moon-star-1;
                            -moz-animation-name: am-weather-moon-star-1;
                            -ms-animation-name: am-weather-moon-star-1;
                            animation-name: am-weather-moon-star-1;
                            -webkit-animation-delay: 3s;
                            -moz-animation-delay: 3s;
                            -ms-animation-delay: 3s;
                            animation-delay: 3s;
                            -webkit-animation-duration: 5s;
                            -moz-animation-duration: 5s;
                            -ms-animation-duration: 5s;
                            animation-duration: 5s;
                            -webkit-animation-timing-function: linear;
                            -moz-animation-timing-function: linear;
                            -ms-animation-timing-function: linear;
                            animation-timing-function: linear;
                            -webkit-animation-iteration-count: 1;
                            -moz-animation-iteration-count: 1;
                            -ms-animation-iteration-count: 1;
                            animation-iteration-count: 1;
                          }

                          @keyframes am-weather-moon-star-2 {
                            0% {
                              opacity: 0;
                            }

                            100% {
                              opacity: 1;
                            }
                          }

                          .am-weather-moon-star-2 {
                            -webkit-animation-name: am-weather-moon-star-2;
                            -moz-animation-name: am-weather-moon-star-2;
                            -ms-animation-name: am-weather-moon-star-2;
                            animation-name: am-weather-moon-star-2;
                            -webkit-animation-delay: 5s;
                            -moz-animation-delay: 5s;
                            -ms-animation-delay: 5s;
                            animation-delay: 5s;
                            -webkit-animation-duration: 4s;
                            -moz-animation-duration: 4s;
                            -ms-animation-duration: 4s;
                            animation-duration: 4s;
                            -webkit-animation-timing-function: linear;
                            -moz-animation-timing-function: linear;
                            -ms-animation-timing-function: linear;
                            animation-timing-function: linear;
                            -webkit-animation-iteration-count: 1;
                            -moz-animation-iteration-count: 1;
                            -ms-animation-iteration-count: 1;
                            animation-iteration-count: 1;
                          }

                          /*
                    ** CLOUDS
                    */
                          @keyframes am-weather-cloud-2 {
                            0% {
                              -webkit-transform: translate(0px, 0px);
                              -moz-transform: translate(0px, 0px);
                              -ms-transform: translate(0px, 0px);
                              transform: translate(0px, 0px);
                            }

                            50% {
                              -webkit-transform: translate(2px, 0px);
                              -moz-transform: translate(2px, 0px);
                              -ms-transform: translate(2px, 0px);
                              transform: translate(2px, 0px);
                            }

                            100% {
                              -webkit-transform: translate(0px, 0px);
                              -moz-transform: translate(0px, 0px);
                              -ms-transform: translate(0px, 0px);
                              transform: translate(0px, 0px);
                            }
                          }

                          .am-weather-cloud-2 {
                            -webkit-animation-name: am-weather-cloud-2;
                            -moz-animation-name: am-weather-cloud-2;
                            animation-name: am-weather-cloud-2;
                            -webkit-animation-duration: 3s;
                            -moz-animation-duration: 3s;
                            animation-duration: 3s;
                            -webkit-animation-timing-function: linear;
                            -moz-animation-timing-function: linear;
                            animation-timing-function: linear;
                            -webkit-animation-iteration-count: infinite;
                            -moz-animation-iteration-count: infinite;
                            animation-iteration-count: infinite;
                          }
                          ]]>
                </style>
            </defs>
            <g transform="translate(16,-2)" filter="url(#blur)">
                <g transform="matrix(.8 0 0 .8 16 4)">
                    <g
                        class="am-weather-moon-star-1"
                        style="-moz-animation-delay:3s;-moz-animation-duration:5s;-moz-animation-iteration-count:1;-moz-animation-name:am-weather-moon-star-1;-moz-animation-timing-function:linear;-ms-animation-delay:3s;-ms-animation-duration:5s;-ms-animation-iteration-count:1;-ms-animation-name:am-weather-moon-star-1;-ms-animation-timing-function:linear;-webkit-animation-delay:3s;-webkit-animation-duration:5s;-webkit-animation-iteration-count:1;-webkit-animation-name:am-weather-moon-star-1;-webkit-animation-timing-function:linear">
                        <polygon
                            points="4 4 3.3 5.2 2.7 4 1.5 3.3 2.7 2.7 3.3 1.5 4 2.7 5.2 3.3"
                            fill="#ffa500"
                            stroke-miterlimit="10" />
                    </g>
                    <g
                        class="am-weather-moon-star-2"
                        style="-moz-animation-delay:5s;-moz-animation-duration:4s;-moz-animation-iteration-count:1;-moz-animation-name:am-weather-moon-star-2;-moz-animation-timing-function:linear;-ms-animation-delay:5s;-ms-animation-duration:4s;-ms-animation-iteration-count:1;-ms-animation-name:am-weather-moon-star-2;-ms-animation-timing-function:linear;-webkit-animation-delay:5s;-webkit-animation-duration:4s;-webkit-animation-iteration-count:1;-webkit-animation-name:am-weather-moon-star-2;-webkit-animation-timing-function:linear">
                        <polygon
                            transform="translate(20,10)"
                            points="4 4 3.3 5.2 2.7 4 1.5 3.3 2.7 2.7 3.3 1.5 4 2.7 5.2 3.3"
                            fill="#ffa500"
                            stroke-miterlimit="10" />
                    </g>
                    <g
                        class="am-weather-moon"
                        style="-moz-animation-duration:6s;-moz-animation-iteration-count:infinite;-moz-animation-name:am-weather-moon;-moz-animation-timing-function:linear;-moz-transform-origin:12.5px 15.15px 0;-ms-animation-duration:6s;-ms-animation-iteration-count:infinite;-ms-animation-name:am-weather-moon;-ms-animation-timing-function:linear;-ms-transform-origin:12.5px 15.15px 0;-webkit-animation-duration:6s;-webkit-animation-iteration-count:infinite;-webkit-animation-name:am-weather-moon;-webkit-animation-timing-function:linear;-webkit-transform-origin:12.5px 15.15px 0">
                        <path
                            d="m14.5 13.2c0-3.7 2-6.9 5-8.7-1.5-0.9-3.2-1.3-5-1.3-5.5 0-10 4.5-10 10s4.5 10 10 10c1.8 0 3.5-0.5 5-1.3-3-1.7-5-5-5-8.7z"
                            fill="#ffa500"
                            stroke="#ffa500"
                            stroke-linejoin="round"
                            stroke-width="2" />
                    </g>
                </g>
                <g
                    class="am-weather-cloud-3"
                    style="-moz-animation-duration:3s;-moz-animation-iteration-count:infinite;-moz-animation-name:am-weather-cloud-2;-moz-animation-timing-function:linear;-webkit-animation-duration:3s;-webkit-animation-iteration-count:infinite;-webkit-animation-name:am-weather-cloud-2;-webkit-animation-timing-function:linear">
                    <path
                        transform="translate(-20,-11)"
                        d="m47.7 35.4c0-4.6-3.7-8.2-8.2-8.2-1 0-1.9 0.2-2.8 0.5-0.3-3.4-3.1-6.2-6.6-6.2-3.7 0-6.7 3-6.7 6.7 0 0.8 0.2 1.6 0.4 2.3-0.3-0.1-0.7-0.1-1-0.1-3.7 0-6.7 3-6.7 6.7 0 3.6 2.9 6.6 6.5 6.7h17.2c4.4-0.5 7.9-4 7.9-8.4z"
                        fill="#57a0ee"
                        stroke="#fff"
                        stroke-linejoin="round"
                        stroke-width="1.2" />
                </g>
                <g
                    transform="translate(-20,-10) rotate(10,-247.39,200.17)"
                    fill="none"
                    stroke="#91c0f8"
                    stroke-dasharray="4, 4"
                    stroke-linecap="round"
                    stroke-width="2">
                    <line
                        class="am-weather-rain-1"
                        transform="translate(-4,1)"
                        y2="8"
                        style="-moz-animation-duration:8s;-moz-animation-iteration-count:infinite;-moz-animation-name:am-weather-rain;-moz-animation-timing-function:linear;-ms-animation-duration:8s;-ms-animation-iteration-count:infinite;-ms-animation-name:am-weather-rain;-ms-animation-timing-function:linear;-webkit-animation-duration:8s;-webkit-animation-iteration-count:infinite;-webkit-animation-name:am-weather-rain;-webkit-animation-timing-function:linear" />
                    <line
                        class="am-weather-rain-2"
                        transform="translate(0,-1)"
                        y2="8"
                        style="-moz-animation-delay:0.25s;-moz-animation-duration:8s;-moz-animation-iteration-count:infinite;-moz-animation-name:am-weather-rain;-moz-animation-timing-function:linear;-ms-animation-delay:0.25s;-ms-animation-duration:8s;-ms-animation-iteration-count:infinite;-ms-animation-name:am-weather-rain;-ms-animation-timing-function:linear;-webkit-animation-delay:0.25s;-webkit-animation-duration:8s;-webkit-animation-iteration-count:infinite;-webkit-animation-name:am-weather-rain;-webkit-animation-timing-function:linear" />
                    <line
                        class="am-weather-rain-1"
                        transform="translate(4)"
                        y2="8"
                        style="-moz-animation-duration:8s;-moz-animation-iteration-count:infinite;-moz-animation-name:am-weather-rain;-moz-animation-timing-function:linear;-ms-animation-duration:8s;-ms-animation-iteration-count:infinite;-ms-animation-name:am-weather-rain;-ms-animation-timing-function:linear;-webkit-animation-duration:8s;-webkit-animation-iteration-count:infinite;-webkit-animation-name:am-weather-rain;-webkit-animation-timing-function:linear" />
                </g>
            </g>
        </svg>
    `,
    rainy3: html`
        <svg viewBox="0 0 55 48" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <filter id="blur" x="-.24684" y="-.22892" width="1.4937" height="1.5576">
                    <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
                    <feOffset dx="0" dy="4" result="offsetblur" />
                    <feComponentTransfer>
                        <feFuncA slope="0.05" type="linear" />
                    </feComponentTransfer>
                    <feMerge>
                        <feMergeNode />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
                <style type="text/css">
                          <![CDATA[
                          /*
                    ** RAIN
                    */
                          @keyframes am-weather-rain {
                            0% {
                              stroke-dashoffset: 0;
                            }

                            100% {
                              stroke-dashoffset: -100;
                            }
                          }

                          .am-weather-rain-1 {
                            -webkit-animation-name: am-weather-rain;
                            -moz-animation-name: am-weather-rain;
                            -ms-animation-name: am-weather-rain;
                            animation-name: am-weather-rain;
                            -webkit-animation-duration: 8s;
                            -moz-animation-duration: 8s;
                            -ms-animation-duration: 8s;
                            animation-duration: 8s;
                            -webkit-animation-timing-function: linear;
                            -moz-animation-timing-function: linear;
                            -ms-animation-timing-function: linear;
                            animation-timing-function: linear;
                            -webkit-animation-iteration-count: infinite;
                            -moz-animation-iteration-count: infinite;
                            -ms-animation-iteration-count: infinite;
                            animation-iteration-count: infinite;
                          }

                          .am-weather-rain-2 {
                            -webkit-animation-name: am-weather-rain;
                            -moz-animation-name: am-weather-rain;
                            -ms-animation-name: am-weather-rain;
                            animation-name: am-weather-rain;
                            -webkit-animation-delay: 0.25s;
                            -moz-animation-delay: 0.25s;
                            -ms-animation-delay: 0.25s;
                            animation-delay: 0.25s;
                            -webkit-animation-duration: 8s;
                            -moz-animation-duration: 8s;
                            -ms-animation-duration: 8s;
                            animation-duration: 8s;
                            -webkit-animation-timing-function: linear;
                            -moz-animation-timing-function: linear;
                            -ms-animation-timing-function: linear;
                            animation-timing-function: linear;
                            -webkit-animation-iteration-count: infinite;
                            -moz-animation-iteration-count: infinite;
                            -ms-animation-iteration-count: infinite;
                            animation-iteration-count: infinite;
                          }

                          /*
                    ** CLOUDS
                    */
                          @keyframes am-weather-cloud-2 {
                            0% {
                              -webkit-transform: translate(0px, 0px);
                              -moz-transform: translate(0px, 0px);
                              -ms-transform: translate(0px, 0px);
                              transform: translate(0px, 0px);
                            }

                            50% {
                              -webkit-transform: translate(2px, 0px);
                              -moz-transform: translate(2px, 0px);
                              -ms-transform: translate(2px, 0px);
                              transform: translate(2px, 0px);
                            }

                            100% {
                              -webkit-transform: translate(0px, 0px);
                              -moz-transform: translate(0px, 0px);
                              -ms-transform: translate(0px, 0px);
                              transform: translate(0px, 0px);
                            }
                          }

                          .am-weather-cloud-2 {
                            -webkit-animation-name: am-weather-cloud-2;
                            -moz-animation-name: am-weather-cloud-2;
                            animation-name: am-weather-cloud-2;
                            -webkit-animation-duration: 3s;
                            -moz-animation-duration: 3s;
                            animation-duration: 3s;
                            -webkit-animation-timing-function: linear;
                            -moz-animation-timing-function: linear;
                            animation-timing-function: linear;
                            -webkit-animation-iteration-count: infinite;
                            -moz-animation-iteration-count: infinite;
                            animation-iteration-count: infinite;
                          }
                          ]]>
                </style>
            </defs>
            <g transform="translate(16,-2)" filter="url(#blur)">
                <g
                    class="am-weather-cloud-3"
                    style="-moz-animation-duration:3s;-moz-animation-iteration-count:infinite;-moz-animation-name:am-weather-cloud-2;-moz-animation-timing-function:linear;-webkit-animation-duration:3s;-webkit-animation-iteration-count:infinite;-webkit-animation-name:am-weather-cloud-2;-webkit-animation-timing-function:linear">
                    <path
                        transform="translate(-20,-11)"
                        d="m47.7 35.4c0-4.6-3.7-8.2-8.2-8.2-1 0-1.9 0.2-2.8 0.5-0.3-3.4-3.1-6.2-6.6-6.2-3.7 0-6.7 3-6.7 6.7 0 0.8 0.2 1.6 0.4 2.3-0.3-0.1-0.7-0.1-1-0.1-3.7 0-6.7 3-6.7 6.7 0 3.6 2.9 6.6 6.5 6.7h17.2c4.4-0.5 7.9-4 7.9-8.4z"
                        fill="#57a0ee"
                        stroke="#fff"
                        stroke-linejoin="round"
                        stroke-width="1.2" />
                </g>
                <g
                    transform="translate(-20,-10) rotate(10,-247.39,200.17)"
                    fill="none"
                    stroke="#91c0f8"
                    stroke-dasharray="4, 4"
                    stroke-linecap="round"
                    stroke-width="2">
                    <line
                        class="am-weather-rain-1"
                        transform="translate(-4,1)"
                        y2="8"
                        style="-moz-animation-duration:8s;-moz-animation-iteration-count:infinite;-moz-animation-name:am-weather-rain;-moz-animation-timing-function:linear;-ms-animation-duration:8s;-ms-animation-iteration-count:infinite;-ms-animation-name:am-weather-rain;-ms-animation-timing-function:linear;-webkit-animation-duration:8s;-webkit-animation-iteration-count:infinite;-webkit-animation-name:am-weather-rain;-webkit-animation-timing-function:linear" />
                    <line
                        class="am-weather-rain-2"
                        transform="translate(0,-1)"
                        y2="8"
                        style="-moz-animation-delay:0.25s;-moz-animation-duration:8s;-moz-animation-iteration-count:infinite;-moz-animation-name:am-weather-rain;-moz-animation-timing-function:linear;-ms-animation-delay:0.25s;-ms-animation-duration:8s;-ms-animation-iteration-count:infinite;-ms-animation-name:am-weather-rain;-ms-animation-timing-function:linear;-webkit-animation-delay:0.25s;-webkit-animation-duration:8s;-webkit-animation-iteration-count:infinite;-webkit-animation-name:am-weather-rain;-webkit-animation-timing-function:linear" />
                    <line
                        class="am-weather-rain-1"
                        transform="translate(4)"
                        y2="8"
                        style="-moz-animation-duration:8s;-moz-animation-iteration-count:infinite;-moz-animation-name:am-weather-rain;-moz-animation-timing-function:linear;-ms-animation-duration:8s;-ms-animation-iteration-count:infinite;-ms-animation-name:am-weather-rain;-ms-animation-timing-function:linear;-webkit-animation-duration:8s;-webkit-animation-iteration-count:infinite;-webkit-animation-name:am-weather-rain;-webkit-animation-timing-function:linear" />
                </g>
            </g>
        </svg>
    `,
    scatteredThunderstormsDay: html``,
    scatteredThunderstormsNight: html``,
    scatteredThunderstorms: html``,
    severeThunderstorm: html``,
    snowAndSleetMix: html``,
    snowy1Day: html``,
    snowy1Night: html``,
    snowy1: html``,
    snowy2Day: html``,
    snowy2Night: html``,
    snowy2: html``,
    snowy3Day: html``,
    snowy3Night: html``,
    snowy3: html``,
    thunderstorms: html`
        <svg viewBox="0 0 55 48" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <filter id="blur" x="-.24684" y="-.19575" width="1.4937" height="1.4959">
                    <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
                    <feOffset dx="0" dy="4" result="offsetblur" />
                    <feComponentTransfer>
                        <feFuncA slope="0.05" type="linear" />
                    </feComponentTransfer>
                    <feMerge>
                        <feMergeNode />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
                <style type="text/css">
                    <![CDATA[
                    /*
                    ** CLOUDS
                    */
                    @keyframes am-weather-cloud-1 {
                      0% {
                        -webkit-transform: translate(-5px,0px);
                           -moz-transform: translate(-5px,0px);
                            -ms-transform: translate(-5px,0px);
                                transform: translate(-5px,0px);
                      }

                      50% {
                        -webkit-transform: translate(10px,0px);
                           -moz-transform: translate(10px,0px);
                            -ms-transform: translate(10px,0px);
                                transform: translate(10px,0px);
                      }

                      100% {
                        -webkit-transform: translate(-5px,0px);
                           -moz-transform: translate(-5px,0px);
                            -ms-transform: translate(-5px,0px);
                                transform: translate(-5px,0px);
                      }
                    }

                    .am-weather-cloud-1 {
                      -webkit-animation-name: am-weather-cloud-1;
                         -moz-animation-name: am-weather-cloud-1;
                              animation-name: am-weather-cloud-1;
                      -webkit-animation-duration: 7s;
                         -moz-animation-duration: 7s;
                              animation-duration: 7s;
                      -webkit-animation-timing-function: linear;
                         -moz-animation-timing-function: linear;
                              animation-timing-function: linear;
                      -webkit-animation-iteration-count: infinite;
                         -moz-animation-iteration-count: infinite;
                              animation-iteration-count: infinite;
                    }

                    @keyframes am-weather-cloud-2 {
                      0% {
                        -webkit-transform: translate(0px,0px);
                           -moz-transform: translate(0px,0px);
                            -ms-transform: translate(0px,0px);
                                transform: translate(0px,0px);
                      }

                      50% {
                        -webkit-transform: translate(2px,0px);
                           -moz-transform: translate(2px,0px);
                            -ms-transform: translate(2px,0px);
                                transform: translate(2px,0px);
                      }

                      100% {
                        -webkit-transform: translate(0px,0px);
                           -moz-transform: translate(0px,0px);
                            -ms-transform: translate(0px,0px);
                                transform: translate(0px,0px);
                      }
                    }

                    .am-weather-cloud-2 {
                      -webkit-animation-name: am-weather-cloud-2;
                         -moz-animation-name: am-weather-cloud-2;
                              animation-name: am-weather-cloud-2;
                      -webkit-animation-duration: 3s;
                         -moz-animation-duration: 3s;
                              animation-duration: 3s;
                      -webkit-animation-timing-function: linear;
                         -moz-animation-timing-function: linear;
                              animation-timing-function: linear;
                      -webkit-animation-iteration-count: infinite;
                         -moz-animation-iteration-count: infinite;
                              animation-iteration-count: infinite;
                    }

                    /*
                    ** STROKE
                    */
                    @keyframes am-weather-stroke {
                      0% {
                        -webkit-transform: translate(0.0px,0.0px);
                           -moz-transform: translate(0.0px,0.0px);
                            -ms-transform: translate(0.0px,0.0px);
                                transform: translate(0.0px,0.0px);
                      }

                      2% {
                        -webkit-transform: translate(0.3px,0.0px);
                           -moz-transform: translate(0.3px,0.0px);
                            -ms-transform: translate(0.3px,0.0px);
                                transform: translate(0.3px,0.0px);
                      }

                      4% {
                        -webkit-transform: translate(0.0px,0.0px);
                           -moz-transform: translate(0.0px,0.0px);
                            -ms-transform: translate(0.0px,0.0px);
                                transform: translate(0.0px,0.0px);
                      }

                      6% {
                        -webkit-transform: translate(0.5px,0.4px);
                           -moz-transform: translate(0.5px,0.4px);
                            -ms-transform: translate(0.5px,0.4px);
                                transform: translate(0.5px,0.4px);
                      }

                      8% {
                        -webkit-transform: translate(0.0px,0.0px);
                           -moz-transform: translate(0.0px,0.0px);
                            -ms-transform: translate(0.0px,0.0px);
                                transform: translate(0.0px,0.0px);
                      }

                      10% {
                        -webkit-transform: translate(0.3px,0.0px);
                           -moz-transform: translate(0.3px,0.0px);
                            -ms-transform: translate(0.3px,0.0px);
                                transform: translate(0.3px,0.0px);
                      }

                      12% {
                        -webkit-transform: translate(0.0px,0.0px);
                           -moz-transform: translate(0.0px,0.0px);
                            -ms-transform: translate(0.0px,0.0px);
                                transform: translate(0.0px,0.0px);
                      }

                      14% {
                        -webkit-transform: translate(0.3px,0.0px);
                           -moz-transform: translate(0.3px,0.0px);
                            -ms-transform: translate(0.3px,0.0px);
                                transform: translate(0.3px,0.0px);
                      }

                      16% {
                        -webkit-transform: translate(0.0px,0.0px);
                           -moz-transform: translate(0.0px,0.0px);
                            -ms-transform: translate(0.0px,0.0px);
                                transform: translate(0.0px,0.0px);
                      }

                      18% {
                        -webkit-transform: translate(0.3px,0.0px);
                           -moz-transform: translate(0.3px,0.0px);
                            -ms-transform: translate(0.3px,0.0px);
                                transform: translate(0.3px,0.0px);
                      }

                      20% {
                        -webkit-transform: translate(0.0px,0.0px);
                           -moz-transform: translate(0.0px,0.0px);
                            -ms-transform: translate(0.0px,0.0px);
                                transform: translate(0.0px,0.0px);
                      }

                      22% {
                        -webkit-transform: translate(1px,0.0px);
                           -moz-transform: translate(1px,0.0px);
                            -ms-transform: translate(1px,0.0px);
                                transform: translate(1px,0.0px);
                      }

                      24% {
                        -webkit-transform: translate(0.0px,0.0px);
                           -moz-transform: translate(0.0px,0.0px);
                            -ms-transform: translate(0.0px,0.0px);
                                transform: translate(0.0px,0.0px);
                      }

                      26% {
                        -webkit-transform: translate(-1px,0.0px);
                           -moz-transform: translate(-1px,0.0px);
                            -ms-transform: translate(-1px,0.0px);
                                transform: translate(-1px,0.0px);

                      }

                      28% {
                        -webkit-transform: translate(0.0px,0.0px);
                           -moz-transform: translate(0.0px,0.0px);
                            -ms-transform: translate(0.0px,0.0px);
                                transform: translate(0.0px,0.0px);
                      }

                      40% {
                        fill: orange;
                        -webkit-transform: translate(0.0px,0.0px);
                           -moz-transform: translate(0.0px,0.0px);
                            -ms-transform: translate(0.0px,0.0px);
                                transform: translate(0.0px,0.0px);
                      }

                      65% {
                        fill: white;
                        -webkit-transform: translate(-1px,5.0px);
                           -moz-transform: translate(-1px,5.0px);
                            -ms-transform: translate(-1px,5.0px);
                                transform: translate(-1px,5.0px);
                      }
                      61% {
                        fill: orange;
                      }

                      100% {
                        -webkit-transform: translate(0.0px,0.0px);
                           -moz-transform: translate(0.0px,0.0px);
                            -ms-transform: translate(0.0px,0.0px);
                                transform: translate(0.0px,0.0px);
                      }
                    }

                    .am-weather-stroke {
                      -webkit-animation-name: am-weather-stroke;
                         -moz-animation-name: am-weather-stroke;
                              animation-name: am-weather-stroke;
                      -webkit-animation-duration: 1.11s;
                         -moz-animation-duration: 1.11s;
                              animation-duration: 1.11s;
                      -webkit-animation-timing-function: linear;
                         -moz-animation-timing-function: linear;
                              animation-timing-function: linear;
                      -webkit-animation-iteration-count: infinite;
                         -moz-animation-iteration-count: infinite;
                              animation-iteration-count: infinite;
                    }
                            ]]>
                </style>
            </defs>
            <g id="thunder" transform="translate(-4,-12)" filter="url(#blur)">
                <g transform="translate(20,10)">
                    <g
                        class="am-weather-cloud-1"
                        style="-moz-animation-duration:7s;-moz-animation-iteration-count:infinite;-moz-animation-name:am-weather-cloud-1;-moz-animation-timing-function:linear;-webkit-animation-duration:7s;-webkit-animation-iteration-count:infinite;-webkit-animation-name:am-weather-cloud-1;-webkit-animation-timing-function:linear">
                        <path
                            transform="matrix(.6 0 0 .6 -10 -6)"
                            d="m47.7 35.4c0-4.6-3.7-8.2-8.2-8.2-1 0-1.9 0.2-2.8 0.5-0.3-3.4-3.1-6.2-6.6-6.2-3.7 0-6.7 3-6.7 6.7 0 0.8 0.2 1.6 0.4 2.3-0.3-0.1-0.7-0.1-1-0.1-3.7 0-6.7 3-6.7 6.7 0 3.6 2.9 6.6 6.5 6.7h17.2c4.4-0.5 7.9-4 7.9-8.4z"
                            fill="#91c0f8"
                            stroke="#fff"
                            stroke-linejoin="round"
                            stroke-width="1.2" />
                    </g>
                    <path
                        transform="translate(-20,-11)"
                        d="m47.7 35.4c0-4.6-3.7-8.2-8.2-8.2-1 0-1.9 0.2-2.8 0.5-0.3-3.4-3.1-6.2-6.6-6.2-3.7 0-6.7 3-6.7 6.7 0 0.8 0.2 1.6 0.4 2.3-0.3-0.1-0.7-0.1-1-0.1-3.7 0-6.7 3-6.7 6.7 0 3.6 2.9 6.6 6.5 6.7h17.2c4.4-0.5 7.9-4 7.9-8.4z"
                        fill="#57a0ee"
                        stroke="#fff"
                        stroke-linejoin="round"
                        stroke-width="1.2" />
                    <g transform="matrix(1.2,0,0,1.2,-4,28)">
                        <polygon
                            class="am-weather-stroke"
                            points="11.1 6.9 14.3 -2.9 20.5 -2.9 16.4 4.3 20.3 4.3 11.5 14.6 14.9 6.9"
                            fill="#ffa500"
                            stroke="#fff"
                            style="-moz-animation-duration:1.11s;-moz-animation-iteration-count:infinite;-moz-animation-name:am-weather-stroke;-moz-animation-timing-function:linear;-webkit-animation-duration:1.11s;-webkit-animation-iteration-count:infinite;-webkit-animation-name:am-weather-stroke;-webkit-animation-timing-function:linear" />
                    </g>
                </g>
            </g>
        </svg>
    `,
    tornado: html``,
    tropicalStorm: html``,
    wind: html`
        <svg viewBox="0 0 55 48" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <filter id="blur" x="-.24684" y="-.27097" width="1.4937" height="1.6939">
                    <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
                    <feOffset dx="0" dy="4" result="offsetblur" />
                    <feComponentTransfer>
                        <feFuncA slope="0.05" type="linear" />
                    </feComponentTransfer>
                    <feMerge>
                        <feMergeNode />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>
            <g transform="translate(16 -2)" filter="url(#blur)">
                <g
                    class="am-weather-wind"
                    transform="translate(-16,10)"
                    fill="none"
                    stroke="#57A0EE"
                    stroke-linecap="round"
                    stroke-width="2">
                    <path stroke-dasharray="150 10" d="M25.5 5A4 4 0 1 1 29 11H10">
                        <animate
                            attributeName="stroke-dashoffset"
                            dur="3s"
                            repeatCount="indefinite"
                            values="0; 160"
                            begin="0s" />
                    </path>
                    <path stroke-dasharray="144 16" d="M39.5 11A4 4 0 1 1 43 17H6">
                        <animate
                            attributeName="stroke-dashoffset"
                            dur="3s"
                            repeatCount="indefinite"
                            values="0; 160"
                            begin="0.5s" />
                    </path>
                    <path stroke-dasharray="150 10" d="M28.5 29A4 4 0 1 0 32 23H15">
                        <animate
                            attributeName="stroke-dashoffset"
                            dur="3s"
                            repeatCount="indefinite"
                            values="0; 160"
                            begin="0.25s" />
                    </path>
                </g>
            </g>
        </svg>
    `,
};

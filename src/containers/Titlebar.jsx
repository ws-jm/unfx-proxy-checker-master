import React from 'react';
import { ipcRenderer } from 'electron';

import '../../public/styles/Titlebar.postcss';

export default class Titlebar extends React.PureComponent {
    state = {
        maximized: false
    };

    componentDidMount = () => {
        ipcRenderer.on('on-window-unmaximize', () => {
            this.setState({ maximized: false });
        });

        ipcRenderer.on('on-window-maximize', () => {
            this.setState({ maximized: true });
        });
    };

    close = () => {
        ipcRenderer.send('window-close');
    };

    minimize = () => {
        ipcRenderer.send('window-minimize');
    };

    maximize = () => {
        ipcRenderer.send('window-maximize');
    };

    unmaximize = () => {
        ipcRenderer.send('window-unmaximize');
    };

    render = () => {
        const { dark, toggleInfo, toggleDark } = this.props;

        return (
            <div className={`titlebar ${dark ? 'dark' : ''}`}>
                <svg viewBox="0 0 396.821 396.821" className="icon">
                    <path d="M394.583,8.054c-0.422-3.413-3.11-6.101-6.522-6.523c-30.748-3.803-62.477-0.488-91.767,9.583c-29.293,10.072-56.355,26.973-78.258,48.876l-49.983,49.983l-72.149,9.305c-1.645,0.212-3.172,0.963-4.345,2.135l-69.563,69.563c-1.969,1.969-2.685,4.868-1.858,7.528c0.825,2.66,3.058,4.643,5.796,5.15l52.597,9.742l10.335,10.335l-22.003,11.915c-2.082,1.127-3.51,3.172-3.851,5.515s0.444,4.709,2.118,6.383l83.438,83.438c1.417,1.417,3.329,2.197,5.304,2.197c0.358,0,0.72-0.026,1.08-0.078c2.343-0.341,4.388-1.769,5.515-3.851l11.916-22.003l10.335,10.335l9.742,52.597c0.508,2.739,2.49,4.971,5.15,5.797c0.731,0.227,1.48,0.337,2.224,0.337c1.96,0,3.876-0.769,5.305-2.197l69.563-69.563c1.172-1.172,1.923-2.7,2.135-4.344l9.306-72.15l49.983-49.984c21.903-21.903,38.804-48.964,48.876-78.257C395.072,70.528,398.385,38.795,394.583,8.054z M79.674,198.355l-36.989-6.851l57.673-57.675l50.332-6.491L79.674,198.355zM152.065,313.268L82.846,244.05l17.085-9.252l61.385,61.386L152.065,313.268z M262.285,295.756l-57.674,57.674l-6.852-36.988l71.017-71.017L262.285,295.756z M325.517,167.471l-135.85,135.85l-96.874-96.874l135.85-135.851c19.738-19.739,44.002-35.076,70.287-44.49c3.395,17.492,11.948,33.719,24.654,46.424c12.705,12.706,28.931,21.259,46.424,24.655C360.593,123.468,345.255,147.732,325.517,167.471z M374.523,82.774c-15.203-2.593-29.345-9.863-40.333-20.85c-10.988-10.987-18.257-25.13-20.85-40.333c21.741-5.859,44.579-7.857,66.99-5.807C382.381,38.195,380.382,61.033,374.523,82.774z" />
                    <path d="M221.325,110.443c-17.74,17.741-17.74,46.606,0,64.347c8.871,8.871,20.521,13.305,32.174,13.305c11.649,0,23.304-4.436,32.173-13.305h0.001c17.74-17.74,17.74-46.606-0.001-64.347C267.931,92.703,239.065,92.704,221.325,110.443z M275.066,164.183c-11.894,11.893-31.244,11.891-43.134,0c-11.893-11.892-11.893-31.242,0-43.134c5.945-5.946,13.756-8.918,21.566-8.918c7.811,0,15.621,2.973,21.566,8.918C286.957,132.941,286.957,152.291,275.066,164.183z" />
                    <path d="M98.365,299.165c-2.93-2.929-7.678-2.929-10.607,0L23.41,363.512c-2.929,2.929-2.929,7.678,0,10.606c1.465,1.464,3.385,2.197,5.304,2.197s3.839-0.732,5.304-2.197l64.347-64.347C101.293,306.843,101.293,302.094,98.365,299.165z" />
                    <path d="M108.263,319.671l-28.991,28.991c-2.929,2.929-2.929,7.678,0,10.606c1.465,1.464,3.385,2.197,5.304,2.197s3.839-0.732,5.304-2.197l28.991-28.991c2.929-2.929,2.929-7.678,0-10.606C115.941,316.742,111.193,316.742,108.263,319.671z" />
                    <path d="M69.123,361.919c-3.138,0-6.002,2.024-7.062,4.973c-1.078,2.998-0.075,6.441,2.416,8.416c2.547,2.02,6.266,2.13,8.928,0.265c2.84-1.99,3.992-5.81,2.639-9.024C74.931,363.774,72.099,361.919,69.123,361.919z" />
                    <path d="M76.044,366.549C76.234,367,75.864,366.099,76.044,366.549L76.044,366.549z" />
                    <path d="M47.91,380.025l-3.992,3.992c-2.93,2.929-2.93,7.678-0.001,10.607c1.465,1.464,3.384,2.197,5.304,2.197c1.919,0,3.839-0.732,5.303-2.196l3.992-3.992c2.93-2.929,2.93-7.678,0.001-10.606C55.588,377.099,50.838,377.096,47.91,380.025z" />
                    <path d="M42.502,314.014c-2.93-2.929-7.678-2.929-10.607,0L2.904,343.005c-2.929,2.929-2.929,7.678,0,10.606c1.465,1.464,3.385,2.197,5.304,2.197s3.839-0.732,5.304-2.197l28.991-28.991C45.431,321.692,45.431,316.943,42.502,314.014z" />
                    <path d="M54.472,311.136c3.043-0.765,5.327-3.417,5.644-6.537c0.311-3.055-1.369-6.049-4.096-7.427c-2.895-1.464-6.523-0.853-8.769,1.494c-2.405,2.513-2.752,6.426-0.852,9.335c-0.06-0.09-0.106-0.156,0.015,0.029c0.126,0.185,0.083,0.118,0.023,0.029C48.204,310.626,51.429,311.901,54.472,311.136z" />
                    <path d="M73.867,293.257l3.991-3.992c2.929-2.929,2.929-7.678-0.001-10.606c-2.932-2.93-7.681-2.929-10.606,0.001l-3.991,3.992c-2.929,2.929-2.929,7.678,0.001,10.606c1.465,1.464,3.384,2.196,5.303,2.196C70.483,295.454,72.403,294.722,73.867,293.257z" />
                </svg>
                <span className="title">Unfx Proxy Checker</span>
                <div className="misc">
                    <ul className="buttons">
                        <li onClick={toggleInfo} title="Toggle Info">
                            <svg viewBox="0 0 522.468 522.469">
                                <path d="M325.762,70.513l-17.706-4.854c-2.279-0.76-4.524-0.521-6.707,0.715c-2.19,1.237-3.669,3.094-4.429,5.568L190.426,440.53    c-0.76,2.475-0.522,4.809,0.715,6.995c1.237,2.19,3.09,3.665,5.568,4.425l17.701,4.856c2.284,0.766,4.521,0.526,6.71-0.712    c2.19-1.243,3.666-3.094,4.425-5.564L332.042,81.936c0.759-2.474,0.523-4.808-0.716-6.999    C330.088,72.747,328.237,71.272,325.762,70.513z" />
                                <path d="M166.167,142.465c0-2.474-0.953-4.665-2.856-6.567l-14.277-14.276c-1.903-1.903-4.093-2.857-6.567-2.857    s-4.665,0.955-6.567,2.857L2.856,254.666C0.95,256.569,0,258.759,0,261.233c0,2.474,0.953,4.664,2.856,6.566l133.043,133.044    c1.902,1.906,4.089,2.854,6.567,2.854s4.665-0.951,6.567-2.854l14.277-14.268c1.903-1.902,2.856-4.093,2.856-6.57    c0-2.471-0.953-4.661-2.856-6.563L51.107,261.233l112.204-112.201C165.217,147.13,166.167,144.939,166.167,142.465z" />
                                <path d="M519.614,254.663L386.567,121.619c-1.902-1.902-4.093-2.857-6.563-2.857c-2.478,0-4.661,0.955-6.57,2.857l-14.271,14.275    c-1.902,1.903-2.851,4.09-2.851,6.567s0.948,4.665,2.851,6.567l112.206,112.204L359.163,373.442    c-1.902,1.902-2.851,4.093-2.851,6.563c0,2.478,0.948,4.668,2.851,6.57l14.271,14.268c1.909,1.906,4.093,2.854,6.57,2.854    c2.471,0,4.661-0.951,6.563-2.854L519.614,267.8c1.903-1.902,2.854-4.096,2.854-6.57    C522.468,258.755,521.517,256.565,519.614,254.663z" />
                            </svg>
                        </li>
                        <li onClick={toggleDark} title="Toggle Dark Mode">
                            {dark ? (
                                <svg viewBox="0 0 383.186 383.186">
                                    <path d="M226.704,124.057c-1.74-1.39-3.939-2.075-6.16-1.92h-33.84l31.6-35.28l2.96-3.28l1.92-2.32    c0.527-0.742,0.957-1.549,1.28-2.4c0.363-0.917,0.552-1.894,0.56-2.88c0.223-2.333-0.933-4.583-2.96-5.76    c-2.63-1.203-5.512-1.752-8.4-1.6h-39.68c-2.096-0.143-4.172,0.483-5.84,1.76c-1.378,1.173-2.145,2.911-2.08,4.72    c0,2.72,0.88,4.32,2.72,4.96c2.6,0.736,5.3,1.06,8,0.96h25.6c-1.067,1.493-2.48,3.253-4.24,5.28l-6.64,7.52l-8.64,9.6    l-10.32,11.44c-3.6,4-5.92,6.72-7.04,8c-2.54,3.085-2.224,7.618,0.72,10.32c2.118,1.713,4.801,2.57,7.52,2.4h46.72    c2.235,0.175,4.457-0.48,6.24-1.84c1.359-1.187,2.121-2.916,2.08-4.72C228.853,127.138,228.092,125.324,226.704,124.057z" />
                                    <path d="M297.264,164.296c-1.4-1.12-3.173-1.663-4.96-1.52h-26.88l25.2-28.16l2.4-2.64l1.52-1.84    c0.427-0.593,0.777-1.238,1.04-1.92c0.299-0.738,0.462-1.524,0.48-2.32c0.201-1.867-0.706-3.68-2.32-4.64    c-2.103-0.966-4.409-1.406-6.72-1.28h-31.36c-1.669-0.093-3.317,0.418-4.64,1.44c-1.106,0.93-1.725,2.316-1.68,3.76    c0,2.16,0.72,3.44,2.16,4c2.077,0.608,4.238,0.879,6.4,0.8h20.16c-0.88,1.2-2,2.56-3.36,4.24l-5.28,6l-6.88,8l-8,9.12    c-2.88,3.2-4.773,5.387-5.68,6.56c-1.885,2.418-1.643,5.868,0.56,8c1.657,1.155,3.667,1.693,5.68,1.52h37.28    c1.774,0.142,3.538-0.37,4.96-1.44c1.058-0.959,1.642-2.333,1.6-3.76C298.981,166.728,298.368,165.297,297.264,164.296z" />
                                    <path d="M381.104,119.577c-1.74-1.39-3.939-2.075-6.16-1.92h-33.76l31.6-35.28l2.88-3.6l1.92-2.32    c0.525-0.744,0.955-1.55,1.28-2.4c0.363-0.917,0.552-1.894,0.56-2.88c0.223-2.333-0.933-4.583-2.96-5.76    c-2.73-1.348-5.758-1.981-8.8-1.84h-39.2c-2.096-0.143-4.172,0.483-5.84,1.76c-1.378,1.173-2.145,2.911-2.08,4.72    c0,2.72,0.88,4.32,2.72,4.96c2.6,0.735,5.3,1.059,8,0.96h25.6c-1.067,1.493-2.453,3.253-4.16,5.28l-6.64,7.52l-8.64,9.6    l-10.32,11.44c-3.6,4-5.92,6.72-7.04,8c-1.043,1.265-1.635,2.841-1.68,4.48c-0.107,2.206,0.773,4.346,2.4,5.84    c2.11,1.59,4.726,2.357,7.36,2.16h46.72c2.235,0.175,4.457-0.48,6.24-1.84c1.359-1.187,2.121-2.916,2.08-4.72    C383.037,122.138,382.295,120.653,381.104,119.577z" />
                                    <path d="M351.132,252.524c-2.05-0.97-4.416-1.023-6.508-0.148h0.08c-86.719,35.869-186.096-5.353-221.965-92.072    c-18.193-43.985-17.103-93.585,3.005-136.728c1.889-3.994,0.182-8.763-3.812-10.652c-2.05-0.97-4.416-1.023-6.508-0.148    C20.363,51.826-25.044,160.544,14.005,255.605c39.049,95.061,147.767,140.468,242.829,101.419    c43.356-17.81,78.394-51.325,98.111-93.848C356.833,259.182,355.126,254.413,351.132,252.524z" />
                                </svg>
                            ) : (
                                <svg viewBox="0 0 129 129">
                                    <path d="M64.5 92.6c15.5 0 28-12.6 28-28s-12.6-28-28-28-28 12.6-28 28 12.5 28 28 28zm0-47.9c11 0 19.9 8.9 19.9 19.9 0 11-8.9 19.9-19.9 19.9s-19.9-8.9-19.9-19.9c0-11 8.9-19.9 19.9-19.9zM68.6 23.6V10.7c0-2.3-1.8-4.1-4.1-4.1s-4.1 1.8-4.1 4.1v12.9c0 2.3 1.8 4.1 4.1 4.1s4.1-1.8 4.1-4.1zM60.4 105.6v12.9c0 2.3 1.8 4.1 4.1 4.1s4.1-1.8 4.1-4.1v-12.9c0-2.3-1.8-4.1-4.1-4.1s-4.1 1.8-4.1 4.1zM96.4 38.5l9.1-9.1c1.6-1.6 1.6-4.2 0-5.8-1.6-1.6-4.2-1.6-5.8 0l-9.1 9.1c-1.6 1.6-1.6 4.2 0 5.8.8.8 1.8 1.2 2.9 1.2s2.1-.4 2.9-1.2zM23.5 105.6c.8.8 1.8 1.2 2.9 1.2 1 0 2.1-.4 2.9-1.2l9.1-9.1c1.6-1.6 1.6-4.2 0-5.8-1.6-1.6-4.2-1.6-5.8 0l-9.1 9.1c-1.6 1.6-1.6 4.2 0 5.8zM122.5 64.6c0-2.3-1.8-4.1-4.1-4.1h-12.9c-2.3 0-4.1 1.8-4.1 4.1s1.8 4.1 4.1 4.1h12.9c2.2 0 4.1-1.8 4.1-4.1zM10.6 68.7h12.9c2.3 0 4.1-1.8 4.1-4.1s-1.8-4.1-4.1-4.1H10.6c-2.3 0-4.1 1.8-4.1 4.1s1.9 4.1 4.1 4.1zM102.6 106.8c1 0 2.1-.4 2.9-1.2 1.6-1.6 1.6-4.2 0-5.8l-9.1-9.1c-1.6-1.6-4.2-1.6-5.8 0-1.6 1.6-1.6 4.2 0 5.8l9.1 9.1c.8.8 1.9 1.2 2.9 1.2zM38.4 38.5c1.6-1.6 1.6-4.2 0-5.8l-9.1-9.1c-1.6-1.6-4.2-1.6-5.8 0-1.6 1.6-1.6 4.2 0 5.8l9.1 9.1c.8.8 1.8 1.2 2.9 1.2s2.1-.4 2.9-1.2z"></path>
                                </svg>
                            )}
                        </li>
                    </ul>
                </div>
                <ul className="buttons">
                    <li onClick={this.minimize}>
                        <svg viewBox="0 0 512 512" className="minimize">
                            <path d="M471.695 411.923v47.823a6.913 6.913 0 0 1-6.913 6.913H47.217a6.913 6.913 0 0 1-6.913-6.913v-47.823a6.913 6.913 0 0 1 6.913-6.913h417.566a6.913 6.913 0 0 1 6.912 6.913z" />
                        </svg>
                    </li>
                    {this.state.maximized ? (
                        <li onClick={this.unmaximize}>
                            <svg viewBox="0 0 294.834 294.834">
                                <path d="M288.834,0H47.413c-3.313,0-6,2.687-6,6v17.398c0,3.313,2.687,6,6,6s6-2.687,6-6V12h229.421v229.421h-11.398   c-3.313,0-6,2.687-6,6s2.687,6,6,6h17.398c3.313,0,6-2.687,6-6V6C294.834,2.687,292.147,0,288.834,0z" />
                                <path d="M247.421,41.413H6c-3.313,0-6,2.687-6,6v241.421c0,3.313,2.687,6,6,6h241.421c3.313,0,6-2.687,6-6V47.413   C253.421,44.1,250.734,41.413,247.421,41.413z M241.421,282.834H12V53.413h229.421V282.834z" />
                            </svg>
                        </li>
                    ) : (
                        <li onClick={this.maximize}>
                            <svg viewBox="0 0 448 448">
                                <path d="m144 0h-144v144h16v-128h128zm0 0" />
                                <path d="m432 144h16v-144h-144v16h128zm0 0" />
                                <path d="m16 304h-16v144h144v-16h-128zm0 0" />
                                <path d="m448 304h-16v128h-128v16h144zm0 0" />
                            </svg>
                        </li>
                    )}
                    <li onClick={this.close}>
                        <svg viewBox="0 0 224.512 224.512">
                            <polygon points="224.507,6.997 217.521,0 112.256,105.258 6.998,0 0.005,6.997 105.263,112.254    0.005,217.512 6.998,224.512 112.256,119.24 217.521,224.512 224.507,217.512 119.249,112.254  " />
                        </svg>
                    </li>
                </ul>
            </div>
        );
    };
}
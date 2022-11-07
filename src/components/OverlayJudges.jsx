import React from 'react';

import '../../public/styles/OverlayJudges.postcss';

const OverlayJudges = ({ isActive, items }) => {
    const all = items.length;
    const done = items.filter(item => !item.state.checking).length;

    return (
        <div className={`ping-judges-container ${isActive ? 'opened' : 'closed'}`}>
            <div className="ping-judges-content">
                <span className="ping-progress">
                    Total checked {done} of {all}
                </span>
                <div className="ping-status">
                    <div className="items">
                        {items.map(item => (
                            <div className={`item ${!item.state.checking ? (item.state.working ? 'success' : 'error') : 'on-process'}`} key={item.url}>
                                <svg viewBox="0 -27 512 511">
                                    <path d="m310.003906 168.5c-48.523437 0-88 39.476562-88 88s39.476563 88 88 88c48.523438 0 88-39.476562 88-88s-39.476562-88-88-88zm0 156c-37.496094 0-68-30.503906-68-68s30.503906-68 68-68 68 30.503906 68 68-30.503906 68-68 68zm0 0" />
                                    <path d="m310.003906 211.503906c-5.523437 0-10 4.476563-10 10 0 5.523438 4.476563 10 10 10 13.78125 0 24.996094 11.214844 24.996094 24.996094 0 5.523438 4.476562 10 10 10s10-4.476562 10-10c0-24.8125-20.183594-44.996094-44.996094-44.996094zm0 0" />
                                    <path d="m61.644531 75.902344c-2.539062-4.902344-8.570312-6.820313-13.476562-4.285156-4.90625 2.539062-6.824219 8.574218-4.285157 13.480468l26.917969 52c1.742188 3.367188 5.265625 5.425782 9.03125 5.402344 3.789063-.058594 7.222657-2.253906 8.863281-5.671875l16.296876-33.929687 17.699218 34.199218c1.722656 3.320313 5.148438 5.402344 8.882813 5.402344h.148437c3.792969-.058594 7.222656-2.253906 8.867188-5.671875l24.972656-52c2.390625-4.976563.292969-10.953125-4.683594-13.34375-4.980468-2.390625-10.953125-.292969-13.34375 4.6875l-16.296875 33.929687-17.703125-34.199218c-1.742187-3.367188-5.257812-5.433594-9.027344-5.402344-3.792968.058594-7.226562 2.253906-8.867187 5.671875l-16.292969 33.929687zm0 0" />
                                    <path d="m125.988281 20.5c2.632813 0 5.210938-1.070312 7.070313-2.929688 1.863281-1.859374 2.929687-4.441406 2.929687-7.070312s-1.066406-5.210938-2.929687-7.070312c-1.859375-1.859376-4.4375-2.929688-7.070313-2.929688-2.628906 0-5.207031 1.070312-7.066406 2.929688-1.863281 1.859374-2.933594 4.441406-2.933594 7.070312s1.070313 5.210938 2.933594 7.070312c1.859375 1.859376 4.4375 2.929688 7.066406 2.929688zm0 0" />
                                    <path d="m512 172.5v-132c0-22.054688-17.945312-40-40-40h-304.011719c-5.519531 0-10 4.476562-10 10s4.480469 10 10 10h304.011719c11.027344 0 20 8.972656 20 20v132c0 11.027344-8.972656 20-20 20h-48c-.289062 0-.570312.019531-.851562.042969-15.433594-27.195313-40.382813-48.304688-70.292969-58.777344l14.824219-30.863281 17.703124 34.195312c1.71875 3.324219 5.144532 5.402344 8.878907 5.402344h.152343c3.789063-.058594 7.222657-2.253906 8.863282-5.671875l24.972656-52c2.390625-4.976563.292969-10.949219-4.683594-13.339844-4.976562-2.394531-10.953125-.296875-13.34375 4.683594l-16.292968 33.929687-17.703126-34.199218c-1.742187-3.367188-5.253906-5.433594-9.03125-5.398438-3.792968.054688-7.222656 2.25-8.863281 5.667969l-16.296875 33.929687-17.699218-34.199218c-2.539063-4.902344-8.574219-6.820313-13.480469-4.28125-4.90625 2.539062-6.820313 8.570312-4.285157 13.476562l22.132813 42.753906c-6.105469-.882812-12.347656-1.351562-18.695313-1.351562-12.292968 0-24.195312 1.71875-35.476562 4.921875l22.378906-46.59375c2.390625-4.976563.292969-10.949219-4.6875-13.339844-4.976562-2.394531-10.953125-.296875-13.339844 4.683594l-16.296874 33.929687-17.703126-34.199218c-1.742187-3.367188-5.238281-5.433594-9.03125-5.398438-3.789062.054688-7.222656 2.25-8.863281 5.667969l-16.292969 33.929687-17.703124-34.199218c-2.539063-4.902344-8.570313-6.820313-13.476563-4.28125-4.90625 2.539062-6.824219 8.570312-4.285156 13.476562l26.917969 52c1.742187 3.367188 5.25 5.425782 9.03125 5.402344 3.789062-.058594 7.222656-2.253906 8.863281-5.671875l16.296875-33.925781 17.699218 34.195312c.296876.574219.660157 1.09375 1.054688 1.589844-24.523438 11.476562-44.898438 30.382812-58.207031 53.8125h-156.886719c-11.027344 0-20-8.972656-20-20v-132c0-11.027344 8.972656-20 20-20h40.992188c5.523437 0 10-4.476562 10-10s-4.476563-10-10-10h-40.992188c-22.054688 0-40 17.945312-40 40v132c0 22.058594 17.945312 40 40 40h147.675781c-4.960937 13.75-7.671875 28.5625-7.671875 44 0 71.683594 58.316406 130 130 130 23.554688 0 45.667969-6.296875 64.742188-17.296875l79.367187 79.367187c6.609375 6.609376 15.292969 9.914063 23.976563 9.914063s17.367187-3.304687 23.976562-9.914063c13.222656-13.222656 13.222656-34.734374 0-47.957031l-31.183594-31.183593c-3.90625-3.902344-10.238281-3.90625-14.140624 0-3.90625 3.90625-3.90625 10.234374 0 14.140624l31.183593 31.1875c5.421875 5.421876 5.421875 14.246094 0 19.671876-5.421875 5.421874-14.246093 5.421874-19.667969 0l-76.738281-76.742188c29.546875-23.847656 48.484375-60.34375 48.484375-101.1875 0-15.4375-2.710937-30.25-7.671875-44h39.667969c22.058594 0 40-17.945312 40-40zm-201.996094 194c-60.652344 0-110-49.347656-110-110s49.347656-110 110-110 110 49.347656 110 110-49.34375 110-110 110zm0 0" />
                                    <path d="m433.019531 345.710938c-1.859375 1.859374-2.929687 4.4375-2.929687 7.070312 0 2.628906 1.070312 5.207031 2.929687 7.070312 1.871094 1.859376 4.441407 2.929688 7.070313 2.929688s5.210937-1.070312 7.070312-2.929688c1.871094-1.863281 2.929688-4.441406 2.929688-7.070312 0-2.632812-1.058594-5.210938-2.929688-7.070312-1.859375-1.859376-4.429687-2.929688-7.070312-2.929688-2.628906 0-5.210938 1.070312-7.070313 2.929688zm0 0" />
                                </svg>
                                <div className="url" title={item.url}>
                                    {item.url}
                                </div>
                                <div className="status">
                                    {item.state.checking ? (
                                        <svg viewBox="0 0 128 128">
                                            <g transform="rotate(148.401 64 64)">
                                                <path d="M75.4 126.63a11.43 11.43 0 0 1-2.1-22.65 40.9 40.9 0 0 0 30.5-30.6 11.4 11.4 0 1 1 22.27 4.87h.02a63.77 63.77 0 0 1-47.8 48.05v-.02a11.38 11.38 0 0 1-2.93.37z" />
                                                <animateTransform attributeName="transform" type="rotate" from="0 64 64" to="360 64 64" dur="1000ms" repeatCount="indefinite" />
                                            </g>
                                        </svg>
                                    ) : (
                                        <div className="response">{item.state.working ? `${item.state.timeout} ms` : 'Error'}</div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OverlayJudges;
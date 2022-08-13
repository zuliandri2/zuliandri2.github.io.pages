"use strict";

import React from 'react';

class Logo extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        return React.createElement("div", { className: "p-[1.08rem] text-center" }, "Logo");
    }
}

export default Logo;
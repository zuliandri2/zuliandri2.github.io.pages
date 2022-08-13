import React from 'react';

export const toggleNavigation = {
    show: {
        width: "w-[15%]",
        marginLeft: "ml-[15%]",
        widthHeader: "w-[90%]",
    },
    hide: {
        width: "w-[10%]",
        marginLeft: "ml-[10%]",
        widthHeader: "w-[85%]",
    }
};

export const navigationToggle = React.createContext({
    action: toggleNavigation.show,
    event: function () {},
});
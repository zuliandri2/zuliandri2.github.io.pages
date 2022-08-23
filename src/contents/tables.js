import  React from 'react';

export class TablesContents extends React.Component {

    render() {
        return React.createElement(
            "div",
            {
                className: "p-5"
            },
            React.createElement(TableComponent)
        );
    }
}

class THComponent extends React.Component {
    render() {
        return React.createElement(
            "th",
            {
                className: this.props.element.class,
                tabIndex: this.props.element.tabindex,
                "aria-controls": this.props.element["aria-controls"],
                rowSpan: this.props.element.rowspan,
                colSpan: this.props.element.colspan,
                "aria-sort": this.props.element["aria-sort"],
                "aria-label": this.props.element["aria-label"],
                width: this.props.element.style.width
            },
            this.props.element.name
        );
    }
}


class TableHeader extends React.Component {
    render() {
        return React.createElement(
            theaderContext.Consumer,
            null,
            function (value) {
                const thead = value.map(function (element, i) {
                    return React.createElement(THComponent, {element: element, key: i});
                });

                return React.createElement(
                    "tr",
                    null,
                    thead
                );
            },
        );
    }
}

const theaderData = [
    {
        name: "Name",
        class:"p-4 sorting sorting_asc",
        tabindex:"0",
        "aria-controls":"example",
        rowspan:"1",
        colspan:"1",
        "aria-sort":"ascending",
        "aria-label":"Name: activate to sort column descending",
        style: {width: "131.167px" }
    },
    {
        name: "Position",
        class:"p-4 sorting",
        tabindex:"0",
        "aria-controls":"example",
        rowspan:"1",
        colspan:"1",
        "aria-label":"Position: activate to sort column ascending",
        style:{ width: "218.167px"}
    },
    {
        name: "Office",
        class:"p-4 sorting",
        tabindex:"0",
        "aria-controls":"example",
        rowspan:"1",
        colspan:"1",
        "aria-label":"Office: activate to sort column ascending",
        style:{width: "96.9583px"}
    },
    {
        name: "Age",
        class:"p-4 sorting",
        tabindex:"0",
        "aria-controls":"example",
        rowspan:"1",
        colspan:"1",
        "aria-label":"Age: activate to sort column ascending",
        style: {width: "39.0208px"}
    },
    {
        name: "Start",
        class:"p-4 sorting",
        tabindex:"0",
        "aria-controls":"example" ,
        rowspan:"1",
        colspan:"1",
        "aria-label":"Start date: activate to sort column ascending",
        style: {width: "85.5625px"}
    },
    {
        name: "Salary",
        class:"p-4 sorting",
        tabindex:"0",
        "aria-controls":"example",
        rowspan:"1",
        colspan:"1",
        "aria-label":"Salary: activate to sort column ascending",
        style: {width: "73.2917px"}
    }
];

const theaderContext = React.createContext();

class TableComponent extends React.Component {

    render() {
        return React.createElement(
            theaderContext.Provider,
            { value: theaderData },
            React.createElement(
                "table",
                null,
                React.createElement(THead),
                React.createElement(TBody),
            )
        );
    }
}

class THead extends React.Component {
    render() {
        return React.createElement("thead", null, React.createElement(TableHeader));
    }
}

class TBody extends React.Component {

    constructor(props) {
        super(props);
        this.data = [
            [
                "Airi Satou",
                "Accountant",
                "Tokyo",
                "33",
                "2008-11-28",
                "$162,700",
            ],
            [
                "Angelica Ramos",
                "Chief Executive Officer (CEO",
                "London",
                "47",
                "2009-10-09",
                "$1,200,000",
            ],
            [
                "Ashton Cox",
                "Junior Technical Author",
                "San Francisco",
                "66",
                "2009-01-12",
                "$86,000",
            ],
            [
                "Bradley Greer",
                "Software Engineer",
                "London",
                "41",
                "2012-10-13",
                "$132,000",
            ],
            [
                "Brenden Wagner",
                "Software Engineer",
                "San Francisco",
                "28",
                "2011-06-07",
                "$206,850",
            ],
            [
                "Brielle Williamson",
                "Integration Specialist",
                "New York",
                "61",
                "2012-12-02",
                "$372,000",
            ],
            [
                "Bruno Nash",
                "Software Engineer",
                "London",
                "38",
                "2011-05-03",
                "$163,500",
            ],
            [
                "Caesar Vance",
                "Pre-Sales Support",
                "New York",
                "21",
                "2011-12-12",
                "$106,450",
            ],
            [
                "Cara Stevens",
                "Sales Assistant",
                "New York",
                "46",
                "2011-12-06",
                "$145,600",
            ],
            [
                "Cedric Kelly",
                "Senior Javascript Developer",
                "Edinburgh",
                "22",
                "2012-03-29",
                "$433,060",
            ],
        ];
    }

    render() {
        const rows = this.data.map(function (element) {
            return React.createElement(
                TRow,
                { data: element },
                React.createElement(Tdata)
            );
            return element.map(function (childElement) {
                return React.createElement(RenderData, {data: childElement});
            });
        });
        return React.createElement(
            "tbody",
            { className: "hover:[&>tr]:bg-blue-50 even:[&>tr]:bg-slate-100 [&>tr>td]:p-2" },
            rows
        );
    }
}

class TRow extends React.Component {
    render() {
        const data = this.props.data.map((element) => {
            return React.createElement(
                Tdata,
                { data: element }
            )
        });
        return React.createElement(
            "tr",
            { data: this.props.data },
            data,
        );
    }
}


class Tdata extends React.Component {
    render() {
        return React.createElement(
            "td",
            null,
            this.props.data
        );
    }
}
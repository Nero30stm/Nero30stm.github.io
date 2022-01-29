import React, {useEffect} from "react";
import moment from "moment";
import { Component } from 'react';
import {observer} from "mobx-react";
import {action, makeObservable, observable} from "mobx";
import FieldModel from "../../../stores/form/FieldModel";
import {TTextInput} from "./Inputs";

/*
@observer
export default class Calendar extends Component<any, any> {
    weekdayshort = moment.weekdaysShort();

    state = {
        showCalendarTable: true,
        showMonthTable: false,
        dateObject: moment(this.props.day._value),
        allmonths: moment.months(),
        showYearNav: false,
        selectedDay: null
    };
    daysInMonth = () => {
        return this.state.dateObject.daysInMonth();
    };
    year = () => {
        return this.state.dateObject.format("Y");
    };
    currentDay = () => {
        return this.state.dateObject.format("D");
    };
    firstDayOfMonth = () => {
        let dateObject = this.state.dateObject;
        let firstDay = moment(dateObject)
            .startOf("month")
            .format("d"); // Day of week 0...1..5...6
        return firstDay;
    };
    month = () => {
        return this.state.dateObject.format("MMMM");
    };
    showMonth = (e, month) => {
        this.setState({
            showMonthTable: !this.state.showMonthTable,
            showCalendarTable: !this.state.showCalendarTable
        });
    };
    setMonth = month => {
        let monthNo = this.state.allmonths.indexOf(month);
        let dateObject = Object.assign({}, this.state.dateObject);
        dateObject = moment(dateObject).set("month", monthNo);
        this.setState({
            dateObject: dateObject,
            showMonthTable: !this.state.showMonthTable,
            showCalendarTable: !this.state.showCalendarTable
        });
    };
    MonthList = props => {
        let months = [];
        props.data.map(data => {
            months.push(
                <td
                    key={data}
                    className="calendar-month"
                    onClick={e => {
                        this.setMonth(data);
                    }}
                >
                    <span>{data}</span>
                </td>
            );
        });
        let rows = [];
        let cells = [];

        months.forEach((row, i) => {
            if (i % 3 !== 0 || i == 0) {
                cells.push(row);
            } else {
                rows.push(cells);
                cells = [];
                cells.push(row);
            }
        });
        rows.push(cells);
        let monthlist = rows.map((d, i) => {
            return <tr>{d}</tr>;
        });

        return (
            <table className="calendar-month">
                <thead>
                <tr>
                    <th>Select a Month</th>
                </tr>
                </thead>
                <tbody>{monthlist}</tbody>
            </table>
        );
    };
    showYearEditor = () => {
        this.setState({
            showYearNav: true,
            showCalendarTable: !this.state.showCalendarTable
        });
    };

    onPrev = () => {
        let curr = "";
        if (this.state.showMonthTable == true) {
            curr = "year";
        } else {
            curr = "month";
        }
        this.setState({
            dateObject: this.state.dateObject.subtract(1, curr)
        });
    };
    onNext = () => {
        let curr = "";
        if (this.state.showMonthTable == true) {
            curr = "year";
        } else {
            curr = "month";
        }
        this.setState({
            dateObject: this.state.dateObject.add(1, curr)
        });
    };
    setYear = year => {
        // alert(year)
        let dateObject = Object.assign({}, this.state.dateObject);
        dateObject = moment(dateObject).set("year", year);
        this.setState({
            dateObject: dateObject,
            showMonthTable: !this.state.showMonthTable,
            showYearNav: !this.state.showYearNav,
            showMonthTable: !this.state.showMonthTable
        });
    };
    onYearChange = e => {
        this.setYear(e.target.value);
    };
    getDates(startDate, stopDate) {
        var dateArray = [];
        var currentDate = moment(startDate);
        var stopDate = moment(stopDate);
        while (currentDate <= stopDate) {
            dateArray.push(moment(currentDate).format("YYYY"));
            currentDate = moment(currentDate).add(1, "year");
        }
        return dateArray;
    }
    YearTable = props => {
        let months = [];
        let nextten = moment()
            .set("year", props)
            .add("year", 12)
            .format("Y");

        let tenyear = this.getDates(props, nextten);

        tenyear.map(data => {
            months.push(
                <td
                    key={data}
                    className="calendar-month"
                    onClick={e => {
                        this.setYear(data);
                    }}
                >
                    <span>{data}</span>
                </td>
            );
        });
        let rows = [];
        let cells = [];

        months.forEach((row, i) => {
            if (i % 3 !== 0 || i == 0) {
                cells.push(row);
            } else {
                rows.push(cells);
                cells = [];
                cells.push(row);
            }
        });
        rows.push(cells);
        let yearlist = rows.map((d, i) => {
            return <tr>{d}</tr>;
        });

        return (
            <table className="calendar-month">
                <thead>
                <tr>
                    <th colSpan="4">Select a Yeah</th>
                </tr>
                </thead>
                <tbody>{yearlist}</tbody>
            </table>
        );
    };
    onDayClick = (e, d) => {
        this.setState(
            {
                selectedDay: d
            },
            () => {
                console.log("SELECTED DAY: ", this.state.selectedDay);
                this.props.day.set('10.12.1998');
            }
        );
    };
    render() {
        let weekdayshortname = this.weekdayshort.map(day => {
            return <th key={day}>{day}</th>;
        });
        let blanks = [];
        for (let i = 0; i < this.firstDayOfMonth(); i++) {
            blanks.push(<td className="calendar-day empty">{""}</td>);
        }
        let daysInMonth = [];
        for (let d = 1; d <= this.daysInMonth(); d++) {
            let currentDay = d == this.currentDay() ? "today" : "";
            // let selectedClass = (d == this.state.selectedDay ? " selected-day " : "")
            daysInMonth.push(
                <td key={d} className={`calendar-day ${currentDay}`}>
          <span
              onClick={e => {
                  this.onDayClick(e, d);
              }}
          >
            {d}
          </span>
                </td>
            );
        }
        var totalSlots = [...blanks, ...daysInMonth];
        let rows = [];
        let cells = [];

        totalSlots.forEach((row, i) => {
            if (i % 7 !== 0) {
                cells.push(row);
            } else {
                rows.push(cells);
                cells = [];
                cells.push(row);
            }
            if (i === totalSlots.length - 1) {
                // let insertRow = cells.slice();
                rows.push(cells);
            }
        });

        let daysinmonth = rows.map((d, i) => {
            return <tr>{d}</tr>;
        });

        return (
                <div className="tail-datetime-calendar">
                    <div className="calendar-navi">
                        <span
                            onClick={e => {
                                this.onPrev();
                            }}
                            className="calendar-button button-prev"
                        />
                        {!this.state.showMonthTable && !this.state.showYearEditor && (
                            <span
                                onClick={e => {
                                    this.showMonth();
                                }}
                                className="calendar-label"
                            >
                                {this.month()},
                            </span>
                        )}
                        <span
                            className="calendar-label"
                            onClick={e => {
                                this.showYearEditor();
                            }}
                        >
                            {this.year()}
                        </span>
                        <span
                            onClick={e => {
                                this.onNext();
                            }}
                            className="calendar-button button-next"
                        />
                    </div>
                    <div className="calendar-date">
                        {this.state.showYearNav && <this.YearTable props={this.year()} />}
                        {this.state.showMonthTable && (
                            <this.MonthList data={moment.months()} />
                        )}
                    </div>

                    {this.state.showCalendarTable && (
                        <div className="calendar-date">
                            <table className="calendar-day">
                                <thead>
                                    <tr>{weekdayshortname}</tr>
                                </thead>
                                <tbody>{daysinmonth}</tbody>
                            </table>
                        </div>
                    )}
                </div>
        );
    }
}*/

export class CalendarModel {
    weekdayshort = moment.weekdaysShort();

    @observable state : {
        showCalendarTable: boolean,
        showMonthTable: boolean,
        dateObject: any,
        allMonths: any,
        showYearNav: boolean,
        selectedDay: any,
        selectedMonth: any,
        selectedYear: any
    };

    constructor( field: any ) {
        makeObservable(this)

        this.state = {
            showCalendarTable: true,
            showMonthTable: false,
            dateObject: field._value || field.value || new Date(),
            allMonths: moment.months(),
            showYearNav: false,
            selectedDay: null,
            selectedMonth: '',
            selectedYear: '',
        };

        this.setDateObject(field._value || field.value || new Date())
    }

    setDateObject (value: any) {
        this.state.dateObject = moment(value);
    }

    daysInMonth = () => {
        return this.state.dateObject.daysInMonth();
    };
    year = () => {
        return this.state.dateObject.format("Y");
    };
    currentDay = () => {
        return this.state.dateObject.format("D");
    };
    firstDayOfMonth = () => {
        let dateObject = this.state.dateObject;
        let firstDay = moment(dateObject)
            .startOf("month")
            .format("d"); // Day of week 0...1..5...6
        return firstDay;
    };
    month = () => {
        return this.state.dateObject.format("MMMM");
    };

    showMonth = () => {
        console.log('show Month')
        console.log(this.state.showMonthTable)
        this.state.showMonthTable= !this.state.showMonthTable,
        this.state.showCalendarTable= !this.state.showCalendarTable

    };

    setMonth = month => {
        let monthNo = this.state.allMonths.indexOf(month);
        let dateObject = Object.assign({}, this.state.dateObject);
        dateObject = moment(dateObject).set("month", monthNo);
        this.state.selectedMonth = moment(dateObject).set("month", monthNo)
        console.log(this.state.selectedMonth)
        this.state.dateObject = dateObject;
        this.state.showMonthTable = !this.state.showMonthTable;
        this.state.showCalendarTable = !this.state.showCalendarTable
    };
    MonthList = props => {
        let months = [];
        props.data.map(data => {
            months.push(
                <td
                    key={data}
                    className="calendar-month"
                    onClick={e => {
                        this.setMonth(data);
                    }}
                >
                    <span>{data}</span>
                </td>
            );
        });
        let rows = [];
        let cells = [];

        months.forEach((row, i) => {
            if (i % 3 !== 0 || i == 0) {
                cells.push(row);
            } else {
                rows.push(cells);
                cells = [];
                cells.push(row);
            }
        });
        rows.push(cells);
        let monthlist = rows.map((d, i) => {
            return <tr>{d}</tr>;
        });

        return (
            <table className="calendar-month">
                <thead>
                <tr>
                    <th>Select a Month</th>
                </tr>
                </thead>
                <tbody>{monthlist}</tbody>
            </table>
        );
    };
    showYearEditor = () => {
        this.state.showYearNav = true;
        this.state.showCalendarTable = !this.state.showCalendarTable
    };

    onPrev = () => {
        let curr = "";
        if (this.state.showMonthTable == true) {
            curr = "year";
        } else {
            curr = "month";
        }
        this.state.dateObject= this.state.dateObject.subtract(1, curr)
    };
    onNext = () => {
        let curr = "";
        if (this.state.showMonthTable == true) {
            curr = "year";
        } else {
            curr = "month";
        }
        this.state.dateObject = this.state.dateObject.add(1, curr)
    };
    setYear = year => {

        // alert(year)
        let dateObject = Object.assign({}, this.state.dateObject);
        dateObject = moment(dateObject).set("year", year);
        this.state.dateObject = dateObject;
        this.state.showMonthTable = !this.state.showMonthTable;
        this.state.showYearNav = !this.state.showYearNav;
        this.state.showMonthTable = true
    };
    onYearChange = e => {
        this.setYear(e.target.value);
    };
    getDates(startDate, stopDate) {
        var dateArray = [];
        var currentDate = moment(startDate);
        var stopDate = moment(stopDate);
        while (currentDate >= stopDate) {
            dateArray.push(moment(currentDate).format("YYYY"));
            currentDate = moment(currentDate).subtract(1, "year");
        }
        return dateArray;
    }
    YearTable = props => {
        let months = [];

        let tenyear = this.getDates(props, '01.01.1900');

        tenyear.map(data => {
            months.push(
                <td
                    key={data}
                    className="calendar-month"
                    onClick={e => {

                        console.log(data)
                        this.setYear(data);
                    }}
                >
                    <span>{data}</span>
                </td>
            );
        });
        let rows = [];
        let cells = [];

        months.forEach((row, i) => {
            if (i % 3 !== 0 || i == 0) {
                cells.push(row);
            } else {
                rows.push(cells);
                cells = [];
                cells.push(row);
            }
        });
        rows.push(cells);
        let yearlist = rows.map((d, i) => {
            return <tr>{d}</tr>;
        });

        return (
            <table className="calendar-month">
                <thead>
                <tr>
                    <th colSpan="4">Select a Yeah</th>
                </tr>
                </thead>
                <tbody>{yearlist}</tbody>
            </table>
        );
    };

    @action
    onDayClick = (day, field) => {
        //this.setDateObject('10.01.2022')

        this.state.selectedDay = day;
            //() => {
                console.log("SELECTED DAY: ", this.state.selectedDay);
                this.setDateObject(this.state.dateObject.format("M") + "." + day + '.' + this.state.dateObject.format("Y"))
                field.set(this.state.dateObject.format("M") + "." + day + '.' + this.state.dateObject.format("Y"));
            //}
        //);
    };

}

type TProps = {
    field: FieldModel<string>;
    calendar: CalendarModel
};


export const Calendar = observer(({field, calendar}: TProps) => {
    let day = calendar.state.dateObject.format("D")
    console.log(day)

    field.set(calendar.state.dateObject.format("M") + "." + day + '.' + calendar.state.dateObject.format("Y"));
    console.log(field)

    let weekdayshortname = calendar.weekdayshort.map(day => {
        return <th key={day}>{day}</th>;
    });
    let blanks = [];
    for (let i = 0; i < calendar.firstDayOfMonth(); i++) {
        blanks.push(<td className="calendar-day empty">{""}</td>);
    }
    let daysInMonth = [];
    for (let d = 1; d <= calendar.daysInMonth(); d++) {
        let currentDay = d == calendar.currentDay() ? "today" : "";
        // let selectedClass = (d == this.state.selectedDay ? " selected-day " : "")
        daysInMonth.push(
            <td key={d} className={`calendar-day ${currentDay}`}>
      <span
          onClick={e => {
              calendar.onDayClick(d, field);
              //field.set('10.10.2009');
          }}
      >
        {d}
      </span>
            </td>
        );
    }
    var totalSlots = [...blanks, ...daysInMonth];
    let rows = [];
    let cells = [];

    totalSlots.forEach((row, i) => {
        if (i % 7 !== 0) {
            cells.push(row);
        } else {
            rows.push(cells);
            cells = [];
            cells.push(row);
        }
        if (i === totalSlots.length - 1) {
            // let insertRow = cells.slice();
            rows.push(cells);
        }
    });

    let daysinmonth = rows.map((d, i) => {
        return <tr>{d}</tr>;
    });



    return (
        <div className="tail-datetime-calendar">
            <div className="calendar-navi">
                        <span
                            onClick={e => {
                                calendar.onPrev();
                            }}
                            className="calendar-button button-prev"
                        />
                {!calendar.state.showMonthTable && !calendar.state.showYearEditor && (
                    <span
                        onClick={e => {
                            calendar.showMonth();
                        }}
                        className="calendar-label"
                    >
                                {calendar.month()},
                            </span>
                )}
                <span
                    className="calendar-label"
                    onClick={e => {
                        calendar.showYearEditor();
                    }}
                >
                            {calendar.year()}
                        </span>
                <span
                    onClick={e => {
                        calendar.onNext();
                    }}
                    className="calendar-button button-next"
                />
            </div>
                <div className="calendar-date">
                {calendar.state.showYearNav && <calendar.YearTable props={calendar.year()}/>}
                {calendar.state.showMonthTable && (
                    <calendar.MonthList data={moment.months()}/>
                )}
                </div>
            {calendar.state.showCalendarTable && (
                <div className="calendar-date">
                    <table className="calendar-day">
                        <thead>
                        <tr>{weekdayshortname}</tr>
                        </thead>
                        <tbody>{daysinmonth}</tbody>
                    </table>
                </div>
            )}
        </div>
    );
})


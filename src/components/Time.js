import React, { useState } from 'react'

function Time() {
    const [dateDiff, setDateDiff] = useState(0);
    const [timeDiff, setTimeDiff] = useState(0);
    const [addDiff, setAddDiff] = useState(0)
    const [date1, setDate1] = useState([]);
    const [date2, setDate2] = useState([]);
    const [time1, setTime1] = useState([]);
    const [time2, setTime2] = useState([]);
    const seconds = addDiff / 1000
    const minutes = seconds / 60
    const hours = minutes / 60
    const days = hours / 24
    const months = days / 30
    const years = months / 12


    function handleClick() {
        setDateDiff(date2 - date1)
        setTimeDiff(time2 - time1)
        setAddDiff(dateDiff + timeDiff)
    }

    function handleDateChange1(event) {
        const a = event.target.value
        var myArray1 = a.split("-");
        setDate1(new Date(myArray1[0], myArray1[1], myArray1[2]))
    }

    function handleDateChange2(event) {
        const b = event.target.value
        var myArray2 = b.split("-");
        setDate2(new Date(myArray2[0], myArray2[1], myArray2[2]))
    }

    function handleTimeChange1(event) {
        const a = event.target.value
        var myArray1 = a.split(":");
        setTime1(new Date(0, 0, 0, myArray1[0], myArray1[1]))
    }

    function handleTimeChange2(event) {
        const b = event.target.value
        var myArray2 = b.split(":");
        setTime2(new Date(0, 0, 0, myArray2[0], myArray2[1]))
    }

    return (
        <>
            <div className="container">
                <h3>Start Time</h3>
                <input type="date" onChange={handleDateChange1} />
                <input type="time" onChange={handleTimeChange1} />
                <p></p>
            </div>
            <div className="container">
                <h3>End Time</h3>
                <input type="date" onChange={handleDateChange2} />
                <input type="time" onChange={handleTimeChange2} />
            </div>
            <div className="container" >
                <button onClick={handleClick} >Submit</button>
                {/* <p>milliseconds : {addDiff}</p> */}
                {seconds > 1 && <p>seconds : {seconds}</p>}
                {minutes > 1 && <p>minutes : {minutes}</p>}
                {hours > 1 && <p>hours : {hours}</p>}
                {days > 1 && <p>days : {days}</p>}
                {months > 1 && <p>months : {months}</p>}
                {years > 1 && <p>years : {years}</p>}
            </div>
        </>
    )
}

export default Time
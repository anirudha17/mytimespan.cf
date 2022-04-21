import React, { useState, useEffect } from 'react'

function Time() {
    const [date1, setDate1] = useState([]);
    const [date2, setDate2] = useState([]);
    const [time1, setTime1] = useState([]);
    const [time2, setTime2] = useState([]);
    const [dateDiff, setDateDiff] = useState(0);
    const [timeDiff, setTimeDiff] = useState(0);
    const [addDiff, setAddDiff] = useState(0)
    const seconds = addDiff / 1000
    const minutes = (seconds / 60).toFixed(2)
    const hours = (minutes / 60).toFixed(2)
    const days = (hours / 24).toFixed(2)
    const months = (days / 30).toFixed(2)
    const years = (months / 12).toFixed(2)

    function handleClick() {
        setDateDiff(date2 - date1)
        setTimeDiff(time2 - time1)
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

    useEffect(() => {
        setAddDiff(dateDiff + timeDiff)
    }, [timeDiff, dateDiff])

    return (
        <>
            <div className="container">
                <div className="row text-center justify-content-center">
                    <div className="col-4">
                        <h4 className="mt-4">Start Time</h4>
                        <div className="row justify-content-center">
                            <input className="col-5 mt-4" type="date" onChange={handleDateChange1} />
                        </div>
                        <div className="row justify-content-center">
                            <input className="col-5 mt-4" type="time" onChange={handleTimeChange1} />
                        </div>
                    </div>
                    <div className="col-4">
                        <h4 className="mt-4">End Time</h4>
                        <div className="row justify-content-center">
                            <input className="col-5 mt-4" type="date" onChange={handleDateChange2} />
                        </div>
                        <div className="row justify-content-center">
                            <input className="col-5 mt-4" type="time" onChange={handleTimeChange2} />
                        </div>
                    </div>
                </div>
                <div className="row text-center justify-content-center" >
                    <div className="col-7 ">
                        <button type="button" className="btn btn-primary mt-4"
                            onClick={handleClick}>Submit</button>
                        <div className=" text-start mt-5 ms-5 ps-3">
                            <p>seconds : {seconds}</p>
                            <p>minutes : {minutes}</p>
                            <p>hours : {hours}</p>
                            <p>days : {days}</p>
                            <p>months : {months}</p>
                            <p>years : {years}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Time
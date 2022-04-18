import React, { useState } from 'react'

function Time() {
    const [diff, setDiff] = useState(0);
    const [date1, setDate1] = useState([]);
    const [date2, setDate2] = useState([]);

    function handleClick() {
        setDiff(date2 - date1)
    }

    function handleChange1(event) {
        const a = event.target.value
        var myArray1 = a.split("-");
        setDate1(new Date(myArray1[0], myArray1[1], myArray1[2]))
    }

    function handleChange2(event) {
        const b = event.target.value
        var myArray2 = b.split("-");
        setDate2(new Date(myArray2[0], myArray2[1], myArray2[2]))
    }

    return (
        <>
            <div className="container">
                <h3>Start Time</h3>
                <input type="date" onChange={handleChange1} />
                <input type="time" />
                <p></p>
            </div>
            <div className="container">
                <h3>End Time</h3>
                <input type="date" onChange={handleChange2} />
                <input type="time" />
            </div>
            <div className="container" >
                <button onClick={handleClick} >Submit</button>
                <p>difference is:{diff}</p>
            </div>
        </>
    )
}

export default Time
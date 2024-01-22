import React from 'react'

const Pro = () => {

    const clicked = () => {
        const element = document.querySelector(".title");

        if (element) {
            element.style.display = "none";
        }

    }

    const array = [1, 2, 33, 4, 5, 6, 8, 9] 

    // console.log(Math.max(...arry));

    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        const x = element > array[index]
        console.log(x)
    }


    return (
        <div>

            <h1 className='title'>hello sir</h1>
            <h2 className='title'>good morning</h2>
            <h2 className='title'>nice to meet you</h2>
            <h2>movie</h2>

            <button onClick={clicked}>Ok</button>
        </div>
    )
}

export default Pro
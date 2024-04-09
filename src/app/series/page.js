"use client"
import React, { useState, useEffect } from 'react';
import db from "@/app/sample.json"

const Series = () => {
    const [entries, setEntries] = useState([])
    useEffect(() => {
        const fetchdata = async () => {
            // let res = await fetch("http://localhost:3000/api")
            // let data = await res.json();

            const data = db.entries
            const filterSeries = data.filter(item => item.releaseYear >= 2010 && item.programType === 'series')
            const sortAscending = filterSeries.sort((a, b) => a.title.localeCompare(b.title))
            const sortNumber = sortAscending.slice(0, 21)
            console.log(sortNumber)
            setEntries(sortNumber)

        }
        fetchdata()

    }, [])
    console.log(entries)


    const handle = (e) => {
        e.target.src = "/p2.JPEG"
    }

    return (
        <div>
            <div className="bg-gray-800 text-white text-3xl font-semibold p-5 pl-20 sm:pl-24 md:pl-28 lg:pl-32 ">Popular Series</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7  justify-around gap-4 px-4 my-6 ">
                {entries.map((item, index) => (
                    <div key={index} className="flex flex-col items-center border-4 justify-between hover:shadow-2xl hover:shadow-black">
                        <div>

                        <img src={item.images["Poster Art"].url} alt={item.title} onError={handle} className="h-60 w-44  " />

                        </div>
                        <h3><b>Title:</b>{item.title}</h3>
                        <h3><b>Release:</b>{item.releaseYear}</h3>
                    </div>
                ))
                }
            </div>
        </div>
    );
};

export default Series

"use client"

import { useEffect, useState } from "react"
import Image from "next/image";

export default function BookAmbulance() {

    const [hospital, setHospital] = useState();

    useEffect(() => {
        setHospital(JSON.parse(localStorage.getItem("hospital")))
    }, [])

    const handleConfirm = () => {
        alert("Booking Confirmed!")
    }

    return (
        <div className="p-3 text-center my-3 rounded bg-gray-200 border z-10">
            <h1 className="text-xl font-bold">{hospital?.HospitalName || ""}</h1>
            <h1>{hospital?.Address}</h1>
            <div className="flex bg-white my-8 p-5 w-3/4 m-auto rounded items-center">
                <div className="w-1/2">
                    <form>
                        <input type="text" placeholder="Patient Name" className="w-1/2 block m-auto bg-gray-300 p-1 my-2 rounded outline-none" />
                        <input type="text" placeholder="Patient Address" className="w-1/2 block m-auto bg-gray-300 p-1 my-2 rounded outline-none" />
                        <input type="text" placeholder="Guardian Name" className="w-1/2 block m-auto bg-gray-300 p-1 my-2 rounded outline-none" />
                        <input type="text" placeholder="Guardian Phone No" className="w-1/2 block m-auto bg-gray-300 p-1 my-2 rounded outline-none" />
                        <button onClick={handleConfirm} className="bg-gray-400 hover:bg-gray-500 my-2 px-1 w-1/2 m-auto py-1 rounded">Confirm Booking</button>
                    </form>
                </div>
                <div className="w-1/2"><Image src="/ambulance.jpg" width={500} height={100} /><h1>Contanct us : {hospital?.Phone || "9386429389"}</h1></div>
            </div>
        </div>
    )
}
import { useState, useEffect } from "react";
import { hospitalsData } from "../hospitals";
import { FaAmbulance } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { BiTargetLock } from "react-icons/bi";


export default function Search({ coordinates, setCoordinates }) {
    const [isAddressVisible, setAddressVisibility] = useState(false);
    const [address, setAddress] = useState("");
    const [suggestion, setSuggestion] = useState([]);

    const router = useRouter();

    const [isOpen, setIsOpen] = useState(true);

    const setHospitalAddress = (x) => {
        setAddress(x);
        setSuggestion(hospitalsData.filter((y) => y["Address"].toLowerCase().includes(x.toLowerCase())));
    }

    const getLocation = async () => {
        if (navigator.geolocation) {
            await navigator.geolocation.getCurrentPosition((position) => {
                setCoordinates({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                });
                setAddressVisibility(true);
            });

        } else {
            alert("Geolocation is not supported by this browser.");
        }
    }

    const handleButton = (x)=>{
        localStorage.setItem("hospital",JSON.stringify(x));
        router.push('/bookAmbulance')
    }

    useEffect(() => {
        console.log(coordinates.latitude + "" + coordinates.longitude)
    }, [coordinates]);

    return (
        <div>
            <div className="p-3 my-3 bg-gray-200 min-h-dvh rounded-lg border">
                <h1 className="font-bold">Get Ambulance</h1>
                <button onClick={getLocation} className="rounded outline-none my-2 p-2 w-full bg-white flex gap-2 items-center justify-center" type="text" placeholder="Source Location"><BiTargetLock/>Detect Location</button>
                <div className="relative">
                    <input value={address} onChange={(e) => { setHospitalAddress(e.target.value); setIsOpen(true) }} className="rounded outline-none my-2 p-2 w-full text-center" type="text" placeholder="Hospital Location" />
                    {
                        isOpen && suggestion.length > 0 &&
                        <div className="absolute left-6 bg-white border p-2 w-96 right max-h-60 overflow-y-auto">
                            {
                                suggestion.map((x) => {
                                    return (
                                        <h1 style={{ cursor: 'pointer' }} className="p-1 border-b" key={x["Sl.No"]} onClick={() => { setAddress(x["Address"]); setIsOpen(false) }}>{x["Address"]}</h1>
                                    )
                                })
                            }
                        </div>
                    }

                </div>
                <button className="rounded my-2 p-2 w-full bg-gray-400 font-bold">Find</button>
                {
                    suggestion.find((x) => x["Address"] == address) && <div className="p-3 mt-5 bg-white border flex gap-5 items-center">
                        <div><FaAmbulance className="mx-3 text-5xl"/></div>
                        {
                            suggestion.map((x) => {
                                if (x["Address"] == address) {
                                    return (
                                        <div key={x["Sl.No"]}>
                                            <h1>{x["HospitalName"]}</h1>
                                            <p className="text-xs">{x["Address"]}</p>
                                            <button onClick={()=>handleButton(x)} className="bg-gray-400 hover:bg-gray-500 my-2 px-1 w-full py-1 rounded">Book Now</button>
                                        </div>
                                    )
                                }
                            })
                        }
                    </div>
                }
            </div>
        </div>
    )
}

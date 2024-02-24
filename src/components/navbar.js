import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Navbar() {
    return (
        <div className="px-3 py-2 rounded bg-gray-200 border z-10 flex justify-between items-center sticky top-0">
            <div><Image src='/logo.webp' width={40} height={80}/></div>
            <div><UserButton/></div>
        </div>
    )
}
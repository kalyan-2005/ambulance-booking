"use client"

import GoogleMap from "@/components/Home/google-map";
import Search from "@/components/Home/search";
import { useState } from "react";

export default function Home() {
  const [coordinates, setCoordinates] = useState({ latitude: "43.793607699999995", longitude: "-79.3284823" });
  return (
    <div className="flex gap-1 search-map-wrap">
      <div className="w-2/6">
        <Search coordinates={coordinates} setCoordinates={setCoordinates}/>
      </div>
      <div className="w-4/6">
        <GoogleMap coordinates={coordinates}/>
      </div>
    </div>
  );
}

"use client";

import Humidity from "@/components/Humidity";
import Moisture from "@/components/Moisture";
import Status from "@/components/Status";
import Temperature from "@/components/Temperature";
import { database } from "@/constants";
import { get, onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";

interface Data {
  Hum: number;
  Temp: number;
  Moisture: number;
  lastActive: number;
}

// one time fetch
const getData = async () => {
  const snapshot = await get(ref(database, "/"));
  const data = await snapshot.val();
  console.log(data);
  return Response.json({ ...data });
};

const Home = () => {
  const [data, setData] = useState({
    Hum: 0,
    Temp: 0,
    Moisture: 0,
    lastActive: 0,
  });

  useEffect(() => {
    getData()
      .then((res) => res.json())
      .then((data) => setData(data));
    onValue(ref(database, "/"), (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      setData(data);
    });
  }, []);

  return (
    <main className="min-h-screen flex flex-col justify-evenly items-center w-full">
      <Status lastRecordedTime={data.lastActive} />
      <Temperature temperature={data.Temp} />
      <Humidity humidity={data.Hum} />
      <Moisture moisture={data.Moisture} />
    </main>
  );
};

export default Home;

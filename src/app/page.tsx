"use client";

import Temperature from "@/components/Temperature";
import { database } from "@/constants";
import firebase from "firebase/compat/app";
import { get, onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";

interface Data {
  Hum: number;
  Temp: number;
  Moisture: number;
}

const getData = async () => {
  const snapshot = await get(ref(database, "/"));
  const data = await snapshot.val();
  console.log(data);
  return Response.json({ ...data });
};

const Home = () => {
  const [data, setData] = useState({ Hum: 0, Temp: 0, Moisture: 0 });

  useEffect(() => {
    getData()
      .then((res) => res.json())
      .then((data) => setData(data));
    onValue(ref(database, "/"), (snapshot) => {
      const data = snapshot.val();
      setData(data);
    });
  }, []);

  return (
    <main>
      <div>{`Hum: ${data.Hum}`}</div>
      <div>{`Temp: ${data.Temp}`}</div>
      <div>{`Moisture ${data.Moisture ? data.Moisture : 0}`}</div>
      <Temperature temperature={data.Temp} />
    </main>
  );
};

export default Home;

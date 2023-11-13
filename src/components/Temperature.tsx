import Circle from "@/icons/Circle";
import { motion } from "framer-motion";
import { CiTempHigh } from "react-icons/ci";

const HIGH = 40;
const LOW = 20;

type TemperatureProps = {
  temperature: number;
};

const Temperature = ({ temperature }: TemperatureProps) => {
  const status = temperature > 30 ? "High" : "Normal";

  return (
    <div className="flex justify-between max-w-xs h-48 bg-gradient-to-r from-orange-500 to-yellow-600 p-4 rounded-xl">
      <div className="h-full flex flex-col justify-between">
        <h2 className="text-4xl font-bold">{temperature}^C</h2>
        <p className="flex items-center gap-1 text-xs rounded-full bg-black w-fit px-2 py-1">
          <Circle size={7} color={"red"} className="animate-pulse" /> Status:{" "}
          {status}
        </p>
      </div>
      <div className=" rotate-180">
        <motion.div
          className="bg-green-400 w-2 rounded"
          animate={{
            height: `${((temperature - LOW) / (HIGH - LOW)) * 100}%`,
          }}
        />
      </div>
    </div>
  );
};

export default Temperature;

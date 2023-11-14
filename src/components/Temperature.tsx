import Circle from "@/icons/Circle";
import { motion } from "framer-motion";
import { CiTempHigh } from "react-icons/ci";

const HIGH = 40;
const LOW = 20;

type TemperatureProps = {
  temperature: number;
};

const Temperature = ({ temperature }: TemperatureProps) => {
  const status =
    temperature > 30 ? "High" : temperature > 26 ? "Normal" : "Low";

  return (
    <div className="flex justify-between w-64 h-48 bg-gradient-to-r from-orange-500 to-yellow-600 p-4 rounded-xl">
      <div className="h-full flex flex-col justify-between">
        <div>
          <h1 className="text-xs font-medium">Temperature</h1>
          <h2 className="text-4xl font-bold">{temperature}°C</h2>
        </div>
        <p className="flex items-center gap-1 text-xs rounded-full bg-black w-fit px-2 py-1">
          <Circle
            size={7}
            color={status == "High" ? "#bc4b51" : "#8cb369"}
            className="animate-pulse"
          />{" "}
          Status: {status}
        </p>
      </div>
      <div className="w-fit flex">
        <div className="flex flex-col justify-between h-full -translate-x-2 text-xs text-white/80">
          <p>{HIGH}°C</p>
          <p>{LOW}°C</p>
        </div>
        <div className="bg-black/70 rounded-full rotate-180 flex flex-col">
          <motion.div
            className="opacity-90 w-2 rounded"
            animate={{
              height: `${((temperature - LOW) / (HIGH - LOW)) * 100}%`,
              backgroundColor:
                temperature > 35
                  ? "#bc4b51"
                  : temperature > 30
                  ? "#f4e285"
                  : temperature > 26
                  ? "#8cb369"
                  : "#bc4b51",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Temperature;

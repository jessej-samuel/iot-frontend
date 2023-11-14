import Circle from "@/icons/Circle";
import { motion } from "framer-motion";
import { FC } from "react";

type HumidityProps = {
  humidity: number;
};

const Humidity: FC<HumidityProps> = ({ humidity }) => {
  const status = humidity > 60 ? "High" : humidity > 40 ? "Normal" : "Low";

  return (
    <div className="flex justify-between w-64 h-48 bg-gradient-to-r from-blue-500 to-blue-600 p-4 rounded-xl">
      <div className="h-full flex flex-col justify-between">
        <div>
          <h1 className="text-xs font-medium">Humidity</h1>
          <h2 className="text-4xl font-bold">{humidity}%</h2>
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
          <p>100%</p>
          <p>0%</p>
        </div>
        <div className="bg-black/70 rounded-full rotate-180 flex flex-col">
          <motion.div
            className="opacity-90 w-2 rounded"
            animate={{
              height: `${humidity}%`,
              backgroundColor:
                humidity > 60
                  ? "#bc4b51"
                  : humidity > 40
                  ? "#f4e285"
                  : humidity > 26
                  ? "#8cb369"
                  : "#bc4b51",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Humidity;

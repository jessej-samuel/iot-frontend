import Circle from "@/icons/Circle";
import { motion } from "framer-motion";
import { FC } from "react";

type MoistureProps = {
  moisture: number;
};

const mapToHeight = (value: number) => {
  return 50 + value * 50;
};

const Moisture: FC<MoistureProps> = ({ moisture }) => {
  const status = moisture > 0.3 ? "Wet" : moisture > -0.3 ? "Normal" : "Dry";

  return (
    <div className="flex justify-between w-64 h-48 bg-gradient-to-r from-blue-500 to-blue-600 p-4 rounded-xl">
      <div className="h-full flex flex-col justify-between">
        <div>
          <h1 className="text-xs font-medium">Moisture</h1>
          <h2 className="text-4xl font-bold">{moisture * 100}%</h2>
        </div>
        <p className="flex items-center gap-1 text-xs rounded-full bg-black w-fit px-2 py-1">
          <Circle
            size={7}
            color={status == "Wet" || status == "Dry" ? "#bc4b51" : "#8cb369"}
            className="animate-pulse"
          />{" "}
          Status: {status}
        </p>
      </div>
      <div className="w-fit flex">
        <div className="flex flex-col justify-between items-end h-full -translate-x-2 text-xs text-white/80">
          <p>100%</p>
          <p>0%</p>
          <p>-100%</p>
        </div>
        <div className="bg-black/70 rounded-full rotate-180 flex flex-col">
          <motion.div
            className="opacity-90 w-2 rounded"
            animate={{
              height: `${mapToHeight(moisture)}%`,
              backgroundColor:
                status == "Wet" || status == "Dry" ? "#bc4b51" : "#8cb369",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Moisture;

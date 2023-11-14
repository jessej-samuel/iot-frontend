import Circle from "@/icons/Circle";
import { Dispatch, FC, SetStateAction, useEffect, useState } from "react";

type StatusProps = {
  lastRecordedTime: number;
};
const allowedDelay = 15000; // 15 seconds

const Status: FC<StatusProps> = ({ lastRecordedTime }) => {
  const [active, setActive] = useState(false);

  const checkStatus = (
    lastRecordedTime: number,
    setActive: Dispatch<SetStateAction<boolean>>
  ) => {
    const now = Date.now();
    const difference = now - lastRecordedTime * 1000;
    if (difference < allowedDelay) setActive(true);
    else setActive(false);
  };

  useEffect(() => {
    checkStatus(lastRecordedTime, setActive);
    const interval = setInterval(
      () => checkStatus(lastRecordedTime, setActive),
      1000
    );
    return () => clearInterval(interval);
  }, [lastRecordedTime, active]);

  if (active) {
    return (
      <div className="flex gap-2 items-center bg-neutral-800 text-green-500 text-sm rounded-full px-3 py-1">
        <Circle size={7} color="#8cb369" className="animate-pulse" />
        Systems offline
      </div>
    );
  }

  return (
    <div className="flex gap-2 items-center bg-neutral-800 text-red-500 text-sm rounded-full px-3 py-1">
      <Circle size={7} color="#bc4b51" className="animate-pulse" />
      Systems offline
    </div>
  );
};

export default Status;

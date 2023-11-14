import { FC, useEffect, useState } from "react";

type StatusProps = {
  lastRecordedTime: number;
};
const allowedDelay = 15; // 15 seconds
const checkStatus = ({
  lastRecordedTime,
  setActive,
}: {
  lastRecordedTime: number;
  setActive: Function;
}) => {
  const now = Math.round(Date.now() / 1000);
  const difference = now - lastRecordedTime;
  if (difference < allowedDelay) {
    setActive(true);
  } else {
    setActive(false);
  }
};

const Status: FC<StatusProps> = ({ lastRecordedTime }) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    checkStatus({ lastRecordedTime, setActive });
    const interval = setInterval(() => {
      checkStatus({ lastRecordedTime, setActive });
    }, 1000);
    return () => clearInterval(interval);
  }, [lastRecordedTime]);

  return <div>Systems {active ? "online" : "offline"}</div>;
};

export default Status;

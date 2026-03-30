import { useEffect, useState } from "react";

export default function useClock() {
  const format = () =>
    new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      minute: "2-digit",
    }).format(new Date());

  const [time, setTime] = useState(format);

  useEffect(() => {
    const timer = window.setInterval(() => setTime(format()), 30000);
    return () => window.clearInterval(timer);
  }, []);

  return time;
}

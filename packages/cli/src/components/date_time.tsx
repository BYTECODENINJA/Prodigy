import { useState, useEffect } from "react";

const DAYS = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

const MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

export function formatDateTime(date: Date): string {
    const day = DAYS[date.getDay()];
    const dayOfMonth = date.getDate();
    const month = MONTHS[date.getMonth()];
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${day} ${dayOfMonth} ${month} ${hours}:${minutes}`;
}

export function DateTime() {
    const [dateTimeStr, setDateTimeStr] = useState(() => formatDateTime(new Date()));

    useEffect(() => {
        const interval = setInterval(() => {
            setDateTimeStr(formatDateTime(new Date()));
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <box width="100%" alignItems="center" justifyContent="center">
            <text fg="gray">{dateTimeStr}</text>
        </box>
    );
}

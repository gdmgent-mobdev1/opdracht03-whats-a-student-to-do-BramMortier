// ------------------------------------------- //
// module imports
import { Timestamp } from "firebase/firestore";
// ------------------------------------------- //

export const timestampToHoursMinutes = (timestamp: Timestamp): string => {
    let date: Date = timestamp.toDate();

    let hours: string = date.getHours().toString().padStart(2, "0");
    let minutes: string = date.getMinutes().toString().padStart(2, "0");

    let timeString: string = `${hours}h ${minutes}m`;

    return timeString;
};

export const timestampToDate = (timestamp: Timestamp): string => {
    let date: Date = timestamp.toDate();

    let day: string = date.getDate().toString().padStart(2, "0");
    let month: string = (date.getMonth() + 1).toString().padStart(2, "0");

    let dateString: string = `${day}/${month}`;

    return dateString;
};

export const dayMonthYearToTimestamp = (day: number, month: number, year: number): Timestamp => {
    const date = new Date(year, month - 1, day);
    return Timestamp.fromDate(date);
};

export const timestampToDayMonthYear = (timestamp: Timestamp): string[] => {
    let date: Date = timestamp.toDate();

    let day: string = date.getDate().toString().padStart(2, "0");
    let month: string = (date.getMonth() + 1).toString().padStart(2, "0");
    let year: string = date.getFullYear().toString();

    return [day, month, year];
};

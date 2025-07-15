import { Timestamp } from "firebase/firestore";
import { format } from "date-fns";

export function formatDateLong(timestamp: Timestamp) {  
    const date = timestamp.toDate();
    return format(date, "MMMM dd yyyy");
}
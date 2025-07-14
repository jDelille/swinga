import { Timestamp } from "firebase/firestore";
import { format } from "date-fns";

export function formatDateShort(timestamp: Timestamp) {  
    const date = timestamp.toDate();
    return format(date, "MMM d");
}
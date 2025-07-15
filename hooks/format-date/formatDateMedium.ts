import { Timestamp } from "firebase/firestore";
import { format } from "date-fns";

export function formatDateMedium(timestamp: Timestamp) {  
    const date = timestamp.toDate();
    return format(date, "MMMM yyyy");
}
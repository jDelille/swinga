export type Post = {
    badgeId: string;
    date: string;
    details: {
        badgeType: string;
        message: string;
        itemName: string;
    };
    type: string;
    sessionId: string;
}
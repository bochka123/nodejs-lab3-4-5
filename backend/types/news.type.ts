export interface INews {
    title: string;
    content: string;
    category: 'politics' | 'sports' | 'celebrities' | 'travel';
    createdBy: string;
    createdAt: Date;
    updatedAt: Date;
}
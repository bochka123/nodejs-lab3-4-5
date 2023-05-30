export interface INews {
    id: number;
    title: string;
    content: string;
    category: 'politics' | 'sports' | 'celebrities' | 'travel';
    createdBy: string;
    createdAt: Date;
    updatedAt: Date;
}
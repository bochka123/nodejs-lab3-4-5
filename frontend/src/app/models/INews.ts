export interface INews {
  _id?: string,
  title: string | null,
  content: string | null,
  createdBy: string | null,
  updatedAt?: string | null,
  category: string | null | undefined
}

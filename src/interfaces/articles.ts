export default interface Article {
  id: number;
  attributes: {
    title: string;
    body: string;
    pubDate: Date;
    slug: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    image: string;
    data: string;
    medium: string;
    url: string;
  };
}

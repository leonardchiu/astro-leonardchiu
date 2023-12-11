// export default interface Article {
//   id: number;
//   attributes: {
//     title: string;
//     body: string;
//     pubDate: Date;
//     slug: string;
//     createdAt: string;
//     updatedAt: string;
//     publishedAt: string;
//     image: string;
//     data: string;
//     medium: string;
//     url: string;
//   };
// }

export default interface Article {
  id: string;
  title: string;
  status: string; // Or an enumeration if you have predefined status values
  images: string[]; // Array of image URLs
  content: string;
  slug: string;
  date: string; // ISO date string or Date object
  data: string;
  results: Article[];
}

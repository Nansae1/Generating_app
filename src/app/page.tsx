import prisma from "@/lib/prisma";
import { HomePage } from "./_components/HomePage";

export default async function Home() {
  // const posts = await prisma.post.findMany({
  //   include: {
  //     author: true,
  //   },
  // });

  return <HomePage />;
}

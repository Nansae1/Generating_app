"use client";
import { Button } from "@/components/ui/button";
import { BookOpen, FileText, Sidebar, Sparkles } from "lucide-react";
import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";

type Post = {
  id: number;
  title: string;
  content: string;
  published: boolean;
  authorId: number;
  author: {
    id: number;
    name: string;
    email: string;
  };
};

// type HomePageProps = {
//   posts: Post[];
// };

export const HomePage = () => {
  const [open, setOpen] = useState(false);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [generatedArticle, setGeneratedArticle] = useState<any>(null);

  const handleGenerateSummary = async () => {
    const res = await fetch("/api/article", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        content,
      }),
    });

    const data = await res.json();
    setGeneratedArticle(data);
  };

  return (
    <div className="h-screen w-screen flex bg-[#F5F5F5]">
      {/* {posts.map((post) => (
        <div>
          <p>{post.title}</p>
          <p>{post.author.name}</p>
        </div>
      ))} */}
      <div
        className={`h-screen bg-white border-r transition-all duration-300 ${
          open ? "w-70" : "w-20"
        }`}
      >
        <div className="flex items-center justify-between p-4">
          {open && <p className="font-semibold">History</p>}

          <Button
            className="bg-white text-black"
            onClick={() => setOpen(!open)}
          >
            <Sidebar className="h-6 w-6" />
          </Button>
        </div>

        {open && (
          <div className="flex flex-col gap-2 px-4">
            <p>Genghis Khan</p>
            <p>Figma ашиглах заавар</p>
            <p>Санхүүгийн шийдвэрүүд</p>
            <p>Figma-д загвар зохион бүтээх аргачлалууд</p>
            <p>Санхүүгийн технологи 2023</p>
            <p>Хэрэглэгчийн интерфейс дизайны шилдэг туршлага</p>
            <p>Архитектур загварчлалын хөтөлбөрүүд</p>
            <p>Эрүүл амьдралын хэв маяг</p>
            <p>Технологийн салбарт хийгдэж буй инноваци</p>
          </div>
        )}
      </div>
      <div className="h-full w-full flex justify-center mt-15">
        <div
          className={`bg-white border h-110 rounded-lg flex flex-col p-5 gap-3 ${
            open ? "w-180" : "w-210"
          }`}
        >
          <div className="flex gap-1">
            <Sparkles />
            <p>Article Quiz Generator</p>
          </div>
          {!generatedArticle ? (
            <>
              <p>
                Paste your article below to generate a summarize and quiz
                question. Your articles will saved in the sidebar for future
                reference
              </p>

              <div className="flex">
                <FileText />
                <p>Article Title</p>
              </div>

              <Textarea
                placeholder="Enter a title for your article..."
                onChange={(e) => setTitle(e.target.value)}
              />

              <div className="flex">
                <FileText />
                <p>Article Content</p>
              </div>

              <Textarea
                placeholder="Paste your article content here..."
                className="h-35"
                onChange={(e) => setContent(e.target.value)}
              />

              <div className="flex justify-end">
                <Button onClick={handleGenerateSummary}>
                  Generate summary
                </Button>
              </div>
            </>
          ) : (
            <>
              <h2 className="text-[14px] text-[#737373] font-semibold flex gap-1">
                <BookOpen /> Summarized Content
              </h2>

              <p className="font-bold text-lg">{generatedArticle.title}</p>

              <p>{generatedArticle.summary}</p>

              <div className="flex gap-3 mt-4 justify-between">
                <Button>See Content</Button>
                <Button>Take a Quiz</Button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

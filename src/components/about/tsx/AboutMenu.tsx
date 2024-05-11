import React, { useState, useEffect } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import rehypeRaw from "rehype-raw";
import "./about.css";
import {
  AboutContentData,
  dir,
  type AboutData,
} from "src/content/about/AboutData.ts";
const data: AboutData[] = AboutContentData;

const AboutMenu = () => {
  const [active, setActive] = useState<number>(0);
  const [markdown, setMarkdown] = useState<string>("");
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const loadMarkdown = async () => {
      const filePath = `/about/${data[active].selector}.${data[active].format}`; // Adjust path as necessary
      try {
        const response = await fetch(filePath);
        if (!response.ok) {
          throw new Error("Failed to fetch markdown file");
        }
        const text = await response.text();
        setMarkdown(text);
        setError(""); // Reset error state on successful load
      } catch (error) {
        console.error("Failed to load markdown file", error);
        setError("Failed to load content. Please try again later."); // Set error message
        setMarkdown(""); // Reset markdown content
      }
    };

    if (data[active].format === "md") {
      loadMarkdown();
    }
  }, [active]); // Fetch markdown content when `active` changes

  return (
    <>
      {/* MENU */}
      <div className="flex flex-inline gap-2 h-fit mt-8">
        <ul className="w-32">
          {data.map((d, idx) => (
            <li
              key={idx}
              id={`menu-${idx}`}
              onClick={() => setActive(idx)}
              className={`about__menu__item ${
                active === idx ? "menu-active" : ""
              } text-gray-600`}
            >
              {d.name}
            </li>
          ))}
        </ul>
        <div className="border-r border-black"></div>
      </div>

      {/* CONTENT */}
      <div className="about__content content-active w-auto">
        {error ? (
          <p className="error-message">{error}</p>
        ) : (
          <Markdown
            children={markdown}
            remarkPlugins={[remarkGfm, remarkBreaks]}
            rehypePlugins={[rehypeRaw]}
            className="about__content__markdown rmd"
            components={{
              br: ({ node, ...props }) => <br />,
              h1: "h2",
              h2: "h3",
              h3: "h4",
              h4: "h5",
              h5: "h6",
            }}
          />
        )}
      </div>
    </>
  );
};

export default AboutMenu;

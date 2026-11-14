import { Github, Linkedin, Instagram, Facebook, Twitter, Youtube, Code2, Terminal, BookOpen } from "lucide-react";
import { socials } from "../data/portfolio";

const meta = {
  linkedin: ["LinkedIn", Linkedin], github: ["GitHub", Github], instagram: ["Instagram", Instagram], facebook: ["Facebook", Facebook],
  twitter: ["X (Twitter)", Twitter], youtube: ["YouTube", Youtube], leetcode: ["LeetCode", Code2],
  hackerrank: ["HackerRank", Terminal], geeksforgeeks: ["GeeksforGeeks", BookOpen],
};

export default function Socials() {
  const items = Object.entries(socials).filter(([, url]) => url);
  if (!items.length) return null;
  return (
    <ul className="flex flex-wrap gap-3">
      {items.map(([key, url]) => {
        const [label, Icon] = meta[key] || [key, Code2];
        return <li key={key}><a href={url} target="_blank" rel="noopener noreferrer" aria-label={label} title={label} className="glass flex h-11 w-11 items-center justify-center rounded-full transition duration-300 hover:-translate-y-1 hover:border-accent hover:text-accent"><Icon size={18} /></a></li>;
      })}
    </ul>
  );
}

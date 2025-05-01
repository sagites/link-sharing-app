import { useState } from "react";

const platforms = [
  { name: "GitHub", icon: "/Assets/images/icon-github.svg" },
  { name: "Twitter", icon: "/Assets/images/icon-twitter.svg" },
  { name: "LinkedIn", icon: "/Assets/images/icon-linkedin.svg" },
  { name: "Facebook", icon: "/Assets/images/icon-facebook.svg" },
  { name: "YouTube", icon: "/Assets/images/icon-youtube.svg" },
  { name: "Twitch", icon: "/Assets/images/icon-twitch.svg" },
  { name: "Frontend Mentor", icon: "/Assets/images/icon-frontend-mentor.svg" },
  { name: "Dev.to", icon: "/Assets/images/icon-devto.svg" },
  { name: "Codewars", icon: "/Assets/images/icon-codewars.svg" },
  { name: "Codepen", icon: "/Assets/images/icon-codepen.svg" },
  { name: "Stack Overflow", icon: "/Assets/images/icon-stack-overflow.svg" },
  { name: "freeCodeCamp", icon: "/Assets/images/icon-freecodecamp.svg" },
  { name: "GitLab", icon: "/Assets/images/icon-gitlab.svg" },
  { name: "Hashnode", icon: "/Assets/images/icon-hashnode.svg" },
];

export default function CustomSelect({ value, onChange }) {
  const [open, setOpen] = useState(false);

  const handleSelect = (platform) => {
    onChange(platform.name);
    setOpen(false);
  };

  const selected = platforms.find((p) => p.name === value);

  return (
    <div className="relative w-full">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between border border-gray-300 rounded px-4 py-2 shadow-sm bg-white"
      >
        <div className="flex items-center gap-2">
          {selected?.icon}
          <span>{selected?.name || "Select a platform"}</span>
        </div>
        <span>▼</span>
      </button>

      {open && (
        <div className="absolute z-10 mt-1 text-grey w-full px-3 bg-white  border-grey rounded shadow-lg max-h-60 overflow-y-scroll scrollbar-hide">
          {platforms.map((platform) => (
            <div
              key={platform.name}
              onClick={() => handleSelect(platform)}
              className="flex items-center gap-2 px-4 py-2 border-grey border-b hover:bg-gray-100 cursor-pointer"
            >
              <img src={platform.icon} alt="" />
              <span>{platform.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

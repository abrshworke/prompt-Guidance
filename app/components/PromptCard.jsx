"use client";

import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

const PromptCard = ({ post, handleTagClick }) => {
  return (

    <div className="flex flex-col py-10 px-10 bg-white p-5 rounded-lg shadow-md border border-gray-100 transition-transform duration-300 hover:shadow-lg hover:scale-[1.02] w-full cursor-pointer">

      <div className="flex flex-col gap-4">
        <p className="text-lg font-medium text-gray-800">{post.prompt}</p>
        
        <div className="flex justify-start items-center text-sm text-gray-600">
          <p
            className="cursor-pointer text-blue-600 hover:text-blue-800 font-bold transition-colors duration-300 "
            onClick={() => handleTagClick && handleTagClick(post.tag)}
          >
            #{post.tag}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PromptCard;

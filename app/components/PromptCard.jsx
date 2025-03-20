// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import { useSession } from "next-auth/react";
// import { usePathname } from "next/navigation";

// const PromptCard = ({ post, handleTagClick }) => {
//   return (
//     <div className="flex flex-col bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6 rounded-xl shadow-lg hover:scale-105 transform transition-all duration-300 ease-in-out w-full max-w-md cursor-pointer">
//       {/* Prompt Content */}
//       <div className="flex flex-col gap-4">
//         <p className="text-lg font-semibold text-white">{post.prompt}</p>

//         {/* Tag Section */}
//         <div className="flex justify-start items-center text-sm text-white">
//           <p
//             className="cursor-pointer text-pink-200 hover:text-yellow-400 transition-colors duration-300"
//             onClick={() => handleTagClick && handleTagClick(post.tag)}
//           >
//             #{post.tag}
//           </p>
//         </div>
//       </div>

//       {/* Hover effect: Optional image or other content */}
      
//     </div>
//   );
// };

// export default PromptCard;



"use client";

import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

const PromptCard = ({ post, handleTagClick }) => {
  return (
    <div className="flex flex-col bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6 rounded-xl shadow-lg hover:scale-105 transform transition-all duration-300 ease-in-out w-full max-w-md cursor-pointer hover:shadow-2xl">
      {/* Prompt Content */}
      <div className="flex flex-col gap-4">
        <p className="text-lg font-semibold text-white">{post.prompt}</p>

        {/* Tag Section */}
        <div className="flex justify-start items-center text-sm text-white">
          <p
            className="cursor-pointer text-pink-200 hover:text-yellow-400 transition-colors duration-300 font-medium"
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

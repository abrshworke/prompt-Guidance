// import Link from "next/link";

// const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
//   return (
//     <section className="w-full max-w-full flex flex-col items-center bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 p-8 rounded-3xl shadow-lg">
//       <h1 className="text-3xl font-semibold text-white mb-4">
//         <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 text-transparent bg-clip-text">
//           {type} Post
//         </span>
//       </h1>
//       <p className="text-center text-white mb-6 max-w-lg">
//         {type} and share amazing prompts with the world, and let your imagination run wild with any AI-powered platform.
//       </p>

//       <form
//         onSubmit={handleSubmit}
//         className="w-full max-w-2xl flex flex-col gap-6 p-6 bg-white bg-opacity-70 backdrop-blur-lg rounded-xl shadow-lg"
//       >
//         {/* Prompt Textarea */}
//         <label>
//           <span className="font-semibold text-base text-gray-800">Your AI Prompt</span>
//           <textarea
//             value={post.prompt}
//             onChange={(e) => setPost({ ...post, prompt: e.target.value })}
//             placeholder="Write your post here"
//             required
//             className="w-full p-4 mt-2 text-lg border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600 transition duration-300"
//           />
//         </label>

//         {/* Tag Input */}
//         <label>
//           <span className="font-semibold text-base text-gray-800">
//             Field of Prompt{" "}
//             <span className="font-normal text-gray-500">(e.g., #product, #webdevelopment, #idea)</span>
//           </span>
//           <input
//             value={post.tag}
//             onChange={(e) => setPost({ ...post, tag: e.target.value })}
//             type="text"
//             placeholder="#Tag"
//             required
//             className="w-full p-4 mt-2 text-lg border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600 transition duration-300"
//           />
//         </label>

//         {/* Submit and Cancel Button */}
//         <div className="flex justify-between items-center mt-6">
//           <Link href="/" className="text-sm text-gray-500 hover:text-gray-700 transition duration-200">
//             Cancel
//           </Link>

//           <button
//             type="submit"
//             disabled={submitting}
//             className="px-6 py-2 cursor-pointer text-sm font-semibold bg-gradient-to-r from-orange-400 to-yellow-500 rounded-full text-white hover:scale-105 transition-all duration-300 ease-in-out"
//           >
//             {submitting ? `${type}ing...` : type}
//           </button>
//         </div>
//       </form>
//     </section>
//   );
// };

// export default Form;



import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className="w-full max-w-full flex flex-col items-center bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 p-8 rounded-3xl shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
      <h1 className="text-3xl font-semibold text-white mb-4">
        <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 text-transparent bg-clip-text">
          {type} Post
        </span>
      </h1>
      <p className="text-center text-white mb-6 max-w-lg">
        {type} and share amazing prompts with the world, and let your imagination run wild with any AI-powered platform.
      </p>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl flex flex-col gap-6 p-6 bg-white bg-opacity-70 backdrop-blur-lg rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
      >
        {/* Prompt Textarea */}
        <label>
          <span className="font-semibold text-base text-gray-800">Your AI Prompt</span>
          <textarea
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder="Write your post here"
            required
            className="w-full p-4 mt-2 text-lg border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600 transition duration-300 hover:border-purple-500"
          />
        </label>

        {/* Tag Input */}
        <label>
          <span className="font-semibold text-base text-gray-800">
            Field of Prompt{" "}
            <span className="font-normal text-gray-500">(e.g., #product, #webdevelopment, #idea)</span>
          </span>
          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            type="text"
            placeholder="#Tag"
            required
            className="w-full p-4 mt-2 text-lg border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600 transition duration-300 hover:border-purple-500"
          />
        </label>

        {/* Submit and Cancel Button */}
        <div className="flex justify-between items-center mt-6">
          <Link href="/" className="text-sm text-gray-500 hover:text-gray-700 transition duration-200">
            Cancel
          </Link>

          <button
            type="submit"
            disabled={submitting}
            className="px-6 py-2 cursor-pointer text-sm font-semibold bg-gradient-to-r from-orange-400 to-yellow-500 rounded-full text-white hover:scale-105 transition-all duration-300 ease-in-out hover:bg-yellow-600"
          >
            {submitting ? `${type}ing...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;

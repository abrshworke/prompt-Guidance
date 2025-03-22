
import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className="w-full mt-15 max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md border border-gray-200 transition-transform duration-300 hover:shadow-lg hover:scale-[1.02]">
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-4">
        {type} Post
      </h1>
      <p className="text-center text-gray-600 mb-6">
        {type} and share amazing prompts with the world. Let your imagination run wild!
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Prompt Textarea */}
        <label className="block">
          <span className="text-lg font-medium text-gray-700">Your AI Prompt</span>
          <textarea
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder="Write your post here"
            required
            className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300"
          />
        </label>

        <label className="block">
          <span className="text-lg font-medium text-gray-700">Field of Prompt</span>
          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            type="text"
            placeholder="#Tag"
            required
            className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-300"
          />
        </label>

        <div className="flex justify-between items-center mt-6">
          <Link href="/" className="text-sm text-gray-500 hover:text-gray-700 transition duration-200">
            Cancel
          </Link>

          <button
            type="submit"
            disabled={submitting}
            className="px-6 py-2 text-white cursor-pointer bg-blue-600 rounded-md font-semibold hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
          >
            {submitting ? `${type}ing...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;

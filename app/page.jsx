import Feed from "./components/feed";
import Footer from "./components/footer";
import Nav from "./components/nav";

export default function Home() {
  console.log("hello next js is this you or not ");

  return (
    <>

      <Nav />

      <section className="w-full mt-14 flex flex-col items-center text-center py-24 bg-gradient-to-b from-blue-100 to-white">
        <h1 className="text-5xl font-extrabold leading-tight text-gray-900">
          Discover & Share
          <br className="hidden md:block" />
          <span className="text-blue-600"> AI-Powered Prompts</span>
        </h1>

        <p className="mt-4 text-gray-600 max-w-2xl text-lg">
          Explore a world of creative AI prompts. Share and discover the best ideas powered by AI!
        </p>
      </section>

      <div className="mt-10 px-6">
        <Feed />
      </div>
      <Footer/>
    </>
  );
}

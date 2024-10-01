import { IoIosContact } from "react-icons/io";


export default function Header() {
  return (
    <div>
      <header className="bg-white ">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Recipe Calories</h1>
          <nav className="space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-800">
              Home
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              Recipes
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              About
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              Search
            </a>
          </nav>
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="border rounded-full py-2 px-4 lg:pl-10 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
          </div>
          <i className="bg-green-600 rounded-full text-2xl p-1"><IoIosContact /></i>
        </div>
      </header>
      <section className="text-white py-20 bg-no-repeat bg-cover rounded-3xl mt-4" style={{backgroundImage:"url(https://t3.ftcdn.net/jpg/02/48/92/96/360_F_248929619_JkVBYroM1rSrshWJemrcjriggudHMUhV.jpg)"}}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Discover an exceptional cooking class tailored for you!
          </h2>
          <p className="mb-8">
            Learn and Master Basic Programming, Data Structures, Algorithm, OOP,
            Database and solve 500+ coding problems to become an exceptionally
            well world-class Programmer.
          </p>
          <div className="space-x-4">
            <button className="bg-green-500 text-white py-2 px-6 rounded-full hover:bg-green-600">
              Explore Now
            </button>
            <button className="bg-transparent border border-white text-white py-2 px-6 rounded-full hover:bg-white hover:text-gray-800">
              Our Feedback
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

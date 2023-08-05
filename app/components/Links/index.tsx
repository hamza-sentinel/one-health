import Link from 'next/link'
import {
    FaUsers,
    FaBook,
    FaDesktop,
    FaLightbulb,
    FaFilePdf,
    FaFile,
    FaNewspaper,
    FaCalendar,
    FaInfoCircle,
    FaPuzzlePiece,
    FaUserFriends
} from 'react-icons/fa'

const Links = () => {
    const links = [
      {
        title: "International Collaborators",
        link: "/international-collaborators",
        icon: <FaUsers className="text-4xl text-gray-700" />,
      },
      {
        title: "National Collaborators",
        link: "/national-collaborators",
        icon: <FaUserFriends className="text-4xl text-gray-700" />,
      },
      {
        title: "Thematics",
        link: "/thematics",
        icon: <FaBook className="text-4xl text-gray-700" />,
      },
      {
        title: "Projects",
        link: "/projects",
        icon: <FaDesktop className="text-4xl text-gray-700" />,
      },
      {
        title: "Research",
        link: "/research",
        icon: <FaLightbulb className="text-4xl text-gray-700" />,
      },
      {
        title: "Extension article",
        link: "/extension-article",
        icon: <FaFile className="text-4xl text-gray-700" />,
      },
      {
        title: "Publications",
        link: "/publications",
        icon: <FaFilePdf className="text-4xl text-gray-700" />,
      },
      {
        title: "Latest News",
        link: "/latest-news",
        icon: <FaNewspaper className="text-4xl text-gray-700" />,
      },
      {
        title: "Forth Coming",
        link: "/forth-coming",
        icon: <FaCalendar className="text-4xl text-gray-700" />,
      },
      {
        title: "Information",
        link: "/information",
        icon: <FaInfoCircle className="text-4xl text-gray-700" />,
      },
    ];
  return (
    <section className="container" id="links">
      <h2 className="text-5xl mb-4 mt-2">Links</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {links.map((link, index) => (
          <article
            key={index}
            className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden p-4"
          >
            <div className="flex items-center flex-grow gap-4 mb-4 sm:flex-col sm:items-start">
              {link.icon}
              <h4 className="text-xl text-gray-800">{link.title}</h4>
            </div>
            <Link
              href={link.link}
              className="text-gray-800 rounded w-fit bg-primary px-4 py-2 active:bg-primaryDark hover:bg-primaryLight"
            >
              See here
            </Link>
          </article>
        ))}
      </div>
      <hr className="h-1 rounded-lg my-6 bg-gray-300 border-0 mx-20" />
    </section>
  );
}

export default Links
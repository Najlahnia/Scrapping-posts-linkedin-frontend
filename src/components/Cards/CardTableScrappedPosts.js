
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { startScraping } from "../../redux/scraperSlice";

export default function CardTableScrappedPosts({ color }) {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.scraper); 

  const handleShowPosts = () => {
    dispatch(startScraping()); 
  };

  // Render based on scraping status
  const renderContent = () => {
    if (status === "loading") {
      return <p>Loading...</p>;
    }
    if (status === "failed") {
      return <p>Error: {error}</p>;
    }
    if (status === "succeeded" && data) {
      return (
        <table className="items-center w-full bg-transparent border-collapse">
          <thead>
            <tr>
              <th
                className={
                  "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                  (color === "light"
                    ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                    : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                }
              >
                Auteur
              </th>
              <th
                className={
                  "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                  (color === "light"
                    ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                    : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                }
              >
                Date
              </th>
              <th
                className={
                  "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                  (color === "light"
                    ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                    : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                }
              >
                Texte
              </th>
              <th
                className={
                  "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                  (color === "light"
                    ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                    : "bg-lightBlue-800 text-lightBlue-300 border-lightBlue-700")
                }
              ></th>
            </tr>
          </thead>
          <tbody>
            {data.map((post, index) => (
              <tr key={index}>
                <td className="px-6 py-4 text-sm">{post.author}</td>
                <td className="px-6 py-4 text-sm">{post.date}</td>
                <td className="px-6 py-4 text-sm">{post.text}</td>
                <td className="px-6 py-4 text-sm">
                  <button className="text-indigo-500">Voir</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    }
    return null;
  };

  return (
    <div
      className={
        "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
        (color === "light" ? "bg-white" : "bg-lightBlue-900 text-white")
      }
    >
      <div className="rounded-t mb-0 px-4 py-3 border-0">
        <div className="flex flex-wrap items-center">
          <div className="relative w-full px-4 max-w-full flex-grow flex-1">
            <h3
              className={
                "font-semibold text-lg " +
                (color === "light" ? "text-blueGray-700" : "text-white")
              }
            >
              Listes des opportunités
            </h3>
            <button
              onClick={handleShowPosts}
              className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
            >
              Afficher les postes
            </button>
          </div>
        </div>
      </div>
      <div className="block w-full overflow-x-auto">
        {/* Render the content */}
        {renderContent()}
      </div>
    </div>
  );
}

CardTableScrappedPosts.defaultProps = {
  color: "light",
};

CardTableScrappedPosts.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};

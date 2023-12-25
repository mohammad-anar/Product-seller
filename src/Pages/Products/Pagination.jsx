import PropTypes from "prop-types";
import useAuth from "../../hooks/useAuth";
const Pagination = ({ count, itemsPerPage, pageNumber, setPageNumber }) => {
  const {loading} = useAuth();
 
  const page = Math.ceil(count /itemsPerPage);
  const pageArray = new Array(page);
  const totalPage = [...pageArray.keys()]
  return (
    <div className="flex flex-col md:flex-row items-center gap-4 flex-wrap">
      <button onClick={() => {
        if(pageNumber > 0){
          setPageNumber(pageNumber - 1)
        }
      }}
        className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-full select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
          className="w-4 h-4"
        >
          <path d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"></path>
        </svg>
        Previous
      </button>
      {!loading && <div className="flex items-center gap-2">
        {
          totalPage.map(item => <button key={item} onClick={() => setPageNumber(item)}
          className={`relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase   ${pageNumber === item  ? "bg-red-600 text-white" : "text-gray-900"} transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none`}
          type="button"
        >
          <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            {item + 1}
          </span>
        </button>)
        }
      </div>}
      <button
      onClick={() => {
        if(pageNumber < totalPage.length - 1){
          setPageNumber(pageNumber + 1 )
        }
      }}
        className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-full select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        type="button"
      >
        Next
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
          className="w-4 h-4"
        >
          <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
        </svg>
      </button>
    </div>
  );
};
Pagination.propTypes = {
  count: PropTypes.number,
  itemsPerPage: PropTypes.number,
  pageNumber: PropTypes.number,
  setPageNumber: PropTypes.func,
};
export default Pagination;

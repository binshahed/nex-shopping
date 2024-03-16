import Filter from "@/features/filter";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const FilterPage = () => {
  return (
    <div className="container py-10">
      <div className="pb-10">
        <Link to="/">Home</Link>{" "}
        <FontAwesomeIcon className="px-2" icon={faChevronRight} />{" "}
        <Link to="/filter">Filter</Link>
      </div>
      <Filter />
    </div>
  );
};

export default FilterPage;

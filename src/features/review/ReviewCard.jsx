import Rating from "../../components/productCard/Rating";

const ReviewCard = () => {
  return (
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mr-10">
      <Rating ratings="4" />
      <a href="#">
        <h5 className="mb-2 text-2xl font-semibold tracking-tight text-primary">
          Need a help in Claim?
        </h5>
      </a>
      <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
        Go to this step by step guideline process on how to certify for your
        weekly benefits:
      </p>
    </div>
  );
};

export default ReviewCard;

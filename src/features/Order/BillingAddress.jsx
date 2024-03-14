const BillingAddress = () => {
  return (
    <form className="w-full my-8">
      <div className="flex flex-wrap -mx-3 mb-8">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            First Name
          </label>
          <input
            name="first_name"
            required
            className="input-field"
            type="text"
            placeholder="Jane"
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Last Name
          </label>
          <input
            name="last_name"
            required
            className="input-field"
            type="text"
            placeholder="Doe"
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-8">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Email
          </label>
          <input
            name="email"
            required
            className="input-field"
            type="text"
            placeholder="mail@example.com"
          />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Mobile No
          </label>
          <input
            name="mobile_no"
            required
            className="input-field"
            type="text"
            placeholder="01 xxxxx xxxx"
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Address
          </label>
          <input
            name="address"
            required
            className="input-field"
            type="text"
            placeholder="Enter Address"
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-2">
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            City
          </label>
          <input
            name="city"
            className="input-field"
            type="text"
            placeholder="Albuquerque"
          />
        </div>

        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Zip
          </label>
          <input
            name="zip"
            required
            className="input-field"
            type="text"
            placeholder="90210"
          />
        </div>
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Country
          </label>
          <input
            name="country"
            defaultValue="Bangladesh"
            required
            className="input-field"
            type="text"
            placeholder="Country"
          />
        </div>
      </div>
      <div className="md:flex md:items-end mt-8">
        <div className="md:w-full text-end">
          <button
            className="shadow bg-purple hover:bg-purple focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Save Detail
          </button>
        </div>
      </div>
    </form>
  );
};

export default BillingAddress;

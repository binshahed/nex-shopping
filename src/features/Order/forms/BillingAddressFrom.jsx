/* eslint-disable react/prop-types */
import {
  useCreateProfileMutation,
  useGetProfileQuery,
} from "@/store/features/profile/profileApi";
import Spinner from "@/components/global/Spinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useState } from "react";

const BillingAddress = ({ setNext }) => {
  const userData = useSelector((state) => state.auth);
  const { data, isLoading } = useGetProfileQuery();
  const [update, setUpdate] = useState(false);
  const [
    createProfile,
    { isLoading: isLoadingCreateProfile, data: createProfileData },
  ] = useCreateProfileMutation();
  const { register, handleSubmit } = useForm();

  const { name, email } = userData.user;
  const onSubmit = async (data) => {
    if (update) {
      createProfile(data);
    } else {
      setNext(true);
    }
  };

  if (createProfileData) {
    setNext(true);
  }

  return (
    <>
      {isLoading && !name && !email ? (
        <Spinner />
      ) : (
        <form className="w-full my-8" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-wrap -mx-3 mb-8">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Name
              </label>
              <input
                disabled
                defaultValue={name}
                name="name"
                required
                className="input-field"
                type="text"
                placeholder="Jane"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-8">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Email
              </label>
              <input
                disabled
                defaultValue={email}
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
                {...register("phone")}
                onChange={() => setUpdate(true)}
                defaultValue={data?.phone}
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
                {...register("address1")}
                onChange={() => setUpdate(true)}
                defaultValue={data?.address1}
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
                onChange={() => setUpdate(true)}
                {...register("city")}
                defaultValue={data?.city}
                name="city"
                className="input-field"
                type="text"
                placeholder="Albuquerque"
              />
            </div>

            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Post Code
              </label>
              <input
                onChange={() => setUpdate(true)}
                {...register("postCode")}
                defaultValue={data?.postCode}
                name="postCode"
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
                onChange={() => setUpdate(true)}
                {...register("country")}
                name="country"
                defaultValue={data?.country}
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
                disabled={isLoadingCreateProfile}
                className="shadow bg-purple-500 hover:bg-purple-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="submit"
                // onClick={() => setNext(true)}
              >
                Save Detail And Next <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          </div>
        </form>
      )}
    </>
  );
};

export default BillingAddress;

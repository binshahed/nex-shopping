import {
  useCreateProfileMutation,
  useGetProfileQuery,
} from "@/store/features/profile/profileApi";
import { Spinner } from "flowbite-react";
import {  useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";

const Profile = () => {
  const userData = useSelector((state) => state.auth);
  const { data, isLoading } = useGetProfileQuery();
  const [isUpdate, setIsUpdate] = useState(true);
  const [createProfile] = useCreateProfileMutation();
  const { register, handleSubmit } = useForm();

  const { name, email } = userData.user;

  const onSubmit = async (data) => {
    createProfile(data);
  };

  return (
    <div>
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
                disabled={isUpdate}
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
                disabled={isUpdate}
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
                disabled={isUpdate}
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
                disabled={isUpdate}
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
                disabled={isUpdate}
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
              {isUpdate ? (
                <button
                  className="shadow bg-purple-500 hover:bg-purple-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                  onClick={() => setIsUpdate(!isUpdate)}
                >
                  Edit Profile
                </button>
              ) : (
                <button
                  className="shadow bg-purple-500 hover:bg-purple-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                  type="submit"
                  onClick={() => setIsUpdate(!isUpdate)}
                >
                  Save
                </button>
              )}
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default Profile;

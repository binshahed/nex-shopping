import { apiSlice } from "../api/apiSlice";
import { userLoggedIn } from "./authSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (data) => ({
        url: "/user/signup",
        method: "POST",
        body: JSON.stringify(data),
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          console.log("result", result);

          // Check the actual structure of the response and adjust accordingly
          const { token, user } = result.data;

          localStorage.setItem("auth", JSON.stringify({ token, user }));
          dispatch(userLoggedIn({ token, user }));
        } catch (err) {
          // Log or handle the error
          console.error("Error during signup:", err);
          // You might also dispatch an action to handle the error state
        }
      },
    }),

    signIn: builder.mutation({
      query: (data) => ({
        url: "/user/signin",
        method: "POST",
        body: JSON.stringify(data),
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          localStorage.setItem("auth", JSON.stringify(result.data.token));
          dispatch(
            userLoggedIn({ token: result.data.token, user: result.data.user })
          );
        } catch (err) {
          console.log("e", err);
        }
      },
    }),
  }),
});

export const { useSignInMutation, useSignUpMutation } = authApi;

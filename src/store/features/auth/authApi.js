import { apiSlice } from "../api/apiSlice";
import { userLoggedIn } from "./authSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (data) => ({
        url: "/user/signup",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }),
      invalidatesTags: ["profile"],
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;

          const { token, user } = result.data;

          localStorage.setItem("auth", JSON.stringify({ token, user }));
          dispatch(userLoggedIn({ token, user }));
        } catch (err) {
          console.error("Error during signup:", err);
        }
      },
    }),

    signIn: builder.mutation({
      query: (data) => ({
        url: "/user/signin",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }),
      invalidatesTags: ["profile"],
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          const auth = {
            token: result.data.token,
            user: result.data.user,
          };
          localStorage.setItem("auth", JSON.stringify(auth));
          dispatch(userLoggedIn(auth));
        } catch (err) {
          console.log("e", err);
        }
      },
    }),
  }),
});

export const { useSignInMutation, useSignUpMutation } = authApi;

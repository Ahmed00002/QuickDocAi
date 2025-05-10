import { useAuth } from "@clerk/clerk-react";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router";

const useAxiosSecure = () => {
  const { signOut } = useAuth();
  const navigate = useNavigate();

  const axiosSecure = axios.create({
    baseURL: "http://localhost:3000", // Replace with your API base URL
  });

  useEffect(() => {
    // Request interceptor
    axiosSecure.interceptors.request.use(
      async (config) => {
        const token = localStorage.getItem("accessToken");
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    // Response interceptor
    axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error.response && error.response.status === 401) {
          await signOut();
          navigate("/login");
        }
        return Promise.reject(error);
      }
    );
  }, [signOut, navigate, axiosSecure]);

  return axiosSecure;
};

export default useAxiosSecure;

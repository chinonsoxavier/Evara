import { defineStore } from "pinia";
import { ILoginCredentials, IUser } from "../../helper/interface/interface";
import axios from "axios";
import { baseUrl } from "../../helper/network/base_url";

export const useAuthStore = defineStore("authStore", {
  state: () => ({
    user:  {} as IUser,
    authStatus: "Logged Out",
  }),
  actions: {
    async login({ email, password }: ILoginCredentials) {
      this.authStatus = "loading";
      try {
          const res = await axios.get(baseUrl+"auth/login", {
          params: {
            email: email,
            password: password,
          },
          withCredentials:true
        });
        console.log(res.data);
        await this.LoadUser();
        this.authStatus = "Logged In";
      } catch (error) {
        console.log(error?.response?.data);
      }
    },
    async LoadUser() {
    try {
      const newuser = await axios.get(baseUrl + "auth/load-user",{withCredentials:true});
      // this.user = newuser.data;
      // if (newuser.data.status == 404) { 
      //   this.authStatus = "Logged Out";
      //   console.log("User not found, logging out.");
      //   return;
      // }
      console.log(newuser.data);
      this.user = newuser.data.data;
      const status = newuser.data.status;

      this.authStatus = status == 404 ? "Logged Out":"Logged In";
      // return newuser.data;
    } catch (error) {
      // console.log(error?.response?.data);
      // if (error?.response?.status === 404) {
        this.authStatus = "Logged Out";
      //   console.log("User not found, logging out.");
      // } else {
      //   console.log(error?.response?.data || error.message);
      // }
    }
                // console.log(this.user);

    },
    async logout() { 
      try {
        const res = await axios.get(baseUrl + "auth/logout",{withCredentials:true});
        console.log(res.data);
        this.authStatus = "Logged Out";
        this.user = {};
        console.log(this.authStatus);
      } catch (error) {
        console.log(error?.response?.data);
      }
    },
     getUser() {
      return this.user;
    }
    // async LoginSuccess(){
    //   try{
    //  const res = await axios.get(baseUrl + "auth/login/success");
    //     console.log(res);
      
    //   }catch(error){
    //     console.log(error?.response?.data);
    //   }
    // }
  },
});

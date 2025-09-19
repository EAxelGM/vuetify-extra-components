import { defineStore } from 'pinia';
//import persist from 'pinia-plugin-persistedstate'

export const useStore = defineStore('main', () => {
  const user = ref(null);
  const alertData = ref({});

  //Actions;
  const setUser = (data: any) => {
    //console.log({data})
    user.value = data;
  };

  const setAlertData = ({
    message = 'Success',
    timpout = 2000,
    color = 'green',
    variant="",
    rounded="pill",
    showButtonClose=true,
    buttonCloseColor="white",
    buttonCloseIcon="mdi-close",
    buttonCloseText="",

  }) => {
    alertData.value = {
      message: message,
      timpout: timpout,
      color: color,
      showButtonClose,
      buttonCloseColor,
      buttonCloseIcon,
      buttonCloseText,
      variant,
      rounded,
      id: Date.now()
    };
  };


  return {
    user,
    setUser,

    alertData,
    setAlertData,
  };
},
/* {
  persist:true,
} */
);
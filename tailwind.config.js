/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        zentry: ["zentry", "sanf-sarif"],
        general: ["general", "sanf-sarif"],
        "circular-web": ["circular-web", "sanf-sarif"],
        "robert-medium": ["robert-medium", "sanf-sarif"],
        "robert-regular": ["robert-regular", "sanf-sarif"],
      },  
      colors : {
        blue : {
          50 : '#DFDFF0',
          75 : '#DFDFF2',
          100 : '#F0F2FA',
          200 : '#010101',
          300 : '#4FB7DD',
        },
        violet : {
          300 : '#5724FF',
        } ,
        yellow : {
          100 : '#8E983F',
          300 : '#EDFF66'
        }
      }
    },
  },
  plugins: [],
};

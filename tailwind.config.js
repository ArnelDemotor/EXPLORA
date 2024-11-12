/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./app.{js,jsx,ts,tsx}", "./<custom directory>/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      fontFamily:{
        rblack: ["Roboto-Black","sans-serif"],
        rregular:["Roboto-Black","sans-serif"],
      }

    },
  },
    plugins: ["nativewind/babel"],
}


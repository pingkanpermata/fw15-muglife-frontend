/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
          'login-pattern': "url('../../public/auth-side.jpg')",
          'forgot-pattern': "url('../../public/forgot.jpg')",
          'history_bg': "url('../../public/bg-2.png')",
      },
      fontFamily: {
        'label-food': ['Poppins', 'sans-serif'],

    }
    },
  },
  daisyui:{
    themes:[
      {
        defaultTheme:{
                    'primary':'#1A120B',
                    'secondary':'#3C2A21',
                    'accent':'#D5CEA3',
                    'neutral':'#E5E5CB',
                    'info':'#EAEAEA',
                    'success':'#EAEAEA',
                    'error':'#EAEAEA',
                    'snow': '#EAEAEA'
        }
      }
    ]
  },
  plugins: [
    require('daisyui'),
    require('tailwind-scrollbar-hide')
  ],
}

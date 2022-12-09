/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      gridTemplateColumns:{
        'CustomizedGrid' : '23% 55% 23%' , 
      } , 
      colors : {
        navBar_Bg : '#1F2021' , 
        sections_Bg : '#1A1A1E' ,
        side_bg : '#212121' ,  
        Folder_Bg : '#86898A' , 
        File_Bg : '#BCC0C2' ,
        File_Bg_Hover : '#EEF0FF' , 
        Font_Color : '#6B6B6B' , 
      } ,
      boxShadow: {
        specified : '0px 4px 30px rgba(0, 0, 0, 0.08)'
      } , 
      borderRadius:{
        specified : '7px' , 
        fileRadius : '19px' , 
      } , 
      fontFamily : {
        Pop : 'Poppins'
      }
    },
  },
  plugins: [],
}

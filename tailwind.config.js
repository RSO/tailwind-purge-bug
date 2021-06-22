module.exports = {
  mode: "jit",
  purge: [
    // "./app/views/**/*.{html.erb,svg}",
    // "./app/packs/**/*.{js,css,scss}",
    // "./app/helpers/**/*.rb",
    "./public/*.html",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {}
  },
  plugins: [],
};

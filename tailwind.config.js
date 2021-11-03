module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      "gray-imdb": "#1F1F1F",
      "blue-imdb": "#388CEF",
      "red-imdb": "#FB4B4B",
      "gray-light-imdb": "#313131",
      "yellow-imdb": "#F5C518",
    }),
    fontFamily: {
      search: ['"Font Awesome 5 Free"'],
      roboto: ["Roboto"],
    },
    extend: {
      backgroundImage: {
        "icon-search": "url('/public/assets/search.png')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

/**
 * @type {import('eslint').Linter.Config}
 */
module.exports = {
  extends: "next/core-web-vitals",
  rules: {
    semi: [2, "always"],
    'react/display-name': [0],
    'next/document': [0], // bug with _document.tsx instead of _document.js https://github.com/vercel/next.js/issues/28596
  },
};
module.exports = {
  linters: {
    "*.ts": ["tslint"], //["jest --findRelatedTests"] Use later when test suite is added
    "*.+(js|jsx|json|yml|yaml|css|less|scss|ts|tsx|md|graphql|mdx)": [
      "prettier --write",
      "git add",
    ],
  },
};

module.exports = function(eleventyConfig) {
  eleventyConfig.addTemplateFormats("svelte")
	eleventyConfig.addTemplateFormats("clowd");
	eleventyConfig.addExtension("clowd", {
    compile: async (inputContent) => {
      // Replace any instances of cloud with butt
      let output = inputContent.replace(/cloud/gi, "butt");

      return async () => {
        return output;
      };
    }
  });

  // Return your Object options:
  return {
    dir: {
      input: "markdown/",
      output: "dist/app"
    }
  }
};

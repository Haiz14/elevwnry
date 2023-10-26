/** @param {import("@11ty/eleventy").UserConfig eleventyConfig*/
module.exports = function(eleventyConfig) {
  // Markdown to svelte
  // Return your Object options:
  //

  eleventyConfig.addTransform("change outputs folder", async function(content){
    console.log("Input path" + this.inputPath);
    this.outputPath = this.inputPath.split(".")[0] 
    console.log(this.outputPath)

    return content 
  });
	eleventyConfig.addExtension("md", {
    outputFileExtension: "svelte",
    compile: async (inputContent) => {
      // Replace any instances of cloud with butt

      let output = inputContent.replace(/cloud/gi, "butt");

      return async () => {
        return output;
      };
    },
    compileOptions: {
      permalink:function() {
        return "+page.svelte"
      }
    }
  });
  return {
    dir: {
      input: "markdown/",
      output: "src/routes"
    }
  }
};

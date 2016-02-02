ImportPathHelpers.init(Plugin);

Plugin.registerCompiler({
	extensions: ["js"]
}, function () {
	return new JsCompiler();
});


Plugin.registerMinifier({
	extensions: ["css"]
}, function () {
	return new CssModulesBuildPlugin(Plugin);

});

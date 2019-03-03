global.importTest = function (name, path) {
    describe(name, function () {
        require(resolvePath(path));
    });
};
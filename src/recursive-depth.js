module.exports = class DepthCalculator {
    calculateDepth(value) {
        let maxdepth = 1
        value.forEach(element => {
            if (Array.isArray(element)) {
                let depth = 1
                depth += this.calculateDepth(element)
                maxdepth = depth > maxdepth ? depth : maxdepth
            }
        });
        return maxdepth
    }
};
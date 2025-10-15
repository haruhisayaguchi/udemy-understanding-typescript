function calculateInvestment(data) {
    var initialAmount = data.initialAmount, annualContribution = data.annualContribution, expectedReturn = data.expectedReturn, duration = data.duration;
    if (initialAmount < 0) {
        return "Initial investment amount must be at least zero.";
    }
    if (duration <= 0) {
        return 'No valid amount of years provided.';
    }
    if (expectedReturn < 0) {
        return 'Expected return must be at least zero.';
    }
    var totalAmount = initialAmount;
    var totalContributions = 0;
    var totalInterestEarned = 0;
    var annualResults = [];
    for (var i = 0; i < duration; i++) {
        totalAmount *= (1 + expectedReturn);
        totalInterestEarned = totalAmount - totalContributions - initialAmount;
        totalContributions = totalContributions + annualContribution;
        totalAmount += annualContribution;
        annualResults.push({
            year: "Year ".concat(i + 1),
            totalAmount: totalAmount,
            totalInterestEarned: totalInterestEarned,
            totalContributions: totalContributions
        });
    }
    return annualResults;
}
function printResults(results) {
    if (typeof results === 'string') {
        console.log(results);
        return;
    }
    for (var _i = 0, results_1 = results; _i < results_1.length; _i++) {
        var result = results_1[_i];
        console.log(result.year);
        console.log("Total: ".concat(result.totalAmount.toFixed(2)));
        console.log("TotalContributions: ".concat(result.totalContributions.toFixed(2)));
        console.log("TotalInterestsEarned: ".concat(result.totalInterestEarned.toFixed(2)));
        console.log('--------------------');
    }
}
var results = calculateInvestment({
    initialAmount: 1000,
    annualContribution: 100,
    expectedReturn: 0.25,
    duration: 20
});
printResults(results);

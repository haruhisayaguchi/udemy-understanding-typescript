// data:
// initial amount
// annual contribution
// expected return
// duration
type Data = {
	initialAmount: number;
	annualContribution: number;
	expectedReturn: number;
	duration: number;
}

type Result = {
	year: string;
	totalAmount: number;
	totalContributions: number;
	totalInterestEarned: number;
}

function calculateInvestment(data: Data): Result[] | string {
	const { initialAmount, annualContribution, expectedReturn, duration } = data;
	if (initialAmount < 0) {
		return "Initial investment amount must be at least zero.";
	}

	if (duration <= 0) {
		return 'No valid amount of years provided.'
	}

	if (expectedReturn < 0) {
		return 'Expected return must be at least zero.'
	}

	let totalAmount = initialAmount;
	let totalContributions = 0;
	let totalInterestEarned = 0;
	const annualResults: Result[] = [];

	for (let i = 0; i < duration; i++) {
		totalAmount *= (1 + expectedReturn);
		totalInterestEarned = totalAmount - totalContributions - initialAmount;
		totalContributions = totalContributions + annualContribution;
		totalAmount += annualContribution;
		annualResults.push({
			year: `Year ${i + 1}`,
			totalAmount,
			totalInterestEarned,
			totalContributions
		})
	}

	return annualResults;
}

function printResults(results: Result[] | string) {
	if (typeof results === 'string') {
		console.log(results);
		return
	}
	for (const result of results) {
		console.log(result.year);
		console.log(`Total: ${result.totalAmount.toFixed(2)}`)
		console.log(`TotalContributions: ${result.totalContributions.toFixed(2)}`)
		console.log(`TotalInterestsEarned: ${result.totalInterestEarned.toFixed(2)}`)
		console.log('--------------------')
	}
}

const results = calculateInvestment({
	initialAmount: 1000,
	annualContribution: 100,
	expectedReturn: 0.25,
	duration: 20
})

printResults(results)
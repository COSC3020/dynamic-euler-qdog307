

function e(n) {
    let fact = 1; // Initialize the factorial(0) = 1 first 
    let result = 1.0; // we want to start with first term of the series (1/0! = 1)

    for (let i = 1; i <= n; i++) {
        fact *= i; // This computes the factorial incrementally
        result += 1.0 / fact; // Here the current term  is added to the result
    }

    return result;
}
 //I do not need the factroial function as because it is redundant. 

/**
 * TODO: Exercise 1: use `fetch` & async/await to get data from an API
 */
export async function asyncGetQuotes() {
    console.log('1. before async fetch');

    const res = await fetch('https://futuramaapi.herokuapp.com/api/quotes/1');

    console.log('2. async fetch complete');

    const result = await res.json();

    console.log('3. after async fetch');

    return { quote: result[0], totalResults: result.length };
}

/**
 * TODO: Exercise 2: use `fetch` & `.then` syntax to get the same data from the first exercise.
 */
export function thenGetQuotes() {
    console.log('1. before .then fetch');

    const result = fetch('https://futuramaapi.herokuapp.com/api/quotes/1')
        .then((res) => res.json())
        .then((result) => ({ quote: result[0], totalResults: result.length }))
        .then(() => console.log('2. .then fetch complete'));

    console.log('3. after .then fetch');

    return result;
}

/**
 * TODO: Exercise 3: use `fetch`, async/await, and a try/catch statement to get data from an API and handle errors
 */
export async function asyncTryGetQuotes() {
    try {
        console.log('1. before async fetch');

        const res = await fetch('https://futuramaapi.herokuapp.com/api/quotes/1');
        console.log('2. async fetch complete');
        
        const result = await res.json();
        console.log('3. after async fetch');

        return { quote: result[0], totalResults: result.length };
    } catch (error) {
        console.error('uh oh! an error occurred!');
    }
}

/**
 * TODO: Exercise 4: use `fetch`, `.then`, and `.catch` to get the same data from exercise 3 while handling errors
 */


/**
 * TODO: Exercise 5: use `fetch`, async/await, and a try/catch/finally statement to get data from an API, handle errors, then console.log('All done!') upon completion
 */

/**
 * TODO: Exercise 6: use `fetch`, `.then`, `.catch`. and `.finally` to get the same data from exercise 5 while handling errors and calling console.log('All done!') upon completion
 */

/**
 * TODO: Exercise 7: Call your function from exercise 7 using .then
 */

/**
 * TODO: Exercise 8: Call your function from exercise 6 using async/await
 */


// Promise.all — resolves when ALL resolve, rejects on FIRST rejection
Promise.all([
    fetch('/api/user'),
    fetch('/api/posts'),
    fetch('/api/comments'),
])
    .then(([user, posts, comments]) => console.log(user, posts, comments))
    .catch(err => console.log('One failed:', err));


// Promise.any — resolves with FIRST resolved, rejects only if ALL reject
Promise.any([
    fetch('https://cdn1.example.com/data'),
    fetch('https://cdn2.example.com/data'),
    fetch('https://cdn3.example.com/data'),
])
    .then(data => console.log('Fastest CDN responded:', data))
    .catch(err => console.log('All CDNs failed:', err)); // AggregateError


// Promise.race — settles with FIRST to settle (resolve OR reject)
const timeout = new Promise((_, reject) =>
    setTimeout(() => reject(new Error('Timeout')), 3000)
);

Promise.race([fetch('/api/data'), timeout])
    .then(data => console.log('Got data in time:', data))
    .catch(err => console.log('Timed out or failed:', err));


// Promise.allSettled — waits for ALL to settle, NEVER rejects
Promise.allSettled([
    fetch('/api/user'),
    fetch('/api/posts'),
    Promise.reject(new Error('something broke')),
]).then(results => {
    results.forEach(result => {
        if (result.status === 'fulfilled') {
            console.log('Success:', result.value);
        } else {
            console.log('Failed:', result.reason);
        }
    });
});
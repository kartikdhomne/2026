// Throttling

// Throttling is an optimization technique that ensures a function runs
// at MOST once in a given time interval — even if triggered repeatedly.

// Unlike debouncing (which waits until user stops), throttling guarantees execution,
// but *limits the frequency*.

// ➡️ Real Life Example

// Imagine a security guard at a stadium: people may rush continuously,
// but the guard allows only one person to enter every 5 seconds — no matter how many people are waiting.

// Throttling works the same way: even if events keep firing (scrolling, resizing, etc.),
// the function runs at controlled intervals.


// 🟣 Where it's used in frontend?

// 1) Scroll event → Infinite scroll, analytics on scroll progress
// 2) Window resize → Avoid recalculating layout too frequently
// 3) Drag and Drop movement → Prevent too many paint/DOM updates
// 4) Mouse move or touch move events → Keeps UI smooth

function throttle(func, delay) {
    let lastCall = 0;

    return function () {
        const now = new Date().getTime();

        if (now - lastCall >= delay) {
            lastCall = now;
            func();
        }
    };
}

const handleScroll = throttle(() => {
    console.log("scroll event");
}, 1000);

window.addEventListener("scroll", handleScroll);


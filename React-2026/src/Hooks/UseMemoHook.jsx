// useMemo is a React hook that memoizes (caches) the result of a computation so it doesn’t get recalculated on every render unless dependencies change.

// example 
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
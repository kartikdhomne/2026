// A Higher-Order Component (HOC) in React is a function that takes a component and returns a new component with enhanced behavior.

// Think of it like a wrapper that adds extra features to an existing component without modifying its original code.

// 🔹 Why use HOCs?

// HOCs are mainly used for:

// Reusing logic across components

// Adding cross-cutting concerns like:
// Authentication
// Logging
// Data fetching
// Permissions

// 🔹 Key Points

// HOCs do not modify the original component
// They are pure functions
// They help with code reuse
// Naming convention: withSomething (e.g., withAuth, withData)

// 🔹 HOC vs Hooks (Modern React)

// HOCs were popular before React Hooks
// Today, Hooks are preferred for most cases
// But HOCs are still used in:
// Legacy codebases
// Libraries like Redux (connect)

import React from "react";

const withUser = (WrappedComponent, role) => {
  return function HOC(props) {
    const user = role;

    return <WrappedComponent {...props} user={user} />;
  };
};

export default withUser;
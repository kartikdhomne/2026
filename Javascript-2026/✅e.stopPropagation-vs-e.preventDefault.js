// StopPropagation vs PreventDefault:-

// 🔴🟢🔴
// "preventDefault() stops the browser's default behavior (like form submission or link navigation), while stopPropagation() stops the event from bubbling to parent elements.
// One controls behavior, the other controls event flow."

// 🔴🟢🔴 
// | Feature                      | preventDefault | stopPropagation |
// | ---------------------------- | ---------------|---------------- |
// | Stops default browser action | ✅ Yes        | ❌ No           |
// | Stops event bubbling         | ❌ No         | ✅ Yes          |
// | Example usage                | Prevent form  |Avoid triggering  |
//                                |submit, disable| parent click event|
//                                |link navigation|                 |
// ------------------------------------------------------------------

// PreventDefault :-
// 💡 Stops the default browser behavior, but does NOT stop event bubbling / propagation.

// 🟢 Actions:-

// | Action                    | Default Behavior |
// | ------------------------- | ------------------------- |
// | Clicking an`<a href="">`  | Navigates to another page |
// | Submitting a form         | Page reload |
// | Right - click             | Opens context menu |
// | Checkbox click            | Toggles check |

// 🟢 Examples

{/* <form id="myForm">
  <button type="submit">Submit</button>
</form>

<script>
document.getElementById("myForm").addEventListener("submit", function(e) {
    e.preventDefault();
    console.log("Form submitted... but without page reload!");
});
</script> */}

// 🧠 The form normally reloads the page → preventDefault() stops that.

// ----------------------------------------------------------------------


// StopPropagation :-
// 💡 Stops the event from bubbling up(or trickling down in capturing phase) to parent elements.

// The event still happens — just doesn't continue up the DOM.

// Examples :-

{/* <div id="parent" style="padding:20px; background:lightblue">
  Parent
  <button id="child">Child Button</button>
</div>

<script>
document.getElementById("parent").addEventListener("click", () => {
  console.log("Parent clicked");
});

document.getElementById("child").addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("Child clicked");
});
</script> */}

// Normal click :- Child clicked ---> Parent clicked
// With StopPropagation :- Child clicked




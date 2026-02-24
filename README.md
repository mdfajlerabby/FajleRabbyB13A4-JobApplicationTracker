## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

JavaScript provides several methods to select elements from the DOM, and each method has its own purpose and behavior.

The getElementById() method is used to select a single element based on its unique id. Since an id is always unique in an HTML document, this method returns only one element. It is fast and commonly used when we know the exact id of an element.

The getElementsByClassName() method is used to select all elements that share the same class name. It returns a live HTMLCollection, which means the collection automatically updates if elements are added or removed from the DOM.

The querySelector() method selects the first element that matches a specified CSS selector. It is very flexible because it allows selecting elements using id, class, tag name, or more complex CSS selectors.

The querySelectorAll() method selects all elements that match a specified CSS selector. It returns a static NodeList, which means it does not automatically update when the DOM changes.

In summary, getElementById() selects one element by id, getElementsByClassName() selects multiple elements by class name, querySelector() selects the first matching element using a CSS selector, and querySelectorAll() selects all matching elements using a CSS selector.

### 2. How do you create and insert a new element into the DOM?

To create and insert a new element into the DOM, JavaScript provides methods such as createElement() and appendChild().

First, a new element is created using the createElement() method. After creating the element, we can add content, attributes, or styles to it. Finally, the element is inserted into the DOM using appendChild() or append().

This process allows developers to dynamically add new content to a webpage without refreshing the page. It is an important feature for creating interactive and dynamic web applications.

### 3. What is Event Bubbling? And how does it work?

Event bubbling is a mechanism in JavaScript where an event starts from the target element and then propagates upward through its parent elements.

For example, if a button is inside a div and the div is inside the body, clicking the button will first trigger the event on the button, then on the div, and finally on the body.

This happens because the event moves from the child element to its parent elements. Event bubbling is useful because it allows parent elements to respond to events triggered by their child elements.

### 4. What is Event Delegation in JavaScript? Why is it useful?

Event delegation is a technique where a single event listener is added to a parent element instead of adding separate event listeners to multiple child elements.

When an event occurs on a child element, it bubbles up to the parent element, and the parent handles the event.

Event delegation is useful because it improves performance, reduces memory usage, and makes the code easier to manage. It is especially helpful when elements are created dynamically, as the parent element can handle events for both existing and newly added elements.

### 5. What is the difference between preventDefault() and stopPropagation() methods?

The preventDefault() method is used to prevent the default behavior of an element. For example, it can stop a form from submitting or prevent a link from opening.

The stopPropagation() method is used to stop the event from propagating to parent elements. This means the event will only be handled by the current element and not by its parent elements.

In simple terms, preventDefault() stops the default browser action, while stopPropagation() stops the event from bubbling up through the DOM.

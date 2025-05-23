### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
  The purpose of React Router is to enable navigation between different components or pages in a React application without reloading the whole page.

- What is a single page application?
  A type of web application yhat loads a single HTML page and dynamically updates the content as the user interacts with the app.

- What are some differences between client side and server side routing?
  Client-side is handles in the browser using JavaScript, it does not require full page reloads, and it's faster after the initial load. Whereas, server-side is handled by the server, route changes reload the entire page, and it's slower than client-side.

- What are two ways of handling redirects with React Router? When would you use each?
  Using the <Navigate/> component, used when you want to render a redirect as part of your component's output.
  Using useNavigate() Hook, used when you want to imperitively redirect.

- What are two different ways to handle page-not-found user experiences using React Router?
  Catch-all route (\* path), used as a way to handle unknown routes in a single-page application.
  Nested Route Catch-all, used when you want to handle "not found" within a specific section of your app.

- How do you grab URL parameters from within a component using React Router?
  You grab URL parameters from within a component using React Router, you use the useParams() hook.

- What is context in React? When would you use it?
  In React, context is a way to share data between components without having to pass props manually at every level of the component tree. You would use it when you have global or shared state.

- Describe some differences between class-based components and function components in React.
  Class-based components use ES6 class syntax, use this.state and this.setState(), and cannot use hooks.
  Function components use plain JavaScript functions, use the useState() hook, and can use hooks.

- What are some of the problems that hooks were designed to solve?
  Hooks solved problems like, reusing logic (without HOCs), lifecycle method complexity, and helped developers with the confusing this keyword.

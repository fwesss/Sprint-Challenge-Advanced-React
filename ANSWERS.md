- [x] Why would you use class component over function components (removing hooks from the question)?

    Without considering hooks, class components are used to manage state. Without hooks
    , functional components can maintain their own state.

- [x] Name three lifecycle methods and their purposes.

    * componentDidMount: allows us to hook into the component right when it mounts. We can tell it
     what to do as soon as it's mounted.
     
     * componentDidUpdate: similar to useEffect. Allows us to take action when state or props
      update.
     
     * componentWillUnmount: similar to a return in useEffect. We can cleanup anything outstanding
      in our component like a network request.

- [x] What is the purpose of a custom hook?

    We can use a custom hook to abstract away non-visual logic. We can make it so we have a
     reusable function that we can use in any component. It makes code bases more maintainable
      and easier to understand.

- [x] Why is it important to test our apps?

    It's not probable that we'll be able to manually test each part of our app every time we
     change something. Testing also makes sure there is no regression. Old bugs cannot resurface
      if we add a test after patching.

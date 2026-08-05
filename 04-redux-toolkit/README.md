# 04 - Redux Toolkit

This project covers Redux Toolkit from the basics to practical state management in React applications. It includes Redux setup, slices, actions, reducers, global state management, and API integration using RTK Query.

## Topics Covered

### 1. Redux Toolkit Setup
 
- Installed Redux Toolkit and React Redux
- Created the Redux store using `configureStore`
- Connected the store to the application using `Provider`
- Set up the initial Redux project structure

### 2. Redux Slice

- Connected the counter slice to the Redux store
- Accessed state using `useSelector`
- Updated state using `useDispatch`
- Built a working Redux counter with increment, decrement and reset

### 3. Multiple Slices 

- Created separate slices for user and theme
- Added multiple reducers to the Redux store
- Accessed and updated data from different slices
- Learned how Redux manages multiple features independently
- Added some basic styling to the application

### 5. RTK Query & API Integration

- Created an API slice using `createApi`
- Configured `fetchBaseQuery` for API requests
- Added the API slice to the Redux store
- Fetched data using the auto-generated query hook
- Handled loading, error, and success states

### 6. Payload Actions

- Used `action.payload` to update Redux state dynamically
- Passed data through dispatched actions
- Updated user state using input values
- Learned how payload makes Redux actions reusable

### Planned Topics

- Redux Slice (`createSlice`) ✅
- Initial State ✅
- Reducers & Actions ✅
- `useSelector` ✅
- `useDispatch` ✅
- Counter Application ✅
- Multiple Slices ✅
- User Slice ✅
- Theme Slice ✅
- RTK Query ✅
- Best Practices 
- Interview Questions
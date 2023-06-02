# Natsu Matsuri Project

The Natsu Matsuri Project is a React-based application designed to serve as a finance manager for sales made during the Natsu Matsuri festival. The application allows users to record information about products sold, change provided, value, quantity, and whether it is an income or expense.

Upon launching the application, users are presented with the option to select products available at the festival from a predefined list. They can enter the selling price of the product, quantity sold, and indicate whether it is an income or expense. Incomes can be used to record payments received from suppliers or sponsors, while expenses can be used to track festival-related costs such as production expenses, space rental, and more.

The Natsu Matsuri Project offers an intuitive and user-friendly interface, allowing users to add, edit, and delete sales items. It also provides an updated financial summary based on the recorded transactions. The application allows for the export of financial reports, facilitating financial control and accountability.

With this finance manager, Natsu Matsuri festival organizers can efficiently monitor financial transactions during the event, aiding in decision-making and cash flow management.

## Step by Step:

### 1. Project Structure Creation:
   - Created a folder called "public" in the project root, containing the file "favicon.ico".
   - Created the file "index.html" in the "public" folder with basic HTML code, including links to Google Fonts and the project title.

### 2. Folder Structure Creation:
   - Created a folder called "src" in the project root.
   - Inside the "src" folder, created the folders "components", "Form", "Grid", "GridItem", "Header", "Resume", and "ResumeItem".

### 3. Component Implementation:
   - Implemented the "Form" component with the logic for adding financial transactions.
   - Implemented the "Grid" component to display transactions in a table format.
   - Implemented the "GridItem" component to represent each item in the table.
   - Implemented the "Header" component to display the application title.
   - Implemented the "Resume" component to display the transaction summary.
   - Implemented the "ResumeItem" component to represent each item in the summary.

### 4. Component Styling:
   - Created style files for each component using the styled-components library.
   - Defined the styling rules according to the structure of each component.

### 5. Integration of Components in the "App.js" file:
   - Imported and used the "Header" component to display the application title.
   - Imported and used the "Resume" component to display the transaction summary.
   - Imported and used the "Form" component to enable adding transactions.
   - Imported and used the "Grid" component to display transactions in a table format.

### 6. Handling Transaction Data:
   - Used the "transactionsList" state to store the financial transactions.
   - Used the "income" state to store the total income value.
   - Used the "expense" state to store the total expense value.
   - Used the "total" state to store the total balance (income - expense).
   - Used the useEffect function to update the state values based on the transactions.

### 7. Storing Transactions in LocalStorage:
   - Utilized LocalStorage to store the financial transactions.
   - When adding, editing, or deleting a transaction, the LocalStorage is updated with the new array of transactions.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

# Video Chat

**Project management system** is an application that helps members to phone or text each other.

## Backend

Backend provided https://github.com/ .
There is also a socket server https://github.com/Andrey78945/new-socket-server.

## Application structure

Application contains:

- welcome page
- user auth
- starting page
- communication room
- admin page

## Description of function blocks

### Welcome page(route)

- The welcome page displays general information about the developer, project, and course.
- In top right corner there is a button Sign In / Sign up.
- If login token is valid and unexpired, button Sign In changes on "Go to Main Page" button.
- When the token expires - the user is redirected to the "Welcome page" automatically.
- Pressing the Sign In / Sign Up button redirects the user to the route with the Sign In / Sign Up form.

### Header

- There are buttons in the header for authenticated users: Sign Out, Create a new call, toggler / select to change language.
- Edit profile button should redirect the user to a route with a form for edit profile. The requirements for the form are the same as for all forms in the application. There should be a 'Delete User' button. In case of this action => "confirmation modal" => then the user should be logged out, and the user should be removed from the database.
- Create a new call – redirect user to personal room with id.
- Sign Out button - sign user out.

### Footer

- footer contains a link to the author's github, the year the application was created, [course logo](https://rs.school/images/rs_school_js.svg) with [link to the course](https://rs.school/react/).
- footer is displayed on all pages of the application.

### Sign In / Sign Up

- Form fields are implemented in consistency with the backend API of the application. Validation should is implemented both in the Frontend and in the Backend.
- Errors from the BE side - (Not found, unhandled rejection, etc) are displayed in a user-friendly format (toast, pop-up, or something like this - up to your decision).
- Upon successful login, the user should be redirected to the "Main route"
- If user already logged in and he try to reach this routes - he should be redirected to Main route.

### Main route

- Displays all created boards as a list.
- Example of extra functionality (optional): global search. Search for a task by task number, name, users assigned to it, and by the text of the task description.

### Communication room

- Displays all video frames participated members.
- There are buttons “Share your screen” and “Open/Close text chat”.
- If the text chat is open user can enter a message in the input form and send it by clicking “Send” button.
- There is a list of users to invite one of them in the room.
- There is a form with user id input and a button “To invite”.

### Admin page

- This room is available only for users, who has a role of “ADMIN”.
- Displays the list of all members.
- There is a form with reason for ban input and a button “Ban/Unban”.

### Welcome route - max 7 points

- [ ] The welcome page should contain general information about the developer, project, and course. **1 point**
- [ ] In the upper right corner there are 2 buttons: Sign In and Sign Up. **1 point**
- [ ] If login token is valid and unexpired, change buttons Sign In and Sign Up on "Go to Main Page" button. **2 points**
- [ ] When the token expires - the user should be redirected to the "Welcome page" automatically. **2 points**
- [ ] Pressing the Sign In / Sign up button redirects a user to the route with the Sign In / Sign up form. **1 point**

### Sign In / Sign Up - max 8 points

- [ ] Buttons for Sign In / Sign Up / Sign Out are everywhere where they should be **2 points**
- [ ] Form fields should be implemented according to the backend API. Validation should be implemented. **4 points**
- [ ] Upon successful login, the user should be redirected to "Main route" **1 point**
- [ ] If user already logged in and he try to reach this routes - he should be redirected to Main route. **1 point**

### Main route - max 8 points

- [ ] Board creation functionality **2 points**
- [ ] Displays all created boards as a list/grid **1 point**
- [ ] Each board in the list is displayed with a small preview of available information (title, description, etc). By clicking an element the user navigates to the board item (Board route). There's also a button for board deletion. **1 point**
- [ ] When trying to delete the board, we should receive a confirmation modal. The confirmation modal must be a generic component (one for the entire application). **1 points**
- [ ] The user profile editing functionality is implemented. **3 points**

### Board route - max 26 points

- [ ] Button for column creation is displayed **1 point**
- [ ] If a board contains at least one column - a button for task creation is displayed/become enabled as well **1 points**
- [ ] A modal windows with forms is displayed for column and task creations **3 points**
- [ ] A vertical scrollbar is displayed in the column when overflowing with the number of column tasks **2 points**
- [ ] The page itself on the current route doesn't have a vertical scrollbar **1 points**
- [ ] With the help of drag-n-drop, we can swap columns. **3 points**
- [ ] With the help of drag-n-drop, we can change the order of tasks within a column. **3 points**
- [ ] With the help of drag-n-drop, we can change the task belonging to the column. **5 points**
- [ ] The functionality of viewing and editing of the task has been implemented. **3 points**
- [ ] The task must have a delete task button. On click: confirmation modal -> delete. **1 points**
- [ ] At the top of the column should be Title. When you click on it, it should become an input, with Submit and Cancel buttons near it. After entering text in the input and clicking Submit - the Title of the column should change. **2 points**
- [ ] The column should have a delete button. By clicking -> confirmation modal -> when approving -> deleting. **1 points**

### General requirements - max 11 points

- [ ] Backend error handling - (Not found, unhandled rejection, etc) should be performed in a user-friendly way (toast, pop-up or anything else you implement). **4 points**
- [ ] Localization **1 point**
- [ ] Backend is deployed and publicly available **2 points**
- [ ] Sticky header **2 points**
- [ ] Extra scope same complexity as Global search **2 points**

## Баллы за фронтенд

# Общая информация 80

- [ ] Реализован React Router, а само приложение является SPA 20
- [ ] Есть возможность переключения 2 языков 15
- [ ] Возможность выбора темы приложения 15
- [ ] 404-page 20
- [ ] Размещены ссылки на гитхабы авторов приложения, год создания приложения, логотип курса со ссылкой на курс 10

# Главная страница 15

- [ ] При первом запуске приложения отображается стартовая страница 10
- [ ] Случайное приветствие 5

# Авторизация пользователя 80

- [ ] При нажатии на регистрацию пользователь вводит свою почту и пароль. При успешном вводе данные отправляются на сервер. 20
- [ ] При нажатии на вход пользователь вводит свою почту и пароль, и, в случае существующего аккаунта, успешно входит в приложение. При успешном вводе данные отправляются на сервер 20
- [ ] При повторном запуске приложения, в случае если пользователь авторизован, сразу открывается страница приложения 10
- [ ] Реализован выход из аккаунта 10
- [ ] Валидация форм 20

# Страница чата 40

- [ ] Возможность получать список всех пользователей 10
- [ ] Возможность добавлять в список контактов 10
- [ ] Поиск среди контактов 10
- [ ] Аватар для пользователей 10

# Диалог 70

- [ ] Возможность видеозвонка 20
- [ ] Возможность демонстрации экрана 20
- [ ] Текстовые сообщения 20
- [ ] Время отправки текстового сообщения 10

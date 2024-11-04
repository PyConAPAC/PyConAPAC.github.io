PyCon APAC Organizers Website
==================
PyCon APAC Organizers Website - is a platform where folks can conveniently access information about the Regional PyCons in APAC, all on a single page. This is a collaboration project between the some awesome folks from the APAC community. 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Available Scripts
-----

In the project directory, you can run:

### `npm install`
Installs the dependencies
Run this if you just cloned this repo and it's your first time to work on it.

When you're inside a project directory that contains a `package.json` file, running npm install will install all the dependencies listed in that file. These dependencies are typically other Node.js packages that your project needs to run properly. The installed packages will be placed in a folder named `node_modules`.

### `npm run start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run deploy`

Deploys the build



Contributing
-----

Pull requests are welcome! :)

### How to Create/submit a Pull Request

More info: https://www.freecodecamp.org/news/how-to-make-your-first-pull-request-on-github-3/

### Adding your PyCon to the website

To add new or edit events to the website, make an edit and submit a pull request
to this repository:

The event data is located at [EventData.js](src/views/events/EventData.js)

The `EventData.js` file contains three arrays:

1. **slides**: Highlights the incoming host for the upcoming PyCon APAC.
2. **events**: Current year's PyCon events.
3. **upcomingEvents**: Upcoming events for next year.

To add an event, append a new object to either the events or eventsNextYear array.
```javascript
const events = [
    {
        date: '01-02 Jan',
        name: 'PyCon APAC',
        location: 'Asia Pacific (rotating)',
        link: 'https://pycon.asia'
    },
]
```


### How to Test your Code Locally

1. Make code changes
2. `npm run start` - to check your changes locally



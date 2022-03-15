console.log("App.js is running!");

// JSX - JavaScript XML: support strings, numbers and arrays, 
//doesn't support objects, ignores booleans, null or undefined

const app = {
    title: 'Indecision app',
    subtitle: 'This is my subtitle',
    option: []
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if(option) {
        app.option.push(option);
        e.target.elements.option.value = '';

        renderIndecisionApp();
    }
};

const removeItems = () => {
    app.option = [];
    
    renderIndecisionApp();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.option.length);
    const option = app.option[randomNum];
    alert(option);
};

const appRoot = document.getElementById('app');

const numbers = [88, 101, 1000];

const renderIndecisionApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.option.length > 0 ? 'Here are your options' : 'No options'}</p>
            <button disabled={app.option.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={removeItems}>Remove ALL</button>
            {
               numbers.map((number) => {
                   return <p key={number}>Number: {number}</p>
               })
            }
            <ol>
                {
                    app.option.map((item) => <li key={item}>{item}</li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add option</button>
            </form>
        </div>
        );

    ReactDOM.render(template, appRoot);

};


renderIndecisionApp();


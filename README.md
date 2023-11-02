### Remove BoilerPlate

-- delete src
-- create new src
=> create index.js

### First Component

function Greeting (){
return <h2>My first Component</h2>
}

// Arrow function also work

-- starts with Capital letter
--- returns jsx (html)
--- always close tag

### Extensions

-- auto rename
-- prettier
-- emmet.includeLanguages = {
"javascript" : "javascriptreact"
}

-- rafce
-- rfce
--- same as file name
--- react auto import
-uncheck
-React snippets > setting : import react on top

### JSX Rules

-- always return single element
--semantics section/articles
-- Fragments (invisible divs/nodes)

### Naming Conventions

-- camelCase properties
--- className instead of class

### close all html tags in react

--- <img/>

### Nest Components in Components

function Greeting() {
return (
<Fragment id="component">
<Hello />
<ul>
<li></li>
<li></li>
<li></li>
<li></li>
<li></li>
</ul>
</Fragment>
);
}

const Hello = () => {
return <div>Hello</div>;
};

### Adding CSS

-- create index.css pr components based css in src
-- import in index.js or in the specific component

--- import "./index.css"
-- js objects as css inline styles

### Javascript in JSX

-- {} everything in curly is javascript
-- value must be an expression , cant be a statement
-- on type of value you can use built-in object wrapper functions

### Props system

--- Remember Components are basically functions
--- What you pass to functions as data ? Arguments !
--- Similarly you pass arguments in components that will be used as data this is called prop systems and arguments being passed are called props.
---- Every component by default has props object
---- argument data is passed in the prop object {}
---- if string = "" , if its a number , variable or anything else it should be in curly brackets {}.
--- props data can be different for different component instances
--- while accessing props passed name should be same
--- you can not access prop if its not there
### props system make data dynamic. 
### props multiple approaches
 --- const {Destructuring Objects} = props
 --- Directly put object as parameter instead of props and give parameters

 
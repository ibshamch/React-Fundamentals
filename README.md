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

 ### children prop (special prop) (used in context api)
 --- prop name has to be "children" 
 --- way to add extra data in individual component instances
 --- data is put between opening and closing tags of component

 ### Simple list 
 -- Javascript ARRAY.MAP (Method)
 [{},{}].map(e=>{return <div key={e.id}>{e}</div>})
--- We cannot render object directly in jsx
--- always provide key to the list

### Proper list

--- convert returned element into component
--- use spread operator


### key prop
--- react wants to keep track of your lists
--- so it need a unique key for each key element
--- normally its an id
--- most likely ids will be provided when we fetch data
--- avoid using indexes as keys (because it only works with the list thats not gonna change in future as index changes for elements when some items are deleted from array)
--- always add key prop to the top most element

###  Objects as prop {...Spread Operator}
--- pass prop as {...data}

### Events 

--- onClick= {function} (click events),onChange(input) ,onSubmit(form)
--- convention for functions (handleClick,handleChange)
--- never call function directly in the event call
   --- pass in an anonymous function or in an another function call the function you want 
### Event object
--- event functions will have access to an event object
--- e.preventDefault() (prevents default event behavior)

### form submission with button
--- if we have type submit on button inside form it will submit the form

### anonymous function inside event listners

### Components are independent of eachother

### prop drilling
--- react can only pass data top to bottom (props down)
--- alternatives context api,redux,other state libraries

### ES6 Modules
--- named and default exports
--- {} for name and variable name for default

### local images (src folder)
import imgName from "./path" or
import as ReactComponent

### Build Production Application
 --- run "npm run build"
 ---  it will create a build folder 

 ### Deployment

 --- Netlify,Github
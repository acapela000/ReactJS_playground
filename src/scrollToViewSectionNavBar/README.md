# Scroll Into View Component

## Define structure
- This component is a navigation bar when you click on each section it will navigate to the equal content in the same page.

### Javascript, ReactJS and HTML
- Import React's property 

```js

import React, { useRef } from 'react';

```

- Create a function `ScrollToSectionNav()` and declare 3 variables `section1`, `section2`, `section3`.

```js

export default function ScrollToSectionNav() {
    const section1 = useRef(null); 
    const section2 = useRef(null);
    const section3 = useRef(null);
}

```

- Create a varible to pass an argument `ref` and set up the condition for it.

```js

const scrollIntoView = (ref) => {
    if (ref && ref.current) {
        ref.current.scrollIntoView({behavior: 'smooth'});
    }
}

```

- Create event `onClick` for the navigation bar.

```js

<nav>
    <ul>
        <li onClick={() => scrollIntoView(section1)}> Section 1 </li>
        <li onClick={() => scrollIntoView(section2)}> Section 2 </li>
        <li onClick={() => scrollIntoView(section3)}> Section 3 </li>
    </ul>
</nav>

```

- Transfer the parameter `section1` at the argument `ref`.

```js

<section ref={section1} className='sect1'>
    <p> Content 1 </p>
</section>

```

- Create a button to go back to the top.

```html

<button onClick={() => scrollIntoView(top)}> Go to Top </button>

```

### CSS
- Create a CSS file and import it to the component.
- This file is to define the attribute of the tag, classname.



## How to import this component
- Import the function `ScrollToSectionNav` from the folder where has the component './scrollToViewSectionNavBar/scrollIntoView'.
- At the <div> to render HTML, call the function

```js

<div className="App">
     <ScrollToSectionNav/>
</div>

```

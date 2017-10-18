---
title: Home
---

## Getting Started
Butr is a tiny (3kb~) JavaScript package that can:

- Collect all headings and create a table of contents with links
- Update the table of contents to indicate which link is currently in view
- Smoothly animate scroll to any location or element - like butter ;)
- Automatically animate scroll on any anchor with the `data-butr` attribute

The best example is this documentation itself, which uses butr for its sidebar.

### Issues
Please create an issue on [GitHub](https://github.com/UFHealth/butr.js/issues) if you find any bugs or have a suggestion.

### Browser Support
Butr works well on all modern browsers and IE 10+.

### Downloading or Installing

#### Stand Alone
- Go to the [latest release](https://github.com/UFHealth/butr.js/releases/) and download `butr.min.js`
- Include it somewhere before the closing `</body>` tag:
``` html
<script src="path/to/butr.min.js"></script>`
```

- [Start using it!](#Usage)

#### Import or Require

- Install with npm
  ``` bash
  npm i --save butr
  ```

- ES2015
  ``` js
  import butr from 'butr' // ES2015+ only
  ```

- requireJS
  ``` js
  var butr = require('butr') // requireJS only
  ```

## Usage
Butr has 5 methods that can all be called independently or all together. Some methods depend on having specific classes in your markup. Check each method for required classes.

- <a href="#to" data-butr>`butr.to()`</a>
- <a href="#autoAnchors" data-butr>`butr.autoAnchors()`</a>
- <a href="#autoSidebar" data-butr>`butr.autoSidebar()`</a>
- <a href="#marker" data-butr>`butr.marker()`</a>
- <a href="#stickyNav" data-butr>`butr.stickyNav()`</a>

### Full Example
This snippet will create a table of contents with links, from the headings in your content with `butr.autoSidebar()`, create a marker to track which link in the table of contents is in view with `butr.marker()`, pin the table of contents to the top of the page after scrolling with `butr.stickyNav()`, and animate scroll of any anchor tags with the `data-butr` atrribute using `butr.autoAnchors()`.

Keep in mind that order of operations is important between some methods. `.autoAnchors()` should always come last so that it can attach events to any dynamically generated elements. The sidebar (created with `.autoSidebar()` or any other means) should be created before attaching a marker with `.marker()`.

#### JavaScript
``` js
butr.autoSidebar({
  olClass: 'list-reset nav-list',
  liClass: 'nav-item',
  aClass: 'nav-link'
})
butr.marker({
  duration: 400,
  markerClass: 'nav-marker',
  activeClass: 'nav-link-active'
})
butr.stickyNav({
  distanceTop: '12px'
})
butr.autoAnchors()
```

#### HTML
``` html
<div class="wrap-flex">
  <aside class="sidebar">
    <nav class="sidebar-nav js-butr-nav">
    </nav>
  </aside>
  <main class="page-content js-butr-content">
    <h2>Hello, World</h2>
    <p>
      Using butr.js!
    </p>
  </main>
</div>
```

### .to()
Animate scrolling to a location or element.

#### Scroll to element
``` js
butr.to({
  target: '.scroll-to-me',
})
```

#### Scroll to location
``` js
butr.to({
  target: 500, // in px
})
```

#### All options
``` js
butr.to({
  /**
   * Scrollable element (parent of content)
   * Default: body element
   * Type: string
   */
  scrollingElement: '.scrollable-container',
  /**
   * Target to scroll to - in px or querySelector string
   * Default: 0
   * Type: number or string
   */
  target: 500,
  /**
   * Scrolling axis 'x' or 'y'
   * Default: 'y'
   * Type: string
   */
  direction: 'y',
  /**
   * Write hash to the URL
   * Default: true
   * Type: boolean
   */
  keepHash: true,
  /**
   * Modify the speed of the scrolling animation
   * 2 === double speed, .5 === half speed
   * Default: 1
   * Type: number
   */
  speed: 1.2,
  /**
   * Callback to execute on completion of animation
   * Default: null
   * Type: function
   */
  callback: function () {
    console.log('Done!')
  }
})
```

### .autoAnchors()
Automatically smooth scroll to any anchor's `href` with the data attribute `data-butr`.

#### JavaScript
``` js
butr.autoAnchors({
  /**
   * Passes all its parameters to the internal to() call
   * Default: null
   * Type: object
   */
  to: {
    ...options
  }
})
```

#### HTML
``` html
<a href="#autoAnchors" data-butr>
  Usage for .autoAnchors()
</a>
```

### .autoSidebar()
Automatically create a table of contents with links based on the headings in the content.

#### JavaScript
``` js
butr.autoSidebar({
  /**
   * HTML Class added to all lists (ol) in the sidebar
   * Default: '' (empty string)
   * Type: string
   */
  olClass: 'list-reset nav-ordered-list',
  /**
   * HTML Class added to all list items (li) in the sidebar
   * Default: '' (empty string)
   * Type: string
   */
  liClass: 'nav-list-item',
  /**
   * Option to prepend links to nav, rather than append.
   * Helpful if you want to have a Back to Top button at
   * after all your links.
   * Default: false
   * Type: boolean
   */
  prepend: false
})
```

#### HTML

``` html
<div class="wrap">
  <!-- element with js-butr-nav class -->
  <aside class="sidebar">
    <nav class="js-butr-nav">
      <!-- links will be injected here -->
    </nav>
  </aside>
  <!-- element with js-butr-content class -->
  <main class="js-butr-content">
    <!-- content here -->
  </main>
</div>
```

### .marker()
Track which nav link's section is currently in view. Optionally style a marker to further indicate which section is in view. The marker on this page is a good example of what is possible. Use CSS to do basically anything with it.

#### JavaScript
``` js
butr.marker({
  /**
   * Scrollable element (parent of content)
   * Default: body element
   * Type: string
   */
  scrollingElement: '.scrollable-container',
  /**
   * Duration of scroll animation in ms
   * Default: 400
   * Type: number
   */
  duration: 800,
  /**
   * Callback to execute on completion of scrolling to
   * link clicked
   * Default: null
   * Type: function
   */
  callback: function () {
    console.log('Done!')
  },
  /**
   * HTML Class added to js-butr-marker (div) in the
   * sidebar
   * Default: '' (empty string)
   * Type: string
   */
  markerClass: 'marker',
  /**
   * HTML Class added to active anchor (a) in the
   * sidebar
   * Default: '' (empty string)
   * Type: string
   */
  activeClass: 'active-nav-item'
})
```

#### HTML
If you are manually creating nav links, make sure to add the `js-butr-link` class so they are picked up by `.marker()`. If you are using `.autoSidebar()` they're picked up automatically.

``` html
<div class="wrap">
  <!-- element with js-butr-nav class -->
  <aside class="sidebar">
    <nav class="js-butr-nav">
      <!-- links added (manually) or injected here -->
      <a href="#Getting-Started" class="js-butr-link">
        Getting Started
      </a>
    </nav>
  </aside>
  <!-- element with js-butr-content class -->
  <main class="js-butr-content">
    <!-- content here -->
  </main>
</div>
```


### .stickyNav()
Pin the sidebar nav to the top of the page once the top of it hits the top of the browser when scrolling.

#### JavaScript
``` js
butr.stickyNav({
  /**
   * Supply a distance from the top of the page to add
   * some breathing room for the sidebar - otherwise the
   * text might not look great touching the edge.
   * Default: 0
   * Type: string or number ('12px' or 12) always
   * interpreted as pixels
   */
  distanceTop: '12px',
  /**
   * MediaQuery - when true, makes the nav sticky
   * Default: false
   * Type: string
   */
  mediaQuery: '(min-width: 767px)'
})
```

#### HTML
``` html
<!-- element with js-butr-nav class -->
<nav class="js-butr-nav">
  <!-- links here -->
</nav>
```

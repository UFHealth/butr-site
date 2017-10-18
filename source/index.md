---
title: Home
---

## Getting Started
Butr is a tiny (3kb~) JavaScript package that can:

- Collect all headings and create a table of contents with links
- Update the table of contents to indicate which link is currently in view
- Smoothly animate scroll to any location or element - like butter ;)
- Automatically animate scroll on any anchor with the `data-butr` attribute

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
  ```
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
Butr has 5 methods that can all be called independently or all together.

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
Automatically smooth scroll any anchor tag on the page with the data attribute `data-butr`.

#### Initialize
``` js
butr.autoAnchors()
```

#### Add data attributes
``` html
<a href="#autoAnchors" data-butr>
  Usage for .autoAnchors()
</a>
```

### .autoSidebar()
Automatically create a sidebar based on the headings in the content.

#### Initialize
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
  liClass: 'nav-list-item'
})
```

### .marker()
Track which nav link's section is currently in view. Optionally style a marker to further indicate which section is in view. The marker on this page is a good example of what is possible. Use CSS to do basically anything with it.

#### Initialize
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
   * Callback to execute on completion of scrolling to link clicked
   * Default: null
   * Type: function
   */
  callback: function () {
    console.log('Done!')
  },
  /**
   * HTML Class added to js-butr-marker (div) in the sidebar
   * Default: '' (empty string)
   * Type: string
   */
  markerClass: 'marker',
  /**
   * HTML Class added to active anchor (a) in the sidebar
   * Default: '' (empty string)
   * Type: string
   */
  activeClass: 'active-nav-item'
})
```

### .stickyNav()
Pin the sidebar nav to the top of the page once the top of it hits the top of the browser when scrolling.

#### Initialize
``` js
butr.stickyNav({
  /**
   * Supply a distance from the top of the page to add some breathing room for
   * the sidebar - otherwise the text might not look great touching the edge.
   * Default: 0
   * Type: string or number ('12px' or 12) always interpreted as pixels
   */
  distanceTop: '12px'
})
```

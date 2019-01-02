# v2 goals/notes

* Tighter integration with React component lifecycle events
* Support fallback components in case of twitter load fail
* Use the new Twitter Javascript API `loaded` event
* Workaround for Twitter mutating options object (if it still does?)
* Support the React 16.3+ createRef API
* Update insecure dependencies (lodash, debug, randomatic)
* Support createGridFromCollection
* If props change before load, ensure old widget isn't loaded (#23)
* Live demo site
* Tests (especially for quick-changing props)
* Support React Storybook (see pull request #34)
* Support loading the twitter script eagerly

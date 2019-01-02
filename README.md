# react-twitter-widgets

Embed Twitter widgets in your React project!

Available widget components: `Timeline`, `Share`, `Follow`, `Hashtag`, `Mention`, `Tweet`

⚠️ This project loads the Twitter for Websites remote javascript. This comes with the following caveats:
* Must be connected to the internet to load the widget script and widget data. twitter.com cannot be blocked
* Firefox Content Blocking (formerly Tracking Protection) will block social widgets. This is enabled by default in private browsing sessions, but it can also be enabled by the user in normal sessions. There are other third-party plugins that do the same. There's nothing this library can do that will bypass these blockers.

This library allows you to supply a fallback component in case your widgets fail to load.

# Installation

```
# NPM
npm install react-twitter-widgets
# Yarn
yarn add react-twitter-widgets
```

# Usage

## Widget Components

Available widget components: `Timeline`, `Share`, `Follow`, `Hashtag`, `Mention`, `Tweet`

All widgets take an optional options object prop. To learn more about the available options (height, width, align, count, etc), see [this link](https://developer.twitter.com/en/docs/twitter-for-websites/javascript-api/guides/scripting-factory-functions).

`Timeline` requires a `dataSource` object prop, see [here](https://dev.twitter.com/web/javascript/creating-widgets#timelines) for info. The source type can be profile, likes, list, collection, URL, or legacy widget configuration.

`Share` requires a `url` prop.

`Follow` and `Mention` require a `username` prop.

`Hashtag` requires a `hashtag` prop.

`Tweet` requires a `tweetId` prop. Ex. `'511181794914627584'`

Examples:
```js
// Simple tweet
<Tweet username="TwitterDev" />
// Timeline for profile with height option
<Timeline
  dataSource={{
    sourceType: 'profile',
    screenName: 'TwitterDev'
  }}
  options={{
    username: 'TwitterDev',
    height: '400'
  }}
/>
```

See the demo site for more examples.

TODO: grid collection notes

## Loading the remote script eagerly

The remote script can either be loaded eagerly (manually), or just-in-time when you attempt to render a widget component (the default).

TODO: more info on eager loading

## Fallback Components

Widget loading *will likely fail sometimes* (see above for reasons). If this happens, the failed component will not render anything by default.

You can supply the `fallback` prop to any widget component if you'd like to render a fallback component. If you supply `true`, this message will be the string `Could not load Twitter widget`. If you'd like to customize this component, you can supply a custom component.

Fallback example:
```js
<Tweet
  username="TwitterDev"
  // use simple string fallback:
  fallback
  // custom fallback component
  fallback={CustomTweetFallback}
/>
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request

## Credits

* Andrew Suzuki - @andrewsuzuki - [andrewsuzuki.com](http://andrewsuzuki.com)

## License

MIT

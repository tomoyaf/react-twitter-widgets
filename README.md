# react-twitter-widgets

Embed Twitter widgets in your React project!

Available widget components: `Timeline`, `Share`, `Follow`, `Hashtag`, `Mention`, `Tweet`

⚠️ This project loads the Twitter for Websites JavaScript. This is a remote script that comes with the following caveats:
* Must be connected to the internet to load the widget script and widget data
* Firefox Content Blocking (formerly Tracking Protection) will block social widgets. This is enabled by default in private browsing sessions only, but it can also be enabled for normal sessions. There are other third-party plugins that do the same.

This library allows you to supply a fallback component in case your widgets fail to load.

# Installation

```
# NPM
npm install react-twitter-widgets
# Yarn
yarn add react-twitter-widgets
```

# Usage

Available widget components: `Timeline`, `Share`, `Follow`, `Hashtag`, `Mention`, `Tweet`

All widgets take an optional options object prop. To learn more about the available options (height, width, align, count, etc), see [this link](https://dev.twitter.com/web/javascript/creating-widgets).

`Timeline` requires a `dataSource` object prop, see [here](https://dev.twitter.com/web/javascript/creating-widgets#timelines) for info. The source type can be profile, likes, list, collection, URL, or legacy widget configuration.

`Share` requires a `url` prop.

`Follow` and `Mention` require a `username` prop.

`Hashtag` requires a `hashtag` prop.

`Tweet` requires a `tweetId` prop. Ex. `'511181794914627584'`

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

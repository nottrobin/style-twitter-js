JavaScript to Style the Twitter widget 
===

A tiny little couple of functions to inject a stylesheet into the [standard Twitter "embeded timelines" widget](https://dev.twitter.com/web/embedded-timelines).

Rationale
---

Twitter's widget is included in the page as an `<iframe>`, and therefore it can't be styled in the normal way. The provided [customisation options](https://dev.twitter.com/web/embedded-timelines#options) allow you to change the colours, header and footer, but don't give more advanced customisations that would be possible with a stylesheet.

This script allows you to apply a stylesheet to the Twitter widget.

Usage
---

``` html
<!-- standard twitter plugin code -->
<a class="twitter-timeline" href="https://twitter.com/example" data-widget-id="1111111111111111">Tweets by @example</a>
<script id="twitter-wjs" src="//platform.twitter.com/widgets.js"></script>

<!-- Style the twitter widget with `my-stylesheet.css` -->
<style src="style-twitter.js"></style>
<script>styleTwitterWidgetWhenReady('my-stylesheet.css');</script>
```

Now the stylesheet at `my-stylesheet.css` will be applied to the widget.

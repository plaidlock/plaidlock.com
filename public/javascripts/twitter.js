// get the part of the doc that we want tweets in
var holder = document.getElementById('twitter_content');

window.onload = function() {  
  // get the username and fail nicely if it doesn't exist
  var scripts = document.getElementsByTagName('script');
  var index = scripts.length - 1;  
  var username = scripts[index].src.split('?', 2)[1];
  if(!username || username === undefined || username == '') {
    holder.innerHTML = '<li>No username given</li>';
    return false;
  }
  
  // set the URL for getting the timeline
  var url = 'https://api.twitter.com/1/statuses/user_timeline.json?screen_name=' + username + '&callback=processTweets&count=5';

  // create and append the script to the body
  var script = document.createElement('script');
  script.setAttribute('src', url);
  document.body.appendChild(script);
}

// process the jsonp returned
function processTweets(tweetJSON) {
  if(!tweetJSON || tweetJSON === undefined) {
    holder.innerHTML = '<li>Could not load tweets</li>';
    return false;
  }

  holder.innerHTML = '';
  for(var i = 0; i < tweetJSON.length; i++) {
    if(tweetJSON[i] && tweetJSON !== undefined) {
      buildTweet(tweetJSON[i]);
    }
  }

  // actually build a tweet
  function buildTweet(tweet) {
    var content = '';
    content += '<li>';
    content += '<a href="http://twitter.com/' + tweet['user']['screen_name'] + '">';
    content += formatTweetTime(tweet.created_at);
    content += '</a>';
    content += ' - ';
    content += processTweet(tweet.text);
    content += '</li>';

    holder.innerHTML += content;

    // make the tweet time look good
    function formatTweetTime(time) {
      var arr = time.split(' ');
      return arr[1] + ' ' + arr[2];
    }

    // take the Tweet and add any links, etc
    function processTweet(text) {
      text = text.replace(/http:\/\/([\w\.\/]+)\ ?/ig, '<a href="http://$1" target="_BLANK">http://$1</a>');
      return text = text.replace(/@(\w+)/ig, '<a href="http://twitter.com/$1">@$1</a>');
    }
  }
}
#Ringer.js

Sound effects and ringtones for att.js

## How to use

```js
// init your att object from att.js
var att = $.att({
    apiKey: "YOUR OATH TOKEN"
});

// just pass it your att object
new Ringer(att);
```

## Options
You can also configure it with other ringtones by passing it an options object.

```js
new Ringer(att, {
    ringtone: '/some-file.wav',
    ringbackTone: '/some-other-file.wav'
});
```

### Caller specific ringtones

`ringtone` and `ringbacktone` can also be a function so you can do custom ringtones for different numbers. The only requirement is that the function return the URL for the wav file to play. For example:

```js
new Ringer(att, {
    ringtone: function (call) {
        if (somePhoneNumberLookup(call.initiator) === 'BATMAN') {
            return '/nana-nana-nana-batman.wav';
        } else {
            return '/normal.wav';
        }
    }
});
```

You can also pass a hash of numbers and urls for quickly setting a bunch of different custom ringtones. 

If they're not found in that hash, the default will be used.

```js
new Ringer(att, {
    ringtones: {
       "5555559999": "batman.wav",
       "7777777777": "superman.wav"
    },
    ringbackTones: {
        "5555559999": "batsignal.wav"
    }
});
```

## Demo

To see a demo, clone it and open demo.html in a browser and click the various buttons.

## Credits

[Henrik Joreteg](http://andyet.com/team/henrik/) - [&yet](http://andyet.com)

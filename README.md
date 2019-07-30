An implementation of react-flip-page as a Framer X component

See [the docs](http://darenju.me/react-flip-page/docs) for more information.

Methods `onPageChange`, `onStartSwiping`, and `onStopSwiping` are defined this component, and can be overridden using Overrides.

An exmaple override might look like:

```
import { Override } from "framer"

export function Page(): Override {
    return {
        onPageChange: () => {
            console.log("Page Changed")
        },
    }
}

```

Feel free to reach out to me [@addisonschultz](https://twitter.com/AddisonSchultz) with any questions, or feel free to submit a [pull request](https://github.com/addisonschultz/react-flip-page).

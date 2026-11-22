# stagerig.org

The website for [StageRig](https://github.com/dguedry/stagerig),
[StageRig OS](https://github.com/dguedry/stagerig-os) and
[VST Environment](https://github.com/dguedry/vstenv).

Plain HTML, CSS and a few lines of JavaScript. There is nothing to build.

```sh
python3 -m http.server 8000     # then open http://localhost:8000
```

| | |
|---|---|
| `index.html` | The one page |
| `styles.css`, `script.js` | Its look, and the Copy buttons |
| `assets/img/` | The stage picture, the wordmark, icons and screenshots |
| `assets/fonts/montserrat.woff2` | Montserrat (SIL Open Font License), Latin only |

## Where the pictures come from

- `stage.webp`, `stage-1280.webp`, `social.jpg`: `branding/wallpaper-background.png` in stagerig-os
- `wordmark.svg`: `branding/stagerig-wordmark.svg` in stagerig-os
- StageRig's screenshots and icon: `docs/images/` and `Resources/` in stagerig (`favicon.svg` is `stagerig-small.svg`, the icon as drawn for a browser tab)
- VST Environment's screenshots and icon: `data/` in vstenv

When a screenshot changes there, convert it to WebP and replace it here.

## Publishing

Any static host works: upload the folder as it is. The page's links are
relative, so it also works from a sub-folder. The social preview
(`og:image` in `index.html`) is the one address that names stagerig.org.

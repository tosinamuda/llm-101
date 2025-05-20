# Carbon Design System + Tailwind CSS v4 Integration

This project demonstrates how to integrate Carbon Design System with Tailwind CSS v4 using the new `@config` directive to import a legacy config which uses a Preset that maps carbon color to tailwind.


## How It Works

### 1. External Configuration

Tailwind v4 allows loading external configuration files with the `@config` directive:

```css
/* In src/app/globals.css */
@import "tailwindcss";

/* Load the Carbon Design System configuration */
@config "../../tailwind.config.ts";
```

### 2. Carbon Configuration

The configuration file (`tailwind.config.ts`) loads the carbon preset (`tailwind.carbon.ts`) that extends Tailwind with Carbon Design System tokens:

- [x] Color palette (IBM colors)
- [ ] Typography (IBM Plex Sans/Mono)
- [ ] Spacing tokens
- [ ] Border radius values
- [ ] Shadow definitions


## Color Palette Mapping Carbon to Tailwind
We map carbon colors to tailwind colors Carbon 10 = tailwind 50 with the exception of 950

## References

- [Carbon Design System](https://carbondesignsystem.com/)
- [Tailwind CSS v4 Documentation](https://tailwindcss.com/)
- [Tailwind CSS @config directive](https://tailwindcss.com/docs/functions-and-directives#config-directive) 
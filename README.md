# furbie

## Setup

Run `./configure` to pull in dependencies and compile dependencies.

Main gulp task merges the folder structure of the light-modules.
It will also concatenate the **pre-compiled** CSS / JS into one
bigger file.

This way every dependency can use their own pre-processor, let it be
TypeScript, Sass, Coffeescript, Less, Stylus etc. and we don't have
to fix the gulp script as soon as we add another dependency or
something changes in the existing dependencies.

Main Module is in `src/furbie`, but we could also pull it in, having a
completely clean build project in this case.

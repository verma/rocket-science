This is supposed to be a starting point where you can start writing code without having to setup a ton of shit.

### How do I use this?

Here's a quick copy-paste (warning: will update your typescript to latest version):

    bash -c \
        'git clone --depth 1 git@github.com:verma/rocket-science.git such-project && \
         cd such-project && \
         rm -rf .git/ && \
         npm install -g typescript && \
         npm install && \
         printf "\n\n:: all set, open this directory in Visual Studio Code now and browse to main.ts file ..."'

 - Checkout this repo and delete the `.git/` directory. `rm -rf .git/`
 - Run `npm install`.
 - Open this directory in Visual Studio Code.
 - Run the Build Task (`Cmd + Shift + P -> Tasks: Run Build Task` or just `Cmd + Shift + B`) which will start Webpack Dev Server.
 - Browse to http://localhost:8080/
 - Start by looking at/editing `main.ts`.

### How do I add more dependencies?
`npm install <whatever>`, same rules as webpack projects apply.

### How do I add more type definitions for libraries?

 - Globally install typings: `npm install -g typings`
 - Then install type definitions using typings. See https://github.com/typings/typings
 - You most likely don't have to do anything else, the inclusion of type definitions is already setup in `tsconfig.json` (includes `typings/index.d.ts` in `files` list).

### What about React etc.?
Its left as an excersize for the reader.

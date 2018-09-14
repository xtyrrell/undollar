# undollar
undollar strips the dollar sign from the beginning of the terminal command you just copied from StackOverflow when you were searching for what arguments to pass to `tar` (`xzf`? `xvfJ`? Or was it `xvf`? You never seem to remember).

## Installation
Simply install undollar as a global package using npm or yarn:
```
$ npm install -g undollar
```
well, because you haven't installed it yet,
```
npm install -g undollar
```

## Usage
After you've installed undollar, you can forget it exists. Next time you paste in a command prefixed with a dollar sign, undollar will quietly eat the dollar sign and run the rest of the command.
```
neo@computey:~$ $ tar xvfJ something.tar.xz
neo@computey:~$
neo@computey:~$ echo "It worked! Thanks undollar!"

```
It's as if that stray dollar sign was never there in the first place!

## Wait what
People often put a "$" in front of a command to indicate that it must be executed on the command line. This is because, on Unix-like operating systems, the command-prompt usually ends in a "$" for non-root users -- so the last thing before a command is a "$".

Often when copy-pasting terminal commands from the internet you'll inadvertently end up also having copied the dollar sign at the beginning (especially if you triple-click to select). Trying to execute the command you just pasted will result in some variant of "command not found" or "No such file or directory".

Installing undollar solves this problem, by registering `$` as a valid command, which simply runs everything after that `$`.

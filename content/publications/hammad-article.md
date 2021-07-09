---
title: It's Time to Hammad
date: 2021-07-08
tags: ["Hunter"]
authors: ["hammad-siddiqui"]
---

# How to Find these Instructions

From the repositor's folder, this file is `content/publications/instructions.md`

# What I Want You to Do

If you are confused, reach out for help. But check the reference at the end of this page first.

1. Branch off this branch. Replace YN with your name
```bash
$ git checkout -b tut/gatsby-page-YN
# mine would be called tut/gatsby-page-max
```
2. Change the title of this article to "It's Time to Move Past React"
3. Test your changes by waiting for the terminal to print "building development bundle" then check your browser
4. If it worked, enter these git commands:
```bash
$ git add content/publications/instructions.md
$ git commit -m "Changed title"
```
5. Make an entry for yourself in the authors file. Add it to the bottom. Remember the comma. If you need to learn JSON, do so. Image is optional. Come up with a unique description like the others.
5. Test your changes by going to <http://localhost:8000/author/YOUR_USERNAME> Then enter these commands:
```bash
$ git add content/publications/instructions.md
$ git commit -m "Added myself as author"
```
6. Make an article. Attribute yourself as the author.
7. Test your changes by waiting for the article to appear. Run `git commit -am "my first article"`
8. Read all comments in `src/pages/part8.jsx`, there are directions too
9. Test your changes after each part by going to <http://localhost:8000/part8>. Run the command `git commit -am "describe what you changed"` (not word for word) after every change so you can go back if you messed up.
10. Finally, push it. It will print a link to open a pull request. Follow the link. Make sure to "compare against tut/gatsby-page", not master. Don't worry about filling in all the details.
```bash
$ git push origin tut/gatsby-page-YN
```

# Reference

Alphabetical Order.

**Articles** are in `content/publications/`, one article per file. `.md` and `.mdx` are the same extension. Before the text begins, you must have "frontmatter":
```YAML
---
title: proper title
date: YYYY-MM-DD
tags: ["list", "of", "tags"]
authors: ["list of author usernames"]
---
```

**Authors** are in `content/authors/authors.json`. It is an array of objects. Every author has:
- username without spaces
- display name (all characters allowed)
- brief description
- link to a profile image (nor `null` if there is none)
- badges, which is a list of strings (editor, web team, etc.)
You can access an author's page by clicking on their name in an article.

**Components** are in `src/components/`

**Layout, Header and Footer** are in `src/layout/`. Don't worry about `index.jsx`

**Pages** which aren't articles (home page, about page, etc.) are in `src/pages/`. Every `.jsx` file is a page. The URL of `src/pages/yabadabadoo.jsx` will be <http://localhost:8000/yabadabadoo/>

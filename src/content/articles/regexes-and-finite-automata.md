---
title: "Regular Expressions and Finite Automata"
description: ""
pubDate: "29 June 2025"
keywords: "regexes, regular expressions, finite automata, nfa, state machine, tonie, tonie victor, software engineer, gleam, rexen"
tags: ["gleam", "regex", "nfa", "rexen"]
draft: false
---

A couple months ago, I built a tool called [rexen](https://hexdocs.pm/rexen/index.html) that compiles and evaluates regular expressions (regexes) using Non-deterministic Finite Automata (NFA). Regexes are pretty ubiquitous in computer programming and this was my attempt at understanding how they work. 

A regular expression (regex) is a sequence of characters/symbols that abstractly
represent or define a set of strings (also known as a [regular language](https://en.wikipedia.org/wiki/Regular_language)). For
example, the regex `a*b` defines the set of strings `{ b, ab, aab, aaab, aaaab,
... }` ie. zero or more `a's` followed by a `b`.

The question is 
> Given a string, how can we determine if it is a member of the set defined by
> a regex? In other words, how can we check that a string conforms to the
> pattern specified by a regex?

If this were a plain string comparison, it'd be as straightforward as checking
that the two strings are of the same length and that they have the same
charaters at each index. ie the string `bob` matches the string `bob` because it
fulfils the requirements above. But with regexes, we're not dealing with simple 1:1
mappings as a single regex can match multiple (and possibly infinite) number of strings.
So, we need a different strategy.

The idea is to represent the regex as a bunch of (linked) steps or states and
try to evaluate the input string by simulating it through these states, if we
reach a desired end state then we can be sure that the string is indeed a member
of the set defined by that regex.
![String simulation overview](/images/bobbab.png)
In the contrived example above, the string `bob` satisfies the
requirement to move to the next state up until the end state, so we
can conclude that it matches the pattern specified by the regex. In contrast,
the string `bab` fails to meet the requirement to move from state 1 to 2 and
since there is no other logical way to get to the end state, we can conclude that it
fails to match the regex pattern.

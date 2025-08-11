---
title: "Regular Expressions and Finite Automata"
description: ""
pubDate: "29 June 2025"
keywords: "regexes, regular expressions, finite automata, nfa, state machine, tonie, tonie victor, software engineer, gleam, rexen"
tags: ["gleam", "regex", "nfa", "rexen"]
draft: false
---

A couple months ago, I built a tool called [rexen](https://github.com/tonievictor/rexen) that compiles and evaluates regular expressions (regexes) using Non-deterministic Finite Automaton (NFA). Regexes are pretty ubiquitous in computer programming and this was my attempt at understanding how they work. 

A regular expression (regex) is a sequence of characters/symbols that abstractly
represent or define a [set](https://en.wikipedia.org/wiki/Set_(mathematics)) of strings (also known as a [regular language](https://en.wikipedia.org/wiki/Regular_language)). For
example, the regex `a*b` defines the set of strings `{ b, ab, aab, aaab, aaaab,
... }` ie. zero or more `a's` followed by a `b`.

The question is 
> Given a string, how can we determine if it is a member of the set defined by
> a regex? In other words, how can we check that a string conforms to the
> pattern specified by a regex?

If this were a plain string comparison, it'd be as straightforward as checking
that the two strings are of the same length and that they have the same
characters at each index ie. the string `bob` matches the string `bob` because it
fulfills the requirements above. But with regexes, we're not dealing with simple 1:1
mappings as a single regex can match multiple (and possibly infinite) number of strings.
So, we need a different strategy.

The idea is to represent the regex as a bunch of (linked) steps or states and
try to evaluate the input string by simulating it through these states, if we
reach a desired end state then we can be sure that the string is indeed a member
of the set defined by that regex. 

In the contrived example below, the string `bob` satisfies the
requirement to incrementally move from the initial state up until the end state, so we
can conclude that it matches the pattern specified by the regex. In contrast,
the string `bab` fails to meet the requirement to move from state 1 to 2 and
since there is no other logical way to get to the end state, we can conclude that it
fails to match the regex pattern.
![String simulation overview](/images/bobbab.png)
This idea is formally referred to as a `finite automata` or `finite state machine`.

A Finite Automaton ([FA](https://en.wikipedia.org/wiki/Finite-state_machine)) is a mathematical model that can be in one 
of a limited number of states and can transition between them in reaction to an input/event. 
It consists of a `finite` set of states, an initial state, a transition function that defines
the rules to go from one state to another and (optionally) a set of end states. For example, a light bulb can be
in only one of two states at a time (off or on) and can transition between these
states based on an external signal from a switch. 

There a two types of FAs: Deterministic Finite Automaton (DFA) and Non-deterministic Automaton (NFA).
The major difference between the both of them is that in a DFA, every state has exactly one transition for each 
possible input while in an NFA, an input can lead to one, more than one, or no transition for a given state. Technically, all NFAs can be represented as (possibly more complex) DFAs and there are a number of algorithms to convert an NFA to its corresponding DFA.

## Converting Regexes to NFA
To convert a regular expression to NFA we go through the following steps:
1. Split the regex string into distinct tokens and establish operator
precedence
2. Convert from infix to postfix (reverse polish) notation using the Shunting-Yard Algorithm
(SYA).
3. Thompons construction algorithm

- For empty expressions `""` return ![Epsilon Rule](/images/epsilon-rule.png)
- For single character expressions ie `a` return ![Symbol Rule](/images/symbol-rule.png)
- For union expressions ie `a|b` (a or b) we first create different nfas for `a` and `b` and then join them together by creating a new initial state (`q`) with an epsilon transition from `q` to the initial states of the nfas for `a` and `b` and an epsilon transition from final states of `a` and `b` to a new final state `qf`. ![Union Rule](/images/union-rule.png)
- For concatenation `ab` (a followed by b) we create the individual nfas for `a` and `b` and connect them together by creating an epsilon transition from the end state(s) of `NFA(a)` to the initial state of `NFA(b)`. ![Concatenation Rule](/images/concat-rule.png)
-  For closure `a*` (zero or more occurrences of a) we create two new states `q` and `f` then we create a transition from `q` to `f`, from `q` to the initial state of `NFA(a)`, from the end state of `NFA(a)` to `f` and then from the end state of `NFA(a)` to its initial state. ![Closure Rule](/images/closure-rule.png)
> The names we call the states are really not important. We just have to make
> sure that the names of each states are unique to avoid collisions when trying
> to transition between states. Also, if you ever need to visualize the `nfa`,
> it's easier to differentiate between states if they have different labels.

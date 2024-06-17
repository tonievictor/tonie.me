---
title: "Contollabilty and Observability of Software Systems"
description: "Controllabilty and observability are both sides of the same coin. The former invokes a desired output while the latter infers the state of the system using the provided outputs"
pubDate: "19 June 2024"
heroImage: "/images/projectsample.png"
heroAlt: "An image representin etc"
tags: "blog controllabilty observability software system dynamic system"
draft: true
---
Software systems are generally dynamic systems. They process data, perform computations and generate output based on some input. This is typical of dynamic systems which are systems whose behaviour changes over time and can be influenced or observed through inputs and outputs.

Controllablility of a system is the ability to influence the state of the system by applying specific inputs. It involves invoking a desired output, behaviour or performance from a system by providing appropriate input. While it does not directly tell us about the state our system, it can help us build solutions that adapt to changing conditions, operational requirements and user interaction.

Observability is the ability to infer the internal state of the system from the knowledge provided by the external outputs. It complements controllability by providing insight into the state of the system to detect anomalies and understand the effects of input or changes in real-time.

Put together, they establish feedback loops where information gathered from observing the system's outputs and behaviours can inform decisions about the next steps to be taken. This involves adjusting parameters, addressing performance bottlenecks, scaling, integrating with other existing systems etc. To implement all of these, the system first has to be controllable.

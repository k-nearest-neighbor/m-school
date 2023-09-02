---
title: '📋 Graph of Thoughts: Solving Elaborate Problems with Large Language Models'
nickname: 'The (Zurich) Graph of Thoughts Paper'
template: 'paper'
authors: Maciej Besta, Nils Blach, Ales Kubicek, Robert Gerstenberger, Lukas Gianinazzi, Joanna Gajda, Tomasz Lehmann, Michal Podstawski, Hubert Niewiadomski, Piotr Nyczyk, Torsten Hoefler
cited_as: 'Besta et. al. 2023'
source: 'https://arxiv.org/abs/2308.09687'
published_date: 'Aug 18, 2023'
composed_date: 'Sep 2, 2023'
updated_date:
tags: ['in-context-learning', 'prompt-engineering', 'thought-modeling']
nextjs:
  metadata:
    title: 'Graph of Thoughts: Solving Elaborate Problems with Large Language Models'
    description: 'Graph of Thoughts: Solving Elaborate Problems with Large Language Models'
---

## Overview

In order to properly introduce a discussion on this paper it is worth looking at the prior work which is being improved upon.

### Prior Work

{% inlineimg src="/2308-graph-of-thoughts/figure-1.png" caption="Figure 1 of the work" attribution="(Besta et. al. 2023)" attributionHref="https://arxiv.org/abs/2308.09687"/%}

**Input-Output (IO)**

This is the baseline or control condition of no special thought modelling being present. An LLM is fed in input sequence {% latex src="x" /%} to transform into an output sequence {% latex src="y" /%} without intermediate "thoughts".

**Chain-of-Thought (CoT)**

Chain-of-Thought () introduced intermediate thoughts {% latex src="a_1, a_2, ..." /%} between {% latex src="x" /%} and {% latex src="y" /%}.

**Multiple CoTs**

**Tree-of-Thoughts (ToT)**

## Observations

This differs from other "thought modeling"

They don't demonstrate backtracking in their example

## Future Directions

<!-- **Please cite the original work**! To cite this critique: -->

---

<!--




using this to train a model which solves arc.
make 1+ GoOs for Arc examples, train

everything is connected graph neural Networks

see boosting logical reasoning


the binding problem




-->

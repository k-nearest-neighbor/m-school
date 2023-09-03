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
tags: ['in-context-learning', 'prompt-engineering', 'thought-process-prompting']
nextjs:
  metadata:
    title: 'Graph of Thoughts: Solving Elaborate Problems with Large Language Models'
    description: 'Graph of Thoughts: Solving Elaborate Problems with Large Language Models'
---

## Overview

### Prior Work

This paper can be viewed as a continuation of a family of prior work which has often been called merely "**prompt engineering**" or "**prompting approaches**", for lack of a more specific term to be developed. "**_Thought-process prompting_**"? To summarize:

**Input-Output (IO)**

This is the baseline or control condition of no special thought process prompting being present, which is used in these papers. An LLM is fed an input sequence {% latex src="x" /%}, and expected to transform it into an output sequence {% latex src="y" /%} without intermediate "thoughts". In other words, the LLM is being used as it normally is:

_Question_ &rarr; _answer_, or, _Direct prompt_ &rarr; _direct answer_.

**Chain-of-Thought (CoT)**

Chain-of-Thought () introduced intermediate thoughts {% latex src="a_1, a_2, ..." /%} between {% latex src="x" /%} and {% latex src="y" /%}.

**Multiple CoTs**

**Tree-of-Thoughts (ToT)**

{% inlineimg src="/2308-graph-of-thoughts/figure-1.png" caption="Figure 1 of the work" attribution="(Besta et. al. 2023)" attributionHref="https://arxiv.org/abs/2308.09687"/%}

## Observations

section 6. Table 2

This differs from other "thought modeling"

They don't demonstrate backtracking in their example

High expectations

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

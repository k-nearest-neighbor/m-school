---
title: '📋 Code Llama: Open Foundation Models for Code'
nickname: 'The Code Llama Paper'
template: 'paper'
authors: Baptiste Rozière, Jonas Gehring, Fabian Gloeckle, Sten Sootla, Itai Gat, Ellen Tan, Yossef (Yossi) Adi, Jingyu Liu, Tal Remez, Jérémy Rapin, Artyom Kozhevnikov, Ivan Evtimov, Joanna Bitton, Manish Bhatt, Cristian Canton Ferrer, Aaron Grattafiori, Wenhan Xiong, Alexandre Defossez, Jade Copet, Faisal Azhar, Hugo Touvron, Gabriel Synnaeve, Louis Martin, Nicolas Usunier, Thomas Scialom
cited_as: 'Rozière et. al. 2023'
source: 'https://arxiv.org/abs/2308.12950'
published_date: 'Aug 24, 2023'
composed_date: 'Aug 26, 2023'
updated_date:
tags: ['code generation', 'foundation models', 'llama2']
nextjs:
  metadata:
    title: 'Code Llama: Open Foundation Models for Code'
    description: 'Code Llama: Open Foundation Models for Code'
---

## Overview

In this paper, Meta AI introduced the "**Code Llama**" code generation model family based on Llama 2, coming in **7B, 13B,** and **34B** sizes and released under an {% alink text="open(ish) license" href="https://github.com/facebookresearch/llama/blob/main/LICENSE" /%}. This model family achieves near SOTA performance on HumanEval and MBPP, and is now the strongest public _foundation_ model for code generation. **&#8212; a record held until the WizardLM team shattered it** **_less than two days later_ &nbsp;by using Code LLama as a base to create {% alink text="WizardCoder-Python-34B-V1.0" href="https://github.com/nlpxucan/WizardLM/tree/main/WizardCoder#comparing-wizardcoder-python-34b-v10-with-other-llms" /%}.**

If you aren't immediately distracted by the mention of a shinier model and are still reading -- great! **There's much to learn from Code Llama and it will likely stand as a viable foundation for the foreseeable future** ... which lately ... is at least a few months. 😄

Here's the performance of Code LLama on HumanEval (Chen et al., 2021) and MBPP (Austin et al., 2021), breaking ground for open models:

{% inlineimg src="/2308-code-llama/nice-eval-table.jpg" caption="Code LLama benchmark performance." attribution="Meta AI" attributionHref="https://ai.meta.com/blog/code-llama-large-language-model-coding/"/%}

Side-note: there's an inaccuracy regarding the GPT-4 performance in this table, {% nextlink text="which I wrote about here" href="/post/why-do-we-keep-using-a-dated-gpt-4-benchmark-score" /%}.

**Code Llama is built on Llama 2,** by giving it a series of training and fine-tuning tasks shown in the figure below. The Llama 2 base is trained on general-purpose tasks, whereas many of the top-performing code generation models to date, like **WizardCoder** {% ref text="(Luo et al. 2023)" href="https://arxiv.org/abs/2306.08568" /%}, have been trained on foundation models which were trained entirely on code-specific tasks: mostly **StarCoder** {% ref text="(Li et al. 2023)" href="https://arxiv.org/abs/2305.06161" /%} as of lately. The Code LLama team shows that **training on both general-purpose and code-specific tasks can achieve a superior coding result,** and many code synthesis models will be scrambling to rebuild upon this newer foundation to perform even better than what we've seen so far.

{% inlineimg src="/2308-code-llama/code-llama-pipeline.jpg" caption="The Code LLama training pipeline." attribution="Meta AI" attributionHref="https://ai.meta.com/blog/code-llama-large-language-model-coding/"/%}

So this is the Code Llama family. As you can see there are 3 variants on a base of LLama2 foundation models **trained on 500B coding task tokens**:

1. _Code Llama_

- **Fine-tuned on 20B long context tokens**, a process referred to in the paper as "**LCFT**".
- The important details will be outlined in these notes.

2. _Code Llama-Instruct_

- **Fine-tuned on 5B instruction following tokens**, using "**RLHFv5**" as described in the Llama2 paper {% ref text="(Touvron et al. 2023b)" href="https://arxiv.org/abs/2307.09288" /%}.
- A small portion of this (8%) is using a proprietary dataset.

3. _Code Llama-Python_

- **Trained on an additional 100B instruction following tokens**,
- and also the same 20B token instruction fine-tuning as Code Llama-Instruct.

### Main Contributions

## Methodology

## Observations

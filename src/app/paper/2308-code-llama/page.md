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

### A New Foundation

In this paper, **Meta AI** introduced the "**Code Llama**" foundation model family for code generation, which comes in **7B, 13B,** and **34B** sizes and released under an {% alink text="open(ish) license" href="https://github.com/facebookresearch/llama/blob/main/LICENSE" /%}. This model family achieves strong performance on **HumanEval** {% ref text="(Chen et al. 2021)" href="https://arxiv.org/abs/2107.03374" /%} and **MBPP** {% ref text="(Austin et al. 2021)" href="https://arxiv.org/abs/2108.07732" /%}, and is now the strongest (open) foundation model for code generation. It is already being used for its intended purpose by the wider community &#8212; Within 48 hours of its release, the **WizardCoder** {% ref text="(Luo et al. 2023)" href="https://arxiv.org/abs/2306.08568" /%} team shattered records for open code generation models by using it as a base to release {% alink text="WizardCoder-Python-34B-V1.0" href="https://github.com/nlpxucan/WizardLM/tree/main/WizardCoder#comparing-wizardcoder-python-34b-v10-with-other-llms" /%}.

If you aren't immediately distracted by the mention of a shinier model and are still reading -- great! **There's much to learn from Code Llama and it will likely stand as a viable foundation for the foreseeable future** ... which lately is at least a few months. 😄

**Code Llama is built on Llama2 {% ref text="(Touvron et al. 2023b)" href="https://arxiv.org/abs/2307.09288" /%}**, by giving it a series of training and fine-tuning tasks shown in the figure below. Llama 2 is of course a model trained on many general-purpose tokens, whereas many of the top-performing (public) code generation models to date, like **WizardCoder** {% ref text="(Luo et al. 2023)" href="https://arxiv.org/abs/2306.08568" /%}, have been built on foundation models which were trained on entirely code-specific tasks (mostly **StarCoder** {% ref text="(Li et al. 2023)" href="https://arxiv.org/abs/2305.06161" /%} currently). The Code LLama team confirms what we already know from GPT-4: **training on both general-purpose and code-specific tasks can achieve a superior coding result**. As a superior base for coding, many open program synthesis models will be moving to base their models upon Code Llama.

### Variants

{% inlineimg src="/2308-code-llama/code-llama-pipeline.jpg" caption="The Code LLama training pipeline." attribution="Meta AI" attributionHref="https://ai.meta.com/blog/code-llama-large-language-model-coding/"/%}

As you can see there are **3 variants** each **trained on at least 500B coding tokens**. These tokens are de-duplicated samples from "publicly available code". 8% of these 500B tokens are also code-related natural language.

1. _**Code Llama**_

- **Fine-tuned on 20B long context tokens**, a process referred to in the paper as "**LCFT**" (long context fine-tuning). The important details will be outlined in these notes.
- The **7B and 13B models are trained with an infilling objective**. They are intended to be used in an IDE to complete code in the middle of a file, or similar tasks.
- The **34B** model is _not_ trained with the infilling objective.

2. _**Code Llama-Instruct**_

- **Fine-tuned on an additional 5B instruction following tokens**, using "**RLHFv5**" as described in the Llama2 paper {% ref text="(Touvron et al. 2023b)" href="https://arxiv.org/abs/2307.09288" /%}.

3. _**Code Llama-Python**_

- **Trained on 100B Python-specific tokens**,
- and also **fine-tuned on 20B long context tokens**, as with Code Llama.
- Not trained with on infilling

### Performance

{% inlineimg src="/2308-code-llama/nice-eval-table.jpg" caption="Code LLama benchmark performance." attribution="Meta AI" attributionHref="https://ai.meta.com/blog/code-llama-large-language-model-coding/"/%}

**Side-note**: There's an inaccuracy regarding the GPT-4 performance in this table, {% nextlink text="which I wrote about here" href="/post/why-do-we-keep-using-a-dated-gpt-4-benchmark-score" /%}

## Observations

### Budgets

Fine-tuning on a general purpose pre-trained model (Llama2) is substantially more cost-effective than training from scratch. There isn't a surprise here, except perhaps at the amount:

{% inlineimg src="/2308-code-llama/figure-5b.png" caption="Figure 5(b). Training loss of fine-tuning Llama2 vs from scratch on code." attribution="(Rozière et. al. 2023)" attributionHref="https://arxiv.org/abs/2308.12950"/%}

> At the end of training, the loss of the model trained from scratch is equal to the loss of Code Llama 7B at about half of its training (with 240B less training tokens). Moreover, this gap becomes larger over time.

### Scaling

A note on extrapolating from performance scaling behaviors observed between the different model sizes in this family:

> We can hypothesize that specializing larger models to code would lead to significant further gains on coding tasks. Moreover, the Chinchilla scaling laws {% ref text="(Hoffmann et al., 2022)" href="https://arxiv.org/abs/2203.15556" /%} indicate that larger models would benefit more from training on more tokens.

Again not surprising, but a statement of "Chinchilla scaling laws are in effect" always inspires enthusiasm. 🚀

### Long Context Fine-Tuning

"**LCFT**" is a fine-tuning stage that extends the context length from 4,096 to 100k tokens, by modifying the RoPE positional embeddings {% ref text="(Su et al 2021)" href="https://arxiv.org/abs/2104.09864" /%} used by LLama 2. See section 2.4

Long context task training is done in a fine-tuning stage for cost reasons; it is effective and doesn't "significantly" increase the cost of training the models.

LCFT slightly hurts performance on standard code synthesis benchmarks consisting of short sequences.

### Infilling

Training on the **7B** and **13B** models of Code Llama and Code Llama Instruct was performed with an **infilling** (or **_fill-in-the-middle, FIM_**) objective rather than a next-token prediction objective. It seems they sought to measure the effectiveness and loss-cost of FIM, encouraged by {% ref text="(Bavarian et al. 2022)" href="https://arxiv.org/abs/2207.14255" /%} & {% ref text="(Allal et al. 2023)" href="https://arxiv.org/abs/2301.03988" /%} and got good results on code infilling afterward. Details are in section 3.2. They confirmed that there was zero cost to autoregressive left-to-right test loss, and only a negligible cost downstream performance. Using the infilling objective however causes these models to reach **SOTA performances on code infilling benchmarks among similarly sized models**.

> Because of this modest decline in performance and the wide applicability of models with infilling capability, we decide to release Code Llama 7B and 13B in this configuration

Interestingly, the Code Llama Python variant is _not_ trained with this code-infilling objective. (For cost/time?)

### Self-Instruct

This is said to involve:

- "_proprietary instruction data for improved safety and helpfulness_"
- and (an also proprietary) "_self-instruct dataset created by prompting Llama 2 for coding problems and Code Llama to generate associated unit tests and solutions._"

{% inlineimg src="/2308-code-llama/self-instruct-recipe.png" caption="The recipe used for the self-instruct dataset." attribution="(Rozière et. al. 2023)" attributionHref="https://arxiv.org/abs/2308.12950"/%}

Self-instruct has an impact on coding benchmark performance, notably for MBPP zero-shot above 7B:

{% inlineimg src="/2308-code-llama/table-8.png" caption="Table 8." attribution="(Rozière et. al. 2023)" attributionHref="https://arxiv.org/abs/2308.12950"/%}

### The Ethics of Kill -9

There's a funny example mentioned on page 16 and in Appendix Table 14. Llama 2's training biases it toward not being ok with the "ethical" matter of killing a process. The `-9` is actually not mentioned, I just think it makes for a funnier heading for these notes.

{% inlineimg src="/2308-code-llama/killing-processes.png" caption="(Can) you tell me how to kill a process? 😄" attribution="(Rozière et. al. 2023)" attributionHref="https://arxiv.org/abs/2308.12950"/%}

{% br /%}
{% br /%}
{% br /%}
{% br /%}
{% br /%}
{% br /%}
{% br /%}
{% br /%}
{% br /%}
{% br /%}
{% br /%}

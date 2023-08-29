---
title: '🧐 Why do We Keep Comparing Against an Old GPT-4 Result?'

composed_date: 'Aug 29, 2023'
updated_date:
tags: ['code generation', 'metrics', 'gpt-4']
nextjs:
  metadata:
    title: 'Why do We Keep Comparing Against an Old GPT-4 Result?'
    description: 'Why do We Keep Comparing Against an Old GPT-4 Result?'
---

## The Culprits

{% alink text="According to Meta AI" href="https://ai.meta.com/blog/code-llama-large-language-model-coding/" /%} here is the performance of Code LLama on the **HumanEval** {% ref text="(Chen et al. 2023)" href="https://arxiv.org/abs/2107.03374" /%} and **MBPP** {% ref text="(Austin et al. 2022)" href="https://arxiv.org/abs/2108.07732" /%} benchmarks for coding ability:

{% inlineimg src="/2308-code-llama/nice-eval-table.jpg" caption="Code LLama benchmark performance. (The GPT-4 score is actually much higher now)." attribution="Meta AI" attributionHref="https://ai.meta.com/blog/code-llama-large-language-model-coding/"/%}

It's worth noting that **the most recent GPT-4 HumanEval performance seems not reflected in the chart**. Some have called this disingenuous. From what I can tell, the chart is reporting the HumanEval score from the introductory **GPT-4 paper** {% ref text="(OpenAI 2023)" href="https://arxiv.org/abs/2303.08774" /%} from March:

{% inlineimg src="/2308-code-llama/gpt4-p7-t2.png" caption="Pg.7 of the GPT-4 paper" attribution="(OpenAI 2023)" attributionHref="https://arxiv.org/abs/2303.0877"/%}

But only a week later the GPT-4 HumanEval 0-shot pass@1 metric was updated from 67.0% to 82.0%, in the **"Sparks of AGI" paper** {% ref text="(Bubeck et al. 2023)" href="https://arxiv.org/abs/2303.12712v1" /%}. Back then people noticed the jump and wondered about it, I remember.

{% inlineimg src="/2308-code-llama/sparks-pg21-t1.png" caption="Pg.21 of the Sparks of AGI paper" attribution="(Bubeck et al. 2023)" attributionHref="https://arxiv.org/abs/2303.12712v1"/%}

So why did the Code Llama team compare against a dubious, lower number for GPT-4? It's unclear. **There's a knee-jerk reaction to say this is from bias** or wishful thinking and that they are being intentionally misleading. However, **I think it's entirely possible that there was a preference to report only what OpenAI has said** since the "sparks" paper was not authored directly by OpenAI but instead by the (albeit closely affiliated) Microsoft Research. Perhaps also there was a reluctance to cite this paper for other reasons. **I would say it was still a credible measurement from a widely read paper** though and should have (been verified) and found it's way into subsequent literature. Running the verification is not difficult at all but takes some effort and a few dollars.

**It's also possible there was also some groupthink**, if you expect that others must have already done the measurement, as **Meta AI isn't alone in the mistake**. I have noticed a few other papers doing the same thing, for instance **WizardCoder** {% ref text="(Luo et al. 2023)" href="https://arxiv.org/abs/2306.08568" /%} **also chose to compete against the inaccurate 67% GPT-4 score** despite the newer score being available at the time of publishing (see pg 6). Although that team currently {% alink text="acknowledges the correct GPT-4 score in later communications" href="https://github.com/nlpxucan/WizardLM/tree/main/WizardCoder#comparing-wizardcoder-python-34b-v10-with-other-llms" /%}.

## Whoops

So anyway. I guess my point is: stop that. 😐

**I guess we can just resolve to correct this in the future, and there will never again be any inaccuracies in published research.** 😄

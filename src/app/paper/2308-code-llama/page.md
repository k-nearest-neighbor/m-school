---
title: 'Code Llama: Open Foundation Models for Code'
nickname: 'The Code Llama paper'
template: 'paper'
authors: Baptiste Rozière, Jonas Gehring, Fabian Gloeckle, Sten Sootla, Itai Gat, Ellen Tan, Yossef (Yossi) Adi, Jingyu Liu, Tal Remez, Jérémy Rapin, Artyom Kozhevnikov, Ivan Evtimov, Joanna Bitton, Manish Bhatt, Cristian Canton Ferrer, Aaron Grattafiori, Wenhan Xiong, Alexandre Defossez, Jade Copet, Faisal Azhar, Hugo Touvron, Gabriel Synnaeve, Louis Martin, Nicolas Usunier, Thomas Scialom
cited_as: 'Rozière et. al. 2023'
source: 'https://ai.meta.com/research/publications/code-llama-open-foundation-models-for-code/'
published_date: 'Aug 24, 2023'
notes_composed_date: 'Aug 26, 2023'
notes_updated_date:
tags: ['code', 'code-generation', 'llama2']
nextjs:
  metadata:
    title: 'Code Llama: Open Foundation Models for Code'
    description: 'Code Llama: Open Foundation Models for Code'
---

## Summary

Meta AI introduces the **Code Llama** model family for code generation tasks based on Llama 2, and describes its development. It's released under an {% alink text="open(ish) license 👍" href="https://github.com/facebookresearch/llama/blob/main/LICENSE" /%} and comes in **7B, 13B, 34B** variants. This model family achieves near SOTA performance on HumanEval and MBPP, and was the strongest public foundation model for code generation when it was published, **a record which was held until {% alink text="WizardCoder-Python-34B-V1.0" href="https://github.com/nlpxucan/WizardLM" /%} shattered it** **_less than two days later._**

If you're still reading and not distracted by mention of an even newer and shinier model -- great! **There's much to learn from Code Llama and it will likely stand as a viable foundation for the foreseeable future** ... which is to say at least a few weeks lately? 😁 It's important that Code Llama is built on Llama 2, whereas WizardLM is built on Llama 1, so many similar models will be scrambling to rebuild upon the newer Code Llama family to perform even better.

{% inlineimg src="/2308-code-llama/nice-eval-table.jpg" /%}

### Main Contributions

## Methodology

## Observations

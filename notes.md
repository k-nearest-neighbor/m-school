## Papers to look into

### Code generation + benchmarks

- Measuring coding challenge competence with APPS. In NeurIPS Datasets and Benchmarks, 2021
- A survey on pretrained language models for neural code intelligence. arXiv:abs/2212.10079, 2022.
- StarCoder: May the source be with you! arXiv:abs/2305.06161, 2023.
- Competition-level code generation with AlphaCode. arXiv:abs/2203.07814, 2022.
- (AlphaCode is by Yujia Li, Starcoder is by Raymond Li)
- InCoder: A generative model for code infilling and synthesis. In ICLR, 2023.

- Evaluating large language models trained on code. arXiv:abs/2107.03374, 2021. (The Codex Paper)

- LongCoder: A long-range pre-trained language model for code completion. arXiv:abs/2306.14893, 2023. (the longcoder paper) has a benchmark

- HumanEval+
- DS-1000 (a benchmark?)

- Lost in the middle: How language models use long contexts. arXiv:abs/2307.03172, 2023b. (also a good ability paper)

  on the subject of synthetic data

- Unnatural instructions: Tuning language models with (almost) no human labor.

### Alignment and ability (maybe this is still a good category)

- LLaMA: Open and efficient foundation language models. arXiv:abs/2302.13971, 2023a
- CM3: A causal masked multimodal model of the internet. arXiv:abs/2201.07520, 2022 (The Causal Masking Paper)
- Efficient training of language models to fill in the middle. arXiv:abs/2207.14255, 2022. (The Infilling Paper)
  long context. also a coding related paper:
- Extending context window of large language models via positional interpolation. arXiv:abs/2306.15595, 2023b

- Training verifiers to solve math word problems. arXiv:abs/2110.14168, 2021. (The GSM8K benchmark paper)

I want to understand this "well known instability phenomenon when testing transformer models on sequences longer than those seen during training:

- Train short, test long: Attention with linear biases enables input length extrapolation. In ICLR, 2022.

- Robustified ANNs Reveal Wormholes Between Human Category Percepts MIT https://arxiv.org/pdf/2308.06887.pdf more a paper about humans may be manipulated with ML

### Security

LLM censorship: A machine learning challenge or a computer security problem? arXiv:abs/2307.10719, 2023.

## Papers to definitely do which may not be added to the kanban yet:

- MBPP Program synthesis with large language models. arXiv:abs/2108.07732, 2021.
- APPS Measuring coding challenge competence with APPS. In NeurIPS Datasets and Benchmarks, 2021. (coding interview benchmark)
- MultiPL-E: A scalable and polyglot approach to benchmarking neural code generation. IEEE Trans. Software Eng., 49(7):3675–3691, 2023.

- Training compute-optimal large language models. arXiv:abs/2203.15556, 2022. (Chinchilla Scaling Laws)

- How to catch a Chinchilla

- Attention is all you need. In NIPS, pp. 5998–6008, 2017. Vaswani et al (The Transformer Paper)

LLaMA: Open and efficient foundation language models. arXiv:abs/2302.13971, 2023a.
Llama 2: Open foundation and fine-tuned chat models. arXiv:abs/2307.09288, 2023b.

- Mention that they provide inference code for both completion and infilling models in th repo
- Training on code, vs starting from a general-purpose model. observation section 3.4.1 - they show that initializing on llama2 outperforms only for a certain budget

- also on topic of budget. They show infilling comes at low cost / capable in 7B and 13B. See infilling in intro and section 3.2

- It is significante that this paper to talk about "unlocking repository-level reasoning for completion or synthesis
- They do this by proposing an additional fine-tuning state that extends the maximum context length from 4096 to 100000 tokens, by modifying the RoPE positional embeddings see section 3.3
- they call it long context fine-tuning (LCFT)

- new machine generated "self-instruct" dataset. is it also open source? section 4

instruction tuning
proprietary dataset (8%?)

- They use "RLHF V5" outlined in the Llama2 paper (touvron et al 2023b) (that section 3)
  "proprietary dataset" portion actually contains few code related tasks

They say this is mainly because collecting code-related instruction datasets is expensive because it requires input from professional developers

(IDEA: use the OpenAssistant infrastructure to create such a dataset. get a grant, shit.)

Code Llama: a foundational model for code generation tasks,
• Code Llama - Python: a version specialized for Python,
• Code Llama - Instruct: a version fine-tuned with human instructions and self-instruct code synthesis
data.
more description in section 2.1

The value of specialization

- Llama 2 was trained on 2T tokens, and training on only 500B of extra tokens from a code-heavy dataset results in massive performance gains on both HumanEval and MBPP, to the point that Llama 2 70B is roughly equivalent to Code Llama 7B on Python coding benchmarks.

Code Llama - Python shows clear gains on the competition-level problems where solutions are more complex.

We can hypothesize that specializing larger models to code would lead to significant further gains on coding tasks. Moreover, the Chinchilla scaling laws (Hoffmann et al., 2022) indicate that larger models would benefit more from training on more tokens.

LCFT slightly hurts performance on standard code synthesis benchmarks consisting of short sequences.

## Say No To Murder!

Funny note: "Can you tell me how to kill a process?". funny prompt pg 39. Say No To Murder!

{% callout type="warning" title="#dangerous-prompt"%}
Yo. Should I go get the nine? And just _kill_ a process? I'm about to roll up on it _quick_ and be like _kill-9 sucka!_
{% /callout %}

That one isn't in the paper. 😂

{% ref text="()" href="" /%}

---

Working with HumanEval

```
git clone https://github.com/openai/human-eval
pip install -e human-eval
```

quick preview of HumanEval default dataset:

```bash
cd human-eval/data
gunzip HumanEval.jsonl.gz
cat HumanEval.jsonl | jq #brew install jq
```

```python
import json, colorterm
with open('./HumanEval.jsonl','r') as f:
     lines = [line for line in f.readlines()]

     # to see the prompts legibly
     for line in lines:
         json_object = json.loads(line)
         print('-----------------------------------')
         print(json_object['prompt'])
```

```python
import json
with open('./HumanEval.jsonl','r') as f:
     for line in f:
         json_object = json.dumps(json.loads(line), indent=4)
         print(json_object)
```

---

```javascript
// work in progress
function refs() {
  let s = ''
  ;[...new Set($$('.citationRef').map((item) => item.text))].forEach(
    (text, i) => {
      s = s + ('[' + (i + 1) + '] **' + text + '** \n')
    }
  )
  console.log(s)
}
```

## CopyFasta

https://towardsdatascience.com/transformers-explained-visually-part-3-multi-head-attention-deep-dive-1c1ff1024853
https://paperswithcode.com/method/multi-head-attention

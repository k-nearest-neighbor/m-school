

// would be nice to parse these from the posts and papers directories using the frontmatter
export const posts = [
  { 
    template: 'post',
    title: "📓 What does Pass@1 mean? Understanding confidence metrics used to evaluate AI Code Generation",
    href: "/post/the-pass-at-k-metric",
    tags: ['generative-code', 'benchmarks', 'HumanEval'],
    authored_date: new Date('2023-08-11T12:00:00Z'),
    teaseimg: null,
    excerpt: "A metric for evaluating the performance of AI agents in a multi-agent environment.",
    hide_in_latest: false,
    hide_in_all: false,
    hide: true
  },

 { 
    template: 'post',
    title: '🔬 Why are we still using a dated GPT-4 benchmark score?',
    href: "/post/why-are-we-still-using-a-dated-gpt-4-benchmark-score",
    tags: ['generative-code', 'benchmarks','gpt-4'],
    authored_date: new Date('2023-08-29T12:00:00Z'),
    teaseimg: null,
    excerpt: "Several code LLM papers prefer to use a GPT-4 metric which is known to be dated",
    hide_in_latest: false,
    hide_in_all: false,
    hide: false
  },
 { 
    template: 'post',
    title: '⚠️ AI Alignment and The Messiah Bias',
    href: "/post/ai-alignment-and-the-messiah-bias",
    tags: ['alignment', 'governance'],
    authored_date: new Date('2023-09-19T12:00:00Z'),
    teaseimg: null,
    excerpt: "There is a cognitive bias which is threatening the field of AI Alignment.",
    hide_in_latest: false,
    hide_in_all: false,
    hide: false
  },

  {
    template: 'paper',
    title: '📋 Code Llama: Open Foundation Models for Code',
    nickname: 'The Code Llama Paper', // can be null
    cited_as: 'Rozière et. al. 2023',
    href: '/paper/2308-code-llama',
    author1: 'Rozière',
    source: 'https://ai.meta.com/research/publications/code-llama-open-foundation-models-for-code/',
    published_date: new Date('2023-08-24T12:00:00Z'),
    published_date_str: 'Aug 24, 2023',
    authored_date: new Date('2023-08-26T12:00:00Z'),
    authored_date_str: 'Aug 26, 2023',
    tags: ['generative-code', 'llama2', 'foundation-models'],
    hide_in_latest: false,
    hide_in_all: false,
    hide: false
  },
  {
    template: 'paper',
    title: '📋 Graph of Thoughts: Solving Elaborate Problems with Large Language Models',
    nickname: 'The (Zurich) Graph of Thoughts Paper', // can be null
    cited_as: 'Besta et. al. 2023',
    href: '/paper/2308-graph-of-thoughts',
    author1: 'Besta',
    source: 'https://arxiv.org/abs/2308.09687',
    published_date: new Date('2023-08-24T12:00:00Z'),
    published_date_str: 'Aug 18, 2023',
    authored_date: new Date('2023-09-02T12:00:00Z'),
    authored_date_str: 'Sep 02, 2023',
    tags: ['in-context-learning', 'prompt-engineering', 'thought-modeling'],
    hide_in_latest: false,
    hide_in_all: false,
    hide: true
  },  
]




export const collectLatestPosts = (n) => { // adjust this to do papers too
  return posts
    .filter((item) => !item.hide_in_latest && !item.hide)
    .sort((a, b) => b.authored_date - a.authored_date)
    .slice(0, n)
}

export const collectAllPosts = () => {
  return posts
    .filter((post) => post.template === 'post' && !post.hide_in_all && !post.hide)
    .sort((a, b) => b.authored_date - a.authored_date)
}

export const collectAllPostsAndPapers = () => {
  return posts
    .filter((item) => !item.hide_in_all && !item.hide)
    .sort((a, b) => b.authored_date - a.authored_date)
}

export const collectPostsWithTags = (includeTagsArray, excludeTagsArray) => {
  excludeTagsArray = excludeTagsArray || [];
  return posts
    .filter((post) => post.template === 'post' && !post.hide)
    .filter((post) => includeTagsArray.some((tag) => post.tags.includes(tag)))
    .filter((post) => !excludeTagsArray.some((tag) => post.tags.includes(tag)))
    .sort((a, b) => b.authored_date - a.authored_date)
    // .slice(0, n)
}

export const collectAllPapers = () => {
  return posts
    .filter((item) => item.template === 'paper' && !item.hide_in_all && !item.hide)
    .sort((a, b) => b.authored_date - a.authored_date)
}

export const collectPapersWithTags = (includeTagsArray, excludeTagsArray) => {
  excludeTagsArray = excludeTagsArray || [];
  return posts
    .filter((paper) => paper.template === 'paper' && !paper.hide)
    .filter((paper) => includeTagsArray.some(tag => paper.tags.includes(tag)))
    .filter((paper) => !excludeTagsArray.some(tag => paper.tags.includes(tag)))
    .sort((a, b) => b.authored_date - a.authored_date)
    // .slice(0, n)
}

export const collectPostsAndPapersWithTags = (includeTagsArray, excludeTagsArray) => {
  excludeTagsArray = excludeTagsArray || [];
  return posts
    .filter((item) => !item.hide_in_all && !item.hide)
    .filter((item) => includeTagsArray.some(tag => item.tags.includes(tag)))
    .filter((item) => !excludeTagsArray.some(tag => item.tags.includes(tag)))
    .sort((a, b) => b.authored_date - a.authored_date)
    // .slice(0, n)
}



export const navigation = [ 

  // {
  //   title: 'Latest',
  //   links: collectLatestPosts(5),
  //   hide: false
  // },
  {
    title: '',
    links: [
      { title: 'The School', href: '/' },
      { title: 'Curriculum', href: '/curriculum' },
      { title: 'Testimonials', href: '/testimonials' },
      { title: 'Enrollment', href: '/enrollment' },
      // { title: 'Careers', href: '/careers' },
      // { title: 'Contact', href: '/contact' },
    ],
  },

]
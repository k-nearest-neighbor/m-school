

// would be nice to parse these from the posts and papers directories using the frontmatter
const posts = [
  { 
    template: 'post',
    title: "The Pass@k Metric",
    href: "/post/the-pass-at-k-metric",
    tags: ['agents'],
    authored_date: new Date('2023-08-11T12:00:00Z'),
    teaseimg: null,
    excerpt: "A metric for evaluating the performance of AI agents in a multi-agent environment.",
    hide_in_latest: false,
    hide_in_all: false,
    hide: true
  },

  {
    template: 'paper',
    title: 'Code Llama: Open Foundation Models for Code',
    nickname: 'The Code Llama paper', // can be null
    cited_as: 'Rozière et. al. 2023',
    href: '/paper/2308-code-llama',
    author1: 'Rozière',
    source: 'https://ai.meta.com/research/publications/code-llama-open-foundation-models-for-code/',
    published_date: new Date('2023-08-24T12:00:00Z'),
    published_date_str: 'Aug 24, 2023',
    authored_date: new Date('2023-08-26T12:00:00Z'),
    authored_date_str: 'Aug 26, 2023',
    tags: ['ai-coding', 'code-generation', 'llama2'],
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

export const collectPostsWithTags = (includeTagsArray, excludeTagsArray) => {
  excludeTagsArray = excludeTagsArray || [];
  return posts
    .filter((post) => post.template === 'post' && !post.hide)
    .filter((post) => includeTagsArray.some(tag => posts[0].tags.includes(tag)))
    .filter((post) => !excludeTagsArray.some(tag => posts[0].tags.includes(tag)))
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
  // debugger
  return posts
    .filter((paper) => paper.template === 'paper' && !paper.hide)
    .filter((paper) => includeTagsArray.some(tag => paper.tags.includes(tag)))
    .filter((paper) => !excludeTagsArray.some(tag => paper.tags.includes(tag)))
    .sort((a, b) => b.authored_date - a.authored_date)
    // .slice(0, n)
}




export const navigation = [ 
  {
    title: 'Latest',
    links: collectLatestPosts(3),
    hide: true
  },
  {
    title: 'AI Agents & Code Generation', // want to switch these links to /agents_and_coding
    links: [
      { title: 'Posts', href: '/agents/posts' },
      { title: 'Papers', href: '/agents/papers' },
      // { title: 'Overview', href: '/agents/papers' },
      { title: 'Benchmarks & Datasets', href: '/agents/benchmarks_and_datasets' },
      { title: 'People & Projects', href: '/agents/organizations-and-projects' },
    ],
  },
  // {
  //   title: 'AI Coding',
  //   links: [
  //     { title: 'Posts', href: '/coding/posts' },
  //     { title: 'Papers', href: '/coding/papers' },
  //     { title: 'Benchmarks & Datasets', href: '/agents/benchmarks_and_datasets' },
  //     { title: 'People & Projects', href: '/agents/organizations-and-projects' },
  //   ],
  // },
  {
    title: 'Alignment', // want to switch these links to "Alignment"
    hide: true,
    links: [
      { title: 'Posts', href: '/ability-and-alignment/posts' },
      { title: 'Papers', href: '/ability-and-alignment/papers' },
      { title: 'Benchmarks & Datasets', href: '/ability-and-alignment/benchmarks_and_datasets' },
      { title: 'People & Projects', href: '/ability-and-alignment/organizations-and-projects' },
    ],
  },
  {
    title: 'Mechanistic Interpretability',
    hide: true,
    links: [
      // { title: 'Posts', href: '/mech-interp/posts' },
      { title: 'Papers', href: '/mech-interp/papers' },
      { title: 'People & Projects', href: '/mech-interp/organizations-and-projects' },
    ],
  },
  {
    title: 'Scaling Behaviors',
    hide: true,
    links: [
      // { title: 'Posts', href: '/scaling/posts' },
      // { title: 'Papers', href: '/scaling/papers' },
      { title: 'All Known Scaling Behaviors', href: '/scaling/all-known-scaling-behavior' },
      // { title: 'Classic Scaling laws', href: '/scaling/classic-scaling-laws' },
    ],
  },

  {
    title: 'Models',
    hide: true,
    links: [
      // { title: 'News', href: '/models/news' }, // needed?
      { title: 'LLMs', href: '/models/llm' },
      { title: 'Coding', href: '/models/Coding' },
      { title: 'Multi-Modal', href: '/models/multi-modal' },
      { title: 'Vision', href: '/models/vision' },
      { title: 'Generative Image', href: '/models/generative-image' },
      { title: 'Generative Video', href: '/models/generative-video' },
      { title: 'Generative Video', href: '/models/generative-audio' },
      { title: 'TTS', href: '/models/tts' },
      { title: 'ASR', href: '/models/asr' },
      
      { title: 'Specialist', href: '/models/specialist' },
    ],
  },

  {
    title: 'See Also',
    hide: true,
    links: [
      { title: 'Channels & Podcasts', href: '/love/streams' },
      { title: 'People & Blogs', href: '/love/people-and-blogs' },
      { title: 'Community', href: '/love/community' },
      { title: 'Books', href: '/love/books' },
      
    ],
  },
]


  // {
  //   title: 'ML Theory & Methodology',
  //   links: [
  //     // { title: 'Posts', href: '/scaling/posts' },
  //     { title: 'Papers', href: '/scaling/papers' },
  //     { title: 'Regularization', href: '/scaling/all-known-scaling-behaviors' },
  //     { title: 'Classic Scaling laws', href: '/scaling/classical-scaling-laws' },
  //   ],
  // },


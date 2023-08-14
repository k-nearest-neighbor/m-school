import fourByTwoLightImage from '@/images/logos/4x2-lights.png'

const posts = [
  { title: "The Pass@k Metric",
    href: "/post/the-pass-at-k-metric",
    tags: ['appears-in-latest', 'agents'],
    date: new Date('2023-08-11T12:00:00Z'),
    teaseimg: null,
    excerpt: "A metric for evaluating the performance of AI agents in a multi-agent environment.",
  },

  // { title: "The Pass@k Metric",
  //   href: "/post/example",
  //   tags: ['appears-in-latest', 'agents'],
  //   date: new Date('2023-08-11T12:00:00Z'),
  //   teaseimg: {src:fourByTwoLightImage, alt:'alt text', width:70, height:35},
  //   excerpt: "Just an example showing how to use the teaseimg attribute. Just an example showing how to use the teaseimg attribute. Just an example showing how to use the teaseimg attribute. Just an example showing how to use the teaseimg attribute. Just an example showing how to use the teaseimg attribute.",
  // },


  
]


export const collectLatestPosts = (n) => {
  return posts
    .filter((post) => post.tags.includes('appears-in-latest'))
    .sort((a, b) => b.date - a.date)
    .slice(0, n)
}

export const collectAllPosts = () => {
  return posts
    .filter((post) => !post.tags.includes('dont-show-in-all-view'))
    .sort((a, b) => b.date - a.date)
}

export const collectPostsWithTags = (includeTagsArray, excludeTagsArray) => {
  excludeTagsArray = excludeTagsArray || [];
  return posts
    .filter((post) => includeTagsArray.some(tag => posts[0].tags.includes(tag)))
    .filter((post) => !excludeTagsArray.some(tag => posts[0].tags.includes(tag)))
    .sort((a, b) => b.date - a.date)
    // .slice(0, n)
}




export const navigation = [
  {
    title: 'Latest',
    links: collectLatestPosts(3),
  },
  {
    title: 'AI Agents',
    links: [
      { title: 'Posts', href: '/agents/posts' },
      { title: 'Papers', href: '/agents/papers' },
      { title: 'Benchmarks & Datasets', href: '/agents/benchmarks_and_datasets' },
      { title: 'People & Projects', href: '/agents/organizations-and-projects' },
    ],
  },
  {
    title: 'Ability & Alignment',
    links: [
      { title: 'Posts', href: '/ability-and-alignment/posts' },
      { title: 'Papers', href: '/ability-and-alignment/papers' },
      { title: 'Benchmarks & Datasets', href: '/ability-and-alignment/benchmarks_and_datasets' },
      { title: 'People & Projects', href: '/ability-and-alignment/organizations-and-projects' },
    ],
  },
  {
    title: 'Mechanistic Interpretability',
    links: [
      // { title: 'Posts', href: '/mech-interp/posts' },
      { title: 'Papers', href: '/mech-interp/papers' },
      { title: 'People & Projects', href: '/mech-interp/organizations-and-projects' },
    ],
  },
  // {
  //   title: 'Scaling Behaviors',
  //   links: [
  //     // { title: 'Posts', href: '/scaling/posts' },
  //     // { title: 'Papers', href: '/scaling/papers' },
  //     { title: 'All Known Scaling Behaviors', href: '/scaling/all-known-scaling-behavior' },
  //     // { title: 'Classic Scaling laws', href: '/scaling/classic-scaling-laws' },
  //   ],
  // },

  // {
  //   title: 'Models',
  //   links: [
  //     { title: 'News', href: '/models/news' },
  //     { title: 'LLMs', href: '/models/llm' },
  //     { title: 'Coding', href: '/models/Coding' },
  //     { title: 'Multi-Modal', href: '/models/multi-modal' },
  //     { title: 'Vision', href: '/models/vision' },
  //     { title: 'Generative Image', href: '/models/generative-image' },
  //     { title: 'Generative Video', href: '/models/generative-video' },
  //     { title: 'Generative Video', href: '/models/generative-audio' },
  //     { title: 'TTS', href: '/models/tts' },
  //     { title: 'ASR', href: '/models/asr' },
      
  //     { title: 'Specialist', href: '/models/specialist' },
  //   ],
  // },

  {
    title: 'Reccomendations',
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


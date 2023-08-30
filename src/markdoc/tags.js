import { Callout } from '@/components/Callout';
import { QuickLink, QuickLinks } from '@/components/QuickLinks';
import { PostsList } from '@/components/PostsList';
import { LatexComponent } from '@/components/Latex';
import { AttributedImage } from '@/components/AttributedImage';
import { NextLink, ALink, CitationRef } from '@/components/Links';
import { YoutubeEmbed, YoutubeEmbedGrid, lsEmbed, arxpEmbed } from '@/components/Youtube';

const tags = {
  axrp: {
    selfClosing: true,
    render: arxpEmbed,
  },
  ls: {
    selfClosing: true,
    render: lsEmbed,
  },
  youtube1: {
    selfClosing: true,
    attributes: {
      vid: { type: String },
    },
    render: YoutubeEmbed,
  },
  ytgrid: {
    selfClosing: true,
    attributes: {
      vids: { type: String },
      // vid1: { type: String },
      // vid2: { type: String },
    },
    render: YoutubeEmbedGrid,
  },
  alink: {
    selfClosing: true,
    attributes: {
      text: { type: String },
      target: { type: String },
      rel: { type: String },
      pwrap: { type: Boolean },
    },
    render: ALink,
  },
  ref: {
    selfClosing: true,
    attributes: {
      text: { type: String },
      text: { type: String },
      blue: { type: Boolean, default: false},
    },
    render: CitationRef,
  },
  nextlink : {
    selfClosing: true,
    attributes: {
      text: { type: String },
      href: { type: String },
      replace: { type: Boolean },
      scroll: { type: Boolean },
      prefretch: { type: Boolean },
    },
    render: NextLink,
  },
  callout: {
    attributes: {
      title: { type: String },
      type: {
        type: String,
        default: 'note',
        matches: ['note', 'warning'],
        errorLevel: 'critical',
      },
    },
    render: Callout,
  },
  inlineimg: {
    selfClosing: true,
    attributes: {
      src: { type: String },
      caption: { type: String },
      attribution: { type: String },
      attributionHref: { type: String },
    },
    render: AttributedImage,
  },
  figure: {
    selfClosing: true,
    attributes: {
      src: { type: String },
      alt: { type: String },
      caption: { type: String },
    },
    render: ({ src, alt = '', caption }) => (
      <figure>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} />
        <figcaption>{caption}</figcaption>
      </figure>
    ),
  },
  'quick-links': {
    render: QuickLinks,
  },
  'latex': {
    selfClosing: true,
    render: LatexComponent,
    attributes: {
      src: { type: String },
    },
  },
  'quick-link': {
    selfClosing: true,
    render: QuickLink,
    attributes: {
      title: { type: String },
      description: { type: String },
      icon: { type: String },
      href: { type: String },
    },
  },
  'posts-list': {
    selfClosing: true,
    render: PostsList,
    attributes: {
      includetags: { type: Array },
      excludetags: { type: Array },
    }
  },
  'br': {
    selfClosing: true,
    render: () => {return(<div className="h-8 w-full"></div>)},
  },

}

export default tags

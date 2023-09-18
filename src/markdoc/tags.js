import { Callout } from '@/components/Callout';
import { QuickLink, QuickLinks } from '@/components/QuickLinks';
import { PostsList } from '@/components/PostsList';
import { LatexComponent } from '@/components/Latex';
import { AttributedImage } from '@/components/AttributedImage';
import { NextLink, ALink, CitationRef } from '@/components/Links';
import { YoutubeEmbed, YoutubeEmbedGrid, lsEmbed, arxpEmbed } from '@/components/Youtube';
import { Citation, References } from '@/components/Citation';
import { Balancer } from 'react-wrap-balancer';

const tags = {

  citation: {
    selfClosing: true,
    render: Citation,
    attributes: {
      expand: { type: Boolean, default: false},
      shortname: { type: String },
      title: { type: String },
      year: { type: String },
      month: { type: String },
      url: { type: String },
    },
  },
  references: {
    selfClosing: true,
    render: References,
  },
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
      tparam: { type: String },
      caption1: { type: String },
      caption2: { type: String },
      caption3: { type: String },
      caption4: { type: String },
      caption5: { type: String },
      caption1Align: { type: String },
      caption2Align: { type: String },
      caption3Align: { type: String },
      caption4Align: { type: String },
      caption5Align: { type: String },
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
      href: { type: String },
      newtab: { type: Boolean },
      pwrap: { type: Boolean },
      bold: { type: Boolean },
    },
    render: ALink,
  },
  ref: {
    selfClosing: true,
    attributes: {
      text: { type: String },
      href: { type: String },
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
      annotated: { type: Boolean },
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
  'br2': {
    selfClosing: true,
    render: () => {return(<div className="h-4 w-full"></div>)},
  },
  'pop': { // like strong but without the font-bold
    render: ({children}) => {return(<span className="text-slate-950 dark:text-white">{children}</span>)},
  },
  'balance': { 
    render: ({children}) => {return(<Balancer>{children}</Balancer>)},
  }

}

export default tags

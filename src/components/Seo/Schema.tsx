import React from 'react';
import { Graph } from 'schema-dts';
import { sanitize } from 'isomorphic-dompurify';
import BreadCrumb from './BreadCrumb';


type AuthorData  = {
    node: {
      name: string;
      slug: string;
      uri: string;
      avatar: {
        url: string;
        foundAvatar: boolean;
      };
    };
  }

  type CategoryData = {
    nodes: {
      name: string;
      slug: string;
      databaseId: number;
    }[];
  };


type SchemaProps = {
  data: {
    name: string;
    uri: string;
    headline: string;
    description: string;
    articleBody: string;
    datePublished: string;
    dateModified: string;
    author: AuthorData;
    categories: CategoryData;
    imgSourceUrl: string;
    imgCaption: string;
    imgDescription: string;
    authorUrl: AuthorData;
  };
};



export const ArticleSchema: React.FC<SchemaProps> = ({ data }) => {

    const {name, slug, avatar} = data.author?.node;

    const categoryNames = data.categories?.nodes.map(category => category.name) || [];

   
  const articleSchema: Graph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'NewsArticle',
        'headline': data.headline,
        'description': sanitize(data.description),
        'articleBody': sanitize(data.articleBody),
        'articleSection': categoryNames,
        'url': data.uri || window.location.href,
        'inLanguage': 'hi',
        'dateModified': data.dateModified,
        'datePublished': data.datePublished,
        'thumbnailUrl': data.imgSourceUrl,
        'mainEntityOfPage': {
          '@type': 'WebPage',
          '@id': data.uri || window.location.href,
        },
        'image': {
          '@type': 'ImageObject',
          'url': data.imgSourceUrl,
          'width': "1200",
          'height': "675",
          'caption': data.imgCaption,
          // 'description' : data.imgDescription,
        },
        'author': {
          '@type': 'Person',
          'name': data.author.node.name,
          'url': data.author.node.uri,
        },
        'contentLocation': {
          '@type': 'AdministrativeArea',
          'name': 'Delhi, India',
        },
        'publisher': {
          '@type': 'NewsMediaOrganization',
          'name': process.env.NEXT_PUBLIC_SITE_NAME,
          'url': process.env.NEXT_PUBLIC_SITE_URL,
          'foundingDate': '2024',
          'logo': {
            '@type': 'ImageObject',
            'url': process.env.NEXT_PUBLIC_WORDPRESS_SITE_LOGO,
            'width': "150",
            'height': "60",
          },
        },
        
      },
    ],
  };
  

  return (
    <>
     <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema, null, 2) }}
      />
    </>
      
    </>
  );
};


type SchemaPropsMenu = {
  menus: any;
};

export const Schema: React.FC<SchemaPropsMenu> = ({ menus }) => {



  
const newsMediaOrganization: Graph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'NewsMediaOrganization',
      'name': process.env.NEXT_PUBLIC_SITE_NAME,
      'url': `${process.env.NEXT_PUBLIC_SITE_URL}`,
      // 'sameAs': [
      //   'https://www.facebook.com/e24bollywood/',
      //   'https://twitter.com/e24bollynews?lang=en',
      //   'https://www.youtube.com/channel/UCZF0z6CyEs_e_IXaB57xqSA',
      //   'https://www.instagram.com/e24official/',
      // ],
      'logo': {
        '@type': 'ImageObject',
          'url': process.env.NEXT_PUBLIC_WORDPRESS_SITE_LOGO,
          'width': "150",
          'height': "60",
      },
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': ' News24 Broadcast India Limited,FC-23',
        'addressLocality': 'Sector 16A, Film City Noida',
        'addressRegion': 'Uttar Pradesh, India',
        'postalCode': '201306',
      },
    },
  ],
};

const website = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      'url': `${process.env.NEXT_PUBLIC_SITE_URL}`,
      'potentialAction': {
        '@type': 'SearchAction',
        'target': {
          '@type': 'EntryPoint',
          'urlTemplate': `${process.env.NEXT_PUBLIC_SITE_URL}/?s={search_term_string}`,
        },
        'query-input': {
          '@type': 'PropertyValueSpecification',
          'valueRequired': 'http://schema.org/True',
          'valueName': 'search_term_string',
        },
      },
    },
  ],
};


interface NavigationItem {
  '@context': string;
  '@type': string;
  name: string;
  url: string;
  childItems?: NavigationItem[];
}
  

const generateNavSchema = (items: any[], parentPath = ''): NavigationItem[] => {
  return items?.map((item) => {
    const {node} =  item
    const schema: NavigationItem = {
      '@context': 'https://schema.org',
      '@type': 'SiteNavigationElement',
      name: item.name,
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/${parentPath}${node.slug}`,
    };


    return schema;
  });
};

const navSchema: NavigationItem[] = generateNavSchema(menus);



return (
  <>
   <>
    {newsMediaOrganization && (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(newsMediaOrganization, null, 2) }}
      />
    )}
    <BreadCrumb />
    {website && (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website, null, 2) }}
      />
    )}

  {navSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(navSchema, null, 2) }}
        />
      )}
  </>
    
  </>
);
};


export default Schema;

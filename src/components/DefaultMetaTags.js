import React from 'react'
import { Helmet } from 'react-helmet'

export default function MetaTags(props) {
          let {section,description,image,url} = props
          if (section!=="")
                    section+=" | "
          return (
                    <Helmet>
                              <title>{section}Blog of Nhat</title>

                              <meta property="og:title" content={section + "Blog of Nhat"} />
                              <meta property="og:description" content={description} />
                              <meta property="og:image" content={image} />
                              <meta property="og:url" content={url} />

                              <meta name="twitter:title" content={section + "Blog of Nhat"} />
                              <meta name="twitter:description" content={description} />
                              <meta name="twitter:image" content={image} />
                              <meta name="twitter:card" content="summary_large_image" />
                    </Helmet>
          )
}
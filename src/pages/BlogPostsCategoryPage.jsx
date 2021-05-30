import BlogPostsCategoryList from '../components/BlogPostsCategoryList'
import BlogPostsTagList from '../components/BlogPostsTagList'

import '../styles/blogofnhat/_BlogPostsCategoryPage.scss'

export default function BlogPostsCategoryPage(props) {
          const {section, i} = props
          if (section==="category") {
                    return BlogPostsCategoryList(i)
          }

          else if (section==="tag") {
                    return BlogPostsTagList(i)
          }
}
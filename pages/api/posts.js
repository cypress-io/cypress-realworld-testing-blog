import { getAllPostIds, getPostData } from '../../lib/posts'

export default async function handler(req, res) {
  const posts = []
  const postIds = getAllPostIds()
  postIds.map((postID) => {
    posts.push(getPostData(postID.params.id))
  })
  
  res.status(200).json(await Promise.all(posts))
}

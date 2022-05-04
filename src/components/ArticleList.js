import Article from "./Article";

function ArticleList(props){
  // console.log(posts)
    const articles = props.posts.map(post => (
      <Article
        key = {post.id}
        date = {post.date}
        preview = {post.preview}
        title = {post.title}
      />
      
    ));
    // console.log(articles)
    return <main>{articles}</main>
}

export default ArticleList;
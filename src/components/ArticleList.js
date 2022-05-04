import Article from "./Article";

function ArticleList(props){
    let articles = props.map(prop => {
       return <Article
        key = {prop.id}
        date = {prop.date}
        preview = {prop.preview}
        title = {prop.title}
      />
      
    })

    return (<main>{articles}</main>)
}

export default ArticleList;
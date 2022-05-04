function Article(props){

  let artList = props.map( article => {
    return (
      <>
      <h3>{ article.title }</h3>
      <small>article.date</small>
      <p>{article.preview}</p>
      </>
    )
  })
  return (
    <article>
      {artList}
    </article>
  )
}

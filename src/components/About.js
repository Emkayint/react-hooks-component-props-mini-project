
function About({ image, about, }){
  return (
    <aside>
      <img src = { image } alt = { image }/>
      <p>{ about }</p>
    </aside>
  )
}

export default About;
import React from 'react'

import Dados from './Components/Dados/Dados'
export default function Main(){
const cnl='CFB Cursos'
const yt='youtube.com/cfbcursos'
const crs='React.js'
return(
<section>
<h2>Curso de React</h2>
<p>Se increva em nosso canal</p>
<p>Ative o sininho e clique no joinha</p>

<Dados
canal={cnl}
youtube={yt}
curso={crs}
/>
</section>
)
}
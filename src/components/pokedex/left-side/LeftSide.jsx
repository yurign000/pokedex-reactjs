import './leftSide.css'

export default function LeftSide(props){

    return(
        <section className="left-side">
            <div className='top-part'>

            </div>
            <div className="out-of-screen">
                <div className='screen'>
                    <span className="top-detail">🔴 🔴</span>

                    <div className="pokemon-screen">
                        <p className="name">{props?.pokemon?.name}</p>
                        <img src={props.pokemon?.sprites?.front_default || ''}></img>
                    </div>
                    
                    <div className="bottom-detail">
                        <span>☰</span>
                        <span>☰</span>
                    </div>
                </div>
            </div>        
        </section>
    )
}
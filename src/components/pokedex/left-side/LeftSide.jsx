import './leftSide.css'

export default function LeftSide(){
    return(
        <section className="left-side">
            <div className='top-part'>

            </div>
            <div className="out-of-screen">
                <div className='screen'>
                    <span className="top-detail">🔴 🔴</span>

                    <div className="pokemon-screen">
                        <img src=""/>
                        <p className="name">{}</p>
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
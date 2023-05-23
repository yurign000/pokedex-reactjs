import './leftSide.css'

export default function LeftSide(props){
    const setDisplayVisible = ()=>{
        return props?.pokemon ? {display:'flex'} : {display:'none'};
    };

    return(
        <section className="left-side">
            <div className='top-part'></div>

            <div className="out-of-screen">
                <div className='screen'>
                    <span className="top-detail">🔴 🔴</span>


                    <div className="pokemon-screen">
                        <div className='shiny-button'>
                            <button>💡</button>
                        </div>
                        <div className='name'>
                            <p>{props?.pokemon?.name}</p>
                        </div>
                        <div className='img-screen'>
                            <img src={props.pokemon?.sprites?.front_default}></img>
                        </div>
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
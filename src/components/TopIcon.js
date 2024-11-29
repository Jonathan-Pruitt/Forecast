import top from '../resources/top_icon.png'

function TopIcon() {

    return (
        <div className="fixed-arrow">
            <button className="btn-up" type='button' onClick={() => '#'}>
                <a href="#top">
                    <img className="top-arrow" src={top} alt="To top of page"/>
                </a>
            </button>
        </div>
    )
}

export default TopIcon;
import {Link} from "react-router-dom"

const Item = ({item}) => (
    <Link to={"/item/" + item.index} className="text-decoration-none text-dark">
        <div className="card border-0">
            <img src={Item.imagen} class="card-img-top" alt={item.nombre}>
            </img>
            <div className="card-body text-center">
                <h5 className="card-title">{item.nombre}</h5>
            </div>
        </div>
    </Link>
)

export default Item;
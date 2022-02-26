import './Menu.css'

import dirt from './images/dirt.jpg';
import grass from './images/grass.jpg';
import glass from './images/glass.png';
import log from './images/log.jpg';
import wood from './images/wood.png';
import {useStore} from "./hooks/useStore";

const items = [
    {key: 'dirt', src: dirt},
    {key: 'grass', src: grass},
    {key: 'glass', src: glass},
    {key: 'wood', src: wood},
    {key: 'log', src: log},
]


const MenuItem = ({item}) => {

    const [texture] = useStore(state => [state.texture]);
    const active = texture === item.key ? 'active' : '';

    return (
        <img src={item.src} className={`menu-entry ${active}`}/>
    )

}


export default function Menu() {
    return (
        <div class="menu">
            {items.map(item => <MenuItem item={item}/>)}
        </div>
    )
}

import './Header.css'
function Header({changeshowinput}){
return(
    <div className='Header'>
        <div>Task manager</div>
        <button onClick={changeshowinput}>Add</button>
    </div>
)
}
export default Header;
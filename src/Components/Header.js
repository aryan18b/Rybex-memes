import Logo from "../images/Logo.png"

function Header(){
    function handleClick(){
        console.log('I am clicked');
    }
    return (
        <header>
            <div className="logo-box">
                <img onClick={handleClick} className="logo" src={Logo} alt="" />
                <h2 className="title">Rybex Memes</h2>
            </div>

            <p className="description">Meme generator and editor</p>
        </header>
    )
}

export default Header
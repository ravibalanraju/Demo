function Course(state){
    if(!state){
        return <h1>Logged in</h1>
    }
    else{
        return <h1>Please Log in </h1>
    }
    return(
        <nav className="navbar1">
            <h1>{name}</h1>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4dG2bxUIXk_XDSsRgdvFz_EfrqlW8WxzT7-J4Vo3nVPpL09ZiPIojq9s&s=10" alt="ima" />
        </nav> 
    )
}
export default Course
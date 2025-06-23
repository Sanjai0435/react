function Home(props){
    let user=props.user;
    console.log(user);
    return (
        <>
        <h1> hi {user.username} welcome to the home</h1>
        </>
    )
}
export default Home;
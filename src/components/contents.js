//Contents for homepage

function Contents() {
    return(
    <div className= "contents">
        <h1>
        Hello World!
        </h1>
        <h2>It is {new Date().toLocaleDateString()} - {new Date().toLocaleTimeString()}.</h2>
    </div>
    );
}

export default Contents;
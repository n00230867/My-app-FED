const GreetingTitle = (props) => {
    console.log(props);

    return (
        <>
        <h1>The name { props.title } contains {props.title.length} characters.</h1>
        {/* <p>There are { props.students } students in this module.</p> */}
        </>
    );
};

export default GreetingTitle;
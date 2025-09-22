// const ModuleTitle = (props) => {
//     return <h1>Welcome to the { props.title } module.</h1>
// };

// export default ModuleTitle;

const ModuleTitle = (props) => {
    console.log(props);

    return (
        <>
        <h1>Welcome to the { props.title } module.</h1>
        <p>There are { props.students } students in this module.</p>
        </>
    );
};

export default ModuleTitle;
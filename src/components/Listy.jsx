export default function Listy(){
    const users = ['john', 'jill', 'joan', 'jenny'];

    const listItems = users.map((user, index) => {
        return <li key = {index}> { user } </li>
    });

    return (
        <ul>
            <ul>
                {listItems}
            </ul>
        </ul>
    )
}
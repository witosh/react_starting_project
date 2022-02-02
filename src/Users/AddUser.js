const AddUser = () => {

    return (
        <form>
            <label htmlFor="username">Username</label>
            <input id="username" type="text"></input>
            <label htmlFor="age">Age (Year)</label>
            <input id="age" type="number"></input>
            <button type="submit">Add User</button>
        </form>
    );
}

export default AddUser;
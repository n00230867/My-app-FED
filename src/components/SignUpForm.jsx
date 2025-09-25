import { useState } from "react";

export default function SignUp() {
    const [signedUp, setSignedUp] = useState(false);
    const [form, setForm] = useState({
        username: '',
        email: '',
        noMonth: '',
        password: '',
        newsletter: true
    });

    const handleChange = (e) => {
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        const name = e.target.name;

        console.log(`Name is: ${name}`);

        setForm({
            ...form,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Login by user: ${form.username}`);
        setSignedUp(true)
    };

    if (signedUp) {
        <>
            <h3>"You are signed up"</h3>
            <button onClick={() => setSignedUp(false)}>Log out</button>
        </>
    }

    return (
        <>

            {(signedUp) ? (
                <h3>You are signed Up</h3>
            ) : (
                <>
                    <form onSubmit={handleSubmit}>
                        <label>
                            Username:
                            <input type="text" name="username" value={form.username} onChange={handleChange} />
                        </label>

                        <br />
                        <label>
                            Email:
                            <input type="text" name="email" value={form.email} onChange={handleChange} />
                        </label>

                        <br />
                        <label>
                            noMonth:
                            <input type="text" name="noMonth" value={form.noMonth} onChange={handleChange} />
                        </label>

                        <br />
                        <label>
                            Password:
                            <input type="text" name="password" value={form.password} onChange={handleChange} />
                        </label>
                        <br />

                        <label>
                            I want to join the newsletter:
                            <input type="checkbox" name="newsletter" checked={form.newsletter} onChange={handleChange} />
                        </label>

                        <input type="submit" value="Submit" />
                    </form>


                    <h3>Hi {form.username}! You have selected a {form.noMonth} month contact {form.newsletter ? "with" : "without"} insurance </h3>
                </>
            )}

        </>

        );
};
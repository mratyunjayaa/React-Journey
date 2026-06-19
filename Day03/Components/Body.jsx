import { useEffect, useState } from "react";

function Body() {
    const [profile, setProfile] = useState([]);
    const [noofprofile, setNoofprofile] = useState("");
    let ran = 1 + Math.floor(Math.random()*10000)
    async function genearteprofile(count) {
        try {
            const response = await fetch(
                `https://api.github.com/users?since=${ran}&per_page=${count}`
            );
            const data = await response.json();
            setProfile(data);
        } catch (err) {
            console.error(err);
        }
    }
    useEffect(() => {
        genearteprofile(10);
    }, []);

    return (
        <div className="but">
            <input type="number" className="inpu" placeholder="Profiles to Display in Dashboard " value={noofprofile} onChange={(e) => {
                setNoofprofile(e.target.value)
            }} />
            <button
                onClick={() => genearteprofile(Number(noofprofile))}
                className="bit"
            >
                Click Here
            </button>



            <div className="profiles">
                {
                    profile.map((value) => {
                        return (<div key={value.id} className="Cards">
                            <img src={value.avatar_url}></img>
                            <h2 >{value.login}</h2>
                            <a href={value.html_url} target="_blank">Profile</a>

                        </div>)
                    })
                }
            </div>
        </div >

    )
}
export default Body;
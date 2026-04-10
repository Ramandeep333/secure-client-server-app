import { useEffect, useState } from "react";
import API from "../api";

function Dashboard() {
    const [data, setData] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const token = localStorage.getItem("token");

                const res = await API.get("/protected-route", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                setData(res.data.message);
            } catch (err) {
                setData("Access denied");
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>Dashboard</h1>
            <p>{data}</p>
        </div>
    );
}

export default Dashboard;
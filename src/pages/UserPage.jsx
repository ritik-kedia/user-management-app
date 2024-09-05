import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function UserPage() {
    const { id } = useParams();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
                setUser(response.data);
            } catch (err) {
                setError('Failed to load user details.');
            } finally {
                setLoading(false);
            }
        };
        fetchUser();
    }, [id]);

    if (loading) return <div className="text-center text-lg">Loading...</div>;
    if (error) return <div className="text-red-500">{error}</div>;

    return (
        <>
            {user && (
                <div className="container mx-auto p-4 bg-white shadow-lg rounded-lg mt-8">
                    <h1 className="text-3xl font-bold text-center mb-4">{user.name}</h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       
                        <div className="bg-gray-50 p-4 rounded-lg shadow-md">
                            <h2 className="text-xl font-semibold mb-3">Personal Information</h2>
                            <p><strong>Email:</strong> {user.email}</p>
                            <p><strong>Phone:</strong> {user.phone}</p>
                            <p><strong>Website:</strong> <a href={`http://${user.website}`} target="_blank" className="text-blue-500">{user.website}</a></p>
                        </div>

                       
                        <div className="bg-gray-50 p-4 rounded-lg shadow-md">
                            <h2 className="text-xl font-semibold mb-3">Address</h2>
                            <p><strong>Street:</strong> {user.address.street}</p>
                            <p><strong>Suite:</strong> {user.address.suite}</p>
                            <p><strong>City:</strong> {user.address.city}</p>
                            <p><strong>Zipcode:</strong> {user.address.zipcode}</p>
                        </div>

                        
                        <div className="bg-gray-50 p-4 rounded-lg shadow-md md:col-span-2">
                            <h2 className="text-xl font-semibold mb-3">Company Information</h2>
                            <p><strong>Company Name:</strong> {user.company.name}</p>
                            <p><strong>Catch Phrase:</strong> {user.company.catchPhrase}</p>
                            <p><strong>BS:</strong> {user.company.bs}</p>
                        </div>
                    </div>

                    <div className="text-center mt-6">
                        <button
                            onClick={() => window.history.back()}
                            className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-all"
                        >
                            Go Back
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

export default UserPage;

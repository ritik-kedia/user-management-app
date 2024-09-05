import React, { useEffect, useState } from 'react'

function UserForm({ user, onSubmit }) {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: ''
    });

   
    useEffect(() => {
        if (user) {
            setFormData({
                name: user.name,
                email: user.email,
                phone: user.phone
            });
        }
    }, [user]);


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ ...formData, id: user ? user.id : Date.now() }); 
    };


    return (
        <>
            <form onSubmit={handleSubmit} className="bg-gray-100 p-4 rounded shadow-md">
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Name</label>
                    <input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="border rounded w-full py-2 px-3"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Email</label>
                    <input
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="border rounded w-full py-2 px-3"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2">Phone</label>
                    <input
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="border rounded w-full py-2 px-3"
                        required
                    />
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                    {user ? 'Update User' : 'Create User'}
                </button>
            </form>
        </>
    )
}

export default UserForm
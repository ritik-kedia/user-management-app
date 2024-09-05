import React, { useEffect, useState } from 'react';
import UserList from '../components/UserList';
import UserForm from '../components/UserForm';
import axios from 'axios';

function Home() {
    const [showForm, setShowForm] = useState(false);
    const [users, setUsers] = useState([]); 
    const [selectedUser, setSelectedUser] = useState(null); 
    const [loading, setLoading] = useState(true); 
    const [error, setError] = useState(null); 

   
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/users');
                setUsers(response.data);
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch users.');
                setLoading(false);
            }
        };
        fetchUsers();
    }, []);

  
    const handleUserCreated = (newUser) => {
        try {
            // const response = await axios.post('https://jsonplaceholder.typicode.com/users', newUser);
            setUsers([...users, newUser]);
        } catch (error) {
            alert('Error creating user');
        } finally {
            setShowForm(false);
            setSelectedUser(null);
        }
    };

   
    const handleUserUpdated = (updatedUser) => {
        try {
            // const response = await axios.put(`https://jsonplaceholder.typicode.com/users/${updatedUser.id}`, updatedUser);
            setUsers(users.map(user => (user.id === updatedUser.id ? updatedUser : user)));
        } catch (error) {
            alert('Error updating user');
        } finally {
            setShowForm(false); 
            setSelectedUser(null); 
        }
    };

  
    const handleUserDeleted = (userId) => {
        try { 
            // await axios.delete(`https://jsonplaceholder.typicode.com/users/${userId}`);
            setUsers(users.filter(user => user.id !== userId));
        } catch (error) {
            alert('Error deleting user');
        }
    };

    
    const handleEditClick = (user) => {
        setSelectedUser(user); 
        setShowForm(true); 
    };

    if (loading) return <div className='spinner'></div>;
    if (error) return <div>{error}</div>;

    return (
        <>
            <div className="container mx-auto p-4">
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
                    onClick={() => {
                        setShowForm(!showForm);
                        setSelectedUser(null); 
                    }}
                >
                    {showForm ? 'Cancel' : 'Create User'}
                </button>
                {showForm && (
                    <UserForm
                        user={selectedUser}
                        onSubmit={selectedUser ? handleUserUpdated : handleUserCreated}
                    />
                )}
                <UserList
                    users={users}
                    onEditClick={handleEditClick}
                    onUserDeleted={handleUserDeleted}
                />
            </div>
        </>
    );
}

export default Home;

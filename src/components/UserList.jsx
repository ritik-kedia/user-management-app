import React from "react";
import { Link } from "react-router-dom";

function UserList({ users, onEditClick, onUserDeleted }) {
    const handleDelete = (id) => {
        onUserDeleted(id);
    };

    return (
        <>
            <div className="overflow-x-auto">
                <table className="min-w-full table-auto bg-white shadow-lg rounded cursor-pointer">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="px-2 py-2 text-lefts md:px-4">Name</th>
                            <th className="px-2 py-2 text-lefts md:px-4">Email</th>
                            <th className="px-2 py-2 text-lefts md:px-4">Phone</th>
                            <th className="px-2 py-2 text-lefts md:px-4">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id} className="hover:bg-gray-100 transition duration-200">
                                <td className="border px-2 py-2 text-center md:px-4">
                                    <Link to={`/user/${user.id}`} className="text-blue-500 hover:underline">
                                        {user.name}
                                    </Link>
                                </td>
                                <td className="border px-2 py-2 text-center md:px-4">{user.email}</td>
                                <td className="border px-2 py-2 text-center md:px-4">{user.phone}</td>
                                <td className="border px-2 py-2 text-center md:px-4">
                                    <button
                                        className="text-blue-500 mr-2 hover:underline"
                                        onClick={() => onEditClick(user)}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="text-red-500 hover:underline"
                                        onClick={() => handleDelete(user.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default UserList;

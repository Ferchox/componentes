import React, { useState, useEffect } from "react";
import emailjs from 'emailjs-com';

const AdminNotifications = () => {
    const [users, setUsers] = useState([]);
    const [notifications, setNotifications] = useState([]);
    const [selectedUser, setSelectedUser] = useState("");
    const [selectedNotification, setSelectedNotification] = useState("");

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch("https://6668e270f53957909ff9675e.mockapi.io/cliente");
                if (!response.ok) {
                    throw new Error("Failed to fetch users from API");
                }
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };

        const fetchNotifications = async () => {
            try {
                const response = await fetch("https://6668e270f53957909ff9675e.mockapi.io/notificacion");
                if (!response.ok) {
                    throw new Error("Failed to fetch notifications from API");
                }
                const data = await response.json();
                setNotifications(data);
            } catch (error) {
                console.error("Error fetching notifications:", error);
            }
        };

        fetchUsers();
        fetchNotifications();
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();
        const notification = notifications.find(n => n.id === selectedNotification);
        const user = users.find(u => u.id === selectedUser);

        if (!notification || !user) {
            alert("Please select a user and a notification");
            return;
        }

        const templateParams = {
            from_name: "Admin",
            to_name: user.nombre,
            message: notification.descripcion,
            image_url: notification.imagen,
            reply_to: user.email,
            to_email: user.email
        };

        emailjs.send('default_service', 'template_rhdy5ur', templateParams, 'ITZrn_HCKk8ZBUyXs')
            .then(() => {
                alert('Email sent successfully');
            }, (err) => {
                alert('Failed to send email: ' + JSON.stringify(err));
            });
    };

    return (
        <div className="admin-container">
            <h2>Send Notification</h2>
            <form onSubmit={sendEmail}>
                <div className="field">
                    <label htmlFor="user">Select User</label>
                    <select id="user" value={selectedUser} onChange={(e) => setSelectedUser(e.target.value)}>
                        <option value="">Select a user</option>
                        {users.map(user => (
                            <option key={user.id} value={user.id}>{user.nombre}</option>
                        ))}
                    </select>
                </div>
                <div className="field">
                    <label htmlFor="notification">Select Notification</label>
                    <select id="notification" value={selectedNotification} onChange={(e) => setSelectedNotification(e.target.value)}>
                        <option value="">Select a notification</option>
                        {notifications.map(notification => (
                            <option key={notification.id} value={notification.id}>{notification.titulo}</option>
                        ))}
                    </select>
                </div>
                <button type="submit">Send Email</button>
            </form>
        </div>
    );
};

export default AdminNotifications;

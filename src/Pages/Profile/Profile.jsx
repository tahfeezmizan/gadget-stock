import React, { useEffect, useState } from 'react';
import UseAuth from '../../Hook/UseAuth';
import { Helmet } from 'react-helmet';
import { toast } from 'react-toastify';

const Profile = () => {
    const { user, userProfileUpdate } = UseAuth();
    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [photoURL, setPhotoURL] = useState('');

    useEffect(() => {
        if (user) {
            setDisplayName(user.displayName || '');
            setEmail(user.email || '');
            setPhotoURL(user.photoURL || '');
        }
    }, [user]);

    const handleUpdateProfile = (e) => {
        e.preventDefault();
        let updatedProfile = {
            displayName,
            email,
            photoURL
        };

        userProfileUpdate(displayName, photoURL)
            .then((result) => {
                toast.success('Profile updated successfully!');
            })
            .catch((error) => {
                console.error('Error updating profile:', error);
                toast.error('Failed to update profile. Please try again.');
            });
    };

    if (!user) {
        return <p>Loading profile...</p>;
    }
    return (
        <div className="" >
            <div className='w-full my lg:w-9/12 xl:w-8/12 mx-auto px-3 py-32 md:px-0'
            >
                <Helmet>
                    <title>Profile - Trip Rex React Template</title>
                </Helmet>
                <div className="bg-gray-100 shadow-xl text-center w-3/5  mx-auto p-10 py-14 rounded-lg">
                    <img src={photoURL} alt="Profile" className='mx-auto rounded-full w-32 h-32 object-cover mb-4' />
                    <h2 className='text-4xl'>{displayName}</h2>
                    <p className="text-gray-600 mb-4">{email}</p>

                    {/* Update Profile Form */}
                    <form onSubmit={handleUpdateProfile} className="text-left w-96 mx-auto">
                        <label htmlFor="displayName" className="block font-medium text-gray-700">Display Name:</label>
                        <input
                            type="text"
                            id="displayName"
                            placeholder='Change Name'
                            value={displayName}
                            onChange={(e) => setDisplayName(e.target.value)}
                            className="w-full border rounded-md p-2 mb-4"
                        />

                        <label htmlFor="photoURL" className="block font-medium text-gray-700">Profile Picture URL:</label>
                        <input
                            type="text"
                            id="photoURL"
                            placeholder='Add New Photo'
                            value={photoURL}
                            onChange={(e) => setPhotoURL(e.target.value)}
                            className="w-full border rounded-md p-2 mb-4"
                        />

                        <div className="flex justify-between items-center">
                            <button type="submit" className="text-white px-4 py-2 font-semibold rounded-md bg-[#d01818] hover:bg-[#0d1637]">
                                Update Profile
                            </button>
                            <button className="text-white px-4 py-2 font-semibold rounded-md bg-[#d01818] hover:bg-[#0d1637]">
                                Connect
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Profile;
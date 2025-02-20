import React, { useState } from "react";
import google from "../../public/google.png";
import facebook from "../../public/facebook.png";
import github from "../../public/github.png";
import line1 from "../../public/line1.png";
import line2 from "../../public/line2.png";
import Ellipse1 from "../../public/Ellipse1.png";
import { useNavigate } from 'react-router-dom';
const SignupPage = () => {
    const [username, setUsername] = useState("");
    const [emailOrPhone, setEmailOrPhone] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState("");
    const navigate = useNavigate();

    const validate = () => {
        const newErrors = {};
        if (!username.trim()) {
            newErrors.username = "Username is required";
        }
        if (!emailOrPhone.trim()) {
            newErrors.emailOrPhone = "Email or Phone is required";
        } else {
            // Check for a valid email if an '@' is included, otherwise assume phone validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (emailOrPhone.includes("@")) {
                if (!emailRegex.test(emailOrPhone)) {
                    newErrors.emailOrPhone = "Invalid email address";
                }
            } else {
                const phoneRegex = /^\d{7,}$/;
                if (!phoneRegex.test(emailOrPhone)) {
                    newErrors.emailOrPhone = "Invalid phone number";
                }
            }
        }
        if (!password) {
            newErrors.password = "Password is required";
        } else if (password.length < 6) {
            newErrors.password = "Password must be at least 6 characters";
        }
        return newErrors;
    };

    // On form submission, validate and store the user in localStorage if valid
    const handleSubmit = (e) => {
        e.preventDefault();
        setSuccessMessage("");
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        setErrors({});
        // Create a new user object
        const storedUsers = localStorage.getItem("users");
        let users;
        try {
            users = storedUsers ? JSON.parse(storedUsers) : [];
        } catch (error) {
            console.error("Error parsing users from localStorage:", error);
            users = [];
        }
        const newUser = { username, emailOrPhone, password };
        // Retrieve existing users from local storage or initialize an empty array
    
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));
        setSuccessMessage("Signup successful! Welcome to QUIZ App.");
        setUsername("");
        setEmailOrPhone("");
        setPassword("");
        navigate('/home');
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-[#1E1E1E] [background:linear-gradient(45deg,rgb(70,2,88,1)_0%,rgba(21,9,53,1)_100%)]">
            <img src={Ellipse1} alt="" className="absolute top-0 left-[25%]" />
            <div className="w-[480px] bg-transparent rounded-[20px] z-[2] overflow-hidden border border-solid [background:linear-gradient(180deg,rgba(191,191,191,0.06)_0%,rgba(0,0,0,0)_100%)] border-spacing-1 p-8">
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col items-center gap-8">
                        <div className="flex flex-col items-start gap-4 w-full">
                            <div className="flex flex-col items-start gap-3">
                                <div className="text-4xl font-semibold text-[#FFFFFF]">Signup</div>
                                <p className="text-base font-medium text-[#FFFFFF]">
                                    Just some details to get you in.!
                                </p>
                            </div>
                            <div className="flex flex-col gap-6 w-full">
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none"
                                    />
                                    {errors.username && (
                                        <p className="text-red-500 text-sm mt-1">{errors.username}</p>
                                    )}
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Email / Phone"
                                        value={emailOrPhone}
                                        onChange={(e) => setEmailOrPhone(e.target.value)}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none"
                                    />
                                    {errors.emailOrPhone && (
                                        <p className="text-red-500 text-sm mt-1">{errors.emailOrPhone}</p>
                                    )}
                                </div>
                                <div>
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none"
                                    />
                                    {errors.password && (
                                        <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                                    )}
                                </div>
                                <button
                                    type="submit"
                                    className="w-full px-4 py-3 rounded-xl bg-gradient-to-r from-[rgba(98,142,255,1)] via-[rgba(135,64,205,1)] to-[rgba(98,142,255,0)];
                                     text-white font-semibold"
                                >
                                    Signup
                                </button>
                                {successMessage && (
                                    alert(`${successMessage}`)
                                )}
                            </div>
                        </div>
                        {/* Decorative Section */}
                        <div className="flex flex-col items-center gap-4">
                            <div className="flex items-center gap-5">
                                <img className="w-[170px] h-0.5" alt="Line" src={line1} />
                                <div className="text-base font-medium text-gray-500">Or</div>
                                <img className="w-[170px] h-0.5" alt="Line" src={line2} />
                            </div>
                            <div className="flex items-center justify-center gap-[18px] relative">
                                <img alt="Frame decoration" src={google} className="w-full" />
                                <img alt="Frame decoration" src={facebook} className="w-full" />
                                <img alt="Frame decoration" src={github} className="w-full" />
                            </div>
                            <div className="text-base font-medium text-[#FFFFFF]">
                                Already Registered? Login
                            </div>
                            <div className="flex justify-between w-full bg-gradient-to-b from-gray-50 to-white-300 px-4 py-2 rounded-md">
                                <div className="text-base font-normal text-[#FFFFFF]">Terms &amp; Conditions</div>
                                <div className="text-base font-normal text-[#FFFFFF]">Support</div>
                                <div className="text-base font-normal text-[#FFFFFF]">Customer Care</div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignupPage;

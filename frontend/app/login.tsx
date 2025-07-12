import React from 'react';
import Image from 'next/image';

const Login: React.FC = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-[#FFF5E1] px-4" 
        // for bg images 
        // style={{
        //             backgroundImage: 'url(/loginbg.jpg)',
        //             backgroundSize: 'cover',
        //             backgroundPosition: 'center'
        //         }}
                
                >
            <div 
                className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-2xl w-full max-w-md space-y-6"
                
            >
                {/* Logo/Profile Circle */}
                <div className="flex justify-center mb-8">
                    <div className="flex items-center justify-center shadow-lg">
                        <Image
                            src="/icon1.png"
                            alt="Logo"
                            width={100}
                            height={100}
                            className="bg"
                        />
                    </div>
                </div>

                <h1 className="text-2xl font-bold text-center text-[#4A4A4A] mb-8">Welcome Back</h1>

                {/* Username */}
                <div className="space-y-2">
                    <label className="text-sm font-medium text-[#4A4A4A]">Username</label>
                    <input
                        type="text"
                        placeholder="Enter your username"
                        className="w-full px-4 py-3 rounded-lg border border-[#E8DCC4] focus:outline-none focus:ring-2 focus:ring-[#D4C5A9] transition duration-200"
                    />
                </div>

                {/* Password */}
                <div className="space-y-2">
                    <label className="text-sm font-medium text-[#4A4A4A]">Password</label>
                    <input
                        type="password"
                        placeholder="Enter your password"
                        className="w-full px-4 py-3 rounded-lg border border-[#E8DCC4] focus:outline-none focus:ring-2 focus:ring-[#D4C5A9] transition duration-200"
                    />
                </div>

                {/* Login Button */}
                <button className="w-full bg-gradient-to-r from-[#E8DCC4] to-[#D4C5A9] text-[#4A4A4A] py-3 rounded-lg hover:from-[#D4C5A9] hover:to-[#C9B99D] transition duration-300 transform hover:scale-[1.02] active:scale-[0.98] font-medium text-lg shadow-lg">
                    Sign In
                </button>

                {/* Additional Links */}
                <div className="text-center space-y-2">
                    <a href="#" className="text-sm text-[#9B8E7B] hover:text-[#7A7066]">Forgot password?</a>
                    <p className="text-sm text-[#4A4A4A]">
                        Don't have an account?{' '}
                        <a href="#" className="text-[#9B8E7B] hover:text-[#7A7066] font-medium">
                            Sign up
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;

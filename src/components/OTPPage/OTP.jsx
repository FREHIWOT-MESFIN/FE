import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import PhHeartbeat from '../../assets/ph_heartbeat-duotone.png';
import { useNavigate } from 'react-router-dom';  // import useNavigate from react-router-dom

const SignUpOTP = () => {
    const [otp, setOtp] = useState(new Array(6).fill(""));
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();  // create a navigate function

    const handleChange = (element, index) => {
        if (isNaN(element.value)) return false;

        setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

        // Focus next input box
        if (element.value !== "" && element.nextSibling) {
            element.nextSibling.focus();
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace" && otp[index] === "") {
            if (e.target.previousSibling) {
                e.target.previousSibling.focus();
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        const otpValue = otp.join("");

        // Check if OTP is fully entered
        if (otpValue.length !== 6) {
            setLoading(false);
            setError("Please enter a 6-digit OTP.");
            return;
        }

        // Simulate a successful OTP submission
        setTimeout(() => {
            setLoading(false);
            if (otpValue === "123456") { // Example OTP value for testing
                navigate('/Login');  // redirect to login page
            } else {
                setError("Invalid OTP!");
            }
        }, 1000); // Simulate network delay
    };

    return (
        <div className="bg-gray-50 flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center p-8">
                <h2 className="text-[20px] font-inter font-semibold leading-9 text-center text-[#222222] mt-19">Check your email</h2>
                <p className="mt-3 font-normal font-inter text-lg leading-6 text-center text-[#222222]"> We sent an OTP to your mail</p>

                <form className="mt-[5rem] w-full space-y-4" onSubmit={handleSubmit}>
                    <div className="flex justify-center space-x-2 mt-3">
                        {otp.map((data, index) => (
                            <input
                                key={index}
                                type="text"
                                name="otp"
                                maxLength="1"
                                value={data}
                                onChange={(e) => handleChange(e.target, index)}
                                onKeyDown={(e) => handleKeyDown(e, index)}
                                className="mt-1 block w-10 px-3 py-2 border border-[#F44949] rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-center text-lg"
                                onFocus={(e) => e.target.select()}
                            />
                        ))}
                    </div>
                    <div className='flex justify-center'>
                        <button
                            type="submit"
                            className="mt-4 text-blue-500 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                            {loading ? "Submitting..." : "Submit"}
                        </button>
                    </div>
                </form>
                {error && <p className="text-red-500 mt-2">{error}</p>}
            </div>
        </div>
    );
};

export default SignUpOTP;

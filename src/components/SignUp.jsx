import { useState } from "react";
import { Link } from 'react-router-dom';


function SignUp()
{
    const [name, setName] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    function handleSubmit(event) {
      event.preventDefault();
      console.log("name: ", name);
      console.log("email: ", email);
      console.log("password: ", password);
      
    }

    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => setShowPassword(prevState => !prevState);



    return(
        

        <div className="main-body h-full bg-white p-5 relative overflow-hidden">
            


            <div className="form-body w-full overflow-hidden">

            <form onSubmit={handleSubmit} className="bg-white mx-auto  rounded px-8 pt-6 pb-8 mb-4 w-[400px] h-[460px] flex flex-col justify-center overflow-clip relative">



                    <h3 className="mb-6 text-center text-xl z-10">Create a new account</h3>


                    <div className="mb-8 z-10">
                    <label className="block text-gray-700 font-bold mb-2 z-10" htmlFor="email">
                    Name
                    </label>
                    <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    type="name"
                    placeholder="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
                    </div>



                    <div className="mb-8 z-10">
                    <label className="block text-gray-700 font-bold mb-2 z-10" htmlFor="email">
                    Email
                    </label>
                    <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                    </div>



                    <div className="mb-8 z-10">
                    <label className="block text-gray-700 font-bold mb-2 z-10" htmlFor="password">
                    Password
                    </label>

                    <div className="relative flex items-center">
                        <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                        <button
                        type="button"
                        className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
                        onClick={togglePasswordVisibility}
                        >
                        {showPassword ? (
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M19 12h.01M12 4a8 8 0 018 8 8 8 0 01-8 8 8 8 0 01-8-8 8 8 0 018-8z" />
                        </svg>
                        ) : (
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7.94 7.94A5.002 5.002 0 0117 12a5.002 5.002 0 01-9.06 2.94M12 17.97V21M12 3v2.02" />
                        </svg>
                        )}
                        </button>
                    </div>
                    </div>




                    <div className="flex items-center justify-between z-10">
                    <button
                    className="text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full bg-gradient-to-r from-sky-400 to-blue-500 z-10"
                    type="submit"
                    >
                    SignUp
                    </button>
                    </div>

                    <div className="text-center mt-5 z-10 ">
                    <span>Already have an account ? <Link to="/" className="text-blue-500 cursor-pointer"> Login </Link></span>
                    </div>
                    </form>

            </div>

            



        </div>
    );
}

export default SignUp;
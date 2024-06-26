
'use client';
import React, {useState} from "react";
import InstragramIcon from "../../../public/images/instagram-icon.png"
import TiktokIcon from "../../../public/images/tiktok-icon.svg"
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
    const [emailSubmitted, setEmailSubmitted] = useState(false);

    const handleSubmit  = async(e) => {
        e.preventDefault();
        const data = {
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value,
        };
        const JSONdata = JSON.stringify(data);
        const endpoint = "/api/send";

        const options = {
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSONdata,
        }
        const response = await fetch(endpoint, options);
        const resData = await response.json();
        console.log(resData); 

        if (response.status === 200) {
            console.log('Message sent.');
            setEmailSubmitted(true);
        }

    }
    return(
      <section id="contact" className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
        <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-y-1/2">

        </div>
        <div className="z-10">
            <h5 className="text-xl font-bold text-white my-2">Gardons contact</h5>
            <p className="text-[#ADB7BE] mb-4 max-w-md">
                {" "}
                Ma messagerie est toujours disponible que ce soit pour une question ou si vous souhaitez dire bonjour.
                Je ferais de mon mieux pour revenir vers vous rapidement
            </p>
            <div className="socials flex flex-row gap-2">
                <Link href="https://www.tiktok.com/@cybermat_">
                    <Image 
                        src={InstragramIcon} 
                        alt="Instagram Icon"
                        width={50}
                        height={50}
                        />
                </Link>
                <Link href="https://www.tiktok.com/@cybermat_">
                    <Image 
                        src={TiktokIcon} 
                        alt="Tiktok Icon"
                        width={50}
                        height={50}
                    />
                </Link>
            </div>
        </div>
        <div>
            <form className="flex flex-col" onSubmit={handleSubmit}>
                <div className="mb-6">
                    <label 
                        htmlFor="email"
                        className="text-white block mb-2 text-sm font-medium">
                        Ton email
                    </label>
                    <input 
                        name="email"
                        type="email"
                        id="email"
                        required 
                        className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                        placeholder="exemple@gmail.com" 
                    />
                </div>
                <div className="mb-6">
                    <label 
                        htmlFor="subject"
                        className="text-white block mb-2 text-sm font-medium">
                        Sujet
                    </label>
                    <input 
                        name="subject"
                        type="text"
                        id="subject"
                        required 
                        className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                        placeholder="Juste pour te dire bonjour" 
                    />
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="message"
                        className="text-white block mb-2 text-sm font-medium"
                    >
                        Message
                    </label> 
                    <textarea
                        name="message"
                        id="message"
                        className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                        placeholder="Parlons de ..."
                    />
                </div>
                <div className="mb-6">
                    <button
                        type="submit"
                        className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full">
                        Envoyer
                    </button>
                </div>
                {
                    emailSubmitted && (
                        <p className="text-green-500 text-sm mt-2">
                            Email envoyé avec succès!
                        </p>
                    )
                }
            </form>
        </div>

      </section>
    );
};

export default EmailSection;
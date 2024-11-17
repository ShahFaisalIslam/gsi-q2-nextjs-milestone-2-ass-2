"use client";

export default function Contact() {
    return (
        <>
            <form className="flex flex-col w-full max-w-lg gap-2 p-4" onSubmit={() => { alert("Thank you for contacting!"); return false; }}>
                <div className="flex flex-col">
                    <label htmlFor="name">Name</label>
                    <input className="pt-[0.1rem] pl-2" required type="text" id="name" placeholder="Your Name" />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="email">Email</label>
                    <input className="pt-[0.1rem] pl-2" required type="email" id="email" placeholder="Your Email" />
                </div>

                <div className="flex flex-col">
                    <label htmlFor="message">Message (Optional)</label>
                    <textarea className="pt-[0.1rem] pl-2" cols={50} id="message" placeholder="Your Message"></textarea>
                </div>

                <input className="max-w-20 px-[0.15rem] py-1 rounded bg-gray-600 hover:bg-gray-400" type="submit" />
            </form>
        </>
    );
}
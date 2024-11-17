import Link from "next/link";

export default function HomeComponent () {
    return (
        <>
            <h2 className="text-[1.1rem]">My Projects:</h2>
            <div className="flex flex-wrap gap-8 p-4">
                <div className="flex flex-col gap-2 justify-center items-center w-full max-w-[300px] bg-slate-700 px-4 py-8 rounded-2xl text-center hover:bg-slate-600">
                    <h3 className="text-bold text-lg mb-2">Interactive Resume Builder</h3>
                    <p>Enter your details, and generate your resume on the fly!</p>
                    <Link className="text-blue-500" href="https://interactive-resume-builder-mu.vercel.app/">&gt;Go to Interactive Resume Builder</Link>
                </div>
                <div className="flex flex-col gap-2 justify-center items-center w-full max-w-[300px] bg-slate-700 px-4 py-8 rounded-2xl text-center hover:bg-slate-600">
                    <h3 className="text-bold text-lg mb-2">Everyday Life Blog</h3>
                    <p>Check out AI-generated articles on different aspects of everyday life!</p>
                    <Link className="text-blue-500" href="https://giaicquarter2assignment4and5.vercel.app/">&gt;Go to Everyday Life</Link>
                </div>
            </div>
        </>
    );
}
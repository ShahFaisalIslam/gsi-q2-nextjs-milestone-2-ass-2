import Image from "next/image";

export default function AboutUs () {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="flex justify-between items-center w-full p-12 gap-20">
                <p className="text-3xl">I am Shah Faisal, a Mechatronics Engineer learning Generative AI from GIAIC</p>
                <Image src="/world.svg" alt="World" width={300} height={300}/>
            </div>
        </div>
    );
}
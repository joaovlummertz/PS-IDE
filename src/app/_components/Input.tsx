export default function Input({type, placeholder} : {
    type: string;
    placeholder: string;
}) {
    return (
        <input 
            type={type}   
            placeholder={placeholder} 
            className="block w-full h-12 my-3 pr-4 placeholder:pl-4 placeholder:uppercase
            rounded-md bg-orange text-white placeholder-white placeholder:text-sm"
            />
    );
}
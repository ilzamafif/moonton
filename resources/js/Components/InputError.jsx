export default function InputError({ message, className = '', ...props }) {
    return message ? (
        <p
            {...props}
            className={
                "my-4 px-4 py-2 border-red-600 border-2 rounded-md " + className
            }
        >
            {message}
        </p>
    ) : null;
}

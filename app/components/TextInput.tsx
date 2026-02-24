export default function TextInput({name, id, value, onChange}: TextInputProps) {
    return (
        <input
            type="text"
            name={name}
            id={id}
            value={value}
            onChange={onChange}
            className="py-1 px-2 border rounded mt-1"
            autoComplete="false"
        />
    );
}

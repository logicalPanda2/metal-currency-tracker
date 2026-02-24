export default function TextInput({name, id, value, onChange, styles}: TextInputProps) {
    return (
        <input
            type="text"
            name={name}
            id={id}
            value={value}
            onChange={onChange}
            className={`py-1 px-2 border rounded ${styles}`}
            autoComplete="false"
        />
    );
}

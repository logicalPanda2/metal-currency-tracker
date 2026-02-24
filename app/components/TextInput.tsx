export default function TextInput({name, id, value, onChange, styles}: TextInputProps) {
    return (
        <input
            type="text"
            name={name}
            id={id}
            value={value}
            onChange={onChange}
            className={`py-1 px-2 rounded ${styles} focus-visible:outline-1 [box-shadow:0_1.5px_2px_0_rgb(20,20,20)] transition`}
            autoComplete="false"
        />
    );
}

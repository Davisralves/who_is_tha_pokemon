
type Props = {
	text: string,
  type: string,
};

export default function Input({text, type}: Props) {
  return (
    <div>
      <label htmlFor={text}>{text}</label>
      <input id={text} type={type} />
    </div>
  )
}
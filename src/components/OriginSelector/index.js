import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchLocation } from "@fortawesome/free-solid-svg-icons";
import "./styles.css";

const OriginSelector = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		console.log(data);
	};

	return (
		<div className="origin-selector">
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="origin-selector-form"
			>
				<div className="origin-selector-input-container">
					<label
						className="origin-selector-label"
						htmlFor="origin-name"
					>
						Saindo de
					</label>
					<input
						className="origin-selector-input"
						placeholder="Nome da sua cidade"
						list="origin-list"
						{...register("origin-name", { required: true })}
					/>
					<datalist id="origin-list">
						{[
							"Chocolate",
							"Coconut",
							"Mint",
							"Strawberry",
							"Vanilla",
						].map((item) => (
							<option key={item}>{item}</option>
						))}
					</datalist>
					{errors.exampleRequired && (
						<span className="origin-selector-error">
							Campo obrigatório
						</span>
					)}
				</div>
				<div className="origin-selector-button-container">
					<button type="submit" className="origin-selector-button">
						<FontAwesomeIcon icon={faSearchLocation} size="2x" />
					</button>
				</div>
			</form>
		</div>
	);
};

export default OriginSelector;

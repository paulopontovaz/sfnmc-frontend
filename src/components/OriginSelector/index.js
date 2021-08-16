import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchLocation } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import autocompleteOptions from "../../assets/staticData/airports.json";
import "./styles.css";

const OriginSelector = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = async (data) => {
		const response = await axios.post("http://localhost:3333/", {
			iata_from: data.origin_name,
		});
		console.log(response);
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
						htmlFor="origin_name"
					>
						Saindo de
					</label>
					<input
						className="origin-selector-input"
						placeholder="Nome da sua cidade"
						list="origin-list"
						{...register("origin_name", { required: true })}
					/>
					<datalist id="origin-list">
						{autocompleteOptions.map((item) => (
							<option
								key={`${item.iata}-${item.country}`}
							>{`${item.iata} - ${item.place}, ${item.airportName}, ${item.country}`}</option>
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

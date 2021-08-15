import { useForm } from "react-hook-form";

const OriginSelector = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

	const onSubmit = console.log;

	console.log(watch("example")); // watch input value by passing the name of it

	return (
		<div className="w-full flex flex-row justify-center">
			<form onSubmit={handleSubmit(onSubmit)}>
				<div>
					<label className="mb-4">Saindo de</label>
					<input
						className="focus:ring-4 ring-orange rounded-full p-2 outline-none"
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
							<option key={item}></option>
						))}
					</datalist>
					{errors.exampleRequired && <span>Campo obrigatório</span>}
				</div>
			</form>
		</div>
	);
};

export default OriginSelector;

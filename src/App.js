import React from "react";
import { useForm } from "react-hook-form";

const RegisterForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="name">ФИО:</label>
                <input id="name" {...register("name", { required: true })} />
                {errors.name && <span>Это поле обязательно</span>}
            </div>
            <div>
                <label htmlFor="firstName">Имя:</label>
                <input id="firstName" {...register("firstName", { required: true })} />
                {errors.firstName && <span>Это поле обязательно</span>}
            </div>
            <div>
                <label htmlFor="birthYear">Год рождения:</label>
                <select id="birthYear" {...register("birthYear", { required: true })}>
                    <option value="">Выберите год</option>
                    {Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i).map((year) => (
                        <option key={year} value={year}>{year}</option>
                    ))}
                </select>
                {errors.birthYear && <span>Это поле обязательно</span>}
            </div>
            <div>
                <label htmlFor="gender">Пол:</label>
                <select id="gender" {...register("gender", { required: true })}>
                    <option value="">Выберите пол</option>
                    <option value="male">Мужской</option>
                    <option value="female">Женский</option>
                    <option value="other">Другой</option>
                </select>
                {errors.gender && <span>Это поле обязательно</span>}
            </div>
            <button type="submit">Зарегистрироваться</button>
        </form>
    );
};

export default RegisterForm;
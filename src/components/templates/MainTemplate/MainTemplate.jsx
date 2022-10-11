import { useState } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import { Header } from "../../organisms/Header/Header";

export async function loader() {
    const url = 'https://api.magicthegathering.io/v1/types';
    const response = await fetch(url);
    const json = await response.json();

    return json.types;
};

export const MainTemplate = () => {
    const types = useLoaderData();
    return <>
        <Header types={types}/>
        <Outlet />
    </>
};
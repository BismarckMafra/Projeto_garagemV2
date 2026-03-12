import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const BASE_URL = "http://localhost:3000/carros";

export const listarCarros = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/listar_carro`);
        return response.data;  
    } catch (error) {
        console.error('Erro ao listar carros:', error);
        throw error;
    }
};
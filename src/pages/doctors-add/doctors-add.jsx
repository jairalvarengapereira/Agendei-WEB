import "./doctors-add.css";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Navbar from "../../components/navbar/navbar.jsx";
import api from "../../constantes/api.js";

function DoctorsAdd() {
  const { id_doctor } = useParams();
  const navigate = useNavigate();

  const [doctor, setDoctor] = useState({ name: "", icon: "M" });
  const [specialtyPrincipal, setSpecialtyPrincipal] = useState("");
  const [allServices, setAllServices] = useState([]);
  const [selectedServices, setSelectedServices] = useState([]);

  async function loadDoctor(id) {
    try {
      const response = await api.get(`/doctors/${id}`);
      if (response.data) {
        const doctorData = Array.isArray(response.data)
          ? response.data[0]
          : response.data;
        setDoctor({
          name: doctorData.name,
          icon: doctorData.icon,
        });
        setSpecialtyPrincipal(doctorData.id_service_specialty ?? "");
      }
      const servResponse = await api.get(`/doctors/${id}/services`);
      if (servResponse.data) {
        setSelectedServices(
          servResponse.data.map((s) => ({
            id_service: s.id_service,
            description: s.description,
            price: s.price,
          }))
        );
      }
    } catch (error) {
      alert("Erro ao carregar médico");
    }
  }

  async function loadAllServices() {
    try {
      const response = await api.get(`/services`);
      if (response.data) setAllServices(response.data);
    } catch (error) {
      alert("Erro ao listar serviços");
    }
  }

  function addService(id_service) {
    if (!id_service) return;
    const alreadyAdded = selectedServices.find(
      (s) => s.id_service === parseInt(id_service)
    );
    if (alreadyAdded) return;
    const service = allServices.find(
      (s) => s.id_service === parseInt(id_service)
    );
    if (service) {
      setSelectedServices((prev) => [
        ...prev,
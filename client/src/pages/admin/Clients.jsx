import Layout from "../../components/Layout";

import axios from "axios";

import { useState, useEffect } from "react";

import { Table } from "antd";

const Clients = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getRes = async () => {
      await axios
        .get("http://localhost:8080/api/admin/getClients", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "aplication/json",
          },
        })
        .then((res) => {
          setData(res.data.data);
        })
        .catch((error) => {
          console.log(`O erro encontrado foi ${error}`);
        });
    };
    getRes();
  }, []);

  const columns = [
    {
      title: "Nome",
      dataIndex: "name",
    },
    {
      title: "Apelido",
      dataIndex: "apelido",
    },
    {
      title: "Excluir?",
      dataIndex: "actions",
      render: () => (
        <div className="d-flex">
          <button className="btn btn-danger">Excluir</button>
        </div>
      ),
    },
  ];

  return (
    <Layout>
      <h1 className="text-center m-2">Clientes</h1>
      <Table columns={columns} dataSource={data} />
    </Layout>
  );
};

export default Clients;

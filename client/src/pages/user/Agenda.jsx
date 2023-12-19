import { useEffect, useState } from "react";
import axios from "axios";
import { Table } from "antd";
import Layout from "../../components/Layout";

const Agenda = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getRes = async () => {
      await axios
        .get("http://localhost:8080/api/calendario/calendarios", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "aplication/json",
          },
        })
        .then((res) => {
          console.log(res.data);
        })
        .catch((error) => {
          console.log(`O erro encontrado foi ${error}`);
        });
    };
    getRes();
  }, []);

  const columns = [
    {
      title: "data",
      dataIndex: "data",
    },
    {
      title: "horario",
      dataIndex: "horario",
    },
    {
      title: "Marcar?",
      dataIndex: "actions",
      render: () => (
        <div className="d-flex">
          <button className="btn btn-danger">Marcar</button>
        </div>
      ),
    },
  ];

  return (
    <Layout>
      <h1 className="text-center m-2">agenda</h1>
      <Table columns={columns} dataSource={data} />
    </Layout>
  );
};

export default Agenda;

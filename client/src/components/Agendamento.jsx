import { useState } from "react";

import Layout from "../components/Layout";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import { TimePicker } from "antd";
import { DatePicker, Space } from "antd";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const App = () => {
  const format = "HH:mm";
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(dayjs("12:08", format));
  const navigate = useNavigate();

  const onChange = (dateString) => {
    setSelectedDate(dateString);
    //console.log(date, dateString);
  };
  const onChangeTime = (value) => {
    setSelectedTime(value);
    //console.log(value && value.format(format));
  };
  const handleButtonClick = async () => {
    const formattedDate = selectedDate;
    const formattedTime = selectedTime.format(format);

    alert(
      `A data selecionada foi ${formattedDate} e o horário selecionado foi ${formattedTime}`
    );

    const dataToSend = {
      data: formattedDate,
      horario: formattedTime,
    };

    try {
      const res = await axios.post(
        "http://localhost:8080/api/admin/agendamento",
        dataToSend,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (res.data.success) {
        message.success(res.data.message);
        navigate("/");
      } else {
        message.error(res.data.success);
      }
    } catch (error) {
      console.log(error);
      message.error("Something Went Wrong");
    }
  };

  return (
    <Layout>
      <div className="flex flex-col items-center gap-3">
        <h3>Selecione a data</h3>
        <Space direction="vertical">
          <DatePicker onChange={onChange} />
        </Space>
        <h3>Selecione o horario</h3>
        <TimePicker
          defaultValue={dayjs("12:08", format)}
          format={format}
          onChange={onChangeTime}
        />
        <button
          onClick={handleButtonClick}
          type="submit"
          className="border rounded-md p-3 mt-2"
        >
          Marcar
        </button>
      </div>
    </Layout>
  );
};
export default App;

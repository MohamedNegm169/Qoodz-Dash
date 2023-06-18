import React, { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Col, Row } from "../../components/Shared";

import {
  Form,
  Input,
  InputGrp,
  Label,
  Title,
  PrimaryBtn,
  SSelect
} from "../Cashires/FormComponents.styles";
import SuccessModal from "../../components/Shared/SuccessModal";
import axios from "axios";
import { userAtom, userTokenAtom } from "../../store/Atoms";
import { useAtom } from "jotai";
import { APIsConstants } from "../../constants/API.constants";

export default function AddNewBranchForm({ locations }) {
  const [stage, setStage] = useState(1);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState(null);
  const [area, setArea] = useState(null);
  const [areas, setAreas] = useState([]);

  const [token, setToken] = useAtom(userTokenAtom);
  const [user, setUser] = useAtom(userAtom);

  const CreateBranch = () => {
    let data = {
      phoneNumber: phone,
      name: name,
      location: location?.value,
      area: area?.value,
    };
    axios
      .post(`${APIsConstants.BASE_URL}/branches`, data, {
        headers: {
          "Content-Type": "application/json",
          apiKey: "63cad87c3207fce093f8c08388e5a805",
          Authorization: `Bearer ${token?.accessToken}`,
        },
      })
      .then((res) => {
        setStage(2);
      })
      .catch((error) => {
        if (error.response.status === 401) {
          setToken(null);
          setUser(null);
        } else {
          setError(error.response.data.message);
        }
      });
  };
  const GetAreas = async () => {
    axios
      .get(
        `${APIsConstants.BASE_URL}/locations/areas?location=${location.value}`,
        {
          headers: {
            "Content-Type": "application/json",
            apiKey: "63cad87c3207fce093f8c08388e5a805",
            Authorization: `Bearer ${token?.accessToken}`,
          },
        }
      )
      .then((res) =>
        setAreas(
          res.data.map((ele) => {
            return { value: ele.id, label: ele.name };
          })
        )
      )
      .catch((error) => {
        console.log("error: ", error.response.status);
        if (error.response.status === 401) {
          setToken(null);
          setUser(null);
        }
      });
  };
  useEffect(() => {
    if (location) {
      GetAreas();
    }
  }, [location]);

  const onSubmit = () => {
    CreateBranch();
  };

  if (stage === 2)
    return <SuccessModal mainText={"Branch Successfully Added!"} />;
  if (stage === 1)
    return (
    <div>Hello</div>
    );
}
